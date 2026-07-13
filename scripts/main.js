/* 將 config.js 的設定套用到頁面上 — 網站內容本身不需要 JS 也能閱讀 */
(function () {
  if (typeof SITE_CONFIG === "undefined") return;
  var cfg = SITE_CONFIG;

  /* 連結類：data-config="lineUrl" / "cvUrl" / "phoneHref" / "emailHref" */
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    var value;
    if (key === "emailHref") value = "mailto:" + cfg.email;
    else value = cfg[key];
    if (value) el.setAttribute("href", value);
  });

  /* 文字類：data-config-text="lineId" / "email" / "phoneDisplay" */
  document.querySelectorAll("[data-config-text]").forEach(function (el) {
    var value = cfg[el.getAttribute("data-config-text")];
    if (value) el.textContent = value;
  });

  /* 圖片類：data-config-img="profile" / "capScore" ... */
  document.querySelectorAll("[data-config-img]").forEach(function (el) {
    var value = cfg.images && cfg.images[el.getAttribute("data-config-img")];
    if (value) el.setAttribute("src", value);
  });

  /* Google 表單：有填 googleFormEmbedUrl 才嵌入，否則保留占位說明 */
  var formWrap = document.getElementById("form-embed");
  if (formWrap && cfg.googleFormEmbedUrl) {
    var iframe = document.createElement("iframe");
    iframe.src = cfg.googleFormEmbedUrl;
    iframe.title = "家教詢問表單";
    iframe.loading = "lazy";
    formWrap.innerHTML = "";
    formWrap.appendChild(iframe);
  }
})();
