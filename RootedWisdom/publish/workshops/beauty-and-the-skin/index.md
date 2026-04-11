---
layout: layouts/base.njk
title: Beauty and the Skin
description: A live virtual workshop with Dara Pressley, Julie Moody-Freeman, and Ericka Mabrie. The medicinal and spiritual properties of herbs — how we heal skin conditions, heal through the skin, and heal the spirit through the body.
eventDate: "2026-04-19"
eventDateDisplay: "April 19, 2026"
eventTime: "12:00 PM PT"
eventFormat: Virtual
price: "$20"
priceVip: "$35"
tags:
  - workshop
pageStyles: |
  :root {
    --bp:   #f7ede8;
    --bw:   #f2ddd4;
    --bd:   #e8c9bc;
    --cw:   #fdf6f2;
    --brk:  #4a2020;
    --ink:  #2a1414;
    --rt:   #7a2818;
    --mt:   #6a3848;
    --st:   #4a5438;
    --rc:   #a84030;
    --rch:  #8a3020;
    --odp:  #f7ede8;
    --odm:  #e8c9bc;
    --pp:   #e8a898;
    --pm:   #c898a8;
    --pb:   #f0c4b8;
  }

  .bats-wrap { background: var(--bp); }

  .bats-hero {
    background: var(--bp);
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem 5.5rem;
    text-align: center;
  }
  .bats-pool { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; }
  .bats-hp1 { width: 600px; height: 480px; background: var(--pp); top: -20%; left: -10%; opacity: 0.08; }
  .bats-hp2 { width: 500px; height: 400px; background: var(--pm); bottom: -20%; right: -8%; opacity: 0.07; }
  .bats-hp3 { width: 360px; height: 300px; background: var(--pb); top: 30%; right: 5%; opacity: 0.06; }
  .bats-hero-content { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
  .bats-eyebrow {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.42em;
    text-transform: uppercase;
    color: var(--mt);
    margin-bottom: 1.6rem;
    max-width: none;
  }
  .bats-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 400;
    color: var(--ink);
    line-height: 0.92;
    margin-bottom: 0.15em;
    max-width: none;
  }
  .bats-hero-title em { font-style: italic; color: var(--rc); }
  .bats-hero-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1rem, 2vw, 1.35rem);
    font-style: italic;
    font-weight: 300;
    color: var(--rt);
    margin-top: 0.5rem;
    margin-bottom: 0;
    max-width: none;
  }
  .bats-orn {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 200px;
    margin: 2rem auto;
  }
  .bats-orn-line { flex: 1; height: 1px; background: linear-gradient(to right, transparent, rgba(106,56,72,0.3), transparent); }
  .bats-orn-dia { width: 5px; height: 5px; transform: rotate(45deg); background: var(--mt); flex-shrink: 0; }
  .bats-presenters {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-style: italic;
    color: var(--rt);
    margin-bottom: 0.3rem;
    max-width: none;
  }
  .bats-meta-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.4rem;
  }
  .bats-meta-item {
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--st);
    max-width: none;
  }
  .bats-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--mt); opacity: 0.5; flex-shrink: 0; }

  .bats-ticker {
    overflow: hidden;
    background: var(--brk);
    padding: 0.85rem 0;
  }
  .bats-ticker-track {
    display: flex;
    width: max-content;
    animation: bats-tick 30s linear infinite;
  }
  @keyframes bats-tick {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .bats-ticker-item {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--odp);
    opacity: 0.65;
    padding: 0 2.5rem;
    white-space: nowrap;
    max-width: none;
  }
  .bats-ticker-dot { margin: 0 0.4rem; opacity: 0.4; }

  .bats-body {
    background: var(--bp);
    padding: 5rem 2rem 6rem;
  }
  .bats-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 4rem;
    align-items: start;
  }
  .bats-content { min-width: 0; }
  .bats-section-label {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: var(--mt);
    margin-bottom: 1rem;
    max-width: none;
  }
  .bats-lede {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.3rem, 2.5vw, 1.75rem);
    font-weight: 300;
    color: var(--ink);
    line-height: 1.45;
    margin-bottom: 1.4rem;
    max-width: none;
  }
  .bats-body-text {
    font-size: 0.92rem;
    font-weight: 300;
    line-height: 1.9;
    color: var(--rt);
    max-width: 62ch;
  }
  .bats-body-text + .bats-body-text { margin-top: 1rem; }
  .bats-rule {
    height: 1px;
    background: linear-gradient(to right, rgba(106,56,72,0.15), transparent);
    margin: 3.5rem 0;
  }
  .bats-pillar {
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    gap: 1.2rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(106,56,72,0.1);
    align-items: start;
  }
  .bats-pillar:first-child { border-top: 1px solid rgba(106,56,72,0.1); }
  .bats-pillar-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    color: rgba(192,144,160,0.6);
    line-height: 1;
    padding-top: 0.15rem;
    max-width: none;
  }
  .bats-pillar-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 0.5rem;
    line-height: 1.2;
    max-width: none;
  }
  .bats-pillar-body {
    font-size: 0.88rem;
    font-weight: 300;
    line-height: 1.8;
    color: var(--rt);
    max-width: none;
  }
  .bats-pillar-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.8rem;
  }
  .bats-tag {
    font-size: 0.58rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mt);
    border: 1px solid rgba(192,144,160,0.4);
    padding: 0.22rem 0.55rem;
    border-radius: 2px;
    max-width: none;
  }
  .bats-pull {
    background: var(--bw);
    border-left: 2px solid var(--rc);
    padding: 2rem 2.5rem;
    border-radius: 0 3px 3px 0;
    margin: 3.5rem 0;
  }
  .bats-pull-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-style: italic;
    font-weight: 300;
    color: var(--ink);
    line-height: 1.45;
    max-width: none;
  }
  .bats-pull-cite {
    display: block;
    margin-top: 0.8rem;
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--st);
    font-style: normal;
    max-width: none;
  }
  .bats-presenters-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    align-items: stretch;
  }
  .bats-presenter-card {
    background: rgba(253,246,242,0.7);
    border: 1px solid rgba(106,56,72,0.1);
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .bats-presenter-img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: center 15%;
    display: block;
    flex-shrink: 0;
  }
  .bats-presenter-info { padding: 1.1rem 1.2rem 1.4rem; flex: 1; }
  .bats-presenter-role {
    font-size: 0.58rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--mt);
    margin-bottom: 0.3rem;
    max-width: none;
  }
  .bats-presenter-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 0.6rem;
    line-height: 1.1;
    max-width: none;
  }
  .bats-presenter-bio {
    font-size: 0.82rem;
    font-weight: 300;
    line-height: 1.75;
    color: var(--rt);
    max-width: none;
  }
  .bats-sticky { position: sticky; top: 80px; }
  .bats-reg-card {
    background: var(--cw);
    border: 1px solid rgba(106,56,72,0.12);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 32px rgba(74,32,32,0.08);
  }
  .bats-reg-header {
    background: var(--brk);
    padding: 1.8rem 2rem;
    position: relative;
    overflow: hidden;
  }
  .bats-reg-pool { position: absolute; border-radius: 50%; filter: blur(50px); pointer-events: none; }
  .bats-rp1 { width: 200px; height: 200px; background: #6a2030; top: -40%; right: -10%; opacity: 0.45; }
  .bats-rp2 { width: 160px; height: 160px; background: #3a1818; bottom: -30%; left: -10%; opacity: 0.55; }
  .bats-reg-hd-content { position: relative; z-index: 2; }
  .bats-reg-eyebrow {
    font-size: 0.58rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--odm);
    margin-bottom: 0.6rem;
    max-width: none;
  }
  .bats-reg-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--odp);
    line-height: 1.15;
    max-width: none;
  }
  .bats-reg-title em { font-style: italic; color: var(--odm); }
  .bats-reg-meta {
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: rgba(247,237,232,0.65);
    margin-top: 0.8rem;
    max-width: none;
  }
  .bats-tiers { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
  .bats-tier {
    display: block;
    border: 1px solid rgba(106,56,72,0.15);
    border-radius: 3px;
    padding: 1.3rem 1.4rem 1.5rem;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    position: relative;
  }
  .bats-tier:hover {
    border-color: var(--rc);
    background: rgba(247,237,232,0.6);
    box-shadow: 0 2px 16px rgba(74,32,32,0.08);
  }
  .bats-tier-top { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 0.5rem; }
  .bats-tier-name { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 500; color: var(--ink); max-width: none; }
  .bats-tier-price { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 400; color: var(--rc); max-width: none; }
  .bats-tier-price sup { font-size: 0.75em; vertical-align: super; }
  .bats-tier-desc { font-size: 0.8rem; font-weight: 300; color: var(--rt); line-height: 1.7; max-width: none; }
  .bats-tier-includes { list-style: none; margin-top: 0.7rem; margin-bottom: 1.2rem; }
  .bats-tier-includes li {
    font-size: 0.78rem;
    font-weight: 300;
    color: var(--rt);
    padding-left: 1.1rem;
    position: relative;
    line-height: 1.75;
    max-width: none;
  }
  .bats-tier-includes li::before { content: "◈"; position: absolute; left: 0; color: rgba(192,144,160,0.8); font-size: 0.55rem; top: 0.28em; }
  .bats-tier-badge {
    display: inline-block;
    font-size: 0.52rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: var(--rc);
    color: var(--cw);
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    margin-left: 0.5rem;
    vertical-align: middle;
    position: relative;
    top: -0.1em;
  }
  .bats-tier-cta {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    background: var(--rc);
    color: var(--cw);
    font-family: 'Jost', sans-serif;
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    text-align: center;
    border-radius: 2px;
    margin-top: 0.2rem;
    transition: background 0.2s;
    max-width: none;
  }
  .bats-tier:hover .bats-tier-cta { background: var(--rch); }
  .bats-tier-cta-ghost {
    background: transparent;
    color: var(--rc);
    border: 1px solid rgba(168,64,48,0.4);
  }
  .bats-tier:hover .bats-tier-cta-ghost { background: rgba(168,64,48,0.06); color: var(--rc); }
  .bats-reg-note { font-size: 0.68rem; font-weight: 300; color: var(--st); text-align: center; padding: 0 1.5rem 1.2rem; line-height: 1.6; max-width: none; }
  .bats-contact { font-size: 0.7rem; font-weight: 300; color: var(--st); text-align: center; margin-top: 1rem; line-height: 1.6; max-width: none; }
  .bats-contact a { color: var(--rc); text-decoration: none; }

  .bats-footer-band {
    background: var(--brk);
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .bats-fp1 { width: 500px; height: 400px; background: #6a2030; top: -20%; left: -10%; opacity: 0.4; }
  .bats-fp2 { width: 400px; height: 300px; background: #3a1010; bottom: -15%; right: -8%; opacity: 0.5; }
  .bats-footer-content { position: relative; z-index: 2; }
  .bats-footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-style: italic; color: var(--odp); margin-bottom: 0.4rem; max-width: none; }
  .bats-footer-tagline { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--odm); max-width: none; }

  @media (max-width: 860px) {
    .bats-inner { grid-template-columns: 1fr; gap: 3rem; }
    .bats-sticky { position: static; }
    .bats-presenters-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .bats-hero { padding: 4rem 1.5rem 4.5rem; }
    .bats-body { padding: 3rem 1.5rem 5rem; }
  }
---
<div class="bats-wrap">
<header class="bats-hero">
<div class="bats-pool bats-hp1"></div>
<div class="bats-pool bats-hp2"></div>
<div class="bats-pool bats-hp3"></div>
<div class="bats-hero-content">
<p class="bats-eyebrow">The Rooted Wisdom · Workshop Series</p>
<h1 class="bats-hero-title">Beauty and<br><em>the Skin</em></h1>
<p class="bats-hero-sub">The Medicinal and Spiritual Properties of Herbs</p>
<div class="bats-orn">
<div class="bats-orn-line"></div>
<div class="bats-orn-dia"></div>
<div class="bats-orn-line"></div>
</div>
<p class="bats-presenters">Dara Pressley · Julie Moody-Freeman · Ericka Mabrie</p>
<div class="bats-meta-row">
<span class="bats-meta-item">Saturday, April 19, 2026</span>
<div class="bats-meta-dot"></div>
<span class="bats-meta-item">12pm PT</span>
<div class="bats-meta-dot"></div>
<span class="bats-meta-item">Virtual</span>
</div>
</div>
</header>
<div class="bats-ticker" aria-hidden="true">
<div class="bats-ticker-track">
<span class="bats-ticker-item">Healing the Skin<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Healing Through the Skin<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Healing the Spirit<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Plant Medicine<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Ancestral Wisdom<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Herbal Beauty<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">The Body as Sacred Ground<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Healing the Skin<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Healing Through the Skin<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Healing the Spirit<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Plant Medicine<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Ancestral Wisdom<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">Herbal Beauty<span class="bats-ticker-dot">✦</span></span>
<span class="bats-ticker-item">The Body as Sacred Ground<span class="bats-ticker-dot">✦</span></span>
</div>
</div>
<section class="bats-body">
<div class="bats-inner">
<div class="bats-content">
<p class="bats-section-label">About This Workshop</p>
<p class="bats-lede">Beauty as a practice, not a performance. Skin as a living record.</p>
<p class="bats-body-text">Julie and Ericka bring their own depth to this dialogue, and together we'll explore what it means to tend to ourselves from the inside out. This is a workshop in the medicinal and spiritual properties of herbs as they relate to the skin — how we heal it, how we heal through it, and how we use it to tend the spirit.</p>
<p class="bats-body-text">You don't need any prior herbal knowledge. You need only to be someone who lives in a body and wants to understand it better.</p>
<div class="bats-rule"></div>
<p class="bats-section-label">Three Conversations</p>
<div class="bats-pillar">
<span class="bats-pillar-num">I</span>
<div>
<p class="bats-pillar-title">Healing Skin Conditions</p>
<p class="bats-pillar-body">The skin speaks. Breakouts, dryness, sensitivity, inflammation — these are not flaws to correct but communications to understand. We'll work with herbs that have long been used to support the skin in its own language, drawing from ancestral traditions and plant relationships that predate the modern beauty industry.</p>
<div class="bats-pillar-tags">
<span class="bats-tag">Vulnerary herbs</span>
<span class="bats-tag">Inflammation</span>
<span class="bats-tag">Skin reading</span>
<span class="bats-tag">Topical preparations</span>
</div>
</div>
</div>
<div class="bats-pillar">
<span class="bats-pillar-num">II</span>
<div>
<p class="bats-pillar-title">Healing Through the Skin</p>
<p class="bats-pillar-body">The skin is also a doorway in. Topical herbs don't stay on the surface — they move. We'll explore how plants applied externally can address muscle aches and cramps, support circulation and the lymph, and work with conditions that begin beneath the surface. What we put on the body matters in ways that go deeper than most of us were taught.</p>
<div class="bats-pillar-tags">
<span class="bats-tag">Muscle aches</span>
<span class="bats-tag">Cramps</span>
<span class="bats-tag">Transdermal herbs</span>
<span class="bats-tag">Salves &amp; liniments</span>
</div>
</div>
</div>
<div class="bats-pillar">
<span class="bats-pillar-num">III</span>
<div>
<p class="bats-pillar-title">Healing the Spirit Through the Skin</p>
<p class="bats-pillar-body">Touch is one of the oldest medicines. Across traditions — ritual bathing, anointing, the practice of tending a body with care and intention — caring for the body has always been understood as spiritual care. We'll look at what those practices hold, where they come from, and how to bring them into a life that is genuinely yours.</p>
<div class="bats-pillar-tags">
<span class="bats-tag">Ritual bathing</span>
<span class="bats-tag">Anointing oils</span>
<span class="bats-tag">Nervine herbs</span>
<span class="bats-tag">Spiritual practice</span>
</div>
</div>
</div>
<div class="bats-pull">
<p class="bats-pull-text">"This is not a workshop about looking better. It is a workshop about knowing yourself well enough to tend what is actually there."</p>
<cite class="bats-pull-cite">Dara Pressley · The Rooted Wisdom</cite>
</div>
<div class="bats-rule"></div>
<p class="bats-section-label">Your Guides</p>
<div class="bats-presenters-grid">
<div class="bats-presenter-card">
<img class="bats-presenter-img" src="/imgs/dara.webp" alt="Dara Pressley" loading="lazy">
<div class="bats-presenter-info">
<p class="bats-presenter-role">Founder, The Rooted Wisdom</p>
<p class="bats-presenter-name">Dara Pressley</p>
<p class="bats-presenter-bio">Herbalist, educator, and the founder of The Rooted Wisdom — a living herbal school rooted in spirit, ancestors, and earth.</p>
</div>
</div>
<div class="bats-presenter-card">
<img class="bats-presenter-img" src="/imgs/julie.webp" alt="Julie Moody-Freeman" loading="lazy">
<div class="bats-presenter-info">
<p class="bats-presenter-role">Spiritual Herbalist &amp; Galactic Astrologer</p>
<p class="bats-presenter-name">Julie Moody-Freeman</p>
<p class="bats-presenter-bio">Julie uses Spiritual Herbalism and Galactic Astrology to teach people how to journey with plants and astrological stars as allies.</p>
</div>
</div>
<div class="bats-presenter-card">
<img class="bats-presenter-img" src="/imgs/ericka.webp" alt="Ericka Mabrie" loading="lazy">
<div class="bats-presenter-info">
<p class="bats-presenter-role">Healer &amp; Baker</p>
<p class="bats-presenter-name">Ericka Mabrie</p>
<p class="bats-presenter-bio">Earth tender, spiritual herbalist, baker and carrier of faery medicine. Her practice is rooted in animism, ancestral wisdom and the belief that whimsy is power.</p>
</div>
</div>
</div>
</div>
<div class="bats-sticky">
<div class="bats-reg-card" id="register">
<div class="bats-reg-header">
<div class="bats-reg-pool bats-rp1"></div>
<div class="bats-reg-pool bats-rp2"></div>
<div class="bats-reg-hd-content">
<p class="bats-reg-eyebrow">Register · April 19, 2026</p>
<p class="bats-reg-title">Beauty and<br><em>the Skin</em></p>
<p class="bats-reg-meta"> · 12pm PT · Virtual</p>
</div>
</div>
<div class="bats-tiers">
<a href="https://buy.stripe.com/00w28reC78bC3Jnczj04809" class="bats-tier">
<div class="bats-tier-top">
<span class="bats-tier-name">Standard</span>
<span class="bats-tier-price"><sup>$</sup>20</span>
</div>
<p class="bats-tier-desc">Access to the live workshop on April 19.</p>
<ul class="bats-tier-includes">
<li>Live virtual workshop</li>
<li>Q&amp;A with all three presenters</li>
</ul>
<span class="bats-tier-cta bats-tier-cta-ghost">Register — $20</span>
</a>
<a href="https://buy.stripe.com/eVq4gzbpVcrS6Vzarb0480a" class="bats-tier">
<div class="bats-tier-top">
<span class="bats-tier-name">VIP <span class="bats-tier-badge">Best Value</span></span>
<span class="bats-tier-price"><sup>$</sup>35</span>
</div>
<p class="bats-tier-desc">Everything in Standard, plus replay and Herb-Curious membership.</p>
<ul class="bats-tier-includes">
<li>Live virtual workshop</li>
<li>Q&amp;A with all three presenters</li>
<li>Workshop replay — watch anytime</li>
<li>1 month Herb-Curious membership</li>
</ul>
<span class="bats-tier-cta">Register VIP — $35</span>
</a>
</div>
<p class="bats-reg-note">Secure checkout · Powered by Stripe</p>
</div>
<p class="bats-contact">Questions? <a href="mailto:BeHerbal@therootedwisdom.com">BeHerbal@therootedwisdom.com</a></p>
</div>
</div>
</div>
</section>
<div class="bats-footer-band">
<div class="bats-pool bats-fp1"></div>
<div class="bats-pool bats-fp2"></div>
<div class="bats-footer-content">
<p class="bats-footer-logo">The Rooted Wisdom</p>
<p class="bats-footer-tagline">A Living Herbal School · Rooted in Spirit, Ancestors, and Earth</p>
</div>
</div>
</div>

