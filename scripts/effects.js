/* =====================================================
   動效與互動加強層（progressive enhancement）：
   此檔案未載入時，網站內容與功能完全不受影響。
   所有動效都尊重 prefers-reduced-motion。
   ===================================================== */
(function () {
  /* 只有本檔真的載入時才啟用「先隱藏再捲入」的樣式，
     避免 JS 失效時內容被永久隱藏 */
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    /* ---- 1. 捲動進度條 + 頁首陰影 ---- */
    var header = document.querySelector(".site-header");
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
        if (header) header.classList.toggle("scrolled", window.scrollY > 8);
        ticking = false;
      });
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    /* ---- 2. 區塊捲入顯示（選擇器需與 main.css 的 reveal 區對應） ---- */
    var REVEAL_SELECTOR = [
      ".section h2", ".section-lead", ".card", ".subject",
      ".diff-list li", ".philosophy-text", ".proof-item",
      ".resume-row", ".faq-item", ".contact-form-wrap", ".contact-aside"
    ].join(",");
    var targets = Array.prototype.slice.call(document.querySelectorAll(REVEAL_SELECTOR));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        var order = 0; /* 同一批進入視窗的元素依序錯開 */
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.style.transitionDelay = Math.min(order * 70, 420) + "ms";
          el.classList.add("in");
          /* 顯示完成後清掉 delay，避免拖慢 hover 的反應 */
          el.addEventListener("transitionend", function handler() {
            el.style.transitionDelay = "";
            el.removeEventListener("transitionend", handler);
          });
          io.unobserve(el);
          order++;
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      targets.forEach(function (el) { io.observe(el); });
    }

    /* ---- 3. 證明文件燈箱：點圖放大檢視 ---- */
    var proofImgs = document.querySelectorAll(".proof-item img");
    if (proofImgs.length) {
      var lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.setAttribute("role", "dialog");
      lightbox.setAttribute("aria-modal", "true");
      lightbox.setAttribute("aria-label", "證明文件放大檢視");
      lightbox.innerHTML =
        '<button type="button" class="lightbox-close" aria-label="關閉">&times;</button>' +
        '<img alt="">';
      document.body.appendChild(lightbox);
      var lbImg = lightbox.querySelector("img");

      function openLightbox(src, alt) {
        lbImg.src = src;
        lbImg.alt = alt || "";
        lightbox.classList.add("open");
        document.body.classList.add("lb-open");
        document.body.style.overflow = "hidden";
      }
      function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.classList.remove("lb-open");
        document.body.style.overflow = "";
      }

      proofImgs.forEach(function (img) {
        img.setAttribute("tabindex", "0");
        img.setAttribute("role", "button");
        img.addEventListener("click", function () { openLightbox(img.src, img.alt); });
        img.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox(img.src, img.alt);
          }
        });
      });
      lightbox.addEventListener("click", function (e) {
        if (e.target !== lbImg) closeLightbox();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
      });
    }
  });
})();
