/**
 * Collect real card/word texts for the Python token-data builder.
 * stdout is a JSON protocol, so diagnostics belong on stderr. This command is
 * read-only and deliberately shares the browser's data and corrections loader.
 */
const { window } = require('./load-data.cjs').loadRuntime({ withSource: true });
const words = Object.fromEntries(window.LANGUAGES.map(({ code }) => [code, new Set()]));
const texts = Object.fromEntries(window.LANGUAGES.map(({ code }) => [code, new Set()]));

for (const card of window.CARD_CATALOG) {
  for (const [code, form] of Object.entries(card.forms)) {
    // Keep reviewed full-text Thai readings available to the offline builder.
    if (code === 'th') {
      if (form.reading && !/[\u0e00-\u0e7f]/.test(form.reading))
        window.THAI_READINGS[form.text] = form.reading;
      if (form.exampleReading && !/[\u0e00-\u0e7f]/.test(form.exampleReading))
        window.THAI_READINGS[form.example] = form.exampleReading;
    }
    for (const field of ['text', 'example']) {
      const text = form[field];
      if (!text) continue;
      texts[code].add(text);
      const name = field === 'text' ? 'term' : 'example';
      const structured = field === 'text' ? form.tokens : form.exampleTokens;
      const manual = field === 'text' ? form.breakdown : form.exampleBreakdown;
      const tokens = structured?.length
        ? structured.map((token) => token.text)
        : manual
          ? manual
              .split(/[;\r\n]+/)
              .filter(Boolean)
              .map((line) => line.split('=')[0].split('|')[0].trim())
          : (code === 'th' ? window.THAI_CARD_TOKENS[card.id]?.[name] : null) ||
            [...new Intl.Segmenter(code, { granularity: 'word' }).segment(text)]
              .filter((part) => part.isWordLike)
              .map((part) => part.segment);
      tokens.filter(Boolean).forEach((word) => words[code].add(word));
    }
  }
}

const sortedValues = (groups) =>
  Object.fromEntries(Object.entries(groups).map(([code, values]) => [code, [...values].sort()]));
console.log(
  JSON.stringify({
    words: sortedValues(words),
    texts: sortedValues(texts),
    readings: window.THAI_READINGS,
    gloss: window.THAI_GLOSSARY,
  }),
);
