"""Build a shared, ten-language catalog. Machine translations are reviewable assets.

Requires requests, pypinyin, pykakasi, and hangul-romanize. Translation responses
are cached outside dist; rerunning only requests missing entries. No API keys.
"""
import concurrent.futures
import json
import os
import re
import shutil
import subprocess
import threading
import time
from pathlib import Path

import requests
from pypinyin import lazy_pinyin, Style
from pykakasi import kakasi
from hangul_romanize import Transliter
from hangul_romanize.rule import academic

ROOT = Path(__file__).resolve().parents[1]
NODE = os.environ.get("NODE_BINARY") or shutil.which("node") or ("C:/nodejs/node.exe" if os.name == "nt" else "node")
CACHE = ROOT / '.translation-cache.json'
LANGUAGES = ['en', 'zh', 'th', 'ja', 'es', 'ko', 'fr', 'de', 'vi', 'id']
cache = json.loads(CACHE.read_text(encoding='utf-8')) if CACHE.exists() else {}
lock = threading.Lock()
japanese = kakasi()
korean = Transliter(academic)


def save_cache():
    """Persist worker results under the same lock used by translation updates."""
    with lock:
        CACHE.write_text(json.dumps(cache, ensure_ascii=False), encoding='utf-8')


def key(text, source, target):
    """Share a stable cache key across builders and preserve Unicode text exactly."""
    return json.dumps([source, target, text], ensure_ascii=False)


def translate_batch(texts, source, target):
    """Translate missing lines with bounded retries; split batches when line alignment changes."""
    missing = list(dict.fromkeys(text for text in texts if key(text, source, target) not in cache))
    if not missing:
        return
    error = None
    for attempt in range(5):
        try:
            result = requests.get('https://translate.googleapis.com/translate_a/single',
                                  params={'client': 'gtx', 'sl': 'zh-TW' if source == 'zh' else source,
                                          'tl': 'zh-TW' if target == 'zh' else target,
                                          'dt': 't', 'q': '\n'.join(missing)}, timeout=40)
            result.raise_for_status()
            rows = ''.join(item[0] or '' for item in result.json()[0] if item[0] is not None).strip().split('\n')
            rows = [row.strip() for row in rows if row.strip()]
            if len(rows) != len(missing):
                if len(missing) > 1:
                    middle = len(missing) // 2
                    translate_batch(missing[:middle], source, target)
                    translate_batch(missing[middle:], source, target)
                    return
                raise ValueError('Translation returned an unexpected number of lines')
            with lock:
                for text, translated in zip(missing, rows):
                    cache[key(text, source, target)] = translated
            return
        except Exception as exc:
            error = exc
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f'Translation failed: {source}/{target}: {missing[:1]}: {error}')


def translate_all(texts, source, target):
    """Bound batch size and worker concurrency so a rebuild does not flood the service."""
    texts = list(dict.fromkeys(text for text in texts if text and key(text, source, target) not in cache))
    batches = []
    batch = []
    size = 0
    for text in texts:
        if batch and (size + len(text) > 1600 or len(batch) >= 35):
            batches.append(batch)
            batch, size = [], 0
        batch.append(text)
        size += len(text) + 1
    if batch:
        batches.append(batch)
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
        futures = [executor.submit(translate_batch, batch, source, target) for batch in batches]
        for i, future in enumerate(concurrent.futures.as_completed(futures), 1):
            try:
                future.result()
            except Exception:
                for pending in futures:
                    pending.cancel()
                save_cache()
                raise
            if i % 20 == 0:
                save_cache()
    save_cache()
    print(json.dumps({'source': source, 'language': target, 'new_texts': len(texts), 'batches': len(batches)}), flush=True)


def translated(text, source, target):
    """Require a real cached translation; cached-only rebuilds must not invent missing text."""
    return text if source == target else cache[key(text, source, target)]


def reading(text, code, supplied=''):
    """Keep supplied readings, otherwise use the language-specific offline transliterator."""
    if supplied and not re.search(r'[\u0e00-\u0e7f]', supplied):
        return supplied
    if code == 'zh':
        return ' '.join(lazy_pinyin(text, style=Style.TONE))
    if code == 'ja':
        return ' '.join(part['hepburn'] for part in japanese.convert(text))
    if code == 'ko':
        return korean.translit(text)
    if code == 'th':
        return supplied
    return text


def main():
    """Rebuild shared card forms and Thai lookup data from the preserved authoring inputs."""
    # Reuse the documented source order instead of maintaining another file list.
    result = subprocess.run([NODE, str(ROOT / 'scripts' / 'load-data.cjs'), '--seed'],
                            cwd=ROOT, capture_output=True, text=True, encoding='utf-8', check=True)
    data = json.loads(result.stdout)
    texts = [text for card in data['cards'] for text in [card['translations']['en'], card.get('exampleTranslations', {}).get('en')] if text]
    texts += list(data['gloss'].values())
    for target in LANGUAGES:
        if target != 'en':
            translate_all(texts, 'en', target)
    catalog = []
    for card in data['cards']:
        english = card['translations']['en']
        example = card.get('exampleTranslations', {}).get('en', '')
        forms = {}
        for code in LANGUAGES:
            text = card['term'] if code == card['lang'] else card['translations'].get(code) or translated(english, 'en', code)
            sample = card.get('exampleTarget', '') if code == card['lang'] else card.get('exampleTranslations', {}).get(code) or (translated(example, 'en', code) if example else '')
            form = {'text': text, 'reading': reading(text, code, card.get('reading', '') if code == card['lang'] else ''), 'example': sample,
                    'exampleReading': reading(sample, code, card.get('exampleReading', '') if code == card['lang'] else '') if sample else ''}
            if code == card['lang']:
                form['breakdown'] = card.get('breakdown', '')
                form['exampleBreakdown'] = card.get('exampleBreakdown', '')
            forms[code] = form
        catalog.append({'id': card['id'], 'topic': card['topic'], 'kind': card.get('kind', 'word'), 'level': card.get('level', 'beginner'),
                        'sourceLang': card['lang'], 'forms': forms})
    lexicon = {}
    for word, english in data['gloss'].items():
        lexicon[word] = {'reading': data['readings'].get(word, ''),
                         'meanings': {code: word if code == 'th' else translated(english, 'en', code) for code in LANGUAGES}}
    output = ROOT / 'dist' / 'data-multilingual.js'
    output.write_text('// Generated by python scripts/build-multilingual.py from scripts/source/.\n// Shared concept forms; additional translations are machine-assisted.\n// sourceLang is retained only for migration of old bare-ID learning progress.\nwindow.CARD_CATALOG = '
                      + json.dumps(catalog, ensure_ascii=False, separators=(',', ':'))
                      + ';\nwindow.THAI_LEXICON = ' + json.dumps(lexicon, ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8')
    print(json.dumps({'concepts': len(catalog), 'languages': len(LANGUAGES), 'lexicon': len(lexicon), 'bytes': output.stat().st_size}), flush=True)


if __name__ == '__main__':
    main()
