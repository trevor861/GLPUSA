/* BioLongevity Labs cart drawer ("Your draft invoice").
   Opens from the header cart icon on every page and after "Add to invoice".
   Items live in localStorage "glp-bulk" ({slug: {sizeLabel: qty}}), shared with
   /volume-pricing and the product pages. Catalog is generated: scripts/cart-catalog.py */
(function () {
  var CATALOG = /*CATALOG*/{"apileen13xr":{"n":"Apileen13XR™","i":"/assets/apileen13xr-g039c04b9.webp","t":"#9fd3ff","s":[{"l":"160mcg/5mcg","p":269.99,"i":"/assets/apileen13xr-g039c04b9.webp"}]},"alphaklotholr":{"n":"alphaKlothoLR™","i":"/assets/alphaklotholr-g5da733a6.webp","t":"#9fd3ff","s":[{"l":"Pair · 2 × 20mcg","p":299.0,"i":"/assets/alphaklotholr-g5da733a6.webp"}]},"flgr242":{"n":"FLGR242™","i":"/assets/flgr242-g180f4ab7.webp","t":"#9fd3ff","s":[{"l":"Pair · 2 × 10mg","p":299.0,"i":"/assets/flgr242-g180f4ab7.webp"}]},"cell-factors":{"n":"Cell Factors™","i":"/assets/cell-factors-gfbc2061d.webp","t":"#9fd3ff","s":[{"l":"Cell Factors™","p":899.0,"i":"/assets/cell-factors-gfbc2061d.webp"},{"l":"Cell Factors™ Max","p":1499.0,"i":"/assets/cell-factors-max-g8cc374dc.webp"}]},"retatrutide":{"n":"BioG3","i":"/assets/retatrutide-g96997ce9.webp","t":"#9ec3ea","s":[{"l":"10mg","p":41.99,"i":"/assets/retatrutide-10mg-g96997ce9.webp"},{"l":"20mg","p":80.99,"i":"/assets/retatrutide-20mg-g7561562f.webp"},{"l":"30mg","p":119.99,"i":"/assets/retatrutide-30mg-g533e3597.webp"}]},"bpc-157":{"n":"BPC-157","i":"/assets/bpc-157-gbc56fe47.webp","t":"#a1bb98","s":[{"l":"10mg","p":23.99,"i":"/assets/bpc-157-gbc56fe47.webp"}]},"ghk-cu":{"n":"GHK-Cu","i":"/assets/ghk-cu-gcb1d09de.webp","t":"#93bcf0","s":[{"l":"50mg","p":17.99,"i":"/assets/ghk-cu-50mg-gcb1d09de.webp"},{"l":"100mg","p":34.79,"i":"/assets/ghk-cu-100mg-g28373683.webp"}]},"tesamorelin":{"n":"Tesamorelin","i":"/assets/tesamorelin-ge545e51b.webp","t":"#8fb8ea","s":[{"l":"10mg","p":41.99,"i":"/assets/tesamorelin-ge545e51b.webp"}]},"tb-500":{"n":"TB-500","i":"/assets/tb-500-g0eec9cf1.webp","t":"#a5d6fd","s":[{"l":"10mg","p":23.99,"i":"/assets/tb-500-g0eec9cf1.webp"}]},"melanotan-ii":{"n":"Melanotan II","i":"/assets/melanotan-ii-gfb427acb.webp","t":"#f6a978","s":[{"l":"10mg","p":17.97,"i":"/assets/melanotan-ii-gfb427acb.webp"}]},"nad-plus":{"n":"NAD+","i":"/assets/nad-plus-g18530f75.webp","t":"#cbbaf0","s":[{"l":"500mg","p":41.99,"i":"/assets/nad-plus-g18530f75.webp"}]},"aod-9604":{"n":"AOD-9604","i":"/assets/aod-9604-gc922741a.webp","t":"#efd38a","s":[{"l":"5mg","p":29.99,"i":"/assets/aod-9604-gc922741a.webp"}]},"mots-c":{"n":"MOTS-C","i":"/assets/mots-c-g96975b2c.webp","t":"#f6dd86","s":[{"l":"10mg","p":23.99,"i":"/assets/mots-c-10mg-g96975b2c.webp"},{"l":"40mg","p":80.99,"i":"/assets/mots-c-40mg-g2fd35c0e.webp"}]},"cjc-1295-ipamorelin":{"n":"CJC-1295 / Ipamorelin","i":"/assets/cjc-1295-ipamorelin-g6498c051.webp","t":"#8a6aba","s":[{"l":"10mg","p":35.99,"i":"/assets/cjc-1295-ipamorelin-g6498c051.webp"}]},"bpc-157-tb-500":{"n":"BPC-157 / TB-500","i":"/assets/bpc-157-tb-500-gd18e0c65.webp","t":"#99bea6","s":[{"l":"10mg","p":47.99,"i":"/assets/bpc-157-tb-500-10mg-gd18e0c65.webp"},{"l":"20mg","p":89.99,"i":"/assets/bpc-157-tb-500-20mg-g163f1ed1.webp"}]},"wolverine-blend":{"n":"Wolverine Blend","i":"/assets/wolverine-blend-g4386b51c.webp","t":"#fdb78a","s":[{"l":"10mg","p":47.99,"i":"/assets/wolverine-blend-10mg-g4386b51c.webp"},{"l":"20mg","p":89.99,"i":"/assets/wolverine-blend-20mg-g18797da3.webp"}]},"glow-blend":{"n":"Glow Blend","i":"/assets/glow-blend-g985b0d6d.webp","t":"#fde382","s":[{"l":"70mg","p":53.99,"i":"/assets/glow-blend-g985b0d6d.webp"}]},"dsip":{"n":"DSIP","i":"/assets/dsip-g8e55c13c.webp","t":"#8260ad","s":[{"l":"5mg","p":17.99,"i":"/assets/dsip-g8e55c13c.webp"}]},"semax":{"n":"Semax","i":"/assets/semax-ga85d04fa.webp","t":"#8fb8ec","s":[{"l":"10mg","p":17.97,"i":"/assets/semax-ga85d04fa.webp"}]},"selank":{"n":"Selank","i":"/assets/selank-ga40f4025.webp","t":"#b6a3dc","s":[{"l":"10mg","p":17.97,"i":"/assets/selank-ga40f4025.webp"}]},"bpc-157-ghk-cu-kpv-tb-500":{"n":"BPC-157 / GHK-Cu / KPV / TB-500","i":"/assets/bpc-157-ghk-cu-kpv-tb-500-Bpbqw4q-g49874845.webp","t":"#97b892","s":[{"l":"80mg","p":59.99,"i":"/assets/bpc-157-ghk-cu-kpv-tb-500-Bpbqw4q-g49874845.webp"}]},"kpv":{"n":"KPV","i":"/assets/kpv-g3bf9d77c.webp","t":"#a9cfa6","s":[{"l":"10mg","p":23.99,"i":"/assets/kpv-g3bf9d77c.webp"}]},"pt-141":{"n":"PT-141","i":"/assets/pt-141-g162bb04e.webp","t":"#fb9652","s":[{"l":"10mg","p":17.99,"i":"/assets/pt-141-g162bb04e.webp"}]},"glutathione":{"n":"Glutathione","i":"/assets/glutathione-g23ebf7f3.webp","t":"#edcb6c","s":[{"l":"1500mg","p":35.99,"i":"/assets/glutathione-g23ebf7f3.webp"}]},"ipamorelin":{"n":"Ipamorelin","i":"/assets/ipamorelin-g9981b7e5.webp","t":"#a993d0","s":[{"l":"10mg","p":29.99,"i":"/assets/ipamorelin-g9981b7e5.webp"}]},"igf-1-lr3":{"n":"IGF-1 LR3","i":"/assets/igf-1-lr3-gb1ad0c49.webp","t":"#6ba2e8","s":[{"l":"1mg","p":41.99,"i":"/assets/igf-1-lr3-gb1ad0c49.webp"}]},"cagrilintide":{"n":"Cagrilintide","i":"/assets/cagrilintide-g715434f0.webp","t":"#a3d4bf","s":[{"l":"10mg","p":41.99,"i":"/assets/cagrilintide-g715434f0.webp"}]},"epithalon":{"n":"Epithalon","i":"/assets/epithalon-g65862bd4.webp","t":"#8e73c5","s":[{"l":"10mg","p":17.99,"i":"/assets/epithalon-g65862bd4.webp"}]},"5-amino-1mq":{"n":"5-Amino-1MQ","i":"/assets/5-amino-1mq-gcfef8006.webp","t":"#f2b98f","s":[{"l":"50mg","p":29.99,"i":"/assets/5-amino-1mq-gcfef8006.webp"}]},"melanotan-i":{"n":"Melanotan I","i":"/assets/melanotan-i-g93fb9d51.webp","t":"#f0b48a","s":[{"l":"10mg","p":17.97,"i":"/assets/melanotan-i-g93fb9d51.webp"}]},"thymosin-alpha-1":{"n":"Thymosin Alpha-1","i":"/assets/thymosin-alpha-1-g162cca42.webp","t":"#a3c59f","s":[{"l":"10mg","p":23.99,"i":"/assets/thymosin-alpha-1-g162cca42.webp"}]},"sermorelin":{"n":"Sermorelin","i":"/assets/sermorelin-g41530d96.webp","t":"#f1d764","s":[{"l":"10mg","p":35.99,"i":"/assets/sermorelin-g41530d96.webp"}]},"dihexa":{"n":"Dihexa","i":"/assets/dihexa-g7a10c1d8.webp","t":"#8eaee0","s":[{"l":"10mg","p":35.99,"i":"/assets/dihexa-g7a10c1d8.webp"}]},"ara-290":{"n":"ARA-290","i":"/assets/ara-290-g3302d8dd.webp","t":"#9fd0c1","s":[{"l":"10mg","p":29.99,"i":"/assets/ara-290-g3302d8dd.webp"}]},"kisspeptin":{"n":"Kisspeptin","i":"/assets/kisspeptin-gda3f8f35.webp","t":"#8361b3","s":[{"l":"10mg","p":29.99,"i":"/assets/kisspeptin-gda3f8f35.webp"}]},"vip":{"n":"VIP","i":"/assets/vip-g68aec841.webp","t":"#c2a7da","s":[{"l":"10mg","p":29.99,"i":"/assets/vip-g68aec841.webp"}]},"tirzepatide":{"n":"BioG2","i":"/assets/tirzepatide-g3d5c480d.webp","t":"#95c3f3","s":[{"l":"30mg","p":35.99,"i":"/assets/tirzepatide-30mg-g3d5c480d.webp"},{"l":"60mg","p":65.99,"i":"/assets/tirzepatide-60mg-ge7f0f771.webp"}]},"semaglutide":{"n":"BioG1","i":"/assets/semaglutide-gecef30d1.webp","t":"#bba0d9","s":[{"l":"10mg","p":29.99,"i":"/assets/semaglutide-gecef30d1.webp"}]},"pinealon":{"n":"Pinealon","i":"/assets/pinealon-g6a08fe69.webp","t":"#f1cf7f","s":[{"l":"10mg","p":29.99,"i":"/assets/pinealon-g6a08fe69.webp"}]},"ll-37":{"n":"LL-37","i":"/assets/ll-37-g2ca181f6.webp","t":"#90ccb8","s":[{"l":"5mg","p":20.99,"i":"/assets/ll-37-g2ca181f6.webp"}]},"cartalax":{"n":"Cartalax","i":"/assets/cartalax-g3d9d56c9.webp","t":"#ecd394","s":[{"l":"20mg","p":41.99,"i":"/assets/cartalax-g3d9d56c9.webp"}]},"bpc-157-kpv-tb-500":{"n":"BPC-157 / KPV / TB-500","i":"/assets/bpc-157-kpv-tb-500-ge4b4426e.webp","t":"#a0cba2","s":[{"l":"Per vial","p":53.99,"i":"/assets/bpc-157-kpv-tb-500-ge4b4426e.webp"}]},"ghk-cu-epithalon":{"n":"GHK-Cu / Epithalon","i":"/assets/ghk-cu-epithalon-gf2f4317e.webp","t":"#fbb38c","s":[{"l":"Per vial","p":35.99,"i":"/assets/ghk-cu-epithalon-gf2f4317e.webp"}]},"dsip-bpc-cjc":{"n":"DSIP / BPC-157 / CJC-1295","i":"/assets/dsip-bpc-cjc-g89ee8164.webp","t":"#fc8a3a","s":[{"l":"Per vial","p":77.99,"i":"/assets/dsip-bpc-cjc-g89ee8164.webp"}]},"semax-selank":{"n":"Semax / Selank","i":"/assets/semax-selank-g05a30ec2.webp","t":"#74a8ec","s":[{"l":"Per vial","p":35.99,"i":"/assets/semax-selank-g05a30ec2.webp"}]},"pinealon-pe22-28-selank":{"n":"Pinealon / PE22-28 / Selank","i":"/assets/pinealon-pe22-28-selank-g3f4ea827.webp","t":"#fbc96c","s":[{"l":"Per vial","p":47.99,"i":"/assets/pinealon-pe22-28-selank-g3f4ea827.webp"}]},"tesamorelin-ipamorelin":{"n":"Tesamorelin / Ipamorelin","i":"/assets/tesamorelin-ipamorelin-ge4931c2c.webp","t":"#fa9f5f","s":[{"l":"Per vial","p":71.99,"i":"/assets/tesamorelin-ipamorelin-ge4931c2c.webp"}]},"gonadorelin":{"n":"Gonadorelin","i":"/assets/gonadorelin-gf1a861e2.webp","t":"#f5e16c","s":[{"l":"Per vial","p":29.99,"i":"/assets/gonadorelin-gf1a861e2.webp"}]}}/*END CATALOG*/;
  var KEY = "glp-bulk", PKEY = "glpusa_promo_code", PROMO = "WINTER40", PROMO_PCT = 40;
  var TIERS = [[50, 50], [10, 40], [3, 5], [2, 4], [1, 0]];

  // Tell every part of the site when the invoice changes, whoever wrote it.
  try {
    var setItem = Storage.prototype.setItem, removeItem = Storage.prototype.removeItem;
    Storage.prototype.setItem = function (k, v) {
      setItem.apply(this, arguments);
      if (k === KEY) fire("glpusa:cart");
    };
    Storage.prototype.removeItem = function (k) {
      removeItem.apply(this, arguments);
      if (k === KEY) fire("glpusa:cart");
    };
  } catch (e) {}
  function fire(n, d) { try { window.dispatchEvent(new CustomEvent(n, { detail: d || {} })); } catch (e) {} }

  function read() {
    var st = {};
    try { st = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) {}
    var out = {};
    Object.keys(st).forEach(function (slug) {
      var P = CATALOG[slug]; if (!P) return;
      var v = st[slug];
      if (typeof v === "number") { var o = {}; o[P.s[0].l] = v; v = o; }
      Object.keys(v || {}).forEach(function (l) {
        var q = v[l] | 0;
        if (q > 0 && P.s.some(function (z) { return z.l === l; })) { (out[slug] = out[slug] || {})[l] = q; }
      });
    });
    return out;
  }
  function write(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  function promoOn() { try { return localStorage.getItem(PKEY) === PROMO; } catch (e) { return false; } }
  function vpct(q) { for (var i = 0; i < TIERS.length; i++) if (q >= TIERS[i][0]) return TIERS[i][1]; return 0; }
  function pct(q) { var v = vpct(q); return promoOn() && v < PROMO_PCT ? PROMO_PCT : v; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function money(x) { return "$" + x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function summary() {
    var st = read(), lines = [], units = 0, retail = 0, total = 0;
    Object.keys(st).forEach(function (slug) {
      var P = CATALOG[slug], tq = 0;
      for (var l in st[slug]) tq += st[slug][l];
      var d = pct(tq);
      P.s.forEach(function (z) {
        var q = (st[slug] || {})[z.l]; if (!q) return;
        var u = r2(z.p * (1 - d / 100));
        units += q; retail += z.p * q; total += u * q;
        lines.push({ slug: slug, P: P, z: z, q: q, d: d, u: u });
      });
    });
    return { lines: lines, units: units, retail: r2(retail), total: r2(total) };
  }

  var css =
    ".gc-ov{position:fixed;inset:0;z-index:2147482000;background:rgba(10,14,20,.42);opacity:0;transition:opacity .25s ease;pointer-events:none}" +
    ".gc-ov.is-open{opacity:1;pointer-events:auto}" +
    ".gc{position:fixed;top:0;right:0;bottom:0;z-index:2147482001;width:min(440px,100vw);background:#fff;color:#111;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(.2,.8,.2,1);box-shadow:-20px 0 60px rgba(0,0,0,.18);font-family:'Plus Jakarta Sans','Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}" +
    ".gc.is-open{transform:none}" +
    ".gc button{font:inherit;color:inherit}" +
    ".gc-hd{position:relative;display:flex;align-items:center;justify-content:center;gap:10px;height:58px;border-bottom:1px solid #ececec;flex:none}" +
    ".gc-hd h2{margin:0;font-size:12.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase}" +
    ".gc-n{min-width:22px;height:22px;padding:0 7px;border-radius:999px;background:#dcf5e3;color:#1c7a3e;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box}" +
    ".gc-x{position:absolute;left:10px;top:50%;margin-top:-20px;width:40px;height:40px;border:0;background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%}" +
    ".gc-x:hover{background:#f3f3f3}" +
    ".gc-body{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:0 20px}" +
    ".gc-it{display:grid;grid-template-columns:80px 1fr auto;gap:4px 16px;padding:18px 0;border-bottom:1px solid #efefef}" +
    ".gc-img{grid-row:span 2;width:80px;height:80px;border-radius:14px;overflow:hidden;display:flex;align-items:center;justify-content:center}" +
    ".gc-img img{width:100%;height:100%;object-fit:contain}" +
    ".gc-nm{font-size:16px;font-weight:700;letter-spacing:.01em;text-transform:uppercase;line-height:1.25}" +
    ".gc-sz{font-size:11.5px;color:#888;letter-spacing:.06em;text-transform:uppercase;margin-top:3px}" +
    ".gc-rm{width:30px;height:30px;border:0;background:none;color:#999;cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:-4px -6px 0 0}" +
    ".gc-rm:hover{background:#f3f3f3;color:#111}" +
    ".gc-row{grid-column:2/4;display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:8px}" +
    ".gc-q{position:relative}" +
    ".gc-q select{appearance:none;-webkit-appearance:none;height:36px;min-width:60px;padding:0 30px 0 14px;border:1px solid #ddd;border-radius:999px;background:#fff;font:inherit;font-size:15px;font-weight:600;cursor:pointer}" +
    ".gc-q:after{content:'';position:absolute;right:13px;top:50%;width:6px;height:6px;margin-top:-5px;border:solid #555;border-width:0 1.6px 1.6px 0;transform:rotate(45deg);pointer-events:none}" +
    ".gc-pr{display:flex;align-items:baseline;gap:8px;white-space:nowrap}" +
    ".gc-pr s{color:#999;font-size:13px}" +
    ".gc-pr b{color:#1f8a43;font-size:18px;font-weight:800}" +
    ".gc-pr b.is-full{color:#111}" +
    ".gc-tip{grid-column:2/4;font-size:11.5px;color:#1f6f5c;margin-top:2px}" +
    ".gc-line{display:flex;align-items:center;justify-content:space-between;padding:16px 0;font-size:13.5px;font-weight:600}" +
    ".gc-line span:first-child{display:flex;align-items:center;gap:8px}" +
    ".gc-line .ok{color:#1f8a43;font-weight:700}" +
    ".gc-empty{padding:70px 10px;text-align:center;color:#666}" +
    ".gc-empty b{display:block;color:#111;font-size:18px;margin-bottom:6px}" +
    ".gc-empty a{display:inline-flex;margin-top:18px;padding:12px 22px;border-radius:999px;background:#111;color:#fff;font-weight:600;text-decoration:none}" +
    ".gc-ft{flex:none;border-top:1px solid #e6e6e6;padding:6px 20px calc(16px + env(safe-area-inset-bottom));background:#fff}" +
    ".gc-pm{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 0;border-bottom:1px solid #efefef;font-size:13.5px}" +
    ".gc-pm b{letter-spacing:.06em}" +
    ".gc-pm em{font-style:normal;color:#1f8a43;font-size:12px;margin-left:6px}" +
    ".gc-pm .lnk{border:0;background:none;color:#888;text-decoration:underline;font-size:12.5px;cursor:pointer}" +
    ".gc-pf{display:flex;gap:8px;width:100%}" +
    ".gc-pf input{flex:1;min-width:0;height:38px;padding:0 14px;border:1px solid #ddd;border-radius:999px;font:inherit;font-size:13.5px;text-transform:uppercase;letter-spacing:.05em}" +
    ".gc-pf input::placeholder{text-transform:none;letter-spacing:0}" +
    ".gc-pf button{height:38px;padding:0 16px;border-radius:999px;border:1px solid #111;background:#fff;font-weight:600;cursor:pointer}" +
    ".gc-msg{color:#b42318;font-size:12px;padding-top:6px}" +
    ".gc-msg:empty{display:none}" +
    ".gc-ship{padding:12px 0;border-bottom:1px solid #efefef;font-size:12px}" +
    ".gc-bar{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px}" +
    ".gc-bar i{height:4px;border-radius:4px;background:#2e9a4f}" +
    ".gc-ship div:last-child{display:flex;justify-content:space-between;color:#1f8a43;font-weight:600}" +
    ".gc-tot{padding:12px 0 4px;font-size:14px}" +
    ".gc-tot>div{display:flex;justify-content:space-between;align-items:baseline;padding:3px 0}" +
    ".gc-tot .sub span:first-child{font-weight:700}" +
    ".gc-tot .sub s{color:#999;font-size:14px;margin-right:8px}" +
    ".gc-tot .sub b{font-size:21px;font-weight:800;letter-spacing:-.01em}" +
    ".gc-tot .dis{color:#1f8a43;font-weight:600}" +
    ".gc-go{width:100%;height:54px;margin-top:10px;border:0;border-radius:999px;background:#111;color:#fff!important;font-size:16px!important;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px}" +
    ".gc-go:disabled{opacity:.35;cursor:default}" +
    ".gc-fine{margin:10px 0 0;text-align:center;font-size:11.5px;color:#999}" +
    "html.gc-lock{overflow:hidden}" +
    ".gc-pill{position:fixed;right:20px;bottom:20px;z-index:2147481000;display:flex;align-items:center;gap:14px;height:50px;padding:0 20px 0 16px;border:0;border-radius:999px;background:#111;color:#fff;cursor:pointer;box-shadow:0 14px 34px -10px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.06) inset;font-family:'Plus Jakarta Sans','Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;transform:translateY(16px);opacity:0;pointer-events:none;transition:transform .3s cubic-bezier(.2,.8,.2,1),opacity .25s ease}" +
    ".gc-pill.is-on{transform:none;opacity:1;pointer-events:auto}" +
    ".gc-pill:hover{background:#000}" +
    ".gc-pill:focus-visible{outline:2px solid #9fd3ff;outline-offset:3px}" +
    ".gc-pill .ic{position:relative;display:flex}" +
    ".gc-pill .ic i{position:absolute;top:-8px;right:-9px;min-width:17px;height:17px;padding:0 4px;box-sizing:border-box;border-radius:999px;background:#fff;color:#111;font-size:10px;font-weight:700;line-height:17px;font-style:normal;text-align:center}" +
    ".gc-pill .tot{font-size:15px;font-weight:700;letter-spacing:-.01em}" +
    ".gc-pill .sep{width:1px;height:18px;background:rgba(255,255,255,.28)}" +
    ".gc-pill .lbl{font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;display:flex;align-items:center;gap:8px}" +
    "html.gc-lock .gc-pill{opacity:0;pointer-events:none}" +
    ".bk-bar{display:none!important}" +
    "@media (max-width:640px){.gc-pill{left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));justify-content:space-between;height:54px}.gc-pill .sep{display:none}.gc-pill .lbl{margin-left:auto}}" +
    "a[data-gc-count]{position:relative}" +
    "a[data-gc-count]:after{content:attr(data-gc-count);position:absolute;top:-2px;right:-4px;min-width:17px;height:17px;padding:0 4px;box-sizing:border-box;border-radius:999px;background:#111;color:#fff;font:700 10px/17px 'Plus Jakarta Sans',system-ui,sans-serif;text-align:center}" +
    "@media (max-width:480px){.gc-it{grid-template-columns:68px 1fr auto;gap:4px 12px}.gc-img{width:68px;height:68px}.gc-nm{font-size:15px}}";

  var X = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var built = false, ov, panel, body, foot, count, lastFocus;

  function build() {
    if (built) return; built = true;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    ov = document.createElement("div"); ov.className = "gc-ov";
    panel = document.createElement("aside"); panel.className = "gc";
    panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-label", "Your draft invoice");
    panel.innerHTML =
      '<div class="gc-hd"><button type="button" class="gc-x" aria-label="Close">' + X + '</button>' +
      '<h2>Your draft invoice</h2><span class="gc-n">0</span></div>' +
      '<div class="gc-body"></div><div class="gc-ft"></div>';
    document.body.appendChild(ov); document.body.appendChild(panel);
    body = panel.querySelector(".gc-body"); foot = panel.querySelector(".gc-ft"); count = panel.querySelector(".gc-n");
    ov.addEventListener("click", close);
    panel.querySelector(".gc-x").addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("is-open")) close(); });
  }

  function render() {
    if (!built) return;
    var S = summary(), on = promoOn(), html = "";
    count.textContent = S.units;
    if (!S.lines.length) {
      html = '<div class="gc-empty"><b>Your invoice is empty</b>Add compounds from any product page.<br/><a href="/store">Browse compounds</a></div>';
    } else {
      S.lines.forEach(function (it, i) {
        var opts = "", max = Math.max(20, it.q);
        for (var n = 1; n <= max; n++) opts += '<option' + (n === it.q ? " selected" : "") + ">" + n + "</option>";
        html +=
          '<div class="gc-it" data-i="' + i + '">' +
            '<a class="gc-img" href="/treatment/' + esc(it.slug) + '" style="background:linear-gradient(160deg,' + it.P.t + '55,' + it.P.t + '18)"><img alt="" src="' + esc(it.z.i || it.P.i) + '"/></a>' +
            '<div><div class="gc-nm">' + esc(it.P.n) + '</div><div class="gc-sz">' + esc(it.z.l === "Per vial" ? "Per vial" : it.z.l) + "</div></div>" +
            '<button type="button" class="gc-rm" aria-label="Remove ' + esc(it.P.n) + '">' + X + "</button>" +
            '<div class="gc-row"><label class="gc-q"><select aria-label="Quantity of ' + esc(it.P.n) + '">' + opts + "</select></label>" +
            '<span class="gc-pr">' + (it.d ? "<s>" + money(it.z.p * it.q) + "</s>" : "") + '<b class="' + (it.d ? "" : "is-full") + '">' + money(r2(it.u * it.q)) + "</b></span></div>" +
          "</div>";
      });
      html += '<div class="gc-line"><span>Expedited shipping</span><span class="ok">Free</span></div>';
    }
    body.innerHTML = html;

    var saved = r2(S.retail - S.total);
    foot.innerHTML =
      '<div class="gc-pm">' + (on
        ? '<span>◇ <b>' + PROMO + '</b><em>applied ✓</em></span><button type="button" class="lnk" data-gc-rmcode>Remove</button>'
        : '<form class="gc-pf"><input type="text" placeholder="Promo code" aria-label="Promo code" autocomplete="off" spellcheck="false"/><button type="submit">Apply</button></form>') +
      "</div>" + (on ? "" : '<div class="gc-msg" role="status"></div>') +
      '<div class="gc-ship"><div class="gc-bar"><i></i><i></i></div><div><span>Free expedited shipping</span><span>Included ✓</span></div></div>' +
      '<div class="gc-tot"><div class="sub"><span>Subtotal</span><span>' + (saved > 0 ? "<s>" + money(S.retail) + "</s>" : "") + "<b>" + money(S.total) + "</b></span></div>" +
      (saved > 0 ? '<div class="dis"><span>Discount</span><span>-' + money(saved) + "</span></div>" : "") + "</div>" +
      '<button type="button" class="gc-go"' + (S.lines.length ? "" : " disabled") + ">Proceed to invoicing <span aria-hidden=\"true\">→</span></button>" +
      '<p class="gc-fine">One-time purchase. We confirm availability and send your invoice.</p>';

    // wire up
    [].forEach.call(body.querySelectorAll(".gc-it"), function (el) {
      var it = S.lines[+el.dataset.i];
      el.querySelector("select").addEventListener("change", function (e) { setQ(it.slug, it.z.l, +e.target.value); });
      el.querySelector(".gc-rm").addEventListener("click", function () { setQ(it.slug, it.z.l, 0); });
    });
    var pf = foot.querySelector(".gc-pf");
    if (pf) pf.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = pf.querySelector("input").value.trim().toUpperCase();
      if (v === PROMO) { try { localStorage.setItem(PKEY, PROMO); } catch (x) {} fire("glpusa:promo", { code: PROMO }); }
      else foot.querySelector(".gc-msg").textContent = v ? "That code is not valid." : "";
    });
    var rc = foot.querySelector("[data-gc-rmcode]");
    if (rc) rc.addEventListener("click", function () { try { localStorage.removeItem(PKEY); } catch (x) {} fire("glpusa:promo", { code: null }); });
    foot.querySelector(".gc-go").addEventListener("click", proceed);
  }

  function setQ(slug, label, q) {
    var st = read(); var v = st[slug] || {};
    if (q > 0) v[label] = q; else delete v[label];
    if (Object.keys(v).length) st[slug] = v; else delete st[slug];
    write(st);
  }

  function proceed() {
    var S = summary(); if (!S.lines.length) return;
    var out = S.lines.map(function (it) {
      return it.P.n + " " + (it.z.l === "Per vial" ? "" : it.z.l + " ") + "x" + it.q + " @ " + money(it.u) + "/unit (" + it.d + "% off)";
    });
    var txt = "Volume invoice request:\n" + out.join("\n") + (promoOn() ? "\nPromo code: " + PROMO : "") + "\nTotal: " + money(S.total);
    try { navigator.clipboard && navigator.clipboard.writeText(txt); } catch (e) {}
    foot.querySelector(".gc-fine").textContent = "Your order summary was copied. Send it to us from the contact page and we will confirm and invoice.";
    setTimeout(function () { location.href = "/contact"; }, 1400);
  }

  function open() {
    build(); render();
    lastFocus = document.activeElement;
    ov.classList.add("is-open"); panel.classList.add("is-open");
    document.documentElement.classList.add("gc-lock");
    setTimeout(function () { panel.querySelector(".gc-x").focus(); }, 50);
  }
  function close() {
    ov.classList.remove("is-open"); panel.classList.remove("is-open");
    document.documentElement.classList.remove("gc-lock");
    if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
  }

  function badge() {
    var n = summary().units;
    [].forEach.call(document.querySelectorAll('a[aria-label="Cart"]'), function (a) {
      if (n) a.setAttribute("data-gc-count", n > 99 ? "99+" : n); else a.removeAttribute("data-gc-count");
    });
  }
  var pill;
  function updatePill() {
    if (!document.body) return;
    var S = summary();
    if (!pill) {
      if (!S.units) return;
      build();
      pill = document.createElement("button");
      pill.type = "button"; pill.className = "gc-pill";
      pill.innerHTML =
        '<span class="ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 12H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><i></i></span>' +
        '<span class="tot"></span><span class="sep"></span>' +
        '<span class="lbl">View draft invoice <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
      pill.addEventListener("click", open);
      document.body.appendChild(pill);
      void pill.offsetWidth;
    }
    pill.querySelector(".ic i").textContent = S.units > 99 ? "99+" : S.units;
    pill.querySelector(".tot").textContent = money(S.total);
    pill.setAttribute("aria-label", "View draft invoice, " + S.units + (S.units === 1 ? " item, " : " items, ") + money(S.total));
    pill.classList.toggle("is-on", S.units > 0);
  }
  function refresh() { badge(); render(); updatePill(); }

  window.glpusaCart = { open: open, close: close };

  // Cart icon opens the drawer; adding to the invoice opens it too.
  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target : null; if (!t) return;
    if (t.closest('a[aria-label="Cart"]') || t.closest('a[href="/volume-pricing#invoice"]')) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      e.preventDefault(); e.stopPropagation(); open(); return;
    }
    if (t.closest("[data-pd-add],[data-radd],.qb-add")) setTimeout(open, 60);
  }, true);

  window.addEventListener("glpusa:cart", refresh);
  window.addEventListener("glpusa:promo", refresh);
  window.addEventListener("storage", function (e) { if (e.key === KEY || e.key === PKEY) refresh(); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(badge, 300); });
  else setTimeout(badge, 300);
  window.addEventListener("load", function () { badge(); setTimeout(updatePill, 200); });
})();
