/* WINTER40 promo banner — shown on every page, above the site header. */
(function () {
  var CODE = "WINTER40";
  var KEY = "glpusa_promo_code";

  var css =
    "#w40{position:relative;overflow:hidden;z-index:60;background:linear-gradient(180deg,#0b1a2e 0%,#12263f 100%);color:#eaf3ff;font-family:'Plus Jakarta Sans','Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}" +
    "#w40 canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}" +
    "#w40 .w40-in{position:relative;display:flex;align-items:center;justify-content:center;gap:28px;min-height:58px;padding:8px 16px;box-sizing:border-box}" +
    "#w40 .w40-big{font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:38px;line-height:1;color:#9fd3ff;letter-spacing:-.5px;text-shadow:0 0 18px rgba(159,211,255,.35)}" +
    "#w40 .w40-copy{display:flex;flex-direction:column;line-height:1.15}" +
    "#w40 .w40-copy b{font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:500;font-size:17px;color:#fff}" +
    "#w40 .w40-copy span{font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:12.5px;color:#b9cde4}" +
    "#w40 .w40-code{display:flex;align-items:center;gap:12px}" +
    "#w40 .w40-lbl{font-size:12px;color:#b9cde4;letter-spacing:.02em}" +
    "#w40 button.w40-tag{position:relative;appearance:none;border:0;cursor:pointer;font:inherit;color:#0b1a2e;background:#dff0ff;padding:6px 18px 6px 26px;display:flex;flex-direction:column;align-items:center;line-height:1.15;clip-path:polygon(12px 0,100% 0,100% 100%,12px 100%,0 50%);transform:rotate(-2deg);transition:transform .18s ease,background .18s ease;box-shadow:0 2px 10px rgba(0,0,0,.25)}" +
    "#w40 button.w40-tag::before{content:'';position:absolute;left:12px;top:50%;width:6px;height:6px;margin-top:-3px;border-radius:50%;background:#0b1a2e}" +
    "#w40 button.w40-tag:hover{transform:rotate(0deg) scale(1.04);background:#fff}" +
    "#w40 button.w40-tag:focus-visible{outline:2px solid #9fd3ff;outline-offset:3px}" +
    "#w40 .w40-tag strong{font-size:13px;font-weight:700;letter-spacing:.08em}" +
    "#w40 .w40-tag small{font-size:10.5px;font-weight:500;opacity:.75}" +
    "#w40 button.w40-tag.is-on{background:#b8f0d0}" +
    "@media (max-width:640px){#w40 .w40-in{gap:12px;min-height:52px;padding:6px 12px}#w40 .w40-big{font-size:28px}#w40 .w40-copy span,#w40 .w40-lbl{display:none}#w40 .w40-copy b{font-size:14px}#w40 button.w40-tag{padding:5px 12px 5px 22px}#w40 .w40-tag small{font-size:9.5px}}" +
    "@media (max-width:360px){#w40 .w40-copy{display:none}}";

  function saved() {
    try { return localStorage.getItem(KEY) === CODE; } catch (e) { return false; }
  }

  function setTag(btn, on) {
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.querySelector("small").textContent = on ? "Applied ✓" : "click to apply";
  }

  function apply(btn) {
    try { localStorage.setItem(KEY, CODE); } catch (e) {}
    try { navigator.clipboard && navigator.clipboard.writeText(CODE); } catch (e) {}
    setTag(btn, true);
    try { window.dispatchEvent(new CustomEvent("glpusa:promo", { detail: { code: CODE, percentOff: 40 } })); } catch (e) {}
  }

  function snow(bar) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var c = document.createElement("canvas");
    c.setAttribute("aria-hidden", "true");
    bar.insertBefore(c, bar.firstChild);
    var ctx = c.getContext("2d"), w = 0, h = 0, dpr = 1, flakes = [];

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = bar.clientWidth; h = bar.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var want = Math.round(w / 16);
      while (flakes.length < want) flakes.push(make(true));
      flakes.length = want;
    }
    function make(anywhere) {
      return {
        x: Math.random() * w,
        y: anywhere ? Math.random() * h : -6,
        r: 0.8 + Math.random() * 2.2,
        vy: 0.25 + Math.random() * 0.55,
        drift: Math.random() * Math.PI * 2,
        a: 0.45 + Math.random() * 0.5
      };
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.drift += 0.012;
        f.y += f.vy;
        f.x += Math.sin(f.drift) * 0.35;
        if (f.y > h + 6) { flakes[i] = make(false); continue; }
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255," + f.a + ")";
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    size();
    window.addEventListener("resize", size);
    requestAnimationFrame(tick);
  }

  function mount() {
    if (document.getElementById("w40")) return;
    var st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);

    var bar = document.createElement("div");
    bar.id = "w40";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Winter promotion");
    bar.innerHTML =
      '<div class="w40-in">' +
        '<div class="w40-big">40%</div>' +
        '<div class="w40-copy"><b>off this winter</b><span>Limited-time winter pricing</span></div>' +
        '<div class="w40-code"><span class="w40-lbl">Code</span>' +
          '<button type="button" class="w40-tag" aria-pressed="false"><strong>' + CODE + '</strong><small>click to apply</small></button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(bar, document.body.firstChild);

    var btn = bar.querySelector(".w40-tag");
    setTag(btn, saved());
    btn.addEventListener("click", function () { apply(btn); });
    window.addEventListener("glpusa:promo", function () { setTag(btn, saved()); });
    window.addEventListener("storage", function (e) { if (e.key === KEY) setTag(btn, saved()); });
    snow(bar);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
