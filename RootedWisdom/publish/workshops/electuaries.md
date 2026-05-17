---
layout: layouts/base.njk
title: Sweet Medicine — An Introduction to Electuaries
description: A live virtual workshop from The Rooted Wisdom. Learn to make electuaries — one of the oldest herbal preparations in the world. May 27th, 6PM PT.
eventDate: "2026-05-27"
eventDateDisplay: "May 27, 2026"
eventTime: "6:00 PM PT"
eventFormat: Virtual
price: "$20"
priceVip: "$35"
tags:
  - workshop
past: false
pageStyles: |
  :root {
    --parchment:   #f0e6cc;
    --parchment2:  #ecdbb8;
    --parchment3:  #e8d5a8;
    --sand:        #d9c394;
    --bark:        #3b2010;
    --bark-mid:    #5a3218;
    --rust:        #b5601a;
    --rust-light:  #d4813a;
    --blue:        #4a7a9b;
    --blue-light:  #7aaec8;
    --amber:       #c9882a;
    --gold:        #b87c1e;
    --gold-light:  #d4a050;
    --sage:        #7a8a5a;
    --ink:         #2a1608;
    --mid-text:    #5a3a20;
    --soft-text:   #8a6040;
    --ink-deep:    #110d08;
    --ink-mid:     #1c1410;
    --cream:       #f5f0e8;
    --dark-gold:   #b8933e;
    --dark-gold-l: #d4af6a;
  }

  .wc-pools {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .wc-pool {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    mix-blend-mode: multiply;
    opacity: 0.38;
  }

  .workshop-container { max-width: 960px; margin: 0 auto; }
  .workshop-container-narrow { max-width: 620px; margin: 0 auto; }

  /* ── HERO ── */
  .hero {
    position: relative;
    padding: 5rem 2rem 6rem;
    text-align: center;
    overflow: hidden;
  }
  .hero-pool-1 {
    width: 600px; height: 500px;
    background: #7aaec8;
    top: -80px; left: 55%;
    transform: translateX(-50%);
    opacity: 0.22;
  }
  .hero-pool-2 {
    width: 400px; height: 400px;
    background: #c9882a;
    top: 120px; left: 5%;
    opacity: 0.18;
  }
  .hero-pool-3 {
    width: 350px; height: 300px;
    background: #b87c1e;
    top: 200px; right: 2%;
    opacity: 0.12;
  }
  .hero-eyebrow {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--blue);
    opacity: 0.8;
    position: relative;
    z-index: 2;
    margin-bottom: 1.5rem;
    max-width: none;
  }
  .hero h1 {
    font-weight: 300;
    line-height: 0.92;
    color: var(--bark);
    position: relative;
    z-index: 2;
    max-width: none;
    margin-bottom: 0.5rem;
  }
  .hero h1 .line-eyebrow {
    display: block;
    font-size: clamp(1.4rem, 3.5vw, 2.4rem);
    font-weight: 300;
    letter-spacing: 0.05em;
    color: var(--bark);
    font-style: normal;
    font-family: 'Cormorant Garamond', serif;
    margin-bottom: 0.2rem;
  }
  .hero h1 .line-title {
    display: block;
    font-size: clamp(4rem, 11vw, 9rem);
    font-weight: 300;
    font-style: italic;
    color: var(--rust);
    line-height: 0.9;
  }
  .hero-subtitle {
    font-size: clamp(1rem, 2.2vw, 1.2rem);
    font-weight: 300;
    font-style: italic;
    color: var(--mid-text);
    margin-top: 1.5rem;
    position: relative;
    z-index: 2;
    max-width: none;
  }
  .hero-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;
    position: relative;
    z-index: 2;
    flex-wrap: wrap;
  }
  .meta-pill { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
  .meta-pill-label {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--soft-text);
    max-width: none;
  }
  .meta-pill-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--bark);
    max-width: none;
  }
  .meta-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--sand); margin-top: 0.6rem; }

  /* ── TICKER ── */
  .ticker-wrap { overflow: hidden; background: var(--bark); padding: 0.85rem 0; }
  .ticker-track { display: flex; width: max-content; animation: ticker 30s linear infinite; }
  @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .ticker-item {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--parchment);
    opacity: 0.7;
    padding: 0 2.5rem;
    white-space: nowrap;
    max-width: none;
  }
  .ticker-item .dot { margin: 0 0.5rem; opacity: 0.5; }

  /* ── PRICING ── */
  .pricing-section {
    background: var(--parchment2);
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem;
  }
  .pricing-pool-1 {
    width: 500px; height: 400px;
    background: #b5601a;
    bottom: -100px; right: -80px;
    opacity: 0.14;
  }
  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 3.5rem;
  }
  .pricing-card {
    background: var(--parchment);
    border: 1px solid rgba(59,32,16,0.12);
    padding: 2.75rem 2.5rem;
    position: relative;
    transition: box-shadow 0.3s, transform 0.3s;
  }
  .pricing-card:hover { box-shadow: 0 8px 32px rgba(59,32,16,0.1); transform: translateY(-3px); }
  .pricing-card.is-vip {
    border-color: rgba(184,124,30,0.4);
    background: linear-gradient(135deg, var(--parchment) 60%, rgba(201,136,42,0.08) 100%);
  }
  .pricing-tag {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--rust);
    margin-bottom: 0.75rem;
    max-width: none;
  }
  .pricing-card.is-vip .pricing-tag { color: var(--amber); }
  .pricing-tier {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--bark);
    margin-bottom: 0.25rem;
    max-width: none;
  }
  .pricing-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.5rem;
    font-weight: 300;
    color: var(--bark);
    line-height: 1;
    margin-bottom: 1.5rem;
    max-width: none;
  }
  .pricing-price sup { font-size: 1.5rem; vertical-align: super; font-weight: 400; }
  .pricing-includes {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--soft-text);
    margin-bottom: 1rem;
    max-width: none;
  }
  .pricing-features { list-style: none; margin-bottom: 2.25rem; }
  .pricing-features li {
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--mid-text);
    padding: 0.55rem 0;
    border-bottom: 1px solid rgba(59,32,16,0.07);
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
  }
  .pricing-features li::before {
    content: '✦';
    font-size: 0.6rem;
    color: var(--rust);
    opacity: 0.6;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
  .pricing-card.is-vip .pricing-features li::before { color: var(--amber); }

  .ws-btn {
    display: block;
    font-family: 'Jost', sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    transition: background 0.25s, transform 0.2s;
    width: 100%;
    text-align: center;
    background: var(--rust);
    color: var(--parchment);
  }
  .ws-btn:hover { background: var(--rust-light); transform: translateY(-2px); color: var(--parchment); }
  .ws-btn.is-vip-btn { background: var(--amber); color: var(--bark); }
  .ws-btn.is-vip-btn:hover { background: var(--gold-light); color: var(--bark); }

  /* ── SHARED SECTION LABELS ── */
  .ws-section-label {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--rust);
    opacity: 0.75;
    text-align: center;
    margin-bottom: 0.85rem;
    max-width: none;
  }
  .ws-section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 5vw, 3.4rem);
    font-weight: 300;
    line-height: 1.15;
    text-align: center;
    color: var(--bark);
    margin-bottom: 1.25rem;
    max-width: none;
  }
  .ws-section-title em { font-style: italic; color: var(--rust); }
  .ws-body-text {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.85;
    color: var(--mid-text);
    text-align: center;
    max-width: none;
  }
  .ws-divider {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    max-width: 280px;
    margin: 0 auto 3rem;
    opacity: 0.3;
  }
  .ws-divider span { flex: 1; height: 1px; background: var(--bark); }
  .ws-divider-mark { font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--bark); }

  /* ── INTRO BRIDGE ── */
  .body-bridge {
    padding: 5rem 2rem;
    background: var(--parchment);
    position: relative;
    overflow: hidden;
  }

  /* ── LINEAGE ── */
  .lineage-section {
    background: var(--parchment2);
    padding: 5rem 2rem;
    position: relative;
    overflow: hidden;
  }
  .lineage-pool-1 {
    width: 450px; height: 350px;
    background: #7aaec8;
    top: -60px; right: -60px;
    opacity: 0.14;
  }
  .lineage-list {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .lineage-item {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    align-items: start;
    padding: 1.75rem 0;
    border-bottom: 1px solid rgba(59,32,16,0.08);
    gap: 1.5rem;
  }
  .lineage-item:first-child { border-top: 1px solid rgba(59,32,16,0.08); }
  .lineage-dot-mark {
    width: 5px; height: 5px;
    background: var(--gold);
    transform: rotate(45deg);
    margin-top: 0.55rem;
    flex-shrink: 0;
  }
  .lineage-text { font-size: 1rem; font-weight: 300; line-height: 1.7; color: var(--mid-text); max-width: none; }
  .lineage-text strong {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--bark);
    display: block;
    margin-bottom: 0.2rem;
  }

  /* ── CURRICULUM ── */
  .curriculum-section {
    background: var(--parchment);
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem;
  }
  .curriculum-pool-1 {
    width: 450px; height: 400px;
    background: #7a8a5a;
    top: -50px; left: -80px;
    opacity: 0.12;
  }
  .curriculum-pool-2 {
    width: 350px; height: 350px;
    background: #4a7a9b;
    bottom: 0; right: -60px;
    opacity: 0.10;
  }
  .curriculum-list { margin-top: 3.5rem; display: flex; flex-direction: column; gap: 0; }
  .curriculum-item {
    display: grid;
    grid-template-columns: 4rem 1fr;
    align-items: start;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(59,32,16,0.08);
    gap: 1.5rem;
  }
  .curriculum-item:first-child { border-top: 1px solid rgba(59,32,16,0.08); }
  .curriculum-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 300;
    color: var(--rust);
    opacity: 0.28;
    line-height: 1;
    padding-top: 0.1rem;
    max-width: none;
  }
  .curriculum-text {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.7;
    color: var(--mid-text);
    padding-top: 0.35rem;
    max-width: none;
  }

  /* ── VIP ── */
  .vip-section {
    background: var(--bark);
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 5rem 2rem;
  }
  .vip-pool-1 {
    width: 500px; height: 400px;
    background: #c9882a;
    top: -80px; left: 30%;
    transform: translateX(-50%);
    opacity: 0.18;
    filter: blur(90px);
    position: absolute;
    border-radius: 50%;
  }
  .vip-pool-2 {
    width: 350px; height: 300px;
    background: #7a8a5a;
    bottom: -50px; right: 5%;
    opacity: 0.14;
    filter: blur(70px);
    position: absolute;
    border-radius: 50%;
  }
  .vip-label {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--amber);
    opacity: 0.75;
    margin-bottom: 0.85rem;
    position: relative;
    z-index: 2;
    max-width: none;
  }
  .vip-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    font-weight: 300;
    line-height: 1.15;
    color: var(--parchment);
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;
    max-width: none;
  }
  .vip-title em { font-style: italic; color: var(--gold-light); }
  .vip-body {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.85;
    color: rgba(240,230,204,0.68);
    max-width: 560px;
    margin: 0 auto 3rem;
    position: relative;
    z-index: 2;
  }
  .vip-perks {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1.5rem;
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 2;
  }
  .vip-perk { border: 1px solid rgba(201,136,42,0.18); padding: 1.75rem 1.5rem; text-align: left; }
  .vip-perk-icon { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--gold-light); margin-bottom: 0.75rem; max-width: none; }
  .vip-perk-title { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 400; color: var(--parchment); margin-bottom: 0.5rem; max-width: none; }
  .vip-perk-body { font-size: 0.85rem; font-weight: 300; line-height: 1.65; color: rgba(240,230,204,0.5); max-width: none; }
  .btn-vip {
    display: inline-block;
    background: var(--amber);
    color: var(--bark);
    font-family: 'Jost', sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 1.1rem 3rem;
    text-decoration: none;
    border-radius: 2px;
    transition: background 0.25s, transform 0.2s;
    position: relative;
    z-index: 2;
  }
  .btn-vip:hover { background: var(--gold-light); transform: translateY(-2px); color: var(--bark); }
  .vip-fine {
    margin-top: 1.5rem;
    font-size: 0.78rem;
    font-weight: 300;
    color: rgba(240,230,204,0.3);
    letter-spacing: 0.08em;
    position: relative;
    z-index: 2;
    max-width: none;
  }

  /* ── HANDOUT BAR ── */
  .handout-bar {
    background: var(--parchment2);
    border-top: 1px solid rgba(59,32,16,0.1);
    padding: 3.5rem 2rem;
  }
  .handout-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    max-width: 860px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .handout-icon {
    flex-shrink: 0;
    width: 56px; height: 56px;
    background: rgba(59,32,16,0.06);
    border: 1px solid rgba(59,32,16,0.12);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .handout-icon svg { width: 24px; height: 24px; opacity: 0.45; }
  .handout-label {
    font-size: 0.62rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--blue);
    margin-bottom: 0.4rem;
    max-width: none;
  }
  .handout-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--bark);
    margin-bottom: 0.5rem;
    max-width: none;
  }
  .handout-body { font-size: 0.88rem; font-weight: 300; color: var(--mid-text); line-height: 1.75; max-width: none; }

  /* ── NEWSLETTER ── */
  .newsletter-bar {
    background: var(--parchment2);
    border-top: 1px solid rgba(59,32,16,0.1);
    padding: 3rem 2rem;
  }
  .newsletter-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: 860px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .newsletter-copy h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--bark);
    margin-bottom: 0.3rem;
    max-width: none;
  }
  .newsletter-copy p { font-size: 0.88rem; font-weight: 300; color: var(--soft-text); max-width: none; }
  .newsletter-form { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .newsletter-form input {
    background: var(--parchment);
    border: 1px solid rgba(59,32,16,0.2);
    font-family: 'Jost', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--ink);
    padding: 0.8rem 1rem;
    outline: none;
    border-radius: 2px;
    min-width: 180px;
    transition: border-color 0.2s;
  }
  .newsletter-form input:focus { border-color: var(--rust); }
  .newsletter-form input::placeholder { color: var(--soft-text); opacity: 0.5; }
  .btn-nl {
    display: inline-block;
    background: var(--rust);
    color: var(--parchment);
    font-family: 'Jost', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.8rem 1.5rem;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-nl:hover { background: var(--rust-light); }

  @media (max-width: 768px) {
    .pricing-grid { grid-template-columns: 1fr; }
    .vip-perks { grid-template-columns: 1fr; }
    .curriculum-item { grid-template-columns: 3rem 1fr; }
    .newsletter-inner { flex-direction: column; align-items: flex-start; }
    .handout-inner { flex-direction: column; }
  }
---

<header class="hero">
  <div class="wc-pools">
    <div class="wc-pool hero-pool-1"></div>
    <div class="wc-pool hero-pool-2"></div>
    <div class="wc-pool hero-pool-3"></div>
  </div>
  <p class="hero-eyebrow">A Rooted Wisdom Workshop</p>
  <h1>
    <span class="line-eyebrow">Sweet</span>
    <em class="line-title">Medicine</em>
  </h1>
  <p class="hero-subtitle">An Introduction to Electuaries</p>
  <div class="hero-meta">
    <div class="meta-pill">
      <span class="meta-pill-label">Format</span>
      <span class="meta-pill-value">Virtual</span>
    </div>
    <div class="meta-dot"></div>
    <div class="meta-pill">
      <span class="meta-pill-label">Date</span>
      <span class="meta-pill-value">May 27th</span>
    </div>
    <div class="meta-dot"></div>
    <div class="meta-pill">
      <span class="meta-pill-label">Time</span>
      <span class="meta-pill-value">6:00 PM PT</span>
    </div>
    <div class="meta-dot"></div>
    <div class="meta-pill">
      <span class="meta-pill-label">Level</span>
      <span class="meta-pill-value">All Welcome</span>
    </div>
  </div>
</header>

<div class="ticker-wrap" aria-hidden="true">
  <div class="ticker-track">
    <span class="ticker-item">Electuaries<span class="dot">✦</span></span>
    <span class="ticker-item">Honey Medicine<span class="dot">✦</span></span>
    <span class="ticker-item">Herbal Pills<span class="dot">✦</span></span>
    <span class="ticker-item">Sweet Bases<span class="dot">✦</span></span>
    <span class="ticker-item">Ancestral Practice<span class="dot">✦</span></span>
    <span class="ticker-item">Plant Medicine<span class="dot">✦</span></span>
    <span class="ticker-item">Diasporic Healing<span class="dot">✦</span></span>
    <span class="ticker-item">Medicine Making<span class="dot">✦</span></span>
    <span class="ticker-item">Materia Medica<span class="dot">✦</span></span>
    <span class="ticker-item">Herbal Foundations<span class="dot">✦</span></span>
    <span class="ticker-item">Electuaries<span class="dot">✦</span></span>
    <span class="ticker-item">Honey Medicine<span class="dot">✦</span></span>
    <span class="ticker-item">Herbal Pills<span class="dot">✦</span></span>
    <span class="ticker-item">Sweet Bases<span class="dot">✦</span></span>
    <span class="ticker-item">Ancestral Practice<span class="dot">✦</span></span>
    <span class="ticker-item">Plant Medicine<span class="dot">✦</span></span>
    <span class="ticker-item">Diasporic Healing<span class="dot">✦</span></span>
    <span class="ticker-item">Medicine Making<span class="dot">✦</span></span>
    <span class="ticker-item">Materia Medica<span class="dot">✦</span></span>
    <span class="ticker-item">Herbal Foundations<span class="dot">✦</span></span>
  </div>
</div>

<section class="pricing-section">
  <div class="wc-pools">
    <div class="wc-pool pricing-pool-1"></div>
  </div>
  <div class="workshop-container">
    <p class="ws-section-label">Choose Your Experience</p>
    <h2 class="ws-section-title">Join the <em>Workshop</em></h2>
    <div class="pricing-grid">
      <div class="pricing-card">
        <p class="pricing-tag">General Admission</p>
        <p class="pricing-tier">Workshop Access</p>
        <p class="pricing-price"><sup>$</sup>20</p>
        <p class="pricing-includes">Includes</p>
        <ul class="pricing-features">
          <li>Live virtual workshop — full 1h 45m session</li>
          <li>Pre-workshop handout with all recipes and supply list</li>
          <li>Q&amp;A with Dara — 45 minutes</li>
          <li>Workshop recording — available for 30 days</li>
        </ul>
        <a href="https://buy.stripe.com/cNi6oHctZ63ugw9arb0480f" class="ws-btn">Join Workshop — $20</a>
      </div>
      <div class="pricing-card is-vip">
        <p class="pricing-tag">VIP</p>
        <p class="pricing-tier">Workshop + Community</p>
        <p class="pricing-price"><sup>$</sup>35</p>
        <p class="pricing-includes">Everything in General, plus</p>
        <ul class="pricing-features">
          <li>30 days in the Herb-Curious Community</li>
          <li>Access to past workshop recordings</li>
          <li>Materia Medica library &amp; resources</li>
          <li>Free workshops included with membership</li>
        </ul>
        <a href="#stripe-vip" class="ws-btn is-vip-btn">Join as VIP — $35</a>
      </div>
    </div>
  </div>
</section>

<div class="body-bridge">
  <div class="workshop-container-narrow" style="text-align: center;">
    <div class="ws-divider">
      <span></span>
      <span class="ws-divider-mark">✦</span>
      <span></span>
    </div>
    <h2 class="ws-section-title" style="font-size: clamp(1.6rem, 4vw, 2.4rem); font-style: italic; margin-bottom: 1.5rem;">Some of the oldest medicine in the world<br>was made with just two things.</h2>
    <p class="ws-body-text">Powdered herbs. Something sweet. That is the whole formula — and it has been carried through Greek medicine, Ayurvedic tradition, Persian and Arab pharmacology, and the hands of West African and diasporic healers for thousands of years.</p>
    <p class="ws-body-text" style="margin-top: 1.25rem;">An electuary asks very little of you. No special equipment. No distillation setup. Just herbs, honey, and your hands. What you make is real medicine.</p>
  </div>
</div>

<section class="lineage-section">
  <div class="wc-pools">
    <div class="wc-pool lineage-pool-1"></div>
  </div>
  <div class="workshop-container">
    <p class="ws-section-label">A Form Held Across Traditions</p>
    <h2 class="ws-section-title">Medicine that has<br><em>always existed.</em></h2>
    <div class="lineage-list">
      <div class="lineage-item">
        <div class="lineage-dot-mark"></div>
        <p class="lineage-text"><strong>Greek &amp; Persian Medicine</strong>Among the oldest written records of herbal preparation — described and refined across centuries of practice.</p>
      </div>
      <div class="lineage-item">
        <div class="lineage-dot-mark"></div>
        <p class="lineage-text"><strong>Ayurvedic Tradition</strong>The <em>avaleha</em> — herbal honey jams like Chyawanprash — have been prepared continuously for over two thousand years.</p>
      </div>
      <div class="lineage-item">
        <div class="lineage-dot-mark"></div>
        <p class="lineage-text"><strong>West African &amp; Diasporic Healing</strong>Sweetened herbal compounds carried through midwives, root workers, and kitchen healers who knew that nourishment and medicine were never separate.</p>
      </div>
      <div class="lineage-item">
        <div class="lineage-dot-mark"></div>
        <p class="lineage-text"><strong>Caribbean Tradition</strong>Honey and bush medicine woven into the daily practice of keeping a household well.</p>
      </div>
    </div>
  </div>
</section>

<section class="curriculum-section">
  <div class="wc-pools">
    <div class="wc-pool curriculum-pool-1"></div>
    <div class="wc-pool curriculum-pool-2"></div>
  </div>
  <div class="workshop-container">
    <p class="ws-section-label">What We'll Cover</p>
    <h2 class="ws-section-title">One hour and forty-five minutes —<br><em>grounded foundations.</em></h2>
    <p class="ws-body-text">Expect real teaching, practical knowledge, and time to ask questions.</p>
    <div class="curriculum-list">
      <div class="curriculum-item">
        <span class="curriculum-num">01</span>
        <p class="curriculum-text">History and lineage — where electuaries come from across Greek medicine, Islamic golden age pharmacology, Ayurveda, and the African diaspora</p>
      </div>
      <div class="curriculum-item">
        <span class="curriculum-num">02</span>
        <p class="curriculum-text">Choosing your base — raw honey, maple syrup, blackstrap molasses, date paste, and nut butter, and how each carries medicine differently</p>
      </div>
      <div class="curriculum-item">
        <span class="curriculum-num">03</span>
        <p class="curriculum-text">Blending and method — powdered herbs, ratios, consistency, and how to adjust and troubleshoot as you go</p>
      </div>
      <div class="curriculum-item">
        <span class="curriculum-num">04</span>
        <p class="curriculum-text">Making herbal pills — how to shape your paste into hand-rolled pills, coating options, sizing, setting, and storage</p>
      </div>
      <div class="curriculum-item">
        <span class="curriculum-num">05</span>
        <p class="curriculum-text">Three starter formulas — Calm &amp; Ground, Breath &amp; Open, and Deep Nourish — with specific herbs, bases, and intentions</p>
      </div>
      <div class="curriculum-item">
        <span class="curriculum-num">06</span>
        <p class="curriculum-text">Working intentionally — how to bring presence and purpose to the making process</p>
      </div>
    </div>
  </div>
</section>

<div class="handout-bar">
  <div class="handout-inner">
    <div class="handout-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b2010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    </div>
    <div>
      <p class="handout-label">Included with Every Ticket</p>
      <p class="handout-heading">Pre-Workshop Handout</p>
      <p class="handout-body">All registered participants receive a pre-workshop handout with the supply list, all three formulas, and a quick-reference guide to the paste and pill methods. Gather your materials beforehand and follow the demo live — or simply watch and learn. Both are complete.</p>
    </div>
  </div>
</div>

<div class="newsletter-bar">
  <div class="newsletter-inner">
    <div class="newsletter-copy">
      <h3>Stay Up-to-date</h3>
      <p>Get notified when new workshops are announced.</p>
    </div>
    <form class="newsletter-form" name="workshop-newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="workshop-newsletter">
      <input type="text" name="bot-field" style="display:none;">
      <input type="text" name="name" placeholder="Name" autocomplete="name">
      <input type="email" name="email" placeholder="Email" autocomplete="email" required>
      <button type="submit" class="btn-nl">Join</button>
    </form>
  </div>
</div>

<form name="workshop-newsletter" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name">
  <input type="email" name="email">
  <input name="bot-field">
</form>
