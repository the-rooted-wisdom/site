---
layout: layouts/base.njk
title: New Orleans Ancestral Excursion
description: An intimate journey to one of the most ancestrally charged cities in the African diaspora — held at the convergence of Samhain, Día de los Muertos, and Halloween. October 29–November 1, 2026.
ogimage: /assets/img/og-nola-retreat.jpg
pageStyles: |
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream:     #f5f0e8;
    --warm-off:  #ede6d6;
    --bark:      #3b2a1a;
    --moss:      #4a5240;
    --gold:      #b8933e;
    --gold-light:#d4af6a;
    --rust:      #8b4513;
    --sage:      #7a8a6a;
    --ink:       #1e1610;
    --mist:      rgba(245,240,232,0.08);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--ink);
    color: var(--cream);
    overflow-x: hidden;
  }

  /* ─── APPEAR ANIMATION ─── */
  @keyframes appear {
    from { opacity: 0; transform: scale(0.9) translateX(-2px); }
    to   { opacity: 1; transform: scale(1) translateX(0); }
  }

  .appear { animation: appear 2s cubic-bezier(0.44,0,0.56,1) both; }
  .appear-d1 { animation-delay: 0.15s; }
  .appear-d2 { animation-delay: 0.3s; }
  .appear-d3 { animation-delay: 0.45s; }
  .appear-d4 { animation-delay: 0.6s; }
  .appear-d5 { animation-delay: 0.75s; }

  /* ─── HERO ─── */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5rem 2rem 6rem;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% 30%, rgba(74,82,64,0.35) 0%, transparent 70%),
      radial-gradient(ellipse 60% 80% at 20% 80%, rgba(139,69,19,0.18) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 80% 60%, rgba(184,147,62,0.12) 0%, transparent 60%),
      linear-gradient(180deg, #120a06 0%, #1e1008 50%, #0d0a06 100%);
  }

  .hero-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle 1px at 15% 25%, rgba(184,147,62,0.4) 0%, transparent 100%),
      radial-gradient(circle 1px at 85% 70%, rgba(184,147,62,0.3) 0%, transparent 100%),
      radial-gradient(circle 1px at 50% 55%, rgba(184,147,62,0.2) 0%, transparent 100%);
  }

  .retreat-tag {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.75;
    position: relative;
    z-index: 2;
    margin-bottom: 1.5rem;
    max-width: none;
  }

  .ornament {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.8rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.85;
    margin-bottom: 1.8rem;
    position: relative;
    z-index: 2;
    max-width: none;
  }

  .ornament::before,
  .ornament::after {
    content: '—';
    margin: 0 0.75rem;
    opacity: 0.6;
  }

  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 300;
    line-height: 1.0;
    letter-spacing: -0.01em;
    color: var(--cream);
    position: relative;
    z-index: 2;
    max-width: none;
  }

  .hero h1 em { font-style: italic; color: var(--gold-light); }

  .hero-date {
    margin-top: 2rem;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--sage);
    position: relative;
    z-index: 2;
    max-width: none;
  }

  .hero-location {
    margin-top: 0.5rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: italic;
    color: var(--gold-light);
    opacity: 0.9;
    position: relative;
    z-index: 2;
    max-width: none;
  }

  .hero-desc {
    max-width: 560px;
    margin: 2.5rem auto 0;
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(245,240,232,0.75);
    position: relative;
    z-index: 2;
  }

  .hero-cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 3rem;
    position: relative;
    z-index: 2;
    flex-wrap: wrap;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: var(--gold);
    opacity: 0.45;
    font-size: 1.3rem;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(8px); }
  }

  /* ─── BUTTONS ─── */
  .btn-primary {
    display: inline-block;
    background: var(--gold);
    color: var(--ink);
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 1rem 2.2rem;
    text-decoration: none;
    border-radius: 2px;
    transition: background 0.25s, transform 0.2s;
    cursor: pointer;
    border: none;
    font-family: 'Jost', sans-serif;
  }

  .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }

  .btn-outline {
    display: inline-block;
    border: 1px solid rgba(184,147,62,0.5);
    color: var(--gold-light);
    font-size: 0.82rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 1rem 2.2rem;
    text-decoration: none;
    border-radius: 2px;
    transition: border-color 0.25s, color 0.25s, transform 0.2s;
  }

  .btn-outline:hover { border-color: var(--gold-light); color: var(--cream); transform: translateY(-2px); }

  .btn-sm { font-size: 0.75rem; padding: 0.75rem 1.6rem; }

  /* ─── EARLY BIRD CALLOUT ─── */
  .early-bird {
    padding: 0 2rem;
    background: #0d0a06;
  }

  .early-bird-inner {
    max-width: 980px;
    margin: 0 auto;
    border: 1px solid rgba(184,147,62,0.4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.4rem 2.5rem;
    background: rgba(184,147,62,0.05);
    flex-wrap: wrap;
  }

  .early-bird-left {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .early-bird-pip {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--gold);
    flex-shrink: 0;
    animation: pip-pulse 2s ease-in-out infinite;
  }

  @keyframes pip-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.65); }
  }

  .early-bird-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    max-width: none;
  }

  .early-bird-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: var(--cream);
    max-width: none;
  }

  .early-bird-text em { font-style: italic; color: var(--gold-light); }

  .early-bird-deadline {
    font-size: 0.78rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: rgba(245,240,232,0.45);
    text-align: right;
    flex-shrink: 0;
    max-width: none;
  }

  .early-bird-deadline strong {
    display: block;
    font-weight: 500;
    color: var(--gold-light);
    font-size: 0.88rem;
    letter-spacing: 0.14em;
    margin-bottom: 0.15rem;
    max-width: none;
  }

  /* ─── DIVIDER ─── */
  .divider {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    max-width: 320px;
    margin: 0 auto;
    opacity: 0.35;
  }

  .divider span { flex: 1; height: 1px; background: var(--gold); }

  .divider-leaf { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--gold); }

  /* ─── SECTIONS ─── */
  section { padding: 6rem 2rem; }

  .container { max-width: 980px; margin: 0 auto; }

  .container-narrow { max-width: 640px; margin: 0 auto; }

  .section-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.75;
    text-align: center;
    margin-bottom: 1rem;
    max-width: none;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 300;
    line-height: 1.15;
    text-align: center;
    color: var(--cream);
    margin-bottom: 1.5rem;
    max-width: none;
  }

  .section-title em { font-style: italic; color: var(--gold-light); }

  .body-text {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.85;
    color: rgba(245,240,232,0.72);
    text-align: center;
    max-width: none;
  }

  /* ─── CONVERGENCE ─── */
  .convergence { background: linear-gradient(180deg, #0d0a06 0%, #141008 100%); }

  .conv-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }

  .conv-card {
    border: 1px solid rgba(184,147,62,0.12);
    background: rgba(184,147,62,0.03);
    padding: 2.5rem 2rem;
    transition: border-color 0.3s, background 0.3s;
  }

  .conv-card:hover { border-color: rgba(184,147,62,0.28); background: rgba(184,147,62,0.07); }

  .conv-card-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.7;
    margin-bottom: 0.6rem;
    max-width: none;
  }

  .conv-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--gold-light);
    margin-bottom: 1rem;
    max-width: none;
  }

  .conv-card-body {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(245,240,232,0.6);
    max-width: none;
  }

  /* ─── DETAILS ─── */
  .details-section { background: #100d08; }

  .details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 4rem;
    align-items: start;
  }

  .detail-block { border-left: 2px solid rgba(184,147,62,0.3); padding-left: 1.75rem; }

  .detail-block h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--gold-light);
    margin-bottom: 0.75rem;
    font-style: italic;
    max-width: none;
  }

  .detail-block p {
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(245,240,232,0.65);
    max-width: none;
  }

  /* ─── PRICING ─── */
  .pricing-section { background: linear-gradient(180deg, #0a0806 0%, #0f0c08 100%); }

  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 4rem;
    align-items: start;
  }

  .pricing-card {
    padding: 3rem 2.5rem;
    border: 1px solid rgba(184,147,62,0.15);
    background: rgba(184,147,62,0.03);
    position: relative;
  }

  .pricing-card.vip {
    border-color: rgba(184,147,62,0.45);
    background: rgba(184,147,62,0.07);
  }

  .pricing-card.vip::before {
    content: 'VIP';
    position: absolute;
    top: -1px;
    right: 2rem;
    background: var(--gold);
    color: var(--ink);
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    padding: 0.3rem 0.9rem;
  }

  .pricing-tier {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.8;
    margin-bottom: 0.6rem;
    max-width: none;
  }

  .pricing-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    color: var(--cream);
    margin-bottom: 0.75rem;
    max-width: none;
  }

  .pricing-amount {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.2rem;
    font-weight: 300;
    color: var(--gold-light);
    line-height: 1;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: baseline;
    gap: 1rem;
    max-width: none;
  }

  .pricing-amount sup {
    font-size: 1.4rem;
    vertical-align: super;
    color: var(--gold);
    opacity: 0.8;
  }

  .pricing-amount .full-price {
    font-size: 1.5rem;
    color: rgba(245,240,232,0.3);
    text-decoration: line-through;
    text-decoration-color: rgba(245,240,232,0.2);
  }

  .pricing-amount .full-price sup {
    font-size: 0.85rem;
    color: rgba(245,240,232,0.3);
    opacity: 1;
  }

  .pricing-savings {
    font-size: 0.78rem;
    font-weight: 300;
    color: var(--sage);
    font-style: italic;
    margin-bottom: 0.5rem;
    letter-spacing: 0.04em;
    max-width: none;
  }

  .pricing-note {
    font-size: 0.75rem;
    font-weight: 300;
    color: rgba(245,240,232,0.32);
    letter-spacing: 0.06em;
    font-style: italic;
    margin-bottom: 1.75rem;
    max-width: none;
  }

  .pricing-divider { height: 1px; background: rgba(184,147,62,0.15); margin-bottom: 1.75rem; }

  .pricing-includes { list-style: none; margin-bottom: 2.5rem; }

  .pricing-includes li {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(245,240,232,0.62);
    padding: 0.55rem 0 0.55rem 1.4rem;
    position: relative;
    border-bottom: 1px solid rgba(184,147,62,0.07);
    max-width: none;
  }

  .pricing-includes li:last-child { border-bottom: none; }

  .pricing-includes li::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: var(--gold);
    opacity: 0.45;
    font-size: 0.5rem;
    top: 0.7rem;
  }

  .pricing-includes li.vip-item { color: rgba(212,175,106,0.85); }
  .pricing-includes li.vip-item::before { opacity: 0.9; }

  .pricing-cta { display: block; text-align: center; }

  .pricing-footer-note {
    text-align: center;
    margin-top: 2.5rem;
    font-size: 0.82rem;
    font-weight: 300;
    color: rgba(245,240,232,0.3);
    letter-spacing: 0.06em;
    font-style: italic;
    max-width: none;
  }

  /* ─── HOSTS ─── */
  .hosts-section { background: linear-gradient(180deg, #100d08 0%, #0a0806 100%); }

  .hosts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }

  .host-card {
    text-align: center;
    padding: 2.5rem 1.5rem;
    border: 1px solid rgba(184,147,62,0.12);
    background: rgba(184,147,62,0.03);
    transition: border-color 0.3s, background 0.3s;
  }

  .host-card:hover { border-color: rgba(184,147,62,0.3); background: rgba(184,147,62,0.06); }

  .host-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
    border: 2px solid rgba(184,147,62,0.35);
    margin: 0 auto 1.25rem;
    display: block;
    filter: sepia(15%) contrast(1.05);
  }

  .host-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--cream);
    margin-bottom: 0.4rem;
    max-width: none;
  }

  .host-title {
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.75;
    margin-bottom: 1rem;
    max-width: none;
  }

  .host-bio {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(245,240,232,0.55);
    font-style: italic;
    max-width: none;
  }

  /* ─── SWAG ─── */
  .swag-section { background: #0a0806; }

  .swag-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 3.5rem 0 3rem;
  }

  .swag-item {
    border: 1px solid rgba(184,147,62,0.1);
    background: rgba(184,147,62,0.03);
    padding: 2rem 1rem 1.5rem;
    text-align: center;
    transition: border-color 0.3s, background 0.3s;
  }

  .swag-item:hover { border-color: rgba(184,147,62,0.28); background: rgba(184,147,62,0.06); }

  .swag-icon { font-size: 2rem; margin-bottom: 0.75rem; opacity: 0.65; max-width: none; }

  .swag-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--cream);
    margin-bottom: 0.3rem;
    max-width: none;
  }

  .swag-note {
    font-size: 0.76rem;
    font-weight: 300;
    color: rgba(245,240,232,0.38);
    font-style: italic;
    max-width: none;
  }

  .swag-cta { text-align: center; }

  .swag-coming-soon {
    font-size: 0.85rem;
    font-weight: 300;
    color: rgba(245,240,232,0.35);
    font-style: italic;
    letter-spacing: 0.06em;
    max-width: none;
  }

  /* ─── CTA SECTION ─── */
  .cta-section {
    background: linear-gradient(180deg, #0a0806 0%, #120a04 100%);
    text-align: center;
  }

  .cta-section .divider { margin-bottom: 3rem; }
  .cta-section .section-title { margin-bottom: 1.25rem; }
  .cta-section .body-text { max-width: 480px; margin: 0 auto 3rem; }

  .date-badge {
    display: inline-block;
    border: 1px solid rgba(184,147,62,0.35);
    padding: 0.6rem 2rem;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-light);
    margin-bottom: 3rem;
    max-width: none;
  }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 768px) {
    .conv-cards { grid-template-columns: 1fr; }
    .details-grid { grid-template-columns: 1fr; }
    .pricing-grid { grid-template-columns: 1fr; }
    .hosts-grid { grid-template-columns: 1fr; }
    .swag-grid { grid-template-columns: repeat(2, 1fr); }
    section { padding: 4rem 1.5rem; }
    .early-bird-inner { flex-direction: column; gap: 1rem; }
    .early-bird-deadline { text-align: left; }
  }
---

<!-- HERO -->
<header class="hero">
<div class="hero-bg"></div>
<p class="retreat-tag appear">A Rooted Wisdom Retreat</p>
<p class="ornament appear appear-d1">Early Bird Now Open</p>
<h1 class="appear appear-d2">An Ancestral<br><em>Excursion</em></h1>
<p class="hero-date appear appear-d3">October 29 – November 1, 2026</p>
<p class="hero-location appear appear-d3">New Orleans, Louisiana</p>
<p class="hero-desc appear appear-d4">An intimate journey to one of the most ancestrally charged cities in the African diaspora — held at the convergence of Samhain, Día de los Muertos, and Halloween.</p>
<div class="hero-cta-group appear appear-d5">
<a href="#pricing" class="btn-primary">Reserve Your Spot</a>
<a href="#convergence" class="btn-outline">Learn More</a>
</div>
<p class="scroll-indicator">↓</p>
</header>

<!-- EARLY BIRD CALLOUT -->
<div class="early-bird">
<div class="early-bird-inner">
<div class="early-bird-left">
<div class="early-bird-pip"></div>
<p class="early-bird-label">Early Bird</p>
<p class="early-bird-text">Only <em>8 spots</em> available at this rate</p>
</div>
<div class="early-bird-deadline">
<strong>May 30, 2026</strong>
Pricing deadline
</div>
</div>
</div>

<!-- CONVERGENCE -->
<section class="convergence" id="convergence">
<div class="container-narrow">
<p class="section-label">Why Now. Why Here.</p>
<h2 class="section-title">A <em>Potent Window</em></h2>
<p class="body-text">Each year, three ancient traditions converge in late October — Samhain, Día de los Muertos, and Halloween — creating a collective opening to the unseen. The veil thins. The ancestors draw near. New Orleans holds that portal unlike anywhere else on this continent: a city built on ceremony, creolized medicine, and the enduring memory of those who survived the crossing.</p>
<p class="body-text" style="margin-top:1.5rem;">This isn't a tour. It is a grounding — in place, in lineage, in the heritage we carry as part of the African diaspora.</p>
</div>
<div class="container" style="margin-top:3rem;">
<div class="conv-cards">
<div class="conv-card">
<p class="conv-card-label">When</p>
<p class="conv-card-title">A Sacred Window</p>
<p class="conv-card-body">Each year at the turn of October, something shifts. Samhain, Día de los Muertos, and Halloween arrive together — three distinct traditions, each holding its own way of remembering the dead. In that overlap, the veil thins and the ancestors draw near. This excursion is timed to that opening, intentionally.</p>
</div>
<div class="conv-card">
<p class="conv-card-label">Where</p>
<p class="conv-card-title">New Orleans, Louisiana</p>
<p class="conv-card-body">There is a reason we are going here. New Orleans is one of the most ancestrally alive cities in this diaspora — shaped by Vodou, Yoruba memory, creolized medicine, and centuries of resistance. The city itself is ceremony. We'll move through it as descendants, not tourists.</p>
</div>
<div class="conv-card">
<p class="conv-card-label">The Experience</p>
<p class="conv-card-title">Curated, Spacious, Intentional</p>
<p class="conv-card-body">This trip is a blend of guided group time and space to wander on your own. Dara, Julie, and Ericka will hold ceremony, lead cultural immersions, and curate experiences rooted in ancestral connection and plant medicine. There is also room to simply be present — to let the city, the season, and your own lineage do their work.</p>
</div>
</div>
</div>
</section>

<!-- WHAT TO EXPECT -->
<section class="details-section">
<div class="container">
<p class="section-label">What to Expect</p>
<h2 class="section-title" style="text-align:center;">Rooted, <em>Spacious</em>, Intentional</h2>
<p class="body-text" style="margin-bottom:0;">A blend of guided group time and independent space — honoring that ancestral work moves at its own pace.</p>
<div class="details-grid" style="margin-top:3.5rem;">
<div class="detail-block">
<h3>Ancestral Connection</h3>
<p>Rituals, altars, and ceremony woven throughout — led with care and without performance. Opportunities to honor your lineage, grieve, and receive.</p>
</div>
<div class="detail-block">
<h3>Cultural Heritage</h3>
<p>We move through the city as students and descendants — visiting sites of memory, resistance, and ceremony that shaped this diaspora.</p>
</div>
<div class="detail-block">
<h3>Plant Medicine</h3>
<p>The herbs of New Orleans carry deep story. We'll engage with local plant medicine, food traditions, and the botanical lineages of this land.</p>
</div>
<div class="detail-block">
<h3>Community</h3>
<p>Intimate group size. Time to gather, share meals, and deepen relationship with fellow travelers on this path.</p>
</div>
</div>
</div>
</section>

<!-- PRICING -->
<section class="pricing-section" id="pricing">
<div class="container">
<p class="section-label">Early Bird Pricing</p>
<h2 class="section-title">Choose Your <em>Journey</em></h2>
<p class="body-text">Early bird pricing is available through May 30, 2026 — or until all 8 spots are filled, whichever comes first.</p>
<div class="pricing-grid">
<div class="pricing-card">
<p class="pricing-tier">General</p>
<p class="pricing-name">The Excursion</p>
<p class="pricing-amount"><sup>$</sup>595 &nbsp;<span class="full-price"><sup>$</sup>725</span></p>
<p class="pricing-savings">You save $130 by registering before May 30</p>
<p class="pricing-note">Early bird rate &nbsp;·&nbsp; After May 30: $725</p>
<div class="pricing-divider"></div>
<ul class="pricing-includes">
<li>All group ceremonies and rituals</li>
<li>Guided cultural immersions throughout New Orleans</li>
<li>Plant medicine experiences and botanical walks</li>
<li>Welcome Ceremony dinner</li>
<li>Access to all scheduled programming Oct 29–Nov 1</li>
</ul>
<div class="pricing-cta">
<a href="https://buy.stripe.com/3cI28r79FbnOeo11UF0480b" class="btn-outline btn-sm">Enroll Now</a>
</div>
</div>
<div class="pricing-card vip">
<p class="pricing-tier">VIP</p>
<p class="pricing-name">The Full Immersion</p>
<p class="pricing-amount"><sup>$</sup>950</p>
<p class="pricing-note">All-inclusive VIP rate</p>
<div class="pricing-divider"></div>
<ul class="pricing-includes">
<li>Everything in The Excursion</li>
<li class="vip-item">A private consultation with your choice of guide: Dara, Julie, or Ericka — before or after the retreat</li>
<li class="vip-item">Intimate shared meal with your guides</li>
<li class="vip-item">Curated welcome gift rooted in the spirit of the journey</li>
</ul>
<div class="pricing-cta">
<a href="https://buy.stripe.com/14A00j51x2RicfTeHr0480d" class="btn-primary btn-sm">Enroll Now</a>
</div>
</div>
</div>
<p class="pricing-footer-note">Lodging and meals not included. Recommended accommodations will be shared upon registration.</p>
</div>
</section>

<!-- GUIDES -->
<section class="hosts-section">
<div class="container">
<p class="section-label">Your Guides</p>
<h2 class="section-title">Led by <em>Dara, Julie &amp; Ericka</em></h2>
<div class="hosts-grid">
<div class="host-card">
<img class="host-photo" src="https://framerusercontent.com/images/2R11lrDxKKBZcmEHebBZn2owyI.jpg?width=200&height=300" alt="Dara Pressley" width="120" height="120">
<p class="host-name">Dara Pressley</p>
<p class="host-title">Founder, The Rooted Wisdom</p>
<p class="host-bio">Herbalist, educator, and the founder of The Rooted Wisdom — a living herbal school rooted in spirit, ancestors, and earth.</p>
</div>
<div class="host-card">
<img class="host-photo" src="https://framerusercontent.com/images/moFHBmrWryZ3PehFDNO5tP9zEj0.jpeg?width=200&height=300" alt="Julie Moody-Freeman" width="120" height="120">
<p class="host-name">Julie Moody-Freeman</p>
<p class="host-title">Spiritual Herbalist &amp; Galactic Astrologer</p>
<p class="host-bio">Julie uses Spiritual Herbalism and Galactic Astrology to teach people how to journey with plants and astrological stars as allies.</p>
</div>
<div class="host-card">
<img class="host-photo" src="https://framerusercontent.com/images/Frs2K5HClm6NARQBtHmn2FGjLC0.jpeg?width=200&height=300" alt="Ericka Mabrie" width="120" height="120">
<p class="host-name">Ericka Mabrie</p>
<p class="host-title">Healer &amp; Baker</p>
<p class="host-bio">Earth tender, spiritual herbalist, baker and carrier of faery medicine. Her practice is rooted in animism, ancestral wisdom and the belief that whimsy is power.</p>
</div>
</div>
</div>
</section>

<!-- SWAG -->
<section class="swag-section">
<div class="container">
<p class="section-label">Carry the Journey With You</p>
<h2 class="section-title">The <em>Excursion Collection</em></h2>
<p class="body-text" style="max-width:500px; margin:0 auto;">A small collection of pieces to mark the journey — available to order anytime through our group shop.</p>
<div class="swag-grid">
<div class="swag-item">
<p class="swag-icon">👕</p>
<p class="swag-name">T-Shirt</p>
<p class="swag-note">Unisex · Multiple sizes</p>
</div>
<div class="swag-item">
<p class="swag-icon">🎒</p>
<p class="swag-name">Backpack</p>
<p class="swag-note">Travel ready</p>
</div>
<div class="swag-item">
<p class="swag-icon">🧢</p>
<p class="swag-name">Hat</p>
<p class="swag-note">Coming soon</p>
</div>
<div class="swag-item">
<p class="swag-icon">🍶</p>
<p class="swag-name">Water Bottle</p>
<p class="swag-note">With lid</p>
</div>
</div>
<div class="swag-cta">
<p class="swag-coming-soon">The shop is coming soon — check back closer to the retreat date.</p>
</div>
</div>
</section>

<!-- CTA -->
<section class="cta-section" id="interest">
<div class="container-narrow">
<div class="divider">
<span></span>
<span class="divider-leaf">✦</span>
<span></span>
</div>
<p class="date-badge" style="margin-top:3rem;">October 29 – November 1, 2026 &nbsp;·&nbsp; New Orleans</p>
<h2 class="section-title">We'd Love to<br><em>Journey With You</em></h2>
<p class="body-text">Early bird pricing closes May 30 — or when the 8 spots are filled. Once they're gone, they're gone.</p>
<a href="#pricing" class="btn-primary" style="margin-top:2rem; display:inline-block;">Reserve Your Spot</a>
<p style="margin-top:2rem; font-size:0.82rem; font-weight:300; color:rgba(245,240,232,0.35); letter-spacing:0.08em; max-width:none;">Spaces are limited and held with care.</p>
</div>
</section>
