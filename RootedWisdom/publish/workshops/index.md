---
layout: layouts/base.njk
title: Workshops
description: Live herbal workshops from The Rooted Wisdom — virtual and in-person. Practical plant knowledge, real conversation, and time to ask questions.
pageStyles: |
  .ws-hero {
    padding: 5rem 2rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: #f0e6cc;
  }
  .ws-hero-pool-1 {
    position: absolute;
    width: 600px; height: 400px;
    background: #c9882a;
    border-radius: 50%;
    filter: blur(90px);
    mix-blend-mode: multiply;
    opacity: 0.2;
    top: -80px; left: 60%;
    transform: translateX(-50%);
    pointer-events: none;
  }
  .ws-hero-pool-2 {
    position: absolute;
    width: 400px; height: 400px;
    background: #7a8a5a;
    border-radius: 50%;
    filter: blur(80px);
    mix-blend-mode: multiply;
    opacity: 0.16;
    top: 60px; left: -60px;
    pointer-events: none;
  }
  .ws-eyebrow {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #b5601a;
    opacity: 0.75;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
    max-width: none;
  }
  .ws-hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 300;
    line-height: 1;
    color: #3b2010;
    margin-bottom: 1.25rem;
    position: relative;
    z-index: 2;
    max-width: none;
  }
  .ws-hero h1 em {
    font-style: italic;
    color: #b5601a;
  }
  .ws-hero-desc {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8;
    color: #5a3a20;
    max-width: 520px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .ws-divider {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    max-width: 220px;
    margin: 2.5rem auto;
    opacity: 0.25;
    position: relative;
    z-index: 2;
  }
  .ws-divider span { flex: 1; height: 1px; background: #3b2010; }
  .ws-divider-mark {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: #3b2010;
  }

  .ws-grid-section {
    padding: 4rem 2rem 6rem;
    background: #ecdbb8;
    position: relative;
    overflow: hidden;
  }
  .ws-grid-pool {
    position: absolute;
    width: 500px; height: 400px;
    background: #b5601a;
    border-radius: 50%;
    filter: blur(100px);
    mix-blend-mode: multiply;
    opacity: 0.1;
    bottom: -80px; right: -60px;
    pointer-events: none;
  }

  .ws-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 360px));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    justify-content: center;
  }

  .ws-card {
    background: #f0e6cc;
    border: 1px solid rgba(59,32,16,0.1);
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s, transform 0.3s;
    text-decoration: none;
    color: inherit;
  }
  .ws-card:hover {
    box-shadow: 0 8px 32px rgba(59,32,16,0.12);
    transform: translateY(-3px);
    color: inherit;
  }

  .ws-card-header {
    background: #3b2010;
    padding: 2rem 2rem 1.5rem;
    position: relative;
    overflow: hidden;
  }
  .ws-card-header-pool {
    position: absolute;
    width: 200px; height: 200px;
    border-radius: 50%;
    filter: blur(50px);
    opacity: 0.25;
    top: -40px; right: -40px;
    background: #c9882a;
  }
  .ws-card-format {
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(240,230,204,0.5);
    margin-bottom: 0.75rem;
    max-width: none;
    position: relative;
    z-index: 2;
  }
  .ws-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.65rem;
    font-weight: 300;
    line-height: 1.1;
    color: #f0e6cc;
    position: relative;
    z-index: 2;
    max-width: none;
  }
  .ws-card-date {
    margin-top: 1rem;
    font-size: 0.72rem;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #c9882a;
    position: relative;
    z-index: 2;
    max-width: none;
  }

  .ws-card-body {
    padding: 1.75rem 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .ws-card-desc {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.75;
    color: #5a3a20;
    flex: 1;
    max-width: none;
  }
  .ws-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(59,32,16,0.08);
    padding-top: 1.25rem;
    margin-top: auto;
  }
  .ws-card-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 300;
    color: #3b2010;
    max-width: none;
  }
  .ws-card-cta {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #b5601a;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    max-width: none;
  }
  .ws-card-cta::after {
    content: '→';
    font-size: 0.9rem;
    transition: transform 0.2s;
  }
  .ws-card:hover .ws-card-cta::after {
    transform: translateX(3px);
  }

  .ws-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 5rem 2rem;
    border: 1px dashed rgba(59,32,16,0.2);
  }
  .ws-empty-icon {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    color: #b5601a;
    opacity: 0.4;
    margin-bottom: 1.25rem;
    max-width: none;
  }
  .ws-empty-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 300;
    color: #3b2010;
    margin-bottom: 0.75rem;
    max-width: none;
  }
  .ws-empty-body {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.75;
    color: #8a6040;
    max-width: 380px;
    margin: 0 auto 2rem;
  }

  .ws-nl-bar {
    background: #3b2010;
    padding: 3.5rem 2rem;
  }
  .ws-nl-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: 860px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .ws-nl-copy h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 300;
    color: #f0e6cc;
    margin-bottom: 0.35rem;
    max-width: none;
  }
  .ws-nl-copy h2 em { font-style: italic; color: #c9882a; }
  .ws-nl-copy p {
    font-size: 0.88rem;
    font-weight: 300;
    color: rgba(240,230,204,0.5);
    max-width: none;
  }
  .ws-nl-form {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .ws-nl-form input {
    background: rgba(240,230,204,0.07);
    border: 1px solid rgba(240,230,204,0.15);
    font-family: 'Jost', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: #f0e6cc;
    padding: 0.8rem 1rem;
    outline: none;
    border-radius: 2px;
    min-width: 180px;
    transition: border-color 0.2s;
  }
  .ws-nl-form input:focus { border-color: rgba(201,136,42,0.5); }
  .ws-nl-form input::placeholder { color: rgba(240,230,204,0.3); }
  .ws-nl-btn {
    background: #c9882a;
    color: #3b2010;
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
  .ws-nl-btn:hover { background: #d4a050; }

  .ws-past-section {
    padding: 4rem 2rem 6rem;
    background: #f0e6cc;
    position: relative;
    overflow: hidden;
  }
  .ws-past-label {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #8a6040;
    text-align: center;
    margin-bottom: 0.6rem;
    max-width: none;
  }
  .ws-past-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 300;
    color: #3b2010;
    text-align: center;
    margin-bottom: 3rem;
    max-width: none;
  }
  .ws-past-title em { font-style: italic; color: #b5601a; }
  .ws-past-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 340px));
    gap: 1.5rem;
    max-width: 1100px;
    margin: 0 auto;
    justify-content: center;
  }
  .ws-past-card {
    background: #ecdbb8;
    border: 1px solid rgba(59,32,16,0.08);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.2s;
  }
  .ws-past-card:hover {
    box-shadow: 0 4px 20px rgba(59,32,16,0.1);
    color: inherit;
  }
  .ws-past-card-header {
    background: rgba(59,32,16,0.06);
    padding: 1.5rem 1.75rem;
    border-bottom: 1px solid rgba(59,32,16,0.08);
  }
  .ws-past-card-date {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #8a6040;
    margin-bottom: 0.5rem;
    max-width: none;
  }
  .ws-past-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.2;
    color: #3b2010;
    max-width: none;
  }
  .ws-past-card-body {
    padding: 1.25rem 1.75rem 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  .ws-past-card-desc {
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.75;
    color: #5a3a20;
    max-width: none;
  }
  .ws-past-card-cta {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #b5601a;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    max-width: none;
  }
  .ws-past-card-cta::after { content: '→'; font-size: 0.9rem; transition: transform 0.2s; }
  .ws-past-card:hover .ws-past-card-cta::after { transform: translateX(3px); }

  @media (max-width: 640px) {
    .ws-grid { grid-template-columns: 1fr; }
    .ws-past-grid { grid-template-columns: 1fr; }
    .ws-nl-inner { flex-direction: column; align-items: flex-start; }
  }
---
<div class="ws-hero">
<div class="ws-hero-pool-1"></div>
<div class="ws-hero-pool-2"></div>
<p class="ws-eyebrow">The Rooted Wisdom</p>
<h1>Live <em>Workshops</em></h1>
<div class="ws-divider">
<span></span>
<span class="ws-divider-mark">✦</span>
<span></span>
</div>
<p class="ws-hero-desc">Real conversation, practical plant knowledge, and time to ask questions. Join us live — virtually or in person.</p>
</div>
<section class="ws-grid-section">
<div class="ws-grid-pool"></div>
<div class="ws-grid">
{% set upcomingWorkshops = [] %}
{% for workshop in collections.workshops %}{% if not workshop.data.past %}{% set upcomingWorkshops = (upcomingWorkshops.push(workshop), upcomingWorkshops) %}{% endif %}{% endfor %}
{% if upcomingWorkshops and upcomingWorkshops.length > 0 %}
{% for workshop in upcomingWorkshops %}
<a href="{{ workshop.url }}" class="ws-card">
<div class="ws-card-header">
<div class="ws-card-header-pool"></div>
<p class="ws-card-format">{% if workshop.data.eventFormat %}{{ workshop.data.eventFormat }}{% else %}Workshop{% endif %}</p>
<p class="ws-card-title">{{ workshop.data.title }}</p>
{% if workshop.data.eventDateDisplay %}<p class="ws-card-date">{{ workshop.data.eventDateDisplay }}</p>{% endif %}
</div>
<div class="ws-card-body">
<p class="ws-card-desc">{{ workshop.data.description }}</p>
<div class="ws-card-footer">
<span class="ws-card-price">{% if workshop.data.price %}from {{ workshop.data.price }}{% else %}See details{% endif %}</span>
<span class="ws-card-cta">Learn more</span>
</div>
</div>
</a>
{% endfor %}
{% else %}
<div class="ws-empty">
<p class="ws-empty-icon">✦</p>
<p class="ws-empty-title">No upcoming workshops right now</p>
<p class="ws-empty-body">New sessions are always in the works. Drop your email below and you'll be the first to hear when something new is announced.</p>
<a href="/community/" style="display:inline-block; background:#b5601a; color:#f0e6cc; font-family:'Jost',sans-serif; font-size:0.78rem; font-weight:500; letter-spacing:0.18em; text-transform:uppercase; padding:0.9rem 2rem; border-radius:2px; text-decoration:none;">Join the Community</a>
</div>
{% endif %}
</div>
</section>
{% set pastWorkshops = [] %}
{% for workshop in collections.workshops %}{% if workshop.data.past %}{% set pastWorkshops = (pastWorkshops.push(workshop), pastWorkshops) %}{% endif %}{% endfor %}
{% if pastWorkshops and pastWorkshops.length > 0 %}
<section class="ws-past-section">
<p class="ws-past-label">The Archive</p>
<h2 class="ws-past-title">Past <em>Workshops</em></h2>
<div class="ws-past-grid">
{% for workshop in pastWorkshops %}
<a href="{{ workshop.url }}" class="ws-past-card">
<div class="ws-past-card-header">
{% if workshop.data.eventDateDisplay %}<p class="ws-past-card-date">{{ workshop.data.eventDateDisplay }}</p>{% endif %}
<p class="ws-past-card-title">{{ workshop.data.title }}</p>
</div>
<div class="ws-past-card-body">
<p class="ws-past-card-desc">{{ workshop.data.description }}</p>
<span class="ws-past-card-cta">View replay</span>
</div>
</a>
{% endfor %}
</div>
</section>
{% endif %}
<div class="ws-nl-bar">
<div class="ws-nl-inner">
<div class="ws-nl-copy">
<h2>Stay in the <em>loop</em></h2>
<p>New workshops announced to the list first.</p>
</div>
<form class="ws-nl-form" name="workshops-newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="workshops-newsletter">
<input type="text" name="bot-field" style="display:none;">
<input type="text" name="name" placeholder="Name" autocomplete="name">
<input type="email" name="email" placeholder="Email" autocomplete="email" required>
<button type="submit" class="ws-nl-btn">Notify me</button>
</form>
</div>
</div>
<form name="workshops-newsletter" netlify netlify-honeypot="bot-field" hidden>
<input type="text" name="name">
<input type="email" name="email">
<input name="bot-field">
</form>
