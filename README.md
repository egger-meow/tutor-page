# 新竹國中家教 — 個人招生網站

針對「正在找家教的台灣家長」設計的轉換導向 landing page。
純靜態 HTML / CSS / JS，無框架、無建置流程，直接部署 GitHub Pages。

## 專案結構

```
/
├── index.html              # 唯一頁面（所有區塊都在這）
├── styles/main.css         # 全站樣式
├── scripts/
│   ├── config.js           # ★ 所有可替換內容集中在這一個檔案
│   └── main.js             # 把 config 套用到頁面（不用改）
├── assets/
│   ├── cv.pdf              # （自行放入）完整履歷
│   └── images/             # 占位圖片，同名覆蓋即可
└── README.md
```

## 如何替換內容（99% 情況只需改 `scripts/config.js`）

### 1. 替換照片與證書

方法 A（最快）：把你的圖片改成下列檔名，直接覆蓋 `assets/images/` 內的檔案：

| 檔名 | 用途 |
|---|---|
| `profile-placeholder.svg` | 個人照（建議比例 380×460，直式） |
| `cert-cap.svg` | 會考成績單 |
| `cert-toeic.svg` | 多益證書 |
| `cert-student-id.svg` | 學生證 |
| `cert-award.svg` | 獎狀 |
| `cert-other.svg` | 其他證明 |

方法 B（用 jpg/png）：把圖片放進 `assets/images/`，然後改 `scripts/config.js` 的 `images` 路徑，例如：

```js
profile: "assets/images/my-photo.jpg",
```

> 隱私提醒：證書、學生證上傳前請遮蔽身分證字號、學號、地址等個資。

### 2. 替換 LINE / 電話 / Email

改 `scripts/config.js`：

```js
lineUrl: "https://line.me/ti/p/你的LINE網址",  // LINE 主頁 → 加入好友 → 複製連結
lineId: "@your-id",
phoneDisplay: "09xx-xxx-xxx",
phoneHref: "tel:+8869xxxxxxxx",
```

### 3. 替換 Google 表單

1. 用下方「建議表單結構」建立 Google 表單。
2. 表單右上「傳送」→ `< >`（內嵌 HTML）→ 複製 `src` 的網址。
3. 貼到 `scripts/config.js`：

```js
googleFormEmbedUrl: "https://docs.google.com/forms/d/e/xxxx/viewform?embedded=true",
```

填入後，聯絡區塊會自動把占位卡片換成表單。

### 4. 替換履歷 PDF

把履歷存成 `assets/cv.pdf`（或改 `config.js` 的 `cvUrl` 指向 Google Drive 連結）。

### 5. 更新家長回饋

取得真實回饋後，編輯 `index.html` 中 `id="testimonials"` 區塊的三段
`<blockquote>` 文字，並刪除底部「以上為版面示意」那行提示。

### 6. 調整收費

價格寫在 `index.html` FAQ 區塊「收費怎麼算？」內（目前為 NT$600–800/hr 的參考區間），請依實際定價修改。

## 建議的 Google 表單結構

| # | 題目 | 類型 | 必填 |
|---|------|------|------|
| 1 | 家長稱呼（例：王媽媽） | 簡答 | ✓ |
| 2 | 學生年級 | 下拉：國一／國二／國三／高一／高二／其他 | ✓ |
| 3 | 就讀學校 | 簡答 | |
| 4 | 想加強的科目 | 核取方塊：數學／英文／理化／讀書方法／程式／其他 | ✓ |
| 5 | 目前遇到的困難（弱點單元、成績狀況） | 段落 | |
| 6 | 希望上課時段 | 核取方塊：平日晚上／週六／週日／皆可 | ✓ |
| 7 | 上課地點 | 單選：到府（新竹市）／到府（竹北）／公共空間／線上／再討論 | ✓ |
| 8 | 聯絡電話 | 簡答 | ✓ |
| 9 | LINE ID | 簡答 | |
| 10 | 其他想補充的事 | 段落 | |

> 建議開啟「收到回覆時寄送 Email 通知」，並把表單確認訊息改成：
> 「已收到您的資訊，我會在 24 小時內主動與您聯絡，也歡迎直接加 LINE。」

## 部署到 GitHub Pages

```bash
git init
git add .
git commit -m "tutor landing page"
git remote add origin https://github.com/<你的帳號>/<repo名>.git
git push -u origin main
```

然後到 GitHub repo → **Settings → Pages** → Source 選 `main` branch / root → Save。
約一分鐘後網站會出現在 `https://<你的帳號>.github.io/<repo名>/`。

## 設計原則（維護時請保持）

- 目標受眾是**家長**，不是工程師：每個區塊都要回答「我為什麼要信任這個老師」。
- 行動呼籲只有兩種：**加 LINE** 與 **預約試教**，不要增加其他分散注意力的按鈕。
- 手機底部有固定聯絡列（家長多半用手機看），改版時不要移除。
- 不加動畫、不加輪播；快、清楚、可信比炫更重要。
