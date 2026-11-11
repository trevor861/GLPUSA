#!/usr/bin/env python3
"""Regenerate the product catalog inside cart.js from the cards on volume-pricing.html.

Run from the repo root after products, prices or images change:
    python3 scripts/cart-catalog.py
"""
import html
import json
import re

src = open("volume-pricing.html", encoding="utf-8").read()
catalog = {}
for card in re.findall(r'<article class="bk-card"[^>]*>.*?</article>', src, re.S):
    slug = re.search(r'data-slug="([^"]+)"', card).group(1)
    name = html.unescape(re.search(r"<h3>(.*?)</h3>", card, re.S).group(1)).strip()
    img = re.search(r'data-img="([^"]+)"', card).group(1)
    tint = re.search(r'linear-gradient\(160deg,(#[0-9a-fA-F]{6})', card)
    sizes = []
    for b in re.findall(r"<button[^>]*data-size=[^>]*>", card):
        label = html.unescape(re.search(r'data-size="([^"]*)"', b).group(1))
        price = float(re.search(r'data-sprice="([^"]*)"', b).group(1))
        simg = re.search(r'data-simg="([^"]*)"', b)
        sizes.append({"l": label, "p": price, "i": simg.group(1) if simg else img})
    catalog[slug] = {"n": name, "i": img, "t": tint.group(1) if tint else "#e9edf2", "s": sizes}

js = open("cart.js", encoding="utf-8").read()
start, end = "/*CATALOG*/", "/*END CATALOG*/"
a, b = js.index(start) + len(start), js.index(end)
js = js[:a] + json.dumps(catalog, separators=(",", ":"), ensure_ascii=False) + js[b:]
open("cart.js", "w", encoding="utf-8").write(js)
print("cart.js catalog:", len(catalog), "products")
