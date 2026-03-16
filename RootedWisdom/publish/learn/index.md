---
layout: layouts/base.njk
title: Learn — The Rooted Wisdom
description: A living herbal school with offerings for every stage of the journey — from curious beginners to seasoned practitioners.
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

  .lrn-label {
    font-size: 0.68rem; letter-spacing: 0.32em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1rem; max-width: none;
  }
  .lrn-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem); font-weight: 400;
    color: var(--bark); line-height: 1.15; margin-bottom: 1rem; max-width: none;
  }
  .lrn-title em { font-style: italic; color: var(--rust); }

  /* ── SCROLL REVEAL ── */
  .reveal { opacity: 1; transform: translateY(0); transition: opacity 0.7s ease, transform 0.7s ease; }
  .js-reveal-ready .reveal { opacity: 0; transform: translateY(20px); }
  .js-reveal-ready .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── HERO ── */
  .lrn-hero {
    position: relative;
    display: flex; flex-direction: column; justify-content: flex-start;
    padding: 8rem 3rem 7rem;
    overflow: hidden;
    background: var(--parchment);
    text-align: center;
  }
  .lrn-hero-pool-1 { width: 700px; height: 500px; background: #7aaec8; top: -20%; left: -10%; opacity: 0.18; }
  .lrn-hero-pool-2 { width: 500px; height: 400px; background: #c9882a; top: -5%; right: -10%; opacity: 0.14; }
  .lrn-hero-pool-3 { width: 500px; height: 350px; background: #7a8a5a; bottom: -10%; left: 20%; opacity: 0.12; }

  .lrn-hero::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, rgba(59,32,16,0.04) 1px, transparent 1px);
    background-size: 36px 36px; z-index: 0;
  }

  .lrn-hero-content { position: relative; z-index: 2; max-width: 680px; margin: 0 auto; }

  @keyframes lrn-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .lrn-hero-eyebrow {
    font-size: 0.68rem; letter-spacing: 0.38em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1.5rem; max-width: none;
    animation: lrn-rise 1.2s 0.1s ease both;
  }
  .lrn-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 300; line-height: 1.05;
    color: var(--bark); margin-bottom: 0.2em; max-width: none;
    animation: lrn-rise 1.2s 0.2s ease both;
  }
  .lrn-hero-title em { font-style: italic; color: var(--rust); }
  .lrn-hero-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2vw, 1.4rem); font-weight: 300; font-style: italic;
    color: var(--mid-text); margin-bottom: 0; max-width: none;
    animation: lrn-rise 1.2s 0.3s ease both;
  }

  /* ── STATEMENT ── */
  .lrn-statement {
    padding: 6rem 3rem; background: var(--parchment2);
    position: relative; overflow: hidden;
  }
  .lrn-statement-pool-1 { width: 500px; height: 350px; background: #7aaec8; top: -20%; right: -5%; opacity: 0.15; }
  .lrn-statement-pool-2 { width: 400px; height: 300px; background: #c9882a; bottom: -20%; left: -5%; opacity: 0.12; }
  .lrn-statement-inner { max-width: 760px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
  .lrn-statement-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 300; line-height: 1.65;
    color: var(--bark); max-width: none;
  }
  .lrn-statement-text em { font-style: italic; color: var(--rust); }

  /* ── PATHWAY STRIP ── */
  .lrn-pathway {
    padding: 5rem 3rem; background: var(--bark);
    position: relative; overflow: hidden;
  }
  .lrn-pathway-pool-1 { width: 700px; height: 400px; background: #b5601a; top: -30%; left: -10%; opacity: 0.18; }
  .lrn-pathway-pool-2 { width: 400px; height: 300px; background: #5b8aaa; bottom: -30%; right: -5%; opacity: 0.15; }
  .lrn-pathway-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
  .lrn-pathway-label { font-size: 0.65rem; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(240,230,204,0.35); margin-bottom: 2.5rem; text-align: center; max-width: none; }
  .lrn-pathway-steps { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0; align-items: center; }
  .lrn-pathway-step {
    padding: 2rem 1.5rem; border: 1px solid rgba(240,230,204,0.1);
    text-align: center; text-decoration: none;
    transition: border-color 0.25s, background 0.25s;
    display: block;
  }
  .lrn-pathway-step:hover { border-color: rgba(240,230,204,0.3); background: rgba(240,230,204,0.05); }
  .lrn-pathway-arrow { text-align: center; color: rgba(240,230,204,0.2); font-size: 1.2rem; padding: 0 0.5rem; max-width: none; }
  .lrn-pathway-step-label { font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(240,230,204,0.3); margin-bottom: 0.5rem; max-width: none; }
  .lrn-pathway-step-name { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 400; color: rgba(240,230,204,0.6); line-height: 1.2; margin-bottom: 0.4rem; max-width: none; }
  .lrn-pathway-step:hover .lrn-pathway-step-name { color: var(--parchment); }
  .lrn-pathway-step-desc { font-size: 0.72rem; font-weight: 300; color: rgba(240,230,204,0.28); line-height: 1.5; max-width: none; }
  .lrn-pathway-step:hover .lrn-pathway-step-desc { color: rgba(240,230,204,0.5); }
  .lrn-pathway-step-price { font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; color: var(--gold-light); margin-top: 0.6rem; opacity: 0.7; max-width: none; }

  /* ── TIER CARDS ── */
  .lrn-tiers {
    padding: 7rem 3rem; background: var(--parchment);
    position: relative; overflow: hidden;
  }
  .lrn-tiers-pool-1 { width: 600px; height: 300px; background: #5b8aaa; top: 0; left: 50%; transform: translateX(-50%); opacity: 0.07; }
  .lrn-tiers-header { text-align: center; max-width: 600px; margin: 0 auto 4rem; position: relative; z-index: 1; }
  .lrn-tiers-sub { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); margin-top: 0.5rem; max-width: none; }
  .lrn-tiers-grid {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem; position: relative; z-index: 1;
  }
  .lrn-tier-card {
    background: rgba(240,230,204,0.55);
    border: 1px solid rgba(139,90,30,0.13);
    padding: 2.8rem 2.4rem; border-radius: 2px;
    position: relative; text-decoration: none; color: inherit;
    display: flex; flex-direction: column;
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  }
  .lrn-tier-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--rust); transform: scaleX(0);
    transition: transform 0.4s ease; transform-origin: left;
  }
  .lrn-tier-card:hover::before { transform: scaleX(1); }
  .lrn-tier-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(59,32,16,0.09); background: rgba(255,250,240,0.95); }
  .lrn-tier-card.dark {
    background: var(--bark); border-color: rgba(240,230,204,0.1);
  }
  .lrn-tier-card.dark::before { background: var(--gold-light); }
  .lrn-tier-card.dark:hover { background: var(--bark-mid); box-shadow: 0 12px 40px rgba(59,32,16,0.3); }
  .lrn-tier-tag {
    font-size: 0.6rem; letter-spacing: 0.24em; text-transform: uppercase;
    color: var(--blue-wc3); margin-bottom: 1rem; max-width: none;
  }
  .lrn-tier-card.dark .lrn-tier-tag { color: rgba(240,230,204,0.4); }
  .lrn-tier-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 400;
    color: var(--bark); line-height: 1.15; margin-bottom: 0.4rem; max-width: none;
  }
  .lrn-tier-name em { font-style: italic; color: var(--rust); }
  .lrn-tier-card.dark .lrn-tier-name { color: var(--parchment); }
  .lrn-tier-card.dark .lrn-tier-name em { color: var(--gold-light); }
  .lrn-tier-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 300; font-style: italic;
    color: var(--soft-text); margin-bottom: 1.5rem; max-width: none;
  }
  .lrn-tier-card.dark .lrn-tier-tagline { color: rgba(240,230,204,0.45); }
  .lrn-tier-body { font-size: 0.88rem; font-weight: 300; line-height: 1.8; color: var(--mid-text); flex: 1; margin-bottom: 1.75rem; max-width: none; }
  .lrn-tier-card.dark .lrn-tier-body { color: rgba(240,230,204,0.58); }
  .lrn-tier-includes { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 2rem; }
  .lrn-tier-include {
    display: flex; align-items: flex-start; gap: 0.7rem;
    font-size: 0.82rem; font-weight: 300; color: var(--mid-text); line-height: 1.5; max-width: none;
  }
  .lrn-tier-card.dark .lrn-tier-include { color: rgba(240,230,204,0.5); }
  .lrn-tier-include-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--rust); flex-shrink: 0; margin-top: 0.55rem; opacity: 0.65; }
  .lrn-tier-card.dark .lrn-tier-include-dot { background: var(--gold-light); }
  .lrn-tier-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 1.5rem; border-top: 1px solid rgba(139,90,30,0.1); }
  .lrn-tier-card.dark .lrn-tier-footer { border-color: rgba(240,230,204,0.08); }
  .lrn-tier-price { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 300; color: var(--bark); max-width: none; }
  .lrn-tier-price span { font-size: 0.75rem; font-weight: 300; font-family: 'Jost', sans-serif; color: var(--soft-text); display: block; }
  .lrn-tier-card.dark .lrn-tier-price { color: var(--gold-light); }
  .lrn-tier-card.dark .lrn-tier-price span { color: rgba(240,230,204,0.35); }
  .lrn-tier-cta {
    font-size: 0.68rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
    padding: 0.65rem 1.4rem; border-radius: 3px; text-decoration: none; transition: all 0.25s;
    border: 1.5px solid var(--bark); color: var(--bark);
  }
  .lrn-tier-cta:hover { background: var(--bark); color: var(--parchment); }
  .lrn-tier-card.dark .lrn-tier-cta { border-color: rgba(240,230,204,0.3); color: var(--parchment); }
  .lrn-tier-card.dark .lrn-tier-cta:hover { background: rgba(240,230,204,0.1); border-color: rgba(240,230,204,0.6); }

  /* ── NOT SURE SECTION ── */
  .lrn-unsure {
    padding: 7rem 3rem; background: var(--parchment2);
    text-align: center; position: relative; overflow: hidden;
  }
  .lrn-unsure-pool-1 { width: 600px; height: 350px; background: #7aaec8; top: -20%; left: 50%; transform: translateX(-50%); opacity: 0.14; }
  .lrn-unsure-inner { max-width: 580px; margin: 0 auto; position: relative; z-index: 1; }
  .lrn-unsure-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 300; font-style: italic;
    color: var(--bark); line-height: 1.55; margin-bottom: 1rem; max-width: none;
  }
  .lrn-unsure-body { font-size: 0.88rem; font-weight: 300; color: var(--soft-text); line-height: 1.75; margin-bottom: 2.5rem; max-width: none; }
  .lrn-unsure-ctas { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .lrn-tiers-grid { grid-template-columns: 1fr; }
    .lrn-pathway-steps { grid-template-columns: 1fr; }
    .lrn-pathway-arrow { display: none; }
    .lrn-hero { padding: 6rem 1.5rem 5rem; }
  }
---

<!-- HERO -->
<section class="lrn-hero">
<div class="wc-pools">
<div class="wc-pool lrn-hero-pool-1"></div>
<div class="wc-pool lrn-hero-pool-2"></div>
<div class="wc-pool lrn-hero-pool-3"></div>
</div>
<div class="lrn-hero-content">
<p class="lrn-hero-eyebrow">A Living Herbal School</p>
<h1 class="lrn-hero-title">Every path begins<br />with <em>a single plant.</em></h1>
<p class="lrn-hero-sub">Find the offering that meets you where you are.</p>
</div>
</section>

<div class="sep"></div>

<!-- STATEMENT -->
<section class="lrn-statement">
<div class="wc-pools">
<div class="wc-pool lrn-statement-pool-1"></div>
<div class="wc-pool lrn-statement-pool-2"></div>
</div>
<div class="lrn-statement-inner reveal">
<p class="lrn-label" style="text-align:center;margin-bottom:1.5rem;">The School</p>
<p class="lrn-statement-text">Learning at The Rooted Wisdom is not linear — it is <em>cyclical, cumulative, and alive.</em> Whether you're beginning in curiosity or deepening a decades-long practice, there is a place for you here. Each path builds on the last. Each door opens another.</p>
</div>
</section>

<!-- PATHWAY STRIP -->
<section class="lrn-pathway">
<div class="wc-pools">
<div class="wc-pool lrn-pathway-pool-1"></div>
<div class="wc-pool lrn-pathway-pool-2"></div>
</div>
<div class="lrn-pathway-inner reveal">
<p class="lrn-pathway-label">The Learning Path</p>
<div class="lrn-pathway-steps">
<a href="/learn/community" class="lrn-pathway-step">
<p class="lrn-pathway-step-label">Begin here</p>
<p class="lrn-pathway-step-name">Herb-Curious</p>
<p class="lrn-pathway-step-desc">Community, live workshops &amp; seasonal resources</p>
<p class="lrn-pathway-step-price">from $15 / mo</p>
</a>
<div class="lrn-pathway-arrow">&rarr;</div>
<a href="/learn/foundations" class="lrn-pathway-step">
<p class="lrn-pathway-step-label">Deepen study</p>
<p class="lrn-pathway-step-name">Foundations</p>
<p class="lrn-pathway-step-desc">Methods course, Materia Medica &amp; community</p>
<p class="lrn-pathway-step-price">from $100 / mo</p>
</a>
<div class="lrn-pathway-arrow">&rarr;</div>
<a href="/learn/apprentice" class="lrn-pathway-step">
<p class="lrn-pathway-step-label">Immersive study</p>
<p class="lrn-pathway-step-name">Apprenticeship</p>
<p class="lrn-pathway-step-desc">Two-year program, live mentorship &amp; ritual</p>
<p class="lrn-pathway-step-price">$6,000 / year</p>
</a>
<div class="lrn-pathway-arrow">&rarr;</div>
<a href="/learn/pods" class="lrn-pathway-step">
<p class="lrn-pathway-step-label">For practitioners</p>
<p class="lrn-pathway-step-name">Pods</p>
<p class="lrn-pathway-step-desc">Peer mentorship &amp; advanced practice circles</p>
<p class="lrn-pathway-step-price">from $10 / mo</p>
</a>
</div>
</div>
</section>

<div class="sep"></div>

<!-- TIER CARDS -->
<section class="lrn-tiers">
<div class="wc-pools">
<div class="wc-pool lrn-tiers-pool-1"></div>
</div>
<div class="lrn-tiers-header reveal">
<p class="lrn-label">All Offerings</p>
<h2 class="lrn-title">Find your <em>entry point.</em></h2>
<p class="lrn-tiers-sub">Each path is complete on its own — and each one opens naturally into the next.</p>
</div>
<div class="lrn-tiers-grid">
<a href="/learn/community" class="lrn-tier-card reveal">
<p class="lrn-tier-tag">Community · Open Enrollment</p>
<h2 class="lrn-tier-name">Herb-<em>Curious</em></h2>
<p class="lrn-tier-tagline">A place to explore, root, and remember.</p>
<p class="lrn-tier-body">For the plant-curious, potion-dabblers, and everyday magic makers. A private community with live workshops, seasonal resources, and a living library — all in one place, with no pressure and no deadlines.</p>
<div class="lrn-tier-includes">
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Live virtual workshops &amp; replays</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Seasonal resources, zines &amp; recipes</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Private community discussions</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Rhythmic living tools &amp; prompts</div>
</div>
<div class="lrn-tier-footer">
<div class="lrn-tier-price">$15 <em style="font-style:normal;">/</em> mo<span>or $150 / year · save $30</span></div>
<span class="lrn-tier-cta">Join Now</span>
</div>
</a>
<a href="/learn/foundations" class="lrn-tier-card reveal">
<p class="lrn-tier-tag">Course · Self-Paced</p>
<h2 class="lrn-tier-name">Foundations in <em>Herbalism</em></h2>
<p class="lrn-tier-tagline">Where your herbal journey deepens.</p>
<p class="lrn-tier-body">A grounded, self-paced introduction to the practice, language, and lineage of plant medicine. Includes the full Methods of Preparation course, Materia Medica library access, and everything in Herb-Curious.</p>
<div class="lrn-tier-includes">
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Methods of Preparation — full course</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Materia Medica library access</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Everything in Herb-Curious</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>No deadlines — learn at your own pace</div>
</div>
<div class="lrn-tier-footer">
<div class="lrn-tier-price">$100 <em style="font-style:normal;">/</em> mo<span>or $1,080 / year · save 10%</span></div>
<span class="lrn-tier-cta">Enroll Now</span>
</div>
</a>
<a href="/learn/apprentice" class="lrn-tier-card dark reveal">
<p class="lrn-tier-tag">Program · Cohort-Based</p>
<h2 class="lrn-tier-name">The Rooted Wisdom<br /><em>Apprenticeship</em></h2>
<p class="lrn-tier-tagline">Answer the call of the roots.</p>
<p class="lrn-tier-body">A two-year immersive apprenticeship in herbal medicine, ancestral traditions, and spiritual healing. Live classes, seasonal ritual, hands-on preparation, and personal mentorship — across two full years of practice.</p>
<div class="lrn-tier-includes">
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Year 1 open · Year 2 by invitation</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Live virtual classes &amp; community gatherings</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Mentorship &amp; personalized guidance</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Lifetime Rooted Wisdom Community access</div>
</div>
<div class="lrn-tier-footer">
<div class="lrn-tier-price">$6,000<span>per year · or 8 payments of $750</span></div>
<span class="lrn-tier-cta">Apply Now</span>
</div>
</a>
<a href="/learn/pods" class="lrn-tier-card dark reveal">
<p class="lrn-tier-tag">Community · For Practitioners</p>
<h2 class="lrn-tier-name">Practitioner<br /><em>Pods</em></h2>
<p class="lrn-tier-tagline">Where experienced herbalists continue to grow together.</p>
<p class="lrn-tier-body">A mentorship-based peer community for seasoned spiritual herbalists. Small cohorts, self-organized study, case discussions, cross-cohort gatherings, and teaching opportunities — with a shared vision for a community free clinic.</p>
<div class="lrn-tier-includes">
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Small cohorts of 6–10 practitioners</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Case review &amp; resource library</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Teaching opportunities on the platform</div>
<div class="lrn-tier-include"><div class="lrn-tier-include-dot"></div>Open to experienced herbalists</div>
</div>
<div class="lrn-tier-footer">
<div class="lrn-tier-price">$10 <em style="font-style:normal;">/</em> mo<span>or $100 / year · 2 months free</span></div>
<span class="lrn-tier-cta">Join the Circle</span>
</div>
</a>
</div>
</section>

<!-- NOT SURE WHERE TO START -->
<section class="lrn-unsure">
<div class="wc-pools">
<div class="wc-pool lrn-unsure-pool-1"></div>
</div>
<div class="lrn-unsure-inner reveal">
<p class="lrn-label" style="text-align:center;margin-bottom:2rem;">Not Sure Where to Begin?</p>
<p class="lrn-unsure-quote">Start with curiosity. Everything else unfolds from there.</p>
<p class="lrn-unsure-body">Herb-Curious is the natural starting point for most people — a low-barrier way to explore the community, the plants, and the practice before committing to deeper study. Or reach out and we'll help you find your path.</p>
<div class="lrn-unsure-ctas">
<a href="/learn/community" class="btn-primary">Start with Herb-Curious</a>
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
