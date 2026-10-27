# 開發與維護說明

LangCard 是直接提供靜態檔案的網站，不需要框架、打包器或網站執行時套件。Node 開發套件只供程式檢查與排版；Python 工具只在重建資料時使用。發音一律連到 Google Translate。

## 從哪裡開始看

| 位置                                                       | 責任                                           |
| ---------------------------------------------------------- | ---------------------------------------------- |
| [dist/index.html](./dist/index.html)                       | 頁面骨架、表單與腳本載入順序                   |
| [dist/config.js](./dist/config.js)                         | 支援語言代碼與主題圖示                         |
| [dist/app.js](./dist/app.js)                               | 學習、字庫、測驗、表單與 DOM 事件              |
| [dist/card-json.js](./dist/card-json.js)                   | 唯一的資料格式驗證與新舊 JSON 轉換             |
| [dist/language-support.js](./dist/language-support.js)     | 語言投影、詞義查找、讀法與可選的線上補譯       |
| [dist/i18n.js](./dist/i18n.js)                             | 三種介面語言；同一個 key 只定義一次            |
| [dist/styles.css](./dist/styles.css)                       | 排版、元件、佈景主題及手機版                   |
| [scripts/source/](./scripts/source/)                       | 舊字庫原始輸入，供資料產生工具使用，不上線載入 |
| [cards/permanent-cards.json](./cards/permanent-cards.json) | 日後人工新增、納入版本控制的全站字卡           |
| [scripts/load-data.cjs](./scripts/load-data.cjs)           | 所有維護工具共用的資料載入器                   |

`dist/data-*.js` 是網站使用的字典與字庫表格，刻意保持精簡。它們主要保存資料，不要為了加註解把數千筆資料複製進控制程式；每個檔案的開頭註解指出來源或產生方式。

## 本機執行與檢查

使用 Node 24（或滿足開發套件要求的 Node 22）與 Python 3。若 Node 不在 PATH，Windows 可改用已安裝的完整路徑執行。

```powershell
npm ci
npm run check
npm run format:check
python -m http.server 8765 --directory dist
```

開啟 `http://localhost:8765/`。單純預覽只需要最後一個指令，網站本身不依賴 Node 套件。

`npm run check` 依序檢查未使用變數、未定義名稱、重複鍵、JavaScript/Python 語法、資產引用、介面翻譯，以及 JSON 與完整字庫資料。`npm run format` 統一手寫程式與文件的排版。工具版本由 [package-lock.json](./package-lock.json) 固定。

檢查 Python 時預設執行 `python`；不同環境可設定 `PYTHON_BINARY`。重建資料時可設定 `NODE_BINARY` 指向 Node。Python 資料工具的依賴在 [scripts/requirements.txt](./scripts/requirements.txt)。

## 一張卡、各語言版本、目前畫面

永久資料使用 `langcard-cards-v3`，一張卡只有 `id`、`topic`、`kind`、`level`、`forms`。`forms` 用十種語言代碼存放文字、讀法、例句、逐詞文字與各語言詞義。

- `LangCardJson.normalize()`：驗證輸入，支援 v1/v2 舊檔，並提供畫面相容欄位。無效資料回傳 `null`。
- `LangCardJson.record()`：輸出正式紀錄，移除學習方向與畫面暫態欄位。所有儲存與匯出都走這個入口。
- `LangCardLanguages.project()`：依目前會的語言／想學的語言產生畫面資料，保留同一張卡的 ID；不改動內建概念。

`base`、`lang`、`term`、`translation` 等欄位是程式使用的投影，不應成為永久字卡的學習方向。`sourceLang`／`sourceBase` 僅在舊檔遷移時讀取；原始內建字庫的 `sourceLang` 仍供舊的學會標記辨識使用，新匯出不包含它。

逐詞資料的 `meanings` 明確標出語言，手填詞義不會被背景補譯覆寫。自動拆詞先使用已整理的泰語分詞表，再使用 `Intl.Segmenter`。缺少指定語言詞義時，畫面明示英文備援或 Google 查詢入口。

## 瀏覽器儲存與非同步操作

| 儲存鍵                     | 內容                                       | 可否重新取得                                   |
| -------------------------- | ------------------------------------------ | ---------------------------------------------- |
| `langcard:v1`              | 自訂卡、學習配對、偏好、各目標語的學會標記 | 請用 JSON 備份自訂卡；資料只在目前來源與瀏覽器 |
| `langcard:translations:v1` | 可選的翻譯及讀法快取                       | 可以重新補譯；失敗不影響字卡儲存               |

`saveState()` 只選取需要永久儲存的欄位。儲存失敗回傳 `false`，新增、匯入、刪除流程必須回復原有資料，不能顯示成功後遺失修改。

翻譯請求有逾時、重複批次合併和失敗退避。`completeForms()` 只補空白，保留已填內容；整個自訂卡補譯佇列會先保留 ID，避免兩次畫面更新發出重複工作。

表單使用遞增的 `dialogRevision` 判斷翻譯結果是否仍屬於目前編輯。取消、關閉或重開表單後，較早的請求不得儲存資料或關閉新表單。修改單一語言會保留其餘語言，表單與 JSON 使用一致的欄位長度限制。

## 載入與事件

[dist/index.html](./dist/index.html) 是執行資料載入順序的唯一清單：設定與資料表先載入，再載入 JSON／語言處理、介面文字，最後啟動畫面控制程式。[scripts/load-data.cjs](./scripts/load-data.cjs) 讀取同一清單供檢查與維護使用，避免各工具自己維護不同順序。

字庫採分頁與延遲拆詞，不會一次建立所有隱藏的逐詞 DOM。動態內容由父層事件委派處理；重新渲染時不要重複綁定事件。匯入文字進入 HTML 前必須使用 `escapeHtml()`，Google 參數透過 `URLSearchParams` 編碼。

資料檢查為了驗證控制程式內部，會在 VM 中取代最後的 `init()` 呼叫；正式網頁不暴露測試介面。若更改啟動方式，須同步調整 [scripts/check-data.cjs](./scripts/check-data.cjs)。

## 如何修改或重建字庫

一般新增請使用 [永久新增字卡說明](./PERMANENT_CARDS.md)。不要修改範例的 ID 來覆寫現有內建卡，也不要把測試卡加入正式字庫。

| 指令                                                          | 用途與影響                                                      |
| ------------------------------------------------------------- | --------------------------------------------------------------- |
| `node scripts/add-permanent-cards.cjs --import exported.json` | 匯入自訂卡；缺少語言時會嘗試連線補譯，驗證全部通過才寫入來源    |
| `node scripts/add-permanent-cards.cjs --build`                | 從永久 JSON 重建網站使用的永久卡檔案，不連線                    |
| `node scripts/build-thai-tokens.cjs`                          | 從已整理的來源輸出泰語分詞表，不連線                            |
| `python scripts/build-thai-readings.py`                       | 使用本機字典及轉寫工具重建泰語讀法                              |
| `python scripts/build-multilingual.py`                        | 重建多語字庫；可能大量連線與改寫生成資料                        |
| `python scripts/build-token-data.py`                          | 重建逐詞詞義與讀法；可能連線，支援 `--cached-only` 離線快取模式 |

大量資料重建不是日常檢查的一部分。先保留並審閱差異，再跑 `npm run check`；不要把機器翻譯輸出直接當成人工審校結果。來源授權與詞義限制見 [README.md](./README.md)。

## 發布與工作目錄

只發布 `dist/`，保留 [.openai/hosting.json](./.openai/hosting.json) 的專案 ID。透過 Sites 開啟既有專案、編輯與檢查、推送確切來源，再保存及部署對應版本；不需要新增網站或改變受眾。

這個工作區的 `.sites-current/` 是 Sites 管理的正式來源 checkout，根目錄保留可直接預覽的同步副本。使用 Sites 工具時以回傳的 checkout 為準；不要把兩份各自修改後覆蓋彼此。永久新增工具只會在兩份 hosting 設定的專案 ID 相同時同步永久 JSON 和生成檔。

`.sites-checkout/` 是較早版本的 Git 備份，不參與目前網站的載入、檢查或發布。工程師應以本文件導覽的來源與 Sites 回傳的 checkout 為準。
