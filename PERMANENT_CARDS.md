# 永久新增字卡

一張字卡就是一筆單字／詞組或句子資料。`forms` 裡放同一個意思的各語言文字、讀法、例句和逐詞詞義。一個 JSON 檔案的 `cards` 陣列可以放很多張卡。

## 最方便的做法

1. 在網站按「新增字卡」，填好單字、翻譯與讀法。其他語言會嘗試補譯，也能手動修改。
2. 在「我的字庫」選「匯出字卡 → 所有自訂字卡 JSON」。
3. 把 JSON 交給網站維護者加入內建字庫並發布。發布後，其他裝置與訪客都能看到。

網站的「新增」與「匯入」只儲存在目前瀏覽器。匯出 JSON 是備份；要永久加入全站，仍需要修改內建字庫並發布。

## 自己用專案加入

在專案目錄執行（把檔名換成下載的 JSON）：

```powershell
& 'C:/nodejs/node.exe' scripts/add-permanent-cards.cjs --import 'D:/Downloads/langcard-custom-cards.json'
```

工具會讀取 JSON、跳過重複內容、嘗試補齊缺少的語言，並寫入 [cards/permanent-cards.json](./cards/permanent-cards.json)，再產生網站使用的 [dist/data-permanent-cards.js](./dist/data-permanent-cards.js)。在這個工作區執行時，也會同步本機副本與相同 Sites 專案的正式來源。**完成後仍要發布網站，線上才會更新。** 可以請我完成發布。

新增成功前會檢查十種語言的文字是否齊全。翻譯服務暫時失敗時，不會把不完整的新卡寫入來源；可以先在網站補齊其他語言後重新匯出。既有內建卡不會被匯入檔覆寫。

已有完整十語 JSON、想完全離線加入，可加 `--offline`：

```powershell
& 'C:/nodejs/node.exe' scripts/add-permanent-cards.cjs --import 'D:/Downloads/my-cards.json' --offline
```

## JSON 範例

可直接開啟 [cards/example-card.json](./cards/example-card.json)，裡面是一張「無線充電器」的完整十語範例。它沒有預設加入網站；在網站匯入才會加入自己的瀏覽器，使用上面的專案工具加入再發布，才會變成全站內建卡。

也可以直接編輯 [cards/permanent-cards.json](./cards/permanent-cards.json) 的 `cards` 陣列。新增另一張卡時請使用新的 `id`；修改同一張卡時保留 `id`，學習進度才能繼續對應。每張卡的欄位：

| 欄位    | 用途                                                                         |
| ------- | ---------------------------------------------------------------------------- |
| `id`    | 一張卡固定且不重複的識別碼                                                   |
| `kind`  | `word`（單字／詞組）或 `sentence`（句子）                                    |
| `topic` | 主題，例如 `daily`、`technology`，也可使用自訂名稱                           |
| `level` | `beginner`、`intermediate`、`upper`                                          |
| `forms` | 以 `en`、`zh`、`th`、`ja`、`es`、`ko`、`fr`、`de`、`vi`、`id` 儲存各語言版本 |

各語言版本可填 `text`（必填）、`reading`、`example`、`exampleReading`、`tokens`、`exampleTokens`。每個詞放文字、讀法與各語言的意思，例如：

```json
{ "text": "ฉัน", "reading": "chǎn", "meanings": { "zh": "我", "en": "I" } }
```

字卡不需要 `sourceLang`、`sourceBase` 或固定的母語／目標語；學習配對只由頁面設定決定。舊版 JSON 的來源欄位與逐詞字串會在匯入時自動轉換；新匯出只保留獨立的各語言資料。網頁表單仍可用 `字詞 | 讀法 = 意思` 填寫。

手動改好完整資料後執行：

```powershell
& 'C:/nodejs/node.exe' scripts/add-permanent-cards.cjs --build
& 'C:/nodejs/node.exe' scripts/check-json.cjs
& 'C:/nodejs/node.exe' scripts/check-data.cjs
```

確認通過後再發布。發音統一使用 Google Translate，開啟後按 Google 的喇叭聽發音；不需製作或維護音檔。
