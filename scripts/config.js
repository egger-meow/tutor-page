/* =====================================================
   網站設定檔 — 只要改這一個檔案，就能更新全站的
   聯絡方式、連結與圖片。
   SITE CONFIG — edit ONLY this file to update contact
   info, links, and images across the whole site.
   ===================================================== */

const SITE_CONFIG = {
  /* ---- 聯絡方式 Contact ---- */
  lineUrl: "https://line.me/ti/p/REPLACE_WITH_YOUR_LINE_ID", // 你的 LINE 加好友連結
  lineId: "請填入 LINE ID",                                   // 顯示用 LINE ID
  email: "jjmow.cs15@nycu.edu.tw",
  phoneDisplay: "0977-427-519",
  phoneHref: "tel:+886977427519",

  /* ---- Google 表單 ----
     建立表單後：傳送 → < > 內嵌 HTML → 複製 src 網址貼在下面。
     留空字串 "" 時，網站會顯示替換說明卡片。 */
  googleFormEmbedUrl: "",

  /* ---- 履歷 CV ----
     把 PDF 放到 assets/cv.pdf，或改成其他連結（例如 Google Drive）。 */
  cvUrl: "assets/cv.pdf",

  /* ---- 圖片 Images ----
     直接把同名檔案覆蓋到 assets/images/ 即可，
     或在此處改成其他路徑／副檔名（例如 .jpg）。 */
  images: {
    profile:  "assets/images/profile-placeholder.svg",   // 個人照
    capScore: "assets/images/cert-cap.svg",              // 會考成績單
    toeic:    "assets/images/cert-toeic.svg",            // 多益證書
    studentId:"assets/images/cert-student-id.svg",       // 學生證
    award:    "assets/images/cert-award.svg",            // 獎狀
    other:    "assets/images/cert-other.svg"             // 其他證明
  }
};
