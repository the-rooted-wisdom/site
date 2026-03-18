---
layout: layouts/base.njk
title: The Rooted Wisdom Apprenticeship
description: A two-year apprenticeship in herbal medicine, ancestral traditions, and spiritual healing. Year 1 is open for enrollment; Year 2 is by invitation upon completion.
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

  .btn-outline-light {
    font-size: 0.72rem; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--parchment); background: transparent; display: inline-block;
    padding: 0.9rem 2.4rem; border-radius: 3px; border: 1.5px solid rgba(240,230,204,0.4);
    text-decoration: none; transition: all 0.25s;
  }
  .btn-outline-light:hover { background: rgba(240,230,204,0.1); border-color: rgba(240,230,204,0.7); }

  /* ── SHARED ── */
  .sep { height: 1px; background: linear-gradient(90deg, transparent, rgba(139,90,30,0.18), transparent); }

  .appr-section-label {
    font-size: 0.68rem; letter-spacing: 0.32em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1rem; max-width: none;
  }
  .appr-section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 400;
    color: var(--bark); line-height: 1.15; margin-bottom: 1rem; max-width: none;
  }
  .appr-section-title em { font-style: italic; color: var(--rust); }

  /* ── SCROLL REVEAL ── */
  .reveal { opacity: 1; transform: translateY(0); transition: opacity 0.7s ease, transform 0.7s ease; }
  .js-reveal-ready .reveal { opacity: 0; transform: translateY(20px); }
  .js-reveal-ready .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── HERO ── */
  .appr-hero {
    position: relative;
    display: flex; flex-direction: column; justify-content: flex-start;
    padding: 8rem 3rem 7rem;
    overflow: hidden;
    background: var(--parchment);
  }
  .appr-hero-pool-1 { width: 700px; height: 600px; background: #7aaec8; top: -20%; left: -10%; opacity: 0.2; }
  .appr-hero-pool-2 { width: 500px; height: 400px; background: #c9882a; top: 0; right: -10%; opacity: 0.16; }
  .appr-hero-pool-3 { width: 600px; height: 350px; background: #b5601a; bottom: -5%; left: -5%; opacity: 0.15; }
  .appr-hero-pool-4 { width: 350px; height: 300px; background: #7a8a5a; bottom: 15%; right: 5%; opacity: 0.13; }

  .appr-hero::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, rgba(59,32,16,0.04) 1px, transparent 1px);
    background-size: 36px 36px; z-index: 0;
  }

  .appr-hero-content { position: relative; z-index: 2; max-width: 820px; }

  @keyframes appr-fade-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .appr-hero-eyebrow {
    font-size: 0.68rem; letter-spacing: 0.38em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1.5rem; max-width: none;
    animation: appr-fade-rise 1.2s 0.1s ease both;
  }
  .appr-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.2rem, 8vw, 6.5rem); font-weight: 300; line-height: 1.0;
    color: var(--bark); margin-bottom: 0.2em; max-width: none;
    animation: appr-fade-rise 1.2s 0.2s ease both;
  }
  .appr-hero-title em { font-style: italic; color: var(--rust); }
  .appr-hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 300; font-style: italic;
    color: var(--mid-text); margin-bottom: 2.8rem; max-width: none;
    animation: appr-fade-rise 1.2s 0.3s ease both;
  }
  .appr-hero-ctas { display: flex; gap: 1.2rem; flex-wrap: wrap; animation: appr-fade-rise 1.2s 0.4s ease both; }

  .appr-scroll-hint {
    position: absolute; bottom: 2.5rem; right: 3rem; z-index: 2;
    display: flex; align-items: center; gap: 0.6rem;
    font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--soft-text); opacity: 0.5; max-width: none;
  }
  .appr-scroll-hint-line { width: 36px; height: 1px; background: var(--soft-text); }

  /* ── ABOUT ── */
  .appr-about {
    padding: 7rem 3rem; background: var(--parchment2);
    position: relative; overflow: hidden;
  }
  .appr-about-pool-1 { width: 500px; height: 350px; background: #7aaec8; top: -20%; right: -5%; opacity: 0.15; }
  .appr-about-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -20%; left: -5%; opacity: 0.13; }
  .appr-about-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 2fr; gap: 6rem;
    align-items: start; position: relative; z-index: 1;
  }
  .appr-about-pull {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 2rem; max-width: none;
  }
  .appr-about-body { font-size: 0.94rem; font-weight: 300; line-height: 1.9; color: var(--mid-text); max-width: none; }

  /* ── CURRICULUM ── */
  .appr-learn {
    padding: 7rem 3rem; background: var(--parchment);
    position: relative; overflow: hidden;
  }
  .appr-learn-pool-1 { width: 600px; height: 300px; background: #5b8aaa; top: 0; left: 50%; transform: translateX(-50%); opacity: 0.08; }
  .appr-learn-header { text-align: center; max-width: 600px; margin: 0 auto 4rem; position: relative; z-index: 1; }
  .appr-learn-subhead { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); margin-top: 0.5rem; max-width: none; }
  .appr-learn-grid {
    max-width: 1000px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; position: relative; z-index: 1;
  }
  .appr-learn-item {
    padding: 1.5rem 2rem 1.5rem 0;
    border-top: 1px solid rgba(139,90,30,0.12);
    display: flex; align-items: flex-start; gap: 1.1rem;
  }
  .appr-learn-item:nth-child(even) { padding-left: 2.5rem; border-left: 1px solid rgba(139,90,30,0.12); }
  .appr-learn-item:last-child, .appr-learn-item:nth-last-child(2):nth-child(odd) { border-bottom: 1px solid rgba(139,90,30,0.12); }
  .appr-learn-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--rust); flex-shrink: 0; margin-top: 0.55rem; opacity: 0.7; }
  .appr-learn-text { font-size: 0.92rem; font-weight: 300; line-height: 1.65; color: var(--mid-text); max-width: none; }

  /* ── DETAILS ── */
  .appr-details {
    padding: 7rem 3rem; background: var(--parchment3);
    position: relative; overflow: hidden;
  }
  .appr-details-pool-1 { width: 500px; height: 400px; background: #7aaec8; top: -10%; right: -8%; opacity: 0.18; }
  .appr-details-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -15%; left: -5%; opacity: 0.13; }
  .appr-details-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
    align-items: start; position: relative; z-index: 1;
  }
  .appr-details-body { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); margin-top: 0.5rem; margin-bottom: 2rem; max-width: none; }
  .appr-details-note {
    margin-top: 1.5rem; font-size: 0.82rem; font-weight: 300; line-height: 1.7;
    color: var(--soft-text); font-style: italic;
    padding-left: 1rem; border-left: 2px solid rgba(181,96,26,0.25); max-width: none;
  }
  .appr-specs { display: flex; flex-direction: column; gap: 0; }
  .appr-spec-row {
    display: flex; justify-content: space-between; align-items: baseline;
    padding: 1.1rem 0; border-bottom: 1px solid rgba(139,90,30,0.12); gap: 2rem;
  }
  .appr-spec-row:first-child { border-top: 1px solid rgba(139,90,30,0.12); }
  .appr-spec-label { font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--soft-text); max-width: none; }
  .appr-spec-value { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--bark); text-align: right; max-width: none; }
  .appr-spec-value em { font-style: italic; color: var(--rust); }

  /* ── INVESTMENT ── */
  .appr-investment {
    background: var(--bark); padding: 7rem 3rem;
    position: relative; overflow: hidden;
  }
  .appr-investment-pool-1 { width: 600px; height: 500px; background: #b5601a; top: -20%; left: -10%; opacity: 0.2; }
  .appr-investment-pool-2 { width: 400px; height: 350px; background: #5b8aaa; bottom: -20%; right: -5%; opacity: 0.15; }
  .appr-investment-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
    align-items: start; position: relative; z-index: 1;
  }
  .appr-investment .appr-section-label { color: rgba(240,230,204,0.4); }
  .appr-investment .appr-section-title { color: var(--parchment); }
  .appr-investment .appr-section-title em { color: var(--gold-light); }
  .appr-investment-body { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: rgba(240,230,204,0.6); margin-bottom: 1.25rem; max-width: none; }
  .appr-investment-what-label {
    font-size: 0.65rem; letter-spacing: 0.26em; text-transform: uppercase;
    color: rgba(240,230,204,0.35); margin-bottom: 1rem; margin-top: 0.5rem; max-width: none;
  }
  .appr-investment-includes { display: flex; flex-direction: column; gap: 0; }
  .appr-investment-include-item {
    padding: 0.85rem 0; border-bottom: 1px solid rgba(240,230,204,0.08);
    display: flex; align-items: flex-start; gap: 1rem;
    font-size: 0.88rem; font-weight: 300; color: rgba(240,230,204,0.6); line-height: 1.6; max-width: none;
  }
  .appr-investment-include-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold-light); flex-shrink: 0; margin-top: 0.6rem; opacity: 0.7; }
  .appr-investment-fine { font-size: 0.8rem; font-weight: 300; font-style: italic; color: rgba(240,230,204,0.35); margin-top: 1.5rem; line-height: 1.7; max-width: none; }
  .appr-tuition-card { border: 1px solid rgba(240,230,204,0.12); padding: 2.5rem 2.2rem; }
  .appr-tuition-label { font-size: 0.62rem; letter-spacing: 0.26em; text-transform: uppercase; color: rgba(240,230,204,0.35); margin-bottom: 1rem; max-width: none; }
  .appr-tuition-amount {
    font-family: 'Cormorant Garamond', serif;
    font-size: 4rem; font-weight: 300; color: var(--parchment); line-height: 1; margin-bottom: 0.2rem; max-width: none;
  }
  .appr-tuition-amount sup { font-size: 1.5rem; vertical-align: super; }
  .appr-tuition-period { font-size: 0.78rem; font-weight: 300; color: rgba(240,230,204,0.4); margin-bottom: 2rem; max-width: none; }
  .appr-tuition-alt { border-top: 1px solid rgba(240,230,204,0.1); padding-top: 1.5rem; margin-top: 0.5rem; }
  .appr-tuition-alt-row {
    display: flex; justify-content: space-between; align-items: baseline;
    padding: 0.65rem 0; border-bottom: 1px solid rgba(240,230,204,0.07);
    font-size: 0.85rem; font-weight: 300; color: rgba(240,230,204,0.5); max-width: none;
  }
  .appr-tuition-alt-row .appr-value { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; color: var(--gold-light); }
  .appr-tuition-discount { font-size: 0.78rem; font-style: italic; color: rgba(240,230,204,0.4); margin-top: 1rem; max-width: none; }
  .appr-tuition-cta-wrap { margin-top: 1.75rem; }
  .appr-tuition-note { font-size: 0.75rem; font-weight: 300; color: rgba(240,230,204,0.3); text-align: center; margin-top: 0.85rem; line-height: 1.65; max-width: none; }

  /* ── CTA ── */
  .appr-cta {
    padding: 8rem 3rem; background: var(--parchment2);
    text-align: center; position: relative; overflow: hidden;
  }
  .appr-cta-pool-1 { width: 600px; height: 350px; background: #7aaec8; top: -20%; left: 50%; transform: translateX(-50%); opacity: 0.15; }
  .appr-cta-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -20%; right: -5%; opacity: 0.11; }
  .appr-cta-inner { max-width: 600px; margin: 0 auto; position: relative; z-index: 1; }
  .appr-cta-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 1rem; max-width: none;
  }
  .appr-cta-note { font-size: 0.85rem; font-weight: 300; color: var(--soft-text); line-height: 1.7; margin-bottom: 2.5rem; max-width: none; }
  .appr-cta-buttons { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .appr-about-inner { grid-template-columns: 1fr; gap: 3rem; }
    .appr-details-inner { grid-template-columns: 1fr; gap: 3rem; }
    .appr-investment-inner { grid-template-columns: 1fr; gap: 3rem; }
    .appr-learn-grid { grid-template-columns: 1fr; }
    .appr-learn-item:nth-child(even) { padding-left: 0; border-left: none; }
    .appr-hero { padding: 6rem 1.5rem 5rem; }
  }
---

<!-- HERO -->
<section class="appr-hero">
<div class="wc-pools">
<div class="wc-pool appr-hero-pool-1"></div>
<div class="wc-pool appr-hero-pool-2"></div>
<div class="wc-pool appr-hero-pool-3"></div>
<div class="wc-pool appr-hero-pool-4"></div>
</div>
<div class="appr-hero-content">
<p class="appr-hero-eyebrow">A Two-Year Journey</p>
<h1 class="appr-hero-title">Answer the<br /><em>Call of the Roots</em></h1>
<p class="appr-hero-subtitle">A two-year apprenticeship in herbal medicine, ancestral traditions, and spiritual healing.</p>
<div class="appr-hero-ctas">
<a href="#apply" class="btn-primary">Apply Now</a>
<a href="#details" class="btn-ghost">Program Details</a>
</div>
</div>
<div class="appr-scroll-hint">
<div class="appr-scroll-hint-line"></div>
<span>Explore Below</span>
</div>
</section>

<div class="sep"></div>

<!-- ABOUT -->
<section class="appr-about">
<div class="wc-pools">
<div class="wc-pool appr-about-pool-1"></div>
<div class="wc-pool appr-about-pool-2"></div>
</div>
<div class="appr-about-inner">
<div class="reveal">
<p class="appr-section-label">About the Program</p>
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="margin-top:1.5rem;opacity:0.1;">
<circle cx="40" cy="40" r="35" stroke="#3b2010" stroke-width="1"/>
<path d="M40 5 C40 5 30 20 40 32 C50 20 40 5 40 5Z" stroke="#3b2010" stroke-width="1" fill="none"/>
<path d="M40 32 L40 75" stroke="#3b2010" stroke-width="1"/>
<path d="M40 45 C40 45 25 52 22 65" stroke="#3b2010" stroke-width="0.8"/>
<path d="M40 50 C40 50 55 57 58 70" stroke="#3b2010" stroke-width="0.8"/>
</svg>
</div>
<div class="reveal">
<p class="appr-about-pull">An immersive two-year program rooted in the traditions of the African diaspora, the Caribbean, and the Indigenous peoples of Turtle Island — and open to all who feel the call.</p>
<p class="appr-about-body">The Rooted Wisdom Apprenticeship honors the wisdom of our ancestors and the living spirit of the land. This is not a certification course. It is a remembering — an immersive walk with the plants that weaves together materia medica, seasonal practice, hands-on preparation, and the spiritual dimensions of healing.</p>
<p class="appr-about-body" style="margin-top:1.1rem;">Year 1 is open for enrollment and moves through Seasons 1–4. Year 2 deepens the work through Seasons 5–8 and is available by invitation to those who complete the first cycle.</p>
<p class="appr-about-body" style="margin-top:1.1rem;">Through live classes, community gatherings, and direct engagement with plant medicine, you will deepen your relationship with the plants — and with your own lineage.</p>
</div>
</div>
</section>

<div class="sep"></div>

<!-- CURRICULUM -->
<section class="appr-learn">
<div class="wc-pools">
<div class="wc-pool appr-learn-pool-1"></div>
</div>
<div class="appr-learn-header reveal">
<p class="appr-section-label">Curriculum</p>
<h2 class="appr-section-title">What you'll walk <em>away with</em></h2>
<p class="appr-learn-subhead">A living education — grounded in tradition, expanded through practice.</p>
</div>
<div class="appr-learn-grid">
<div class="appr-learn-item reveal">
<div class="appr-learn-dot"></div>
<p class="appr-learn-text">Herbal preparation — teas, tinctures, oils, syrups, salves, and more</p>
</div>
<div class="appr-learn-item reveal">
<div class="appr-learn-dot"></div>
<p class="appr-learn-text">Medicine-making from African, Caribbean, and Indigenous American perspectives</p>
</div>
<div class="appr-learn-item reveal">
<div class="appr-learn-dot"></div>
<p class="appr-learn-text">Plant energetics and spiritual correspondences</p>
</div>
<div class="appr-learn-item reveal">
<div class="appr-learn-dot"></div>
<p class="appr-learn-text">Body systems and holistic support for common ailments</p>
</div>
<div class="appr-learn-item reveal">
<div class="appr-learn-dot"></div>
<p class="appr-learn-text">Working with the seasons, moon phases, and ancestral rhythms</p>
</div>
<div class="appr-learn-item reveal">
<div class="appr-learn-dot"></div>
<p class="appr-learn-text">The spiritual dimensions of healing through ritual and community</p>
</div>
</div>
</section>

<div class="sep"></div>

<!-- PROGRAM DETAILS -->
<section class="appr-details" id="details">
<div class="wc-pools">
<div class="wc-pool appr-details-pool-1"></div>
<div class="wc-pool appr-details-pool-2"></div>
</div>
<div class="appr-details-inner">
<div class="reveal">
<p class="appr-section-label">Program Details</p>
<h2 class="appr-section-title">Two years.<br /><em>Eight seasons.</em></h2>
<p class="appr-details-body">The apprenticeship moves through the seasons — each one building on the last, each one inviting you deeper into the work. Year 1 is open for enrollment. Year 2 continues the journey for those invited to the next cycle.</p>
<div class="appr-details-note">Year 2 is available by invitation upon completion of Year 1 — for those who are ready and called to continue.</div>
</div>
<div class="reveal">
<div class="appr-specs">
<div class="appr-spec-row">
<span class="appr-spec-label">Start Date</span>
<span class="appr-spec-value">April 26th</span>
</div>
<div class="appr-spec-row">
<span class="appr-spec-label">Year 1</span>
<span class="appr-spec-value"><em>Seasons 1–4 · Open enrollment</em></span>
</div>
<div class="appr-spec-row">
<span class="appr-spec-label">Year 2</span>
<span class="appr-spec-value"><em>Seasons 5–8 · By invitation</em></span>
</div>
<div class="appr-spec-row">
<span class="appr-spec-label">Format</span>
<span class="appr-spec-value">Online — live virtual classes + community gatherings</span>
</div>
<div class="appr-spec-row">
<span class="appr-spec-label">Enrollment</span>
<span class="appr-spec-value">Limited — intentionally small</span>
</div>
</div>
</div>
</div>
</section>

<div class="sep"></div>

<!-- INVESTMENT -->
<section class="appr-investment" id="apply">
<div class="wc-pools">
<div class="wc-pool appr-investment-pool-1"></div>
<div class="wc-pool appr-investment-pool-2"></div>
</div>
<div class="appr-investment-inner">
<div class="reveal">
<p class="appr-section-label">Investment</p>
<h2 class="appr-section-title">An investment in your<br /><em>healing and lineage.</em></h2>
<p class="appr-investment-body">This exchange supports the full depth of the work — live mentorship, ancestral teachings, hands-on preparation, seasonal rituals, community, and personalized guidance throughout the year. Tuition is per year of the program.</p>
<p class="appr-investment-what-label">Your tuition includes</p>
<div class="appr-investment-includes">
<div class="appr-investment-include-item">
<div class="appr-investment-include-dot"></div>
Live mentorship and deep ancestral teachings
</div>
<div class="appr-investment-include-item">
<div class="appr-investment-include-dot"></div>
Hands-on herbal preparation and materia medica study
</div>
<div class="appr-investment-include-item">
<div class="appr-investment-include-dot"></div>
Seasonal rituals, community support, and personalized guidance
</div>
<div class="appr-investment-include-item">
<div class="appr-investment-include-dot"></div>
Lifetime access to The Rooted Wisdom Community
</div>
</div>
<p class="appr-investment-fine">Your commitment plants seeds that will nourish you for a lifetime. Space is intentionally limited to preserve the intimacy and potency of the experience.</p>
</div>
<div class="reveal">
<div class="appr-tuition-card">
<p class="appr-tuition-label">Year 1 Tuition</p>
<p class="appr-tuition-amount"><sup>$</sup>6,000</p>
<p class="appr-tuition-period">per year &middot; paid in full discount applied</p>
<div class="appr-tuition-alt">
<div class="appr-tuition-alt-row">
<span>Payment plan</span>
<span class="appr-value">8 &times; $750 / month</span>
</div>
</div>
<p class="appr-tuition-discount">A discount is available for payment in full. Year 2 tuition discussed upon invitation.</p>
</div>
<div class="appr-tuition-cta-wrap">
<a href="https://therootedwisdom.com?msopen=/member/plans/na7svvjauc" class="btn-outline-light" style="display:block;text-align:center;">Sign up Now</a>
<p class="appr-tuition-note">Applications are open. We encourage early applications — enrollment is limited.</p>
</div>
</div>
</div>
</section>

<!-- CLOSING CTA -->
<section class="appr-cta">
<div class="wc-pools">
<div class="wc-pool appr-cta-pool-1"></div>
<div class="wc-pool appr-cta-pool-2"></div>
</div>
<div class="appr-cta-inner reveal">
<p class="appr-section-label" style="text-align:center;margin-bottom:2rem;">Ready to Begin</p>
<p class="appr-cta-quote">We welcome those who feel the call to walk this path.</p>
<p class="appr-cta-note">Applications are now open. Enrollment is limited — we encourage you to apply early.</p>
<div class="appr-cta-buttons">
<a href="#" class="btn-primary">Apply Now</a>
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
