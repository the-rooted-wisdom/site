---
layout: layouts/base.njk
title: Foundations in Herbalism
description: A grounded, self-paced introduction to the practice, language, and lineage of plant medicine — for those ready to move beyond curiosity.
pageStyles: |
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
    font-weight: 300;
    line-height: 1.7;
  }

  body::before {
    content: ''; position: fixed; inset: 0;
    pointer-events: none; z-index: 1000; opacity: 0.028;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    background-size: 300px;
  }

  /* ── WC POOLS ── */
  .wc-pools { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .wc-pool { position: absolute; border-radius: 50%; filter: blur(65px); }

  /* ── BUTTONS ── */
  .btn-primary {
    font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
    color: #fff; background: var(--rust); padding: 0.9rem 2.4rem; border-radius: 3px;
    text-decoration: none; display: inline-block;
    transition: background 0.25s, transform 0.2s;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.15), 0 3px 12px rgba(181,96,26,0.3);
  }
  .btn-primary:hover { background: var(--rust-light); transform: translateY(-1px); }

  .btn-ghost {
    font-size: 0.72rem; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--blue-wc3); background: transparent; display: inline-block;
    padding: 0.9rem 2.4rem; border-radius: 3px; border: 1.5px solid var(--blue-wc2);
    text-decoration: none; transition: all 0.25s;
  }
  .btn-ghost:hover { background: var(--blue-wc3); color: #fff; transform: translateY(-1px); }

  /* ── SHARED ── */
  .sep { height: 1px; background: linear-gradient(90deg, transparent, rgba(139,90,30,0.18), transparent); }

  .fdn-label {
    font-size: 0.68rem; letter-spacing: 0.32em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1rem; max-width: none;
  }
  .fdn-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 400;
    color: var(--bark); line-height: 1.15; margin-bottom: 1rem; max-width: none;
  }
  .fdn-title em { font-style: italic; color: var(--rust); }

  /* ── SCROLL REVEAL ── */
  .reveal { opacity: 1; transform: translateY(0); transition: opacity 0.7s ease, transform 0.7s ease; }
  .js-reveal-ready .reveal { opacity: 0; transform: translateY(20px); }
  .js-reveal-ready .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── HERO ── */
  .fdn-hero {
    position: relative;
    display: flex; flex-direction: column; justify-content: flex-start;
    padding: 8rem 3rem 7rem;
    overflow: hidden;
    background: var(--parchment);
  }
  .fdn-hero-pool-1 { width: 600px; height: 500px; background: #7aaec8; top: -15%; right: -5%; opacity: 0.18; }
  .fdn-hero-pool-2 { width: 500px; height: 400px; background: #7a8a5a; bottom: -10%; left: -8%; opacity: 0.18; }
  .fdn-hero-pool-3 { width: 400px; height: 300px; background: #c9882a; top: 10%; left: 20%; opacity: 0.1; }

  .fdn-hero::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, rgba(59,32,16,0.04) 1px, transparent 1px);
    background-size: 36px 36px; z-index: 0;
  }

  .fdn-hero-content { position: relative; z-index: 2; max-width: 820px; }

  @keyframes fdn-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .fdn-hero-eyebrow {
    font-size: 0.68rem; letter-spacing: 0.38em; text-transform: uppercase;
    color: var(--sage); margin-bottom: 1.5rem; max-width: none;
    animation: fdn-rise 1.2s 0.1s ease both;
  }
  .fdn-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.2rem, 8vw, 6.5rem); font-weight: 300; line-height: 1.0;
    color: var(--bark); margin-bottom: 0.2em; max-width: none;
    animation: fdn-rise 1.2s 0.2s ease both;
  }
  .fdn-hero-title em { font-style: italic; color: var(--rust); }
  .fdn-hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 300; font-style: italic;
    color: var(--mid-text); margin-bottom: 2.8rem; max-width: none;
    animation: fdn-rise 1.2s 0.3s ease both;
  }
  .fdn-hero-ctas { display: flex; gap: 1.2rem; flex-wrap: wrap; animation: fdn-rise 1.2s 0.4s ease both; }

  /* ── ABOUT ── */
  .fdn-about {
    padding: 7rem 3rem; background: var(--parchment2);
    position: relative; overflow: hidden;
  }
  .fdn-about-pool-1 { width: 500px; height: 350px; background: #7aaec8; top: -20%; right: -5%; opacity: 0.15; }
  .fdn-about-pool-2 { width: 400px; height: 300px; background: #7a8a5a; bottom: -20%; left: -5%; opacity: 0.15; }
  .fdn-about-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 2fr; gap: 6rem;
    align-items: start; position: relative; z-index: 1;
  }
  .fdn-about-pull {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 2rem; max-width: none;
  }
  .fdn-about-body { font-size: 0.94rem; font-weight: 300; line-height: 1.9; color: var(--mid-text); max-width: none; }

  /* ── INCLUDES ── */
  .fdn-includes {
    padding: 7rem 3rem; background: var(--parchment);
    position: relative; overflow: hidden;
  }
  .fdn-includes-pool-1 { width: 600px; height: 300px; background: #5b8aaa; top: 0; left: 50%; transform: translateX(-50%); opacity: 0.08; }
  .fdn-includes-header { text-align: center; max-width: 600px; margin: 0 auto 4rem; position: relative; z-index: 1; }
  .fdn-includes-subhead { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); margin-top: 0.5rem; max-width: none; }
  .fdn-includes-grid {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem; position: relative; z-index: 1;
  }
  .fdn-include-card {
    background: rgba(240,230,204,0.6);
    border: 1px solid rgba(139,90,30,0.13);
    padding: 2.5rem 2.2rem; border-radius: 2px;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  }
  .fdn-include-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--sage); transform: scaleX(0);
    transition: transform 0.4s ease; transform-origin: left;
  }
  .fdn-include-card:hover::before { transform: scaleX(1); }
  .fdn-include-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(59,32,16,0.09); background: rgba(255,250,240,0.95); }
  .fdn-include-icon { margin-bottom: 1.2rem; color: var(--sage); opacity: 0.8; }
  .fdn-include-icon svg { display: block; }
  .fdn-include-title { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 400; color: var(--bark); margin-bottom: 0.6rem; line-height: 1.2; max-width: none; }
  .fdn-include-body { font-size: 0.86rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); max-width: none; }
  .fdn-include-tag {
    display: inline-block; margin-top: 1rem;
    font-size: 0.6rem; letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--sage); border: 1px solid rgba(122,138,90,0.3);
    padding: 0.25rem 0.65rem; border-radius: 2px;
  }

  /* ── HOW IT WORKS ── */
  .fdn-how {
    padding: 7rem 3rem; background: var(--parchment3);
    position: relative; overflow: hidden;
  }
  .fdn-how-pool-1 { width: 500px; height: 400px; background: #7aaec8; top: -10%; right: -8%; opacity: 0.18; }
  .fdn-how-pool-2 { width: 400px; height: 300px; background: #7a8a5a; bottom: -15%; left: -5%; opacity: 0.15; }
  .fdn-how-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
    align-items: start; position: relative; z-index: 1;
  }
  .fdn-how-body { font-size: 0.94rem; font-weight: 300; line-height: 1.85; color: var(--mid-text); margin-bottom: 1.1rem; max-width: none; }
  .fdn-how-list { display: flex; flex-direction: column; gap: 0; margin-top: 2rem; }
  .fdn-how-item {
    padding: 1.2rem 0;
    border-top: 1px solid rgba(139,90,30,0.12);
    display: flex; align-items: flex-start; gap: 1.2rem;
  }
  .fdn-how-item:last-child { border-bottom: 1px solid rgba(139,90,30,0.12); }
  .fdn-how-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sage); flex-shrink: 0; margin-top: 0.5rem; opacity: 0.8; }
  .fdn-how-text { font-size: 0.92rem; font-weight: 300; line-height: 1.65; color: var(--mid-text); max-width: none; }
  .fdn-how-text strong { font-weight: 500; color: var(--bark); }

  .fdn-rhythm { background: rgba(255,252,245,0.6); border: 1px solid rgba(139,90,30,0.12); padding: 2.5rem 2.2rem; }
  .fdn-rhythm-label { font-size: 0.65rem; letter-spacing: 0.26em; text-transform: uppercase; color: var(--soft-text); margin-bottom: 1.5rem; max-width: none; }
  .fdn-rhythm-steps { display: flex; flex-direction: column; gap: 1.25rem; }
  .fdn-rhythm-step { display: flex; align-items: flex-start; gap: 1rem; }
  .fdn-rhythm-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem; font-weight: 300; color: var(--rust); line-height: 1;
    opacity: 0.4; flex-shrink: 0; width: 2rem; max-width: none;
  }
  .fdn-rhythm-step-text { font-size: 0.88rem; font-weight: 300; line-height: 1.6; color: var(--mid-text); padding-top: 0.15rem; max-width: none; }
  .fdn-rhythm-step-text strong { font-weight: 500; color: var(--bark); display: block; margin-bottom: 0.15rem; }

  /* ── PATHWAY ── */
  .fdn-pathway {
    padding: 5rem 3rem; background: var(--bark);
    position: relative; overflow: hidden;
  }
  .fdn-pathway-pool-1 { width: 600px; height: 400px; background: #b5601a; top: -30%; left: -10%; opacity: 0.18; }
  .fdn-pathway-pool-2 { width: 400px; height: 300px; background: #5b8aaa; bottom: -30%; right: -5%; opacity: 0.15; }
  .fdn-pathway-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
  .fdn-pathway-label { font-size: 0.65rem; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(240,230,204,0.35); margin-bottom: 2.5rem; text-align: center; max-width: none; }
  .fdn-pathway-steps { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 0; align-items: center; }
  .fdn-pathway-step {
    padding: 2rem 1.75rem; border: 1px solid rgba(240,230,204,0.1);
    text-align: center; transition: border-color 0.25s, background 0.25s;
  }
  .fdn-pathway-step.active { border-color: rgba(240,230,204,0.3); background: rgba(240,230,204,0.05); }
  .fdn-pathway-arrow { text-align: center; color: rgba(240,230,204,0.2); font-size: 1.2rem; padding: 0 0.5rem; max-width: none; }
  .fdn-pathway-step-label { font-size: 0.6rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(240,230,204,0.3); margin-bottom: 0.5rem; max-width: none; }
  .fdn-pathway-step.active .fdn-pathway-step-label { color: var(--gold-light); }
  .fdn-pathway-step-name { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 400; color: rgba(240,230,204,0.5); line-height: 1.2; margin-bottom: 0.5rem; max-width: none; }
  .fdn-pathway-step.active .fdn-pathway-step-name { color: var(--parchment); font-size: 1.35rem; }
  .fdn-pathway-step-desc { font-size: 0.75rem; font-weight: 300; color: rgba(240,230,204,0.3); line-height: 1.55; max-width: none; }
  .fdn-pathway-step.active .fdn-pathway-step-desc { color: rgba(240,230,204,0.55); }

  /* ── PRICING ── */
  .fdn-pricing {
    padding: 7rem 3rem; background: var(--parchment2);
    position: relative; overflow: hidden;
  }
  .fdn-pricing-pool-1 { width: 500px; height: 400px; background: #7aaec8; top: -10%; right: -8%; opacity: 0.18; }
  .fdn-pricing-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -15%; left: -5%; opacity: 0.13; }
  .fdn-pricing-inner {
    max-width: 900px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
    align-items: start; position: relative; z-index: 1;
  }
  .fdn-pricing-body { font-size: 0.94rem; font-weight: 300; line-height: 1.85; color: var(--mid-text); margin-bottom: 1.1rem; max-width: none; }
  .fdn-pricing-cards { display: flex; flex-direction: column; gap: 1.25rem; }
  .fdn-pricing-card {
    background: rgba(248,240,224,0.7); border: 1px solid rgba(139,90,30,0.15);
    padding: 2rem 2.2rem; border-radius: 2px; position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .fdn-pricing-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(59,32,16,0.09); }
  .fdn-pricing-card.featured { border-color: rgba(74,122,155,0.4); background: rgba(74,122,155,0.06); }
  .fdn-pricing-badge {
    position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
    background: var(--blue-wc3); color: #fff;
    font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
    padding: 0.28rem 0.9rem; border-radius: 0 0 3px 3px; white-space: nowrap; max-width: none;
  }
  .fdn-pricing-tier { font-size: 0.65rem; letter-spacing: 0.28em; text-transform: uppercase; color: var(--blue-wc3); margin-bottom: 1rem; max-width: none; }
  .fdn-pricing-amount { font-family: 'Cormorant Garamond', serif; font-size: 3.2rem; font-weight: 300; color: var(--bark); line-height: 1; margin-bottom: 0.15rem; max-width: none; }
  .fdn-pricing-amount sup { font-size: 1.2rem; vertical-align: super; }
  .fdn-pricing-period { font-size: 0.78rem; font-weight: 300; color: var(--soft-text); margin-bottom: 1rem; max-width: none; }
  .fdn-pricing-save { font-size: 0.72rem; font-weight: 400; color: var(--sage); }
  .fdn-pricing-strikethrough { text-decoration: line-through; color: var(--soft-text); opacity: 0.6; }
  .fdn-pricing-cta {
    display: block; text-align: center; margin-top: 1.5rem;
    font-size: 0.7rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase;
    padding: 0.8rem 1rem; border-radius: 3px; text-decoration: none; transition: all 0.25s;
  }
  .fdn-cta-ghost { border: 1.5px solid var(--bark); color: var(--bark); }
  .fdn-cta-ghost:hover { background: var(--bark); color: var(--parchment); }
  .fdn-cta-fill { background: var(--blue-wc3); color: #fff; border: 1.5px solid var(--blue-wc3); box-shadow: 0 3px 12px rgba(74,122,155,0.25); }
  .fdn-cta-fill:hover { background: var(--blue-wc2); border-color: var(--blue-wc2); }

  /* ── CLOSING CTA ── */
  .fdn-close {
    padding: 7rem 3rem; background: var(--parchment);
    text-align: center; position: relative; overflow: hidden;
  }
  .fdn-close-pool-1 { width: 600px; height: 350px; background: #7aaec8; top: -20%; left: 50%; transform: translateX(-50%); opacity: 0.12; }
  .fdn-close-inner { max-width: 580px; margin: 0 auto; position: relative; z-index: 1; }
  .fdn-close-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 1rem; max-width: none;
  }
  .fdn-close-note { font-size: 0.85rem; font-weight: 300; color: var(--soft-text); line-height: 1.7; margin-bottom: 2.5rem; max-width: none; }
  .fdn-close-buttons { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .fdn-about-inner { grid-template-columns: 1fr; gap: 3rem; }
    .fdn-how-inner { grid-template-columns: 1fr; gap: 3rem; }
    .fdn-pricing-inner { grid-template-columns: 1fr; gap: 3rem; }
    .fdn-includes-grid { grid-template-columns: 1fr; }
    .fdn-pathway-steps { grid-template-columns: 1fr; }
    .fdn-pathway-arrow { display: none; }
    .fdn-hero { padding: 6rem 1.5rem 5rem; }
  }
---

<!-- HERO -->
<section class="fdn-hero">
<div class="wc-pools">
<div class="wc-pool fdn-hero-pool-1"></div>
<div class="wc-pool fdn-hero-pool-2"></div>
<div class="wc-pool fdn-hero-pool-3"></div>
</div>
<div class="fdn-hero-content">
<p class="fdn-hero-eyebrow">Self-Paced Learning</p>
<h1 class="fdn-hero-title">Foundations<br />in <em>Herbalism</em></h1>
<p class="fdn-hero-subtitle">Where your herbal journey deepens — at your own pace, in your own time.</p>
<div class="fdn-hero-ctas">
<a href="#join" class="btn-primary">Enroll Now</a>
<a href="#includes" class="btn-ghost">What's Included</a>
</div>
</div>
</section>

<div class="sep"></div>

<!-- ABOUT -->
<section class="fdn-about">
<div class="wc-pools">
<div class="wc-pool fdn-about-pool-1"></div>
<div class="wc-pool fdn-about-pool-2"></div>
</div>
<div class="fdn-about-inner">
<div class="reveal">
<p class="fdn-label">About the Course</p>
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="margin-top:1.5rem;opacity:0.1;">
<circle cx="40" cy="40" r="35" stroke="#3b2010" stroke-width="1"/>
<circle cx="40" cy="40" r="20" stroke="#3b2010" stroke-width="0.5"/>
<circle cx="40" cy="40" r="5" fill="#3b2010"/>
<path d="M40 5 L40 15M40 65 L40 75M5 40 L15 40M65 40 L75 40" stroke="#3b2010" stroke-width="1"/>
<path d="M16 16 L23 23M57 57 L64 64M64 16 L57 23M23 57 L16 64" stroke="#3b2010" stroke-width="0.8"/>
</svg>
</div>
<div class="reveal">
<p class="fdn-about-pull">A grounded introduction to the practice, language, and lineage of plant medicine — for those ready to move beyond curiosity.</p>
<p class="fdn-about-body">Foundations in Herbalism gives you the essential framework for understanding how herbs work with the body, the spirit, and the land. This is where real study begins — structured, unhurried, and rooted in traditions that reach across cultures and generations.</p>
<p class="fdn-about-body" style="margin-top:1.1rem;">Learning unfolds asynchronously, on your own schedule. There are no deadlines pressing at your back, no pace set by someone else. You move through the material when you're ready — and the material waits for you.</p>
<p class="fdn-about-body" style="margin-top:1.1rem;">Every lesson is an invitation to connect more deeply with the plants, your ancestors, and the wisdom already within you.</p>
</div>
</div>
</section>

<div class="sep"></div>

<!-- WHAT'S INCLUDED -->
<section class="fdn-includes" id="includes">
<div class="wc-pools">
<div class="wc-pool fdn-includes-pool-1"></div>
</div>
<div class="fdn-includes-header reveal">
<p class="fdn-label">What's Included</p>
<h2 class="fdn-title">Everything you need<br />to <em>begin in earnest.</em></h2>
<p class="fdn-includes-subhead">Foundations builds on Herb-Curious — adding structured coursework and deeper library access to the community you already love.</p>
</div>
<div class="fdn-includes-grid">
<div class="fdn-include-card reveal">
<div class="fdn-include-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 4h20v22H5z"/>
<path d="M9 9h12M9 13h12M9 17h8"/>
<circle cx="22" cy="22" r="5"/>
<path d="M20 22l2 2 3-3"/>
</svg>
</div>
<h3 class="fdn-include-title">Methods of Preparation</h3>
<p class="fdn-include-body">A full course on herbal preparation — teas, tinctures, oils, syrups, salves, and more. Learn the how and the why behind each method, with techniques drawn from multiple traditions.</p>
<span class="fdn-include-tag">Full Course Access</span>
</div>
<div class="fdn-include-card reveal">
<div class="fdn-include-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<path d="M15 3C15 3 10 8 8 14C11 16 15 16 15 16C15 16 19 16 22 14C20 8 15 3 15 3Z"/>
<path d="M15 3v24"/>
<path d="M15 11C15 11 10 14 9 19"/>
<path d="M15 14C15 14 20 17 21 22"/>
</svg>
</div>
<h3 class="fdn-include-title">Materia Medica Library</h3>
<p class="fdn-include-body">Ongoing access to our growing library of plant profiles — covering energetics, traditional uses, preparation guidance, and spiritual correspondences for each herb.</p>
<span class="fdn-include-tag">Always Growing</span>
</div>
<div class="fdn-include-card reveal">
<div class="fdn-include-icon">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
<circle cx="10" cy="10" r="5"/>
<circle cx="22" cy="20" r="5"/>
<path d="M15 10h3a4 4 0 0 1 4 4v1"/>
</svg>
</div>
<h3 class="fdn-include-title">Community &amp; Live Workshops</h3>
<p class="fdn-include-body">Full Herb-Curious community access — live virtual workshops, workshop replays, seasonal resources, and ongoing discussions to learn alongside fellow students.</p>
<span class="fdn-include-tag">Herb-Curious Included</span>
</div>
</div>
</section>

<div class="sep"></div>

<!-- HOW IT WORKS -->
<section class="fdn-how">
<div class="wc-pools">
<div class="wc-pool fdn-how-pool-1"></div>
<div class="wc-pool fdn-how-pool-2"></div>
</div>
<div class="fdn-how-inner">
<div class="reveal">
<p class="fdn-label">How It Works</p>
<h2 class="fdn-title">Your pace.<br /><em>Your practice.</em></h2>
<p class="fdn-how-body">Foundations is designed around the reality of a full life. There are no cohort start dates, no weekly deadlines, and no pressure to keep pace with anyone but yourself.</p>
<p class="fdn-how-body">When you enroll, everything opens at once. Move through the Methods course linearly or browse the Materia Medica by plant. Drop into community discussions whenever the moment is right.</p>
<div class="fdn-how-list">
<div class="fdn-how-item">
<div class="fdn-how-dot"></div>
<p class="fdn-how-text"><strong>No deadlines.</strong> Learn when you're ready — revisit lessons as many times as you need.</p>
</div>
<div class="fdn-how-item">
<div class="fdn-how-dot"></div>
<p class="fdn-how-text"><strong>Always available.</strong> Content is accessible on any device, any time.</p>
</div>
<div class="fdn-how-item">
<div class="fdn-how-dot"></div>
<p class="fdn-how-text"><strong>Community support.</strong> You're not studying alone — bring your questions to the discussion forums and share what you're noticing.</p>
</div>
<div class="fdn-how-item">
<div class="fdn-how-dot"></div>
<p class="fdn-how-text"><strong>Office hours.</strong> Periodic live sessions to bring questions and connect with the wider community. <em style="color:var(--soft-text);">Coming soon.</em></p>
</div>
</div>
</div>
<div class="reveal">
<div class="fdn-rhythm">
<p class="fdn-rhythm-label">A typical study rhythm</p>
<div class="fdn-rhythm-steps">
<div class="fdn-rhythm-step">
<div class="fdn-rhythm-num">01</div>
<div class="fdn-rhythm-step-text"><strong>Work through a lesson</strong>Move through a preparation method or explore a new plant in the Materia Medica.</div>
</div>
<div class="fdn-rhythm-step">
<div class="fdn-rhythm-num">02</div>
<div class="fdn-rhythm-step-text"><strong>Try it with your hands</strong>Make the preparation. Sit with the plant. Let the learning become embodied.</div>
</div>
<div class="fdn-rhythm-step">
<div class="fdn-rhythm-num">03</div>
<div class="fdn-rhythm-step-text"><strong>Share what you're noticing</strong>Bring your observations to the community — questions, discoveries, and all.</div>
</div>
<div class="fdn-rhythm-step">
<div class="fdn-rhythm-num">04</div>
<div class="fdn-rhythm-step-text"><strong>Rest. Return when ready.</strong>This is not a sprint. The plants will be here when you come back.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- PATHWAY STRIP -->
<section class="fdn-pathway">
<div class="wc-pools">
<div class="wc-pool fdn-pathway-pool-1"></div>
<div class="wc-pool fdn-pathway-pool-2"></div>
</div>
<div class="fdn-pathway-inner reveal">
<p class="fdn-pathway-label">Your Learning Path</p>
<div class="fdn-pathway-steps">
<div class="fdn-pathway-step">
<p class="fdn-pathway-step-label">Start here</p>
<p class="fdn-pathway-step-name">Herb-Curious</p>
<p class="fdn-pathway-step-desc">Community, live workshops &amp; seasonal resources</p>
</div>
<div class="fdn-pathway-arrow">&rarr;</div>
<div class="fdn-pathway-step active">
<p class="fdn-pathway-step-label">You are here</p>
<p class="fdn-pathway-step-name">Foundations</p>
<p class="fdn-pathway-step-desc">Methods course, Materia Medica &amp; community access</p>
</div>
<div class="fdn-pathway-arrow">&rarr;</div>
<div class="fdn-pathway-step">
<p class="fdn-pathway-step-label">Deepen further</p>
<p class="fdn-pathway-step-name">Apprenticeship</p>
<p class="fdn-pathway-step-desc">Year-long immersive study, live mentorship &amp; seasonal ritual</p>
</div>
</div>
</div>
</section>

<!-- PRICING -->
<section class="fdn-pricing" id="join">
<div class="wc-pools">
<div class="wc-pool fdn-pricing-pool-1"></div>
<div class="wc-pool fdn-pricing-pool-2"></div>
</div>
<div class="fdn-pricing-inner">
<div class="reveal">
<p class="fdn-label">Enrollment</p>
<h2 class="fdn-title">Begin when<br /><em>you're ready.</em></h2>
<p class="fdn-pricing-body">Foundations is available on a monthly or annual subscription — enroll any time and start learning the same day. Cancel or pause any time.</p>
<p class="fdn-pricing-body">Your membership includes everything in Herb-Curious, plus the Methods course and full Materia Medica access. As we add new content, it becomes available to you automatically.</p>
</div>
<div class="reveal">
<div class="fdn-pricing-cards">
<div class="fdn-pricing-card">
<p class="fdn-pricing-tier">Monthly</p>
<p class="fdn-pricing-amount"><sup>$</sup>100</p>
<p class="fdn-pricing-period">per month &middot; cancel any time</p>
<a href="https://therootedwisdom.com?msopen=/member/plans/m35cyuhrcz" class="fdn-pricing-cta fdn-cta-ghost">Enroll Monthly</a>
</div>
<div class="fdn-pricing-card featured">
<div class="fdn-pricing-badge">Save 10%</div>
<p class="fdn-pricing-tier">Annual</p>
<p class="fdn-pricing-amount"><sup>$</sup>1,080</p>
<p class="fdn-pricing-period">per year &middot; <span class="fdn-pricing-strikethrough">$1,200</span><span class="fdn-pricing-save">&nbsp;save $120</span></p>
<a href="#" class="fdn-pricing-cta fdn-cta-fill">Enroll Annually</a>
</div>
</div>
</div>
</div>
</section>

<!-- CLOSING CTA -->
<section class="fdn-close">
<div class="wc-pools">
<div class="wc-pool fdn-close-pool-1"></div>
</div>
<div class="fdn-close-inner reveal">
<p class="fdn-label" style="text-align:center;margin-bottom:2rem;">Ready to Begin</p>
<p class="fdn-close-quote">There is a remembering that happens when you start working with the plants in earnest.</p>
<p class="fdn-close-note">Enroll any time. Your access begins immediately.</p>
<div class="fdn-close-buttons">
<a href="#join" class="btn-primary">Enroll Now</a>
<a href="/contact" class="btn-ghost">Ask a Question</a>
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
