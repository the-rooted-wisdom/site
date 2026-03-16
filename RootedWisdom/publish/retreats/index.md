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

  .appear {
    animation: appear 2s cubic-bezier(0.44,0,0.56,1) both;
  }

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
    padding: 5rem 2rem;
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

  .hero h1 em {
    font-style: italic;
    color: var(--gold-light);
  }

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

  .btn-outline:hover {
    border-color: var(--gold-light);
    color: var(--cream);
    transform: translateY(-2px);
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

  .divider-leaf {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    color: var(--gold);
  }

  /* ─── SECTIONS ─── */
  section { padding: 6rem 2rem; }

  .container {
    max-width: 980px;
    margin: 0 auto;
  }

  .container-narrow {
    max-width: 640px;
    margin: 0 auto;
  }

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

  .section-title em {
    font-style: italic;
    color: var(--gold-light);
  }

  .body-text {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.85;
    color: rgba(245,240,232,0.72);
    text-align: center;
    max-width: none;
  }

  /* ─── CONVERGENCE ─── */
  .convergence {
    background: linear-gradient(180deg, #0d0a06 0%, #141008 100%);
  }

  /* ─── CONVERGENCE CARDS ─── */
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

  .conv-card:hover {
    border-color: rgba(184,147,62,0.28);
    background: rgba(184,147,62,0.07);
  }

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

  .detail-block {
    border-left: 2px solid rgba(184,147,62,0.3);
    padding-left: 1.75rem;
  }

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

  /* ─── HOSTS ─── */
  .hosts-section {
    background: linear-gradient(180deg, #100d08 0%, #0a0806 100%);
  }

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

  .host-card:hover {
    border-color: rgba(184,147,62,0.3);
    background: rgba(184,147,62,0.06);
  }

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

  /* ─── INTEREST OVERLAY ─── */
  .overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(10,8,6,0.88);
    backdrop-filter: blur(10px);
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .overlay.is-open {
    display: flex;
  }

  .overlay-panel {
    background: #1a110a;
    border: 1px solid rgba(184,147,62,0.2);
    max-width: 520px;
    width: 100%;
    padding: 3rem 2.5rem;
    position: relative;
  }

  .overlay-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: none;
    border: none;
    color: rgba(245,240,232,0.4);
    font-size: 1.4rem;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
    font-family: 'Jost', sans-serif;
  }

  .overlay-close:hover { color: var(--cream); }

  .overlay-label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.75;
    margin-bottom: 0.75rem;
    max-width: none;
  }

  .overlay-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.2;
    color: var(--cream);
    margin-bottom: 0.75rem;
    max-width: none;
  }

  .overlay-title em {
    font-style: italic;
    color: var(--gold-light);
  }

  .overlay-desc {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(245,240,232,0.6);
    margin-bottom: 2rem;
    max-width: none;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-group label {
    display: block;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    opacity: 0.7;
    margin-bottom: 0.5rem;
  }

  .form-group input {
    width: 100%;
    background: rgba(245,240,232,0.05);
    border: 1px solid rgba(184,147,62,0.2);
    color: var(--cream);
    font-family: 'Jost', sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    padding: 0.85rem 1rem;
    outline: none;
    transition: border-color 0.2s;
    border-radius: 2px;
  }

  .form-group input:focus {
    border-color: rgba(184,147,62,0.5);
  }

  .form-group input::placeholder {
    color: rgba(245,240,232,0.25);
  }

  .form-submit {
    width: 100%;
    margin-top: 0.5rem;
    padding: 1rem;
    font-size: 0.82rem;
    letter-spacing: 0.18em;
  }

  .form-fine {
    margin-top: 1.25rem;
    font-size: 0.78rem;
    font-weight: 300;
    color: rgba(245,240,232,0.3);
    letter-spacing: 0.06em;
    text-align: center;
    max-width: none;
  }

  /* Success state */
  .form-success {
    display: none;
    text-align: center;
    padding: 2rem 0;
  }

  .form-success.is-visible { display: block; }
  .overlay-form.is-hidden { display: none; }

  .success-icon {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem;
    color: var(--gold-light);
    margin-bottom: 1rem;
  }

  .success-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.75rem;
    font-weight: 300;
    color: var(--cream);
    margin-bottom: 0.75rem;
    max-width: none;
  }

  .success-body {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(245,240,232,0.6);
    max-width: none;
  }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 768px) {
    .conv-cards { grid-template-columns: 1fr; }
    .details-grid { grid-template-columns: 1fr; }
    .hosts-grid { grid-template-columns: 1fr; }
    section { padding: 4rem 1.5rem; }
    .overlay-panel { padding: 2.5rem 1.5rem; }
  }
---

<!-- INTEREST OVERLAY -->
<div class="overlay" id="interest-overlay" role="dialog" aria-modal="true" aria-label="Express Interest Form">
<div class="overlay-panel">
<button class="overlay-close" id="overlay-close" aria-label="Close">&times;</button>
<div class="overlay-form" id="overlay-form">
<p class="overlay-label">New Orleans · Oct 29 – Nov 1, 2026</p>
<h2 class="overlay-title">Count Me <em>In</em></h2>
<p class="overlay-desc">Spaces are limited and held with care. Share your details and we'll be in touch with everything you need to know.</p>
<form id="interest-form" name="nola-retreat-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="nola-retreat-interest">
<p class="form-group" style="display:none;"><label>Don't fill this out: <input name="bot-field"></label></p>
<div class="form-group">
<label for="interest-name">Your Name</label>
<input type="text" id="interest-name" name="name" placeholder="Full name" autocomplete="name" required>
</div>
<div class="form-group">
<label for="interest-email">Email Address</label>
<input type="email" id="interest-email" name="email" placeholder="your@email.com" autocomplete="email" required>
</div>
<button type="submit" class="btn-primary form-submit" id="interest-submit">Express My Interest</button>
<p class="form-fine">Your information is kept private and never shared.</p>
</form>
</div>
<div class="form-success" id="form-success">
<p class="success-icon">✦</p>
<p class="success-title">You're on our list</p>
<p class="success-body">We'll be in touch as details unfold. Thank you for saying yes to this journey.</p>
</div>
</div>
</div>

<!-- HERO -->
<header class="hero">
<div class="hero-bg"></div>
<p class="retreat-tag appear">A Rooted Wisdom Retreat</p>
<p class="ornament appear appear-d1">Save the Date</p>
<h1 class="appear appear-d2">An Ancestral<br><em>Excursion</em></h1>
<p class="hero-date appear appear-d3">October 29 – November 1, 2026</p>
<p class="hero-location appear appear-d3">New Orleans, Louisiana</p>
<p class="hero-desc appear appear-d4">An intimate journey to one of the most ancestrally charged cities in the African diaspora — held at the convergence of Samhain, Día de los Muertos, and Halloween.</p>
<div class="hero-cta-group appear appear-d5">
<button class="btn-primary open-interest" aria-controls="interest-overlay">Express Interest</button>
<a href="#convergence" class="btn-outline">Learn More</a>
</div>
</header>

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
<p class="conv-card-label">The Sacred Window</p>
<p class="conv-card-title">A Convergence of Traditions</p>
<p class="conv-card-body">Each year at the turn of October, something shifts. Samhain, Día de los Muertos, and Halloween arrive together — three distinct traditions, each holding its own way of remembering the dead. In that overlap, the veil thins and the ancestors draw near. This excursion is timed to that opening, intentionally.</p>
</div>
<div class="conv-card">
<p class="conv-card-label">The Place</p>
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
<p class="body-text">More details are on their way. Complete the interest form to receive updates first — and to help us hold space with intention.</p>
<button class="btn-primary open-interest" aria-controls="interest-overlay" style="margin-top:2rem;">Count Me In</button>
<p style="margin-top:2rem; font-size:0.82rem; font-weight:300; color:rgba(245,240,232,0.35); letter-spacing:0.08em; max-width:none;">Spaces are limited and held with care.</p>
</div>
</section>

<!-- Netlify build-time scanner — must be a real HTML form in the document -->
<form name="nola-retreat-interest" netlify netlify-honeypot="bot-field" hidden>
<input type="text" name="name">
<input type="email" name="email">
<input name="bot-field">
</form>

<!-- OVERLAY SCRIPT -->
<script>
(function() {
  var overlay = document.getElementById('interest-overlay');
  var closeBtn = document.getElementById('overlay-close');
  var formWrap = document.getElementById('overlay-form');
  var netlifyForm = document.getElementById('interest-form');
  var success = document.getElementById('form-success');
  var submitBtn = document.getElementById('interest-submit');

  function openOverlay() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.getElementById('interest-name').focus();
  }

  function closeOverlay() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-interest').forEach(function(btn) {
    btn.addEventListener('click', openOverlay);
  });

  closeBtn.addEventListener('click', closeOverlay);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeOverlay();
  });

  netlifyForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('interest-name').value.trim();
    var email = document.getElementById('interest-email').value.trim();
    if (!name || !email) return;

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(netlifyForm)).toString()
    })
    .then(function() {
      formWrap.classList.add('is-hidden');
      success.classList.add('is-visible');
    })
    .catch(function() {
      submitBtn.textContent = 'Something went wrong — try again';
      submitBtn.disabled = false;
    });
  });
})();
</script>
