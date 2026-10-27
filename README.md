# LangCard

純 HTML、CSS、JavaScript 的多語言字卡網站；預設為英文→泰語。

工程師接手請先讀 [開發與維護說明](./DEVELOPER.md)。網站不需要打包器或執行時套件；開發工具只用於檢查與排版。

## 共用的十語字庫

- 目前有 **2,205 張共用字卡**、24 個主題：**769 張單字／詞組卡**與 **1,436 張句子／對話卡**。每張內建卡都有英文、繁體中文、泰語、日語、西班牙語、韓語、法語、德語、越南語和印尼語版本，支援 90 種學習組合；切換語言使用相同卡片 ID。
- 「每日學習」可同時依程度、單字／句子、主題篩選；「我的字庫」可依主題、程度、單字／句子與搜尋字詞篩選。
- 所有語言的句子與例句均可拆詞，附讀法和發音入口；點字詞可開啟既有單字卡或字詞查閱卡，查閱卡可加入自己的字庫。
- 發音統一使用 Google Translate；各卡、例句、拆詞和所有語言版本均附連結，帶入原文與語言後在 Google 按喇叭聆聽。專案不包含音檔，也不使用裝置語音播放。
- 原有翻譯保留，新增語言與部分逐詞詞義由機器翻譯輔助，讀法也是近似提示，未經逐句母語審校。繁中學泰語的全部拆詞有內建繁中詞義。其他組合若缺離線詞義，會連線補譯；失敗時顯示標示為英文的詞義及 Google 入口，避免空白或假裝已翻成指定語言。
- 可標記已學會、遮住翻譯自我練習，並做雙向選擇題測驗。

## JSON 匯入、匯出與範本

網站只使用 JSON：可匯出「目前字庫（含所有語言）」或「所有自訂字卡」，也能下載 JSON 範本。支援新格式 `langcard-cards-v3`、舊格式 `langcard-cards-v2`／`langcard-cards-v1` 與字卡陣列，檔案上限 50 MB、10,000 張卡；重複的 ID 或相同字卡會略過。匯入不會覆寫內建字庫。

## 永久新增字卡

一張字卡就是一筆單字／詞組或句子資料。`forms` 裡放同一個意思的各語言文字、讀法、例句和逐詞詞義。一個 JSON 檔案的 `cards` 陣列可以放很多張卡。卡片不需要 `sourceLang`、`sourceBase` 或學習語言配對；使用哪個語言學哪個語言由頁面設定決定。逐詞意思放在詞的 `meanings` 語言對照裡。

### 最方便的做法

1. 在網站按「新增字卡」，填好單字、翻譯與讀法。其他語言會嘗試補譯，也能手動修改。
2. 在「我的字庫」選「匯出字卡 → 所有自訂字卡 JSON」。
3. 把 JSON 交給網站維護者加入內建字庫並發布。發布後，其他裝置與訪客都能看到。

網站的「新增」與「匯入」只儲存在目前瀏覽器。匯出 JSON 是備份；要永久加入全站，仍需要修改內建字庫並發布。

完整指令與資料欄位見 [永久新增字卡說明](./PERMANENT_CARDS.md)。永久來源是 [cards/permanent-cards.json](./cards/permanent-cards.json)，完整十語範例在 [cards/example-card.json](./cards/example-card.json)。

## 本機開啟

從專案根目錄執行：

```bash
python -m http.server 8765 --directory dist
```

然後打開 `http://localhost:8765/`。所有語言的發音均使用 Google Translate 入口。本次資料及操作檢查見 [CARD_AUDIT.md](./CARD_AUDIT.md)。

## 讀法與逐詞資料維護

逐字拉丁字母讀法放在 [dist/data-th-readings.js](./dist/data-th-readings.js)，逐字英文詞義與現有句子的分詞在 [scripts/source/data-th-glossary.js](./scripts/source/data-th-glossary.js)。字庫裡的句子和例句會顯示逐詞意思、讀法及 Google Translate 連結。

原始單語字卡與詞彙來源放在 [scripts/source/](./scripts/source/)，不會載入瀏覽器。重新輸出既有泰語分詞表使用 `node scripts/build-thai-tokens.cjs`；需要重建逐詞資料時可執行 `python scripts/build-token-data.py`。一般永久新增只需使用 JSON 工具，再檢查與發布；不需要製作音檔。

## 詞義資料來源

[`scripts/source/data-th-glossary.js`](./scripts/source/data-th-glossary.js) 的部分英文詞義與拉丁字母讀法改寫自 [Wiktionary 泰語資料](https://en.wiktionary.org/wiki/Category:Thai_language)，經由 [Kaikki Thai dictionary](https://kaikki.org/dictionary/Thai/index.html) 取得，依 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 授權。內建句子與新增主題單字的翻譯由本專案整理。逐詞資料屬於學習提示，遇到多義詞時以句譯和實際語境為準。
