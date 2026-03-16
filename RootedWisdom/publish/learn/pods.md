---
layout: layouts/base.njk
title: Practitioner Pods
description: A mentorship-based community for experienced spiritual herbalists—ready to review, deepen, and expand their practice in small, intentional cohorts.
pageStyles: |
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  main { padding-top: 0 !important; }

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
    --sage-light: #9aaa7a;
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
    content: ''; position: fixed; inset: 0;
    pointer-events: none; z-index: 1000; opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    background-size: 300px 300px;
  }

  /* ── WC POOLS ── */
  .wc-pools { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .wc-pool { position: absolute; border-radius: 50%; filter: blur(65px); }

  /* ── BUTTONS ── */
  .btn-primary {
    font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
    color: #fff; background: var(--rust); padding: 0.9rem 2.4rem; border-radius: 3px;
    text-decoration: none; display: inline-block;
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

  .btn-gold-fill {
    font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--bark); background: var(--gold-light); display: inline-block;
    padding: 0.9rem 2.4rem; border-radius: 3px; text-decoration: none;
    transition: all 0.25s;
    box-shadow: 0 3px 12px rgba(184,124,30,0.35);
  }
  .btn-gold-fill:hover { background: var(--gold); transform: translateY(-1px); }

  .btn-gold-outline {
    font-size: 0.72rem; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--gold-light); background: transparent; display: inline-block;
    padding: 0.9rem 2.4rem; border-radius: 3px; border: 1.5px solid rgba(212,160,80,0.4);
    text-decoration: none; transition: all 0.25s;
  }
  .btn-gold-outline:hover { background: rgba(212,160,80,0.1); border-color: var(--gold-light); }

  /* ── SHARED ── */
  .sep { height: 1px; background: linear-gradient(90deg, transparent, rgba(139,90,30,0.18), transparent); }

  .pods-section-label {
    font-size: 0.68rem; letter-spacing: 0.32em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1rem;
    max-width: none;
  }
  .pods-section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 400;
    color: var(--bark); line-height: 1.15; margin-bottom: 1rem;
    max-width: none;
  }
  .pods-section-title em { font-style: italic; color: var(--rust); }

  /* ── SCROLL REVEAL ── */
  .reveal { opacity: 1; transform: translateY(0); transition: opacity 0.7s ease, transform 0.7s ease; }
  .js-reveal-ready .reveal { opacity: 0; transform: translateY(20px); }
  .js-reveal-ready .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── HERO ── */
  .pods-hero {
    position: relative; min-height: 100vh;
    display: flex; flex-direction: column; justify-content: flex-start;
    padding: 0 3rem 5rem;
    overflow: hidden;
    background: var(--bark);
  }
  .pods-hero-pool-1 { width: 800px; height: 600px; background: #b5601a; top: -20%; left: -15%; opacity: 0.18; }
  .pods-hero-pool-2 { width: 600px; height: 500px; background: #5b8aaa; top: -10%; right: -10%; opacity: 0.12; }
  .pods-hero-pool-3 { width: 700px; height: 400px; background: #b87c1e; bottom: -10%; right: -5%; opacity: 0.15; }
  .pods-hero-pool-4 { width: 400px; height: 300px; background: #7a8a5a; bottom: 10%; left: 10%; opacity: 0.12; }

  .pods-hero::after {
    content: '';
    position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, rgba(240,230,204,0.06) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .pods-hero-breadcrumb {
    font-size: 0.65rem; letter-spacing: 0.26em; text-transform: uppercase;
    color: rgba(240,230,204,0.35);
    position: relative; z-index: 2;
    animation: pods-fade-rise 1.2s 0.05s ease both;
    max-width: none;
    padding-top: 5rem;
    margin-bottom: 3rem;
  }
  .pods-hero-breadcrumb a { color: rgba(240,230,204,0.35); text-decoration: none; transition: color 0.2s; }
  .pods-hero-breadcrumb a:hover { color: rgba(240,230,204,0.65); }
  .pods-hero-breadcrumb span { margin: 0 0.5rem; opacity: 0.4; }

  @keyframes pods-fade-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .pods-hero-content { position: relative; z-index: 2; max-width: 820px; margin-top: auto; }

  .pods-hero-eyebrow {
    font-size: 0.68rem; letter-spacing: 0.38em; text-transform: uppercase;
    color: var(--gold-light); opacity: 0.8; margin-bottom: 1.5rem;
    animation: pods-fade-rise 1.2s 0.1s ease both;
    max-width: none;
  }
  .pods-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 9vw, 7rem); font-weight: 300; line-height: 0.95;
    color: var(--parchment); margin-bottom: 0.2em;
    animation: pods-fade-rise 1.2s 0.2s ease both;
    max-width: none;
  }
  .pods-hero-title em { font-style: italic; color: var(--gold-light); }

  .pods-hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2vw, 1.5rem); font-weight: 300; font-style: italic;
    color: rgba(240,230,204,0.55); margin-bottom: 2.5rem;
    animation: pods-fade-rise 1.2s 0.3s ease both;
    max-width: none;
  }
  .pods-hero-desc {
    font-size: 1rem; font-weight: 300; line-height: 1.85;
    color: rgba(240,230,204,0.65); max-width: 560px; margin-bottom: 3rem;
    animation: pods-fade-rise 1.2s 0.4s ease both;
  }
  .pods-hero-ctas { display: flex; gap: 1.2rem; flex-wrap: wrap; animation: pods-fade-rise 1.2s 0.5s ease both; }

  .pods-scroll-hint {
    position: absolute; bottom: 2.5rem; right: 3rem; z-index: 2;
    display: flex; align-items: center; gap: 0.6rem;
    font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase;
    color: rgba(240,230,204,0.25);
    max-width: none;
  }
  .pods-scroll-hint-line { width: 36px; height: 1px; background: rgba(240,230,204,0.2); }

  /* ── ABOUT ── */
  .pods-about {
    padding: 7rem 3rem; background: var(--parchment2);
    position: relative; overflow: hidden;
  }
  .pods-about-pool-1 { width: 500px; height: 350px; background: #7aaec8; top: -20%; right: -5%; opacity: 0.16; }
  .pods-about-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -20%; left: -5%; opacity: 0.13; }
  .pods-about-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 2fr; gap: 6rem;
    align-items: start; position: relative; z-index: 1;
  }
  .pods-about-pull {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 2rem;
    max-width: none;
  }
  .pods-about-pull em { color: var(--rust); font-style: normal; }
  .pods-about-body { font-size: 0.94rem; font-weight: 300; line-height: 1.85; color: var(--mid-text); max-width: none; }

  /* ── FOR WHOM ── */
  .pods-for-whom {
    padding: 7rem 3rem; background: var(--parchment);
    position: relative; overflow: hidden;
  }
  .pods-for-whom-pool-1 { width: 600px; height: 350px; background: #5b8aaa; top: 0; left: 50%; transform: translateX(-50%); opacity: 0.08; }
  .pods-for-whom-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
    align-items: start; position: relative; z-index: 1;
  }
  .pods-for-whom-list { list-style: none; margin-top: 2.5rem; display: flex; flex-direction: column; gap: 0; }
  .pods-for-whom-item {
    padding: 1.4rem 0;
    border-top: 1px solid rgba(139,90,30,0.12);
    display: flex; align-items: flex-start; gap: 1.2rem;
  }
  .pods-for-whom-item:last-child { border-bottom: 1px solid rgba(139,90,30,0.12); }
  .pods-for-whom-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--rust);
    flex-shrink: 0; margin-top: 0.52rem; opacity: 0.75;
  }
  .pods-for-whom-text { font-size: 0.94rem; font-weight: 300; line-height: 1.65; color: var(--mid-text); max-width: none; }
  .pods-for-whom-text strong { font-weight: 500; color: var(--bark); }

  .pods-stat-tiles { display: flex; flex-direction: column; gap: 1.5rem; padding-top: 0.5rem; }
  .pods-stat-tile {
    background: rgba(240,230,204,0.5);
    border: 1px solid rgba(139,90,30,0.13);
    padding: 2rem 2rem 1.8rem; border-radius: 2px;
    position: relative; transition: background 0.3s;
  }
  .pods-stat-tile:hover { background: rgba(255,250,240,0.85); }
  .pods-stat-tile::before {
    content: ''; position: absolute; top: 0; left: 0; bottom: 0; width: 3px;
    background: var(--rust); border-radius: 2px 0 0 2px;
  }
  .pods-stat-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem; font-weight: 300; color: var(--rust); line-height: 1;
    opacity: 0.7; margin-bottom: 0.4rem;
    max-width: none;
  }
  .pods-stat-label { font-size: 0.82rem; font-weight: 400; color: var(--bark); margin-bottom: 0.35rem; max-width: none; }
  .pods-stat-desc { font-size: 0.82rem; font-weight: 300; line-height: 1.65; color: var(--mid-text); max-width: none; }

  /* ── HOW IT WORKS ── */
  .pods-how {
    padding: 7rem 3rem; background: var(--parchment3);
    position: relative; overflow: hidden;
  }
  .pods-how-pool-1 { width: 500px; height: 400px; background: #7aaec8; top: -10%; right: -8%; opacity: 0.18; }
  .pods-how-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -15%; left: -5%; opacity: 0.14; }
  .pods-how-header { text-align: center; max-width: 580px; margin: 0 auto 4.5rem; position: relative; z-index: 1; }
  .pods-how-body { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); margin-top: 0.5rem; max-width: none; }
  .pods-how-grid {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; position: relative; z-index: 1;
  }
  .pods-how-card {
    background: rgba(248,240,224,0.7);
    border: 1px solid rgba(139,90,30,0.13);
    padding: 2.5rem 2rem; border-radius: 2px;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  }
  .pods-how-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--rust); transform: scaleX(0);
    transition: transform 0.4s ease; transform-origin: left;
  }
  .pods-how-card:hover::before { transform: scaleX(1); }
  .pods-how-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(59,32,16,0.09); background: rgba(255,250,240,0.95); }
  .pods-how-card-icon { margin-bottom: 1.2rem; color: var(--rust); opacity: 0.65; }
  .pods-how-card-icon svg { display: block; }
  .pods-how-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem; font-weight: 400; color: var(--bark);
    margin-bottom: 0.6rem; line-height: 1.2;
    max-width: none;
  }
  .pods-how-card-body { font-size: 0.86rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); max-width: none; }

  /* ── CONTRIBUTION ── */
  .pods-contribution {
    padding: 7rem 3rem; background: var(--bark);
    position: relative; overflow: hidden;
  }
  .pods-contribution-pool-1 { width: 600px; height: 500px; background: #b5601a; top: -20%; left: -10%; opacity: 0.2; }
  .pods-contribution-pool-2 { width: 400px; height: 350px; background: #5b8aaa; bottom: -20%; right: -5%; opacity: 0.15; }
  .pods-contribution-inner {
    max-width: 900px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
    align-items: start; position: relative; z-index: 1;
  }
  .pods-contribution .pods-section-label { color: rgba(240,230,204,0.4); }
  .pods-contribution .pods-section-title { color: var(--parchment); }
  .pods-contribution .pods-section-title em { color: var(--gold-light); }
  .pods-contribution-body { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: rgba(240,230,204,0.6); margin-bottom: 1.25rem; max-width: none; }
  .pods-price-cards { display: flex; flex-direction: column; gap: 1.25rem; }
  .pods-price-card {
    border: 1px solid rgba(240,230,204,0.12);
    padding: 2rem 2rem 1.8rem; border-radius: 2px;
    transition: border-color 0.25s, background 0.25s;
  }
  .pods-price-card:hover { border-color: rgba(240,230,204,0.25); background: rgba(240,230,204,0.04); }
  .pods-price-card.featured { border-color: rgba(212,160,80,0.4); background: rgba(212,160,80,0.05); }
  .pods-price-card-label { font-size: 0.62rem; letter-spacing: 0.26em; text-transform: uppercase; color: rgba(240,230,204,0.35); margin-bottom: 0.75rem; max-width: none; }
  .pods-price-card-amount {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; font-weight: 300; color: var(--parchment); line-height: 1; margin-bottom: 0.2rem;
    max-width: none;
  }
  .pods-price-card-amount sup { font-size: 1.1rem; vertical-align: super; }
  .pods-price-card.featured .pods-price-card-amount { color: var(--gold-light); }
  .pods-price-card-period { font-size: 0.78rem; font-weight: 300; color: rgba(240,230,204,0.4); margin-bottom: 0.9rem; max-width: none; }
  .pods-price-card-note { font-size: 0.82rem; font-weight: 300; line-height: 1.65; color: rgba(240,230,204,0.5); max-width: none; }
  .pods-contribution-fine { font-size: 0.78rem; font-weight: 300; color: rgba(240,230,204,0.3); line-height: 1.65; margin-top: 0.5rem; max-width: none; }

  /* ── CTA ── */
  .pods-cta {
    padding: 8rem 3rem; background: var(--parchment2);
    text-align: center; position: relative; overflow: hidden;
  }
  .pods-cta-pool-1 { width: 600px; height: 350px; background: #7aaec8; top: -20%; left: 50%; transform: translateX(-50%); opacity: 0.15; }
  .pods-cta-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -20%; right: -5%; opacity: 0.11; }
  .pods-cta-inner { max-width: 640px; margin: 0 auto; position: relative; z-index: 1; }
  .pods-cta-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 1rem;
    max-width: none;
  }
  .pods-cta-note { font-size: 0.85rem; font-weight: 300; color: var(--soft-text); line-height: 1.7; margin-bottom: 2.8rem; max-width: none; }
  .pods-cta-buttons { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .pods-hero { padding: 0 1.5rem 4rem; }
    .pods-hero-breadcrumb { padding-top: 4rem; }
    .pods-about-inner { grid-template-columns: 1fr; gap: 3rem; }
    .pods-for-whom-inner { grid-template-columns: 1fr; gap: 3rem; }
    .pods-how-grid { grid-template-columns: 1fr; }
    .pods-contribution-inner { grid-template-columns: 1fr; gap: 3rem; }
  }
---

<!-- HERO -->
<section class="pods-hero">
<div class="wc-pools">
<div class="wc-pool pods-hero-pool-1"></div>
<div class="wc-pool pods-hero-pool-2"></div>
<div class="wc-pool pods-hero-pool-3"></div>
<div class="wc-pool pods-hero-pool-4"></div>
</div>
<p class="pods-hero-breadcrumb"><a href="/learn">Apprenticeship</a><span>/</span>Practitioner Pods</p>
<div class="pods-hero-content">
<p class="pods-hero-eyebrow">For Seasoned Herbalists</p>
<h1 class="pods-hero-title">Practitioner<br /><em>Pods</em></h1>
<p class="pods-hero-subtitle">Where experienced herbalists continue to grow together.</p>
<p class="pods-hero-desc">For the seasoned herbalist, there comes a time to circle back—to revisit what you know, explore what you've yet to uncover, and walk beside others who speak your language.</p>
<div class="pods-hero-ctas">
<a href="#join" class="btn-gold-fill">Join the Circle</a>
<a href="#how" class="btn-gold-outline">How It Works</a>
</div>
</div>
<div class="pods-scroll-hint">
<div class="pods-scroll-hint-line"></div>
<span>Explore Below</span>
</div>
</section>

<div class="sep"></div>

<!-- ABOUT -->
<section class="pods-about">
<div class="wc-pools">
<div class="wc-pool pods-about-pool-1"></div>
<div class="wc-pool pods-about-pool-2"></div>
</div>
<div class="pods-about-inner">
<div class="reveal">
<p class="pods-section-label">About the Program</p>
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="margin-top:2rem;opacity:0.12;">
<circle cx="40" cy="40" r="35" stroke="#3b2010" stroke-width="1"/>
<circle cx="40" cy="40" r="25" stroke="#3b2010" stroke-width="0.5"/>
<circle cx="40" cy="40" r="4" fill="#3b2010"/>
<line x1="40" y1="5" x2="40" y2="15" stroke="#3b2010" stroke-width="1"/>
<line x1="40" y1="65" x2="40" y2="75" stroke="#3b2010" stroke-width="1"/>
<line x1="5" y1="40" x2="15" y2="40" stroke="#3b2010" stroke-width="1"/>
<line x1="65" y1="40" x2="75" y2="40" stroke="#3b2010" stroke-width="1"/>
</svg>
</div>
<div class="reveal">
<p class="pods-about-pull">A mentorship-based community for experienced spiritual herbalists—those ready to <em>review, deepen, and expand</em> their practice.</p>
<p class="pods-about-body">In small, self-organized cohorts of 6–10, you'll confer on client work, explore advanced study, host your own workshops, and connect in virtual gatherings with other cohorts. Together, we'll build a shared resource library, foster ongoing discussion in a private community portal, and shape the future of the program—including plans for a community free clinic where we can both practice and give back.</p>
<p class="pods-about-body" style="margin-top:1.25rem;">These first cohorts will help shape the program's future—refining its structure and laying the groundwork for something lasting.</p>
</div>
</div>
</section>

<div class="sep"></div>

<!-- FOR WHOM -->
<section class="pods-for-whom">
<div class="wc-pools">
<div class="wc-pool pods-for-whom-pool-1"></div>
</div>
<div class="pods-for-whom-inner">
<div class="reveal">
<p class="pods-section-label">Who This Is For</p>
<h2 class="pods-section-title">You already know<br /><em>the work.</em></h2>
<ul class="pods-for-whom-list">
<li class="pods-for-whom-item">
<div class="pods-for-whom-dot"></div>
<p class="pods-for-whom-text"><strong>Seasoned practitioners</strong> who want to deepen their studies and remain in active learning.</p>
</li>
<li class="pods-for-whom-item">
<div class="pods-for-whom-dot"></div>
<p class="pods-for-whom-text">Herbalists looking to <strong>discuss client cases</strong> in a supportive, confidential environment.</p>
</li>
<li class="pods-for-whom-item">
<div class="pods-for-whom-dot"></div>
<p class="pods-for-whom-text">Practitioners who may be <strong>working toward AHG requirements</strong> and need peer accountability.</p>
</li>
<li class="pods-for-whom-item">
<div class="pods-for-whom-dot"></div>
<p class="pods-for-whom-text">Product makers who want support on the <strong>business of running a business</strong>—not just the craft.</p>
</li>
<li class="pods-for-whom-item">
<div class="pods-for-whom-dot"></div>
<p class="pods-for-whom-text">Healers who value <strong>community wisdom</strong> and believe practice deepens through shared resources.</p>
</li>
</ul>
</div>
<div class="pods-stat-tiles reveal">
<div class="pods-stat-tile">
<p class="pods-stat-number">6–10</p>
<p class="pods-stat-label">Participants per cohort</p>
<p class="pods-stat-desc">Small by design. Close connection and meaningful exchange require an intimate circle.</p>
</div>
<div class="pods-stat-tile">
<p class="pods-stat-number">∞</p>
<p class="pods-stat-label">Teaching opportunities</p>
<p class="pods-stat-desc">Host your own workshop on the platform, open to both our community and the wider public.</p>
</div>
<div class="pods-stat-tile">
<p class="pods-stat-number">1</p>
<p class="pods-stat-label">Shared goal ahead</p>
<p class="pods-stat-desc">Our first cohorts will lay the groundwork for a community free clinic—a space to practice and give back in service.</p>
</div>
</div>
</div>
</section>

<div class="sep"></div>

<!-- HOW IT WORKS -->
<section class="pods-how" id="how">
<div class="wc-pools">
<div class="wc-pool pods-how-pool-1"></div>
<div class="wc-pool pods-how-pool-2"></div>
</div>
<div class="pods-how-header reveal">
<p class="pods-section-label">How It Works</p>
<h2 class="pods-section-title">Self-organized.<br /><em>Mentor-guided.</em></h2>
<p class="pods-how-body">You and your cohort guide your own focus areas, with mentorship and facilitation available when the work calls for it.</p>
</div>
<div class="pods-how-grid">
<div class="pods-how-card reveal">
<div class="pods-how-card-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<circle cx="15" cy="15" r="12"/>
<circle cx="15" cy="15" r="5"/>
<path d="M15 3v4M15 23v4M3 15h4M23 15h4"/>
</svg>
</div>
<h3 class="pods-how-card-title">Small Cohorts</h3>
<p class="pods-how-card-body">Each cohort holds 6–10 participants for close connection and meaningful exchange. You'll know each other's work.</p>
</div>
<div class="pods-how-card reveal">
<div class="pods-how-card-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="5" width="24" height="20" rx="2"/>
<path d="M3 11h24"/>
<path d="M10 5V3M20 5V3"/>
<circle cx="10" cy="17" r="1.5" fill="currentColor" stroke="none"/>
<circle cx="15" cy="17" r="1.5" fill="currentColor" stroke="none"/>
<circle cx="20" cy="17" r="1.5" fill="currentColor" stroke="none"/>
</svg>
</div>
<h3 class="pods-how-card-title">Cross-Cohort Gatherings</h3>
<p class="pods-how-card-body">All cohorts meet together in virtual gatherings for shared learning, ritual, and connection across the wider circle.</p>
</div>
<div class="pods-how-card reveal">
<div class="pods-how-card-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 4h20v22H5z"/>
<path d="M9 10h12M9 14h12M9 18h8"/>
</svg>
</div>
<h3 class="pods-how-card-title">Resource Library</h3>
<p class="pods-how-card-body">We'll grow a shared library of herbal, spiritual, and clinical resources that belongs to all members.</p>
</div>
<div class="pods-how-card reveal">
<div class="pods-how-card-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 8h20v14H5z"/>
<path d="M9 13h12M9 17h7"/>
<circle cx="22" cy="22" r="5"/>
<path d="M20 22h4M22 20v4"/>
</svg>
</div>
<h3 class="pods-how-card-title">Community Portal</h3>
<p class="pods-how-card-body">A private online space for discussion, case reviews, and mutual support—without the noise of social media.</p>
</div>
<div class="pods-how-card reveal">
<div class="pods-how-card-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M15 3L18 9h7l-5.5 4.5 2 7L15 17l-6.5 3.5 2-7L5 9h7z"/>
</svg>
</div>
<h3 class="pods-how-card-title">Teaching Opportunities</h3>
<p class="pods-how-card-body">Host your own workshop on the platform, open to both our community and the wider public. Your knowledge has a home here.</p>
</div>
<div class="pods-how-card reveal">
<div class="pods-how-card-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M15 5C15 5 9 9 7 15C11 17 15 17 15 17C15 17 19 17 23 15C21 9 15 5 15 5Z"/>
<path d="M15 5v22"/>
<path d="M15 12C15 12 10 15 9 20"/>
<path d="M15 15C15 15 20 18 21 23"/>
</svg>
</div>
<h3 class="pods-how-card-title">Free Clinic Vision</h3>
<p class="pods-how-card-body">Our first cohorts shape the program's future—including a community free clinic where we practice skills and give back in service.</p>
</div>
</div>
</section>

<div class="sep"></div>

<!-- CONTRIBUTION -->
<section class="pods-contribution" id="join">
<div class="wc-pools">
<div class="wc-pool pods-contribution-pool-1"></div>
<div class="wc-pool pods-contribution-pool-2"></div>
</div>
<div class="pods-contribution-inner">
<div class="reveal">
<p class="pods-section-label">Commitment &amp; Contribution</p>
<h2 class="pods-section-title">The focus stays on<br /><em>the work.</em></h2>
<p class="pods-contribution-body">A minimal monthly contribution supports platform hosting, community management, and the administrative needs that keep us all in circle. Keeping the cost low is intentional—the work is the point.</p>
<p class="pods-contribution-body">When you introduce new members to our wider community, you'll earn membership credits—a way of honoring your role in helping our circle expand.</p>
<a href="#" class="btn-gold-fill" style="margin-top:0.5rem;">Join Practitioner Pods</a>
</div>
<div class="reveal">
<div class="pods-price-cards">
<div class="pods-price-card">
<p class="pods-price-card-label">Monthly</p>
<p class="pods-price-card-amount"><sup>$</sup>10</p>
<p class="pods-price-card-period">per month</p>
<p class="pods-price-card-note">Stay flexible. Engage with the circle at your own rhythm.</p>
</div>
<div class="pods-price-card featured">
<p class="pods-price-card-label">Annual &middot; 2 months free</p>
<p class="pods-price-card-amount"><sup>$</sup>100</p>
<p class="pods-price-card-period">per year</p>
<p class="pods-price-card-note">Commit to a full year of practice and community. The deepest value.</p>
</div>
</div>
<p class="pods-contribution-fine">Open to experienced spiritual herbalists who have completed prior training or bring equivalent experience.</p>
</div>
</div>
</section>

<!-- CTA -->
<section class="pods-cta">
<div class="wc-pools">
<div class="wc-pool pods-cta-pool-1"></div>
<div class="wc-pool pods-cta-pool-2"></div>
</div>
<div class="pods-cta-inner reveal">
<p class="pods-section-label" style="text-align:center;margin-bottom:2rem;">Ready to Circle In?</p>
<p class="pods-cta-quote">Here, we gather in small circles, share the work of our hands and hearts, and walk beside others who speak your language.</p>
<p class="pods-cta-note">Open to experienced spiritual herbalists. Small cohorts fill intentionally—when the circle is ready, it closes.</p>
<div class="pods-cta-buttons">
<a href="#" class="btn-primary">Join Practitioner Pods</a>
<a href="/learn" class="btn-ghost">View Apprenticeship</a>
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
