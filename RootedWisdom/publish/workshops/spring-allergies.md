---
layout: layouts/base.njk
title: Spring Allergies Workshop
description: A live virtual workshop from Sassy Roots & The Rooted Wisdom. Learn how to get ahead of seasonal allergies — with plants, not pills. March 18th, 6PM PST.
eventDate: "2026-03-18"
eventDateDisplay: "March 18, 2026"
eventTime: "6:00 PM PST"
eventFormat: Virtual
price: "$20"
priceVip: "$35"
tags:
  - workshop
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
    --sage-light:  #9aaa7a;
    --ink:         #2a1608;
    --mid-text:    #5a3a20;
    --soft-text:   #8a6040;
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

  .hero {
    position: relative;
    padding: 5rem 2rem 6rem;
    text-align: center;
    overflow: hidden;
  }
  .hero-pool-1 {
    width: 600px; height: 500px;
    background: #c9882a;
    top: -80px; left: 55%;
    transform: translateX(-50%);
    opacity: 0.22;
  }
  .hero-pool-2 {
    width: 400px; height: 400px;
    background: #7a8a5a;
    top: 120px; left: 5%;
    opacity: 0.18;
  }
  .hero-pool-3 {
    width: 350px; height: 300px;
    background: #4a7a9b;
    top: 200px; right: 2%;
    opacity: 0.15;
  }
  .hero-eyebrow {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--rust);
    opacity: 0.8;
    position: relative;
    z-index: 2;
    margin-bottom: 1.5rem;
    max-width: none;
  }
  .hero-co-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.85rem;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.15em;
    color: var(--mid-text);
    opacity: 0.7;
    position: relative;
    z-index: 2;
    margin-bottom: 1.75rem;
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
  .hero h1 .line-live {
    display: block;
    font-size: clamp(1.6rem, 4vw, 2.8rem);
    font-weight: 300;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--rust);
    opacity: 0.75;
    font-style: normal;
    font-family: 'Jost', sans-serif;
    margin-bottom: 0.6rem;
  }
  .hero h1 .line-title {
    display: block;
    font-size: clamp(4rem, 11vw, 9rem);
    font-weight: 300;
    font-style: italic;
    color: var(--bark);
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
  .meta-pill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }
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
  .meta-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--sand);
    margin-top: 0.6rem;
  }

  .ticker-wrap {
    overflow: hidden;
    background: var(--bark);
    padding: 0.85rem 0;
  }
  .ticker-track {
    display: flex;
    width: max-content;
    animation: ticker 28s linear infinite;
  }
  @keyframes ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
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
  .pricing-card:hover {
    box-shadow: 0 8px 32px rgba(59,32,16,0.1);
    transform: translateY(-3px);
  }
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
  .pricing-price sup {
    font-size: 1.5rem;
    vertical-align: super;
    font-weight: 400;
  }
  .pricing-includes {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--soft-text);
    margin-bottom: 1rem;
    max-width: none;
  }
  .pricing-features {
    list-style: none;
    margin-bottom: 2.25rem;
  }
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
  .ws-divider-mark {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: var(--bark);
  }

  .body-bridge {
    padding: 5rem 2rem;
    background: var(--parchment);
    position: relative;
    overflow: hidden;
  }

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
    opacity: 0.15;
  }
  .curriculum-pool-2 {
    width: 350px; height: 350px;
    background: #4a7a9b;
    bottom: 0; right: -60px;
    opacity: 0.12;
  }
  .curriculum-list {
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
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
    grid-template-columns: repeat(3,1fr);
    gap: 1.5rem;
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 2;
  }
  .vip-perk {
    border: 1px solid rgba(201,136,42,0.18);
    padding: 1.75rem 1.5rem;
    text-align: left;
  }
  .vip-perk-icon {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    color: var(--gold-light);
    margin-bottom: 0.75rem;
    max-width: none;
  }
  .vip-perk-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--parchment);
    margin-bottom: 0.5rem;
    max-width: none;
  }
  .vip-perk-body {
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.65;
    color: rgba(240,230,204,0.5);
    max-width: none;
  }
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
  .newsletter-copy p {
    font-size: 0.88rem;
    font-weight: 300;
    color: var(--soft-text);
    max-width: none;
  }
  .newsletter-form {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
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
    .hero h1 .line-title { font-size: clamp(3.5rem, 18vw, 9rem); }
  }
---
<header class="hero">
<div class="wc-pools">
<div class="wc-pool hero-pool-1"></div>
<div class="wc-pool hero-pool-2"></div>
<div class="wc-pool hero-pool-3"></div>
</div>
<p class="hero-eyebrow">A Live Workshop</p>
<p class="hero-co-brand">Sassy Roots &amp; The Rooted Wisdom</p>
<h1>
<span class="line-live">Spring</span>
<em class="line-title">Allergies</em>
</h1>
<p class="hero-subtitle">It's coming. Let's get ahead of it — with plants, not pills.</p>
<div class="hero-meta">
<div class="meta-pill">
<span class="meta-pill-label">Format</span>
<span class="meta-pill-value">Virtual</span>
</div>
<div class="meta-dot"></div>
<div class="meta-pill">
<span class="meta-pill-label">Date</span>
<span class="meta-pill-value">March 18th</span>
</div>
<div class="meta-dot"></div>
<div class="meta-pill">
<span class="meta-pill-label">Time</span>
<span class="meta-pill-value">6:00 PM PST</span>
</div>
<div class="meta-dot"></div>
<div class="meta-pill">
<span class="meta-pill-label">Location</span>
<span class="meta-pill-value">Join from anywhere</span>
</div>
</div>
</header>
<div class="ticker-wrap" aria-hidden="true">
<div class="ticker-track">
<span class="ticker-item">Herbal Allies<span class="dot">✦</span></span>
<span class="ticker-item">Immune Support<span class="dot">✦</span></span>
<span class="ticker-item">Liver Health<span class="dot">✦</span></span>
<span class="ticker-item">Respiratory System<span class="dot">✦</span></span>
<span class="ticker-item">Long-Term Relief<span class="dot">✦</span></span>
<span class="ticker-item">Root Causes<span class="dot">✦</span></span>
<span class="ticker-item">Plant Medicine<span class="dot">✦</span></span>
<span class="ticker-item">Herbal Allies<span class="dot">✦</span></span>
<span class="ticker-item">Immune Support<span class="dot">✦</span></span>
<span class="ticker-item">Liver Health<span class="dot">✦</span></span>
<span class="ticker-item">Respiratory System<span class="dot">✦</span></span>
<span class="ticker-item">Long-Term Relief<span class="dot">✦</span></span>
<span class="ticker-item">Root Causes<span class="dot">✦</span></span>
<span class="ticker-item">Plant Medicine<span class="dot">✦</span></span>
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
<li>Live virtual workshop</li>
<li>Q&amp;A with Dara</li>
<li>Virtual or in-person options</li>
<li>Herbal remedy sampling (in-person)</li>
</ul>
<a href="https://buy.stripe.com/00wfZh9hN4ZqbbPfLv04804" class="ws-btn">Join Virtual — $20</a>
</div>
<div class="pricing-card is-vip">
<p class="pricing-tag">VIP</p>
<p class="pricing-tier">Workshop + Community</p>
<p class="pricing-price"><sup>$</sup>35</p>
<p class="pricing-includes">Everything in General, plus</p>
<ul class="pricing-features">
<li>30 days in the Herb-Curious Community</li>
<li>Past workshop recordings</li>
<li>Materia Medica library &amp; resources</li>
<li>Free workshops with membership</li>
</ul>
<a href="https://buy.stripe.com/eVq7sL2Tp77yfs51UF04805" class="ws-btn is-vip-btn">Join as VIP — $35</a>
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
<h2 class="ws-section-title" style="font-size: clamp(1.6rem, 4vw, 2.4rem); font-style: italic; margin-bottom: 1.5rem;">Spring is beautiful.<br>For many of us, it's also a lot.</h2>
<p class="ws-body-text">The sneezing. The congestion. The itchy eyes that make it hard to be outside and present. If seasonal allergies show up in your body every year like an uninvited guest — this workshop was made for you.</p>
<p class="ws-body-text" style="margin-top: 1.25rem;">We'll go beneath the surface of what's actually happening, because managing symptoms is one thing. Understanding your body is another.</p>
</div>
</div>
<section class="curriculum-section">
<div class="wc-pools">
<div class="wc-pool curriculum-pool-1"></div>
<div class="wc-pool curriculum-pool-2"></div>
</div>
<div class="workshop-container">
<p class="ws-section-label">What We'll Cover</p>
<h2 class="ws-section-title">This is a workshop —<br><em>not a lecture.</em></h2>
<p class="ws-body-text">Expect real conversation, practical knowledge, and time to ask questions.</p>
<div class="curriculum-list">
<div class="curriculum-item">
<span class="curriculum-num">01</span>
<p class="curriculum-text">What actually causes environmental allergies — and why your body responds the way it does</p>
</div>
<div class="curriculum-item">
<span class="curriculum-num">02</span>
<p class="curriculum-text">How the immune system, liver, and respiratory system work together in allergy response</p>
</div>
<div class="curriculum-item">
<span class="curriculum-num">03</span>
<p class="curriculum-text">Herbal allies that support long-term relief, not just symptom suppression</p>
</div>
<div class="curriculum-item">
<span class="curriculum-num">04</span>
<p class="curriculum-text">How to prepare your body before allergy season peaks — so you're not caught off guard</p>
</div>
</div>
</div>
</section>
<section class="vip-section">
<div class="vip-pool-1"></div>
<div class="vip-pool-2"></div>
<div class="workshop-container" style="position: relative; z-index: 2;">
<p class="vip-label">VIP Experience</p>
<h2 class="vip-title">Become a VIP —<br><em>Get the full experience</em></h2>
<p class="vip-body">When you join as a VIP, you're not stepping into a single session — you're stepping into a whole month of the Herb-Curious Community. Think of it as a taste of what it feels like to be rooted in this work long-term.</p>
<div class="vip-perks">
<div class="vip-perk">
<p class="vip-perk-icon">✦</p>
<p class="vip-perk-title">30 Days of Community</p>
<p class="vip-perk-body">A space where the learning continues, questions are welcome, and upcoming workshops are already waiting for you.</p>
</div>
<div class="vip-perk">
<p class="vip-perk-icon">✦</p>
<p class="vip-perk-title">Past Workshop Recordings</p>
<p class="vip-perk-body">Access recordings from previous workshops — deepen your learning beyond a single session.</p>
</div>
<div class="vip-perk">
<p class="vip-perk-icon">✦</p>
<p class="vip-perk-title">Materia Medica Library</p>
<p class="vip-perk-body">Resources, references, and herbal monographs to support your practice between sessions.</p>
</div>
</div>
<a href="https://buy.stripe.com/eVq7sL2Tp77yfs51UF04805" class="btn-vip">Join as Virtual + VIP — $35</a>
<p class="vip-fine">Your $35 ticket includes workshop access plus 30 days in the Herb-Curious Community.</p>
</div>
</section>
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
