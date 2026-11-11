/* WINTER40 promo banner — shown on every page, above the site header. */
(function () {
  var CODE = "WINTER40";
  var KEY = "glpusa_promo_code";

  var css =
    "#w40{position:relative;overflow:hidden;z-index:1;background:linear-gradient(180deg,#0b1a2e 0%,#12263f 100%);color:#eaf3ff;font-family:'Plus Jakarta Sans','Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}" +
    "#w40 canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}" +
    "#w40 .w40-in{position:relative;display:flex;align-items:center;justify-content:center;gap:28px;height:58px;padding:0 16px;box-sizing:border-box}" +
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
    "@media (max-width:640px){#w40 .w40-in{gap:12px;height:52px;padding:0 12px}#w40 .w40-big{font-size:28px}#w40 .w40-copy span,#w40 .w40-lbl{display:none}#w40 .w40-copy b{font-size:14px}#w40 button.w40-tag{padding:5px 12px 5px 22px}#w40 .w40-tag small{font-size:9.5px}}" +
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
    var ctx = c.getContext("2d"), w = 0, h = 0, dpr = 1, flakes = [], sprites = [];

    // Pre-draw a few six-armed snow crystals (each a little different), so every
    // frame is just cheap image draws.
    function crystal(px, seed) {
      var s = document.createElement("canvas"), g = s.getContext("2d"), R = px / 2 - 1;
      s.width = s.height = px;
      g.translate(px / 2, px / 2);
      g.strokeStyle = "#fff"; g.lineCap = "round";
      g.shadowColor = "rgba(255,255,255,.9)"; g.shadowBlur = px / 10;
      var b1 = 0.38 + seed * 0.12, b2 = 0.66 + seed * 0.08, bl = 0.22 + seed * 0.1;
      for (var k = 0; k < 6; k++) {
        g.save(); g.rotate(k * Math.PI / 3);
        g.lineWidth = Math.max(1, px / 16);
        g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -R); g.stroke();
        g.lineWidth = Math.max(0.8, px / 24);
        [b1, b2].forEach(function (t, j) {
          var y = -R * t, L = R * (j ? bl * 0.75 : bl);
          g.beginPath(); g.moveTo(0, y); g.lineTo(-L * 0.8, y - L); g.moveTo(0, y); g.lineTo(L * 0.8, y - L); g.stroke();
        });
        g.restore();
      }
      g.beginPath(); g.fillStyle = "#fff"; g.arc(0, 0, Math.max(1, px / 14), 0, Math.PI * 2); g.fill();
      return s;
    }
    function soft(px) {
      var s = document.createElement("canvas"), g = s.getContext("2d");
      s.width = s.height = px;
      var r = g.createRadialGradient(px / 2, px / 2, 0, px / 2, px / 2, px / 2);
      r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(0.45, "rgba(255,255,255,.75)"); r.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = r; g.fillRect(0, 0, px, px);
      return s;
    }

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = bar.clientWidth; h = bar.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!sprites.length) {
        var px = Math.round(28 * dpr);
        for (var i = 0; i < 4; i++) sprites.push(crystal(px, i / 3));
        sprites.soft = soft(Math.round(16 * dpr));
      }
      var want = Math.round(w / 11);
      while (flakes.length < want) flakes.push(make(true));
      flakes.length = want;
    }
    // Depth z: 0 = far away (tiny, faint, slow, soft), 1 = close (bigger crystal, faster).
    function make(anywhere) {
      var z = Math.pow(Math.random(), 1.8);
      var near = z > 0.5;
      return {
        x: Math.random() * (w + 40) - 20,
        y: anywhere ? Math.random() * h : -14,
        z: z,
        img: near ? sprites[(Math.random() * sprites.length) | 0] : sprites.soft,
        size: near ? 4 + z * 6 : 1.4 + z * 3.4,
        vy: 0.12 + z * 0.55 + Math.random() * 0.08,
        sway: 0.25 + Math.random() * 0.6,
        ph: Math.random() * Math.PI * 2,
        fr: 0.006 + Math.random() * 0.012,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.02,
        a: near ? 0.55 + z * 0.4 : 0.35 + z * 0.6
      };
    }
    var t = 0, last = 0;
    function tick(now) {
      var dt = last ? Math.min(3, (now - last) / 16.7) : 1; last = now; t += dt;
      var wind = Math.sin(t * 0.004) * 0.25 + Math.sin(t * 0.0013 + 1.7) * 0.18; // slow gusts
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.ph += f.fr * dt;
        f.y += f.vy * dt;
        f.x += (Math.sin(f.ph) * f.sway * 0.5 + wind * (0.4 + f.z)) * dt;
        f.rot += f.vr * dt;
        if (f.y > h + 14 || f.x < -30 || f.x > w + 30) { flakes[i] = make(false); continue; }
        var s = f.size;
        ctx.globalAlpha = f.a;
        if (f.img === sprites.soft) ctx.drawImage(f.img, f.x - s / 2, f.y - s / 2, s, s);
        else {
          ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.rot);
          ctx.drawImage(f.img, -s / 2, -s / 2, s, s); ctx.restore();
        }
      }
      ctx.globalAlpha = 1;
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
    var hd = document.querySelector("header.glh");
    if (hd && hd.parentNode) hd.parentNode.insertBefore(bar, hd.nextSibling);
    else document.body.insertBefore(bar, document.body.firstChild);
    document.documentElement.classList.add("w40-on");

    var btn = bar.querySelector(".w40-tag");
    setTag(btn, saved());
    btn.addEventListener("click", function () { apply(btn); });
    window.addEventListener("glpusa:promo", function () { setTag(btn, saved()); });
    window.addEventListener("storage", function (e) { if (e.key === KEY) setTag(btn, saved()); });
    snow(bar);
  }

  // Hold the banner's space under the header until it mounts, so nothing jumps.
  var hold = document.createElement("style");
  hold.textContent = "html:not(.w40-on) header.glh{margin-bottom:58px;box-shadow:0 58px 0 #0f2036}@media (max-width:640px){html:not(.w40-on) header.glh{margin-bottom:52px;box-shadow:0 52px 0 #0f2036}}";
  document.head.appendChild(hold);

  // React pages: wait until React has taken over the header's container, so adding the
  // banner there can't disturb hydration. Static pages mount right away.
  function hydrated(el) {
    for (var k in el) if (k.indexOf("__reactFiber") === 0 || k.indexOf("__reactContainer") === 0) return true;
    return false;
  }
  var tries = 0;
  function when() {
    var hd = document.querySelector("header.glh");
    var react = document.querySelector('script[type="module"]');
    var last = hd && hd.parentNode && hd.parentNode.lastElementChild;
    if (!hd || !react || tries++ > 120) mount();
    else if (hydrated(hd.parentNode) && last && hydrated(last)) setTimeout(mount, 150);
    else setTimeout(when, 50);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", when);
  else when();
})();
