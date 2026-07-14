/* =====================================================
   網站設定檔 — 只要改這一個檔案，就能更新全站的
   聯絡方式、連結與圖片。
   SITE CONFIG — edit ONLY this file to update contact
   info, links, and images across the whole site.
   ===================================================== */

const SITE_CONFIG = {
  /* ---- 聯絡方式 Contact ---- */
  lineUrl: "https://line.me/ti/p/O-iA14DTJs", // 你的 LINE 加好友連結
  lineId: "0977427519",                                   // 顯示用 LINE ID
  email: "jjmow.cs15@nycu.edu.tw",
  phoneDisplay: "0977-427-519",
  phoneHref: "tel:+886977427519",

  /* ---- Google 表單 ----
     建立表單後：傳送 → < > 內嵌 HTML → 複製 src 網址貼在下面。
     留空字串 "" 時，網站會顯示替換說明卡片。 */
  googleFormEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd2zG2Z19zRMzT-btycp2EnOquA7OcnQhkP84qLNHBqqTCZBQ/viewform?embedded=true",

  /* ---- 履歷 CV ----
     把 PDF 放到 assets/cv.pdf，或改成其他連結（例如 Google Drive）。 */
  cvUrl: "assets/cv.pdf",

  /* ---- 個人網站／作品集 ----
     顯示在 Navbar 旁邊與畢業證書卡片下方，讓家長可以點進去了解背景與作品。 */
  personalSiteUrl: "https://egger-meow.github.io/Me",

  /* ---- 圖片 Images ----
     直接把同名檔案覆蓋到 assets/images/ 即可，
     或在此處改成其他路徑／副檔名（例如 .jpg）。
     若之後有其他證明文件（例如英文檢定、獲獎等），
     可在 index.html 的 proof-grid 內新增一個 <figure> 並在這裡加上對應路徑。 */
  images: {
    profile:   "assets/images/profile.jpg",        // 個人照
    toeic:     "assets/images/cert-toeic.jpg",      // 多益證書
    ielts:     "assets/images/cert-ielts.jpg",      // 雅思成績單
    admission: "assets/images/cert-admission.jpg",  // 陽明交大入學證明
    diploma:   "assets/images/cert-diploma.jpg"     // 陽明交大畢業證書
  }
};
