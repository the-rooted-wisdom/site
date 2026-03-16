---
layout: layouts/base.njk
title: Herb-Curious Community
description: A place for the plant-curious, potion-dabblers, and everyday magic makers. Explore, root, and remember—together.
pageStyles: |
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --parchment:  #f0e6cc;
    --parchment2: #ecdbb8;
    --parchment3: #e8d5a8;
    --bark:       #3b2010;
    --bark-mid:   #5a3218;
    --rust:       #b5601a;
    --rust-light: #d4813a;
    --blue-wc:    #5b8aaa;
    --blue-wc2:   #7aaec8;
    --blue-wc3:   #4a7a9b;
    --amber-wc:   #c9882a;
    --gold:       #b87c1e;
    --gold-light: #d4a050;
    --sage:       #7a8a5a;
    --ink-text:   #2a1608;
    --mid-text:   #5a3a20;
    --soft-text:  #8a6040;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--parchment);
    color: var(--ink-text);
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed; inset: 0;
    pointer-events: none; z-index: 1000;
    opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    background-size: 300px 300px;
  }

  /* ── WATERCOLOR POOLS ── */
  .wc-pools { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .wc-pool { position: absolute; border-radius: 50%; filter: blur(60px); }

  /* ── BUTTONS ── */
  .btn-primary {
    font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
    color: #fff; background: var(--rust);
    padding: 0.9rem 2.4rem; border-radius: 3px; text-decoration: none; display: inline-block;
    transition: background 0.25s, transform 0.2s, box-shadow 0.2s;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.15), 0 3px 12px rgba(181,96,26,0.3);
  }
  .btn-primary:hover { background: var(--rust-light); transform: translateY(-1px); }

  .btn-ghost {
    font-size: 0.72rem; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--blue-wc3); background: transparent; display: inline-block;
    padding: 0.9rem 2.4rem; border-radius: 3px; border: 1.5px solid var(--blue-wc2);
    text-decoration: none; transition: all 0.25s;
  }
  .btn-ghost:hover { background: var(--blue-wc3); color: #fff; border-color: var(--blue-wc3); transform: translateY(-1px); }

  .btn-outline-light {
    font-size: 0.72rem; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--parchment); background: transparent; display: inline-block;
    padding: 0.9rem 2.4rem; border-radius: 3px; border: 1.5px solid rgba(240,230,204,0.35);
    text-decoration: none; transition: all 0.25s;
  }
  .btn-outline-light:hover { background: rgba(240,230,204,0.1); border-color: rgba(240,230,204,0.6); }

  /* ── ORNAMENT ── */
  .sep { height: 1px; background: linear-gradient(90deg, transparent, rgba(139,90,30,0.18), transparent); }

  /* ── SHARED SECTION LABELS / TITLES ── */
  .section-label {
    font-size: 0.68rem; letter-spacing: 0.32em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1rem;
    max-width: none;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 400;
    color: var(--bark); line-height: 1.15; margin-bottom: 1rem;
    max-width: none;
  }
  .section-title em { font-style: italic; color: var(--rust); }
  .section-body {
    font-size: 0.9rem; font-weight: 300; line-height: 1.8;
    color: var(--mid-text);
    max-width: none;
  }

  /* ── SCROLL REVEAL ── */
  .reveal { opacity: 1; transform: translateY(0); transition: opacity 0.7s ease, transform 0.7s ease; }
  .js-reveal-ready .reveal { opacity: 0; transform: translateY(20px); }
  .js-reveal-ready .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── HERO ── */
  .hc-hero {
    position: relative;
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    padding: 9rem 3rem 6rem;
    overflow: hidden;
    background: var(--parchment);
  }
  .hc-hero-pool-1 { width: 700px; height: 500px; background: #7aaec8; top: -15%; left: -10%; opacity: 0.22; }
  .hc-hero-pool-2 { width: 500px; height: 400px; background: #5b8aaa; top: 5%; right: -8%; opacity: 0.16; }
  .hc-hero-pool-3 { width: 600px; height: 350px; background: #c9882a; bottom: 0; left: -5%; opacity: 0.18; }
  .hc-hero-pool-4 { width: 350px; height: 300px; background: #b87c1e; bottom: 10%; right: 5%; opacity: 0.12; }
  .hc-hero-content { position: relative; z-index: 2; max-width: 760px; animation: hc-fade-rise 1.2s ease both; }
  @keyframes hc-fade-rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  .hc-hero-eyebrow {
    font-size: 0.68rem; font-weight: 400; letter-spacing: 0.38em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1.8rem;
    animation: hc-fade-rise 1.2s 0.1s ease both;
    max-width: none;
  }
  .hc-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.2rem, 8vw, 6.5rem); font-weight: 300; line-height: 1.0;
    color: var(--bark); margin-bottom: 0.2em;
    animation: hc-fade-rise 1.2s 0.2s ease both;
    max-width: none;
  }
  .hc-hero-title em { font-style: italic; color: var(--rust); }
  .hc-hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2vw, 1.5rem); font-weight: 300; font-style: italic;
    color: var(--mid-text); margin-bottom: 1.8rem;
    animation: hc-fade-rise 1.2s 0.3s ease both;
    max-width: none;
  }
  .hc-hero-desc {
    font-size: 0.95rem; font-weight: 300; line-height: 1.85;
    color: var(--mid-text); max-width: 500px; margin-bottom: 2.8rem;
    animation: hc-fade-rise 1.2s 0.4s ease both;
  }
  .hc-hero-ctas { display: flex; gap: 1.2rem; flex-wrap: wrap; animation: hc-fade-rise 1.2s 0.5s ease both; }
  .hc-hero-deco {
    position: absolute; top: 7rem; right: 3rem;
    opacity: 0.08; pointer-events: none; z-index: 1;
  }
  .hc-scroll-hint {
    position: absolute; bottom: 2.5rem; right: 3rem; z-index: 2;
    display: flex; align-items: center; gap: 0.6rem;
    font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--soft-text); opacity: 0.55;
    max-width: none;
  }
  .hc-scroll-hint-line { width: 36px; height: 1px; background: var(--soft-text); }

  /* ── STATEMENT ── */
  .hc-statement {
    padding: 7rem 2rem; background: var(--parchment2);
    position: relative; overflow: hidden;
  }
  .hc-statement-pool-1 { width: 500px; height: 350px; background: #7aaec8; top: -20%; right: -5%; opacity: 0.18; }
  .hc-statement-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -20%; left: -5%; opacity: 0.15; }
  .hc-statement-inner { max-width: 800px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
  .hc-statement-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 3vw, 2.3rem); font-weight: 300; line-height: 1.65;
    color: var(--bark);
    max-width: none;
  }
  .hc-statement-text em { font-style: italic; color: var(--rust); }

  /* ── INSIDE ── */
  .hc-inside {
    padding: 7rem 2rem; background: var(--parchment);
    position: relative; overflow: hidden;
  }
  .hc-inside-pool-1 { width: 600px; height: 300px; background: #5b8aaa; top: 0; left: 50%; transform: translateX(-50%); opacity: 0.09; }
  .hc-inside-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; position: relative; z-index: 1; }
  .hc-inside-grid {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem; position: relative; z-index: 1;
  }
  .hc-card {
    background: rgba(240,230,204,0.6);
    border: 1px solid rgba(139,90,30,0.13);
    padding: 2.8rem 2.4rem 2.5rem; border-radius: 2px;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  }
  .hc-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--rust); transform: scaleX(0);
    transition: transform 0.4s ease; transform-origin: left;
  }
  .hc-card:hover::before { transform: scaleX(1); }
  .hc-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(59,32,16,0.09); background: rgba(255,250,240,0.9); }
  .hc-card-icon { margin-bottom: 1.4rem; color: var(--rust); opacity: 0.7; }
  .hc-card-icon svg { display: block; }
  .hc-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.55rem; font-weight: 400; color: var(--bark);
    margin-bottom: 0.7rem; line-height: 1.2;
    max-width: none;
  }
  .hc-card-body { font-size: 0.88rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); max-width: none; }

  /* ── PRICING ── */
  .hc-pricing {
    padding: 7rem 2rem; background: var(--parchment3);
    position: relative; overflow: hidden;
  }
  .hc-pricing-pool-1 { width: 500px; height: 400px; background: #7aaec8; top: -10%; right: -8%; opacity: 0.2; }
  .hc-pricing-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -15%; left: -5%; opacity: 0.14; }
  .hc-pricing-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; position: relative; z-index: 1; }
  .hc-pricing-grid {
    max-width: 900px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; position: relative; z-index: 1;
  }
  .hc-pricing-card {
    background: rgba(248,240,224,0.7);
    border: 1px solid rgba(139,90,30,0.15);
    padding: 2.8rem 2.2rem 2.5rem; border-radius: 2px;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .hc-pricing-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(59,32,16,0.1); }
  .hc-pricing-card.featured { background: rgba(91,138,170,0.08); border-color: rgba(91,138,170,0.35); }
  .hc-pricing-badge {
    position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
    background: var(--blue-wc3); color: #fff;
    font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
    padding: 0.3rem 1rem; border-radius: 0 0 3px 3px; white-space: nowrap;
    max-width: none;
  }
  .hc-pricing-label {
    font-size: 0.65rem; letter-spacing: 0.28em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1.2rem;
    max-width: none;
  }
  .hc-pricing-amount {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.5rem; font-weight: 300; color: var(--bark);
    line-height: 1; margin-bottom: 0.15rem;
    max-width: none;
  }
  .hc-pricing-amount sup { font-size: 1.3rem; vertical-align: super; }
  .hc-pricing-period { font-size: 0.78rem; font-weight: 300; color: var(--soft-text); margin-bottom: 1.4rem; max-width: none; }
  .hc-pricing-desc { font-size: 0.86rem; font-weight: 300; color: var(--mid-text); line-height: 1.75; margin-bottom: 2rem; max-width: none; }
  .hc-pricing-cta {
    display: block; text-align: center;
    font-size: 0.7rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase;
    padding: 0.8rem 1rem; border-radius: 3px; text-decoration: none; transition: all 0.25s;
  }
  .hc-cta-ghost { border: 1.5px solid var(--bark); color: var(--bark); }
  .hc-cta-ghost:hover { background: var(--bark); color: var(--parchment); }
  .hc-cta-fill { background: var(--blue-wc3); color: #fff; border: 1.5px solid var(--blue-wc3); box-shadow: 0 3px 12px rgba(74,122,155,0.3); }
  .hc-cta-fill:hover { background: var(--blue-wc2); border-color: var(--blue-wc2); }

  /* ── GIFT ── */
  .hc-gift {
    background: var(--bark); padding: 7rem 3rem;
    position: relative; overflow: hidden;
  }
  .hc-gift-pool-1 { width: 600px; height: 500px; background: #b5601a; top: -20%; left: -10%; opacity: 0.2; }
  .hc-gift-pool-2 { width: 400px; height: 350px; background: #5b8aaa; bottom: -20%; right: -5%; opacity: 0.18; }
  .hc-gift-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 6rem; align-items: center; position: relative; z-index: 1;
  }
  .hc-gift .section-label { color: rgba(240,230,204,0.4); }
  .hc-gift .section-title { color: var(--parchment); }
  .hc-gift .section-title em { color: var(--gold-light); }
  .hc-gift-body { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: rgba(240,230,204,0.6); margin-bottom: 2rem; max-width: none; }
  .hc-gift-visual { display: flex; justify-content: center; align-items: center; }
  .hc-gift-ring {
    width: 280px; height: 280px; border-radius: 50%;
    border: 1px solid rgba(240,230,204,0.12);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    text-align: center; padding: 2.5rem; position: relative;
  }
  .hc-gift-ring::before {
    content: ''; position: absolute; inset: 20px; border-radius: 50%;
    border: 1px solid rgba(240,230,204,0.06);
  }
  .hc-gift-ring-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem; font-weight: 300; font-style: italic;
    color: rgba(240,230,204,0.75); line-height: 1.5;
    max-width: none;
  }

  /* ── INVITE ── */
  .hc-invite {
    padding: 8rem 2rem; background: var(--parchment2);
    text-align: center; position: relative; overflow: hidden;
  }
  .hc-invite-pool-1 { width: 600px; height: 350px; background: #7aaec8; top: -20%; left: 50%; transform: translateX(-50%); opacity: 0.16; }
  .hc-invite-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -20%; right: -5%; opacity: 0.12; }
  .hc-invite-inner { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
  .hc-invite-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 2.8rem;
    max-width: none;
  }
  .hc-invite-ctas { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .hc-hero { padding: 8rem 1.5rem 5rem; }
    .hc-inside-grid { grid-template-columns: 1fr; }
    .hc-pricing-grid { grid-template-columns: 1fr; }
    .hc-gift-inner { grid-template-columns: 1fr; gap: 3rem; }
    .hc-gift-visual { display: none; }
    .hc-gift { padding: 5rem 1.5rem; }
  }
---

<!-- HERO -->
<section class="hc-hero">
<div class="wc-pools">
<div class="wc-pool hc-hero-pool-1"></div>
<div class="wc-pool hc-hero-pool-2"></div>
<div class="wc-pool hc-hero-pool-3"></div>
<div class="wc-pool hc-hero-pool-4"></div>
</div>
<svg class="hc-hero-deco" width="200" height="260" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 10 C100 10 78 45 100 75 C122 45 100 10 100 10Z" stroke="#3b2010" stroke-width="1.5" fill="none"/>
<path d="M100 75 C100 75 58 88 44 125 C74 112 100 75 100 75Z" stroke="#3b2010" stroke-width="1.5" fill="none"/>
<path d="M100 75 C100 75 142 88 156 125 C126 112 100 75 100 75Z" stroke="#3b2010" stroke-width="1.5" fill="none"/>
<path d="M100 75 L100 250" stroke="#3b2010" stroke-width="1.5"/>
<path d="M100 130 C100 130 72 142 66 172" stroke="#3b2010" stroke-width="1"/>
<path d="M100 150 C100 150 128 162 134 192" stroke="#3b2010" stroke-width="1"/>
<path d="M100 185 C100 185 80 194 76 215" stroke="#3b2010" stroke-width="0.8"/>
<circle cx="100" cy="75" r="4" fill="#3b2010"/>
<circle cx="100" cy="130" r="2.5" fill="#3b2010" opacity="0.5"/>
<circle cx="100" cy="185" r="2" fill="#3b2010" opacity="0.35"/>
</svg>
<div class="hc-hero-content">
<p class="hc-hero-eyebrow">Herb-Curious Community</p>
<h1 class="hc-hero-title">A place to explore,<br /><em>root,</em> and remember.</h1>
<p class="hc-hero-subtitle">For the plant-curious, potion-dabblers, and everyday magic makers.</p>
<p class="hc-hero-desc">Here, herbalists, seekers, and soul-centered folks gather to remember, reclaim, and root into ancestral and earth-based ways of knowing—through food, beauty, spirit work, and seasonal rhythms.</p>
<div class="hc-hero-ctas">
<a href="#join" class="btn-primary">Join the Community</a>
<a href="#lifetime" class="btn-ghost">Get Lifetime Access</a>
</div>
</div>
<div class="hc-scroll-hint">
<div class="hc-scroll-hint-line"></div>
<span>Explore Below</span>
</div>
</section>

<div class="sep"></div>

<!-- STATEMENT -->
<section class="hc-statement">
<div class="wc-pools">
<div class="wc-pool hc-statement-pool-1"></div>
<div class="wc-pool hc-statement-pool-2"></div>
</div>
<div class="hc-statement-inner reveal">
<p class="section-label" style="text-align:center; margin-bottom:2rem;">What This Is</p>
<p class="hc-statement-text">Herb-Curious is more than a membership—it's your <em>plant playground.</em><br />Simple, joyful ways to walk with herbs in daily life.<br />We explore together. Learn together. Play together.</p>
</div>
</section>

<div class="sep"></div>

<!-- WHAT'S INSIDE -->
<section class="hc-inside" id="inside">
<div class="wc-pools">
<div class="wc-pool hc-inside-pool-1"></div>
</div>
<div class="hc-inside-header reveal">
<p class="section-label">What You'll Find Inside</p>
<h2 class="section-title">Four pillars of rooted practice.</h2>
<p class="section-body">Access to a community that moves with the seasons, honors lineage, and keeps learning joyful.</p>
</div>
<div class="hc-inside-grid">
<div class="hc-card reveal">
<div class="hc-card-icon">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 4h22v24H5z"/><path d="M9 9h14M9 13.5h14M9 18h9"/>
<path d="M19 22l3 3 5-5" stroke-width="1.5"/>
</svg>
</div>
<h3 class="hc-card-title">A Living Library</h3>
<p class="hc-card-body">Recorded workshops, downloadable zines, herbal recipes, seasonal planners, and exclusive content you won't find anywhere else—growing with every season.</p>
</div>
<div class="hc-card reveal">
<div class="hc-card-icon">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 7h22v16H5z"/><path d="M9 12h14M9 16h9"/>
<circle cx="24" cy="24" r="5"/>
<path d="M22 24h4M24 22v4"/>
</svg>
</div>
<h3 class="hc-card-title">Ongoing Conversations</h3>
<p class="hc-card-body">A private portal for thoughtful dialogue—without the noise of social media. Ask questions, share insights, or simply lurk and learn. No pressure. No performance.</p>
</div>
<div class="hc-card reveal">
<div class="hc-card-icon">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<circle cx="16" cy="9" r="5"/>
<path d="M16 4.5v2M16 11.5v2M11.8 6.8l1.4 1.4M18.8 13.8l1.4 1.4M10 9h2M20 9h2M11.8 11.2l1.4-1.4M18.8 6.2l1.4-1.4"/>
<path d="M9 22c0-3.9 3.1-7 7-7s7 3.1 7 7v6H9z"/>
</svg>
</div>
<h3 class="hc-card-title">Rhythmic Living</h3>
<p class="hc-card-body">Stay attuned to the seasons with tools to help you move in flow with nature. Full moon reflection prompts, seasonal checklists, and plant walk ideas—resources to live rooted.</p>
</div>
<div class="hc-card reveal">
<div class="hc-card-icon">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M16 4C16 4 10 9 7 16C11 18 16 18 16 18C16 18 21 18 25 16C22 9 16 4 16 4Z"/>
<path d="M16 4v24"/>
<path d="M16 12C16 12 11 14 9 20"/>
<path d="M16 15C16 15 21 17 23 23"/>
</svg>
</div>
<h3 class="hc-card-title">Centered in Culture &amp; Care</h3>
<p class="hc-card-body">This space prioritizes Black and Indigenous voices, intergenerational wisdom, and the rhythms of land and lineage. We're not just learning—we're remembering.</p>
</div>
</div>
</section>

<div class="sep"></div>

<!-- PRICING -->
<section class="hc-pricing" id="join">
<div class="wc-pools">
<div class="wc-pool hc-pricing-pool-1"></div>
<div class="wc-pool hc-pricing-pool-2"></div>
</div>
<div class="hc-pricing-header reveal">
<p class="section-label">Membership Pricing</p>
<h2 class="section-title">Root in at your own pace.</h2>
<p class="section-body">Choose the rhythm that fits your life. Every level opens the full community.</p>
</div>
<div class="hc-pricing-grid reveal">
<div class="hc-pricing-card">
<p class="hc-pricing-label">Monthly</p>
<p class="hc-pricing-amount"><sup>$</sup>15</p>
<p class="hc-pricing-period">per month</p>
<p class="hc-pricing-desc">Stay flexible and flow with the seasons. Pause or cancel any time.</p>
<a href="#" class="hc-pricing-cta hc-cta-ghost">Join Monthly</a>
</div>
<div class="hc-pricing-card featured">
<div class="hc-pricing-badge">Most Rooted</div>
<p class="hc-pricing-label">Annual</p>
<p class="hc-pricing-amount"><sup>$</sup>150</p>
<p class="hc-pricing-period">per year &middot; save $30</p>
<p class="hc-pricing-desc">Commit to a full cycle. The deepest value for steady, seasonal practice.</p>
<a href="#" class="hc-pricing-cta hc-cta-fill">Join Annually</a>
</div>
<div class="hc-pricing-card" id="lifetime">
<p class="hc-pricing-label">Lifetime</p>
<p class="hc-pricing-amount" style="font-size:2.8rem;"><sup>$</sup>3,000</p>
<p class="hc-pricing-period">one time &middot; planted forever</p>
<p class="hc-pricing-desc">Plant yourself here permanently. Access everything, now and as it grows.</p>
<a href="#" class="hc-pricing-cta hc-cta-ghost">Go Lifetime</a>
</div>
</div>
</section>

<div class="sep"></div>

<!-- GIFT -->
<section class="hc-gift">
<div class="wc-pools">
<div class="wc-pool hc-gift-pool-1"></div>
<div class="wc-pool hc-gift-pool-2"></div>
</div>
<div class="hc-gift-inner">
<div class="reveal">
<p class="section-label">Gift a Membership</p>
<h2 class="section-title">Rooted Wisdom thrives on <em>shared care.</em></h2>
<p class="hc-gift-body">Want to support someone else's journey? Gift a membership to a friend, or contribute to our Community Membership Fund. Together, we make this circle stronger.</p>
<a href="/gift" class="btn-outline-light">Give a Gift or Contribute &rarr;</a>
</div>
<div class="hc-gift-visual reveal">
<div class="hc-gift-ring">
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" style="margin-bottom:1rem;opacity:0.4;">
<path d="M22 4C22 4 18 10 22 17C26 10 22 4 22 4ZM22 17L22 42" stroke="#f0e6cc" stroke-width="1.5" stroke-linecap="round"/>
<path d="M22 25C22 25 14 29 12 38" stroke="#f0e6cc" stroke-width="1.2" stroke-linecap="round"/>
<path d="M22 29C22 29 30 33 32 42" stroke="#f0e6cc" stroke-width="1.2" stroke-linecap="round"/>
</svg>
<p class="hc-gift-ring-text">There is medicine<br />in being seen.</p>
</div>
</div>
</div>
</section>

<!-- INVITE -->
<section class="hc-invite">
<div class="wc-pools">
<div class="wc-pool hc-invite-pool-1"></div>
<div class="wc-pool hc-invite-pool-2"></div>
</div>
<div class="hc-invite-inner reveal">
<p class="section-label" style="text-align:center; margin-bottom:2rem;">Ready to Root In?</p>
<p class="hc-invite-quote">Step into Herb-Curious and explore a community where learning is cyclical, connection is playful, and you don't have to do it alone.</p>
<div class="hc-invite-ctas">
<a href="#join" class="btn-primary">Join the Community Portal</a>
<a href="#lifetime" class="btn-ghost">Get Lifetime Access</a>
</div>
</div>
</section>

<script>
(function() {
  document.body.classList.add('js-reveal-ready');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
})();
</script>
