---
title: Contact
description: Reach out to The Rooted Wisdom — questions, collaborations, speaking inquiries, or simply a hello. We'd love to hear from you.
layout: layouts/base.njk
permalink: /contact/
date: 2024-01-01
status: published
---

<section class="page-hero">
<div class="page-hero__inner">
<div class="page-hero__left">
<p class="eyebrow">Questions &middot; Collaborations &middot; Hellos</p>
<h1>Let's <em>Connect</em></h1>
</div>
<div class="page-hero__right">
<p>Whether you have a question about our programs, want to explore a collaboration, or simply feel called to reach out &mdash; we welcome you. Every message is read with care.</p>
</div>
</div>
</section>

<section class="contact-body">
<div class="contact-body__inner">
<div class="contact-form-wrap">
<p class="eyebrow">Send a Message</p>
<form class="contact-form" name="contact" method="POST" netlify netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="contact">
<p class="contact-form__honeypot"><label>Don't fill this out: <input name="bot-field"></label></p>
<div class="contact-form__row">
<div class="contact-form__field">
<label for="contact-name" class="contact-form__label">Your Name</label>
<input type="text" id="contact-name" name="name" placeholder="Full name" required>
</div>
<div class="contact-form__field">
<label for="contact-email" class="contact-form__label">Email Address</label>
<input type="email" id="contact-email" name="email" placeholder="you@example.com" required>
</div>
</div>
<div class="contact-form__field">
<label for="contact-subject" class="contact-form__label">Subject</label>
<select id="contact-subject" name="subject">
<option value="" disabled selected>What brings you here?</option>
<option value="general">General question</option>
<option value="apprenticeship">Apprenticeship inquiry</option>
<option value="consultation">Herbal consultation</option>
<option value="workshop">Workshop or retreat</option>
<option value="collaboration">Collaboration or speaking</option>
<option value="press">Press or media</option>
<option value="other">Something else</option>
</select>
</div>
<div class="contact-form__field">
<label for="contact-message" class="contact-form__label">Message</label>
<textarea id="contact-message" name="message" rows="6" placeholder="Share what's on your mind&hellip;" required></textarea>
</div>
<button type="submit" class="contact-form__submit">Send Message</button>
<p class="contact-form__note">We typically respond within 2&ndash;3 business days. Your message matters to us.</p>
</form>
</div>
<aside class="contact-sidebar">
<div class="contact-sidebar__block">
<p class="contact-sidebar__heading">Reach Us Directly</p>
<a href="mailto:{{ site.email }}" class="contact-sidebar__email">{{ site.email }}</a>
</div>
<div class="contact-sidebar__block">
<p class="contact-sidebar__heading">Follow Along</p>
<ul class="contact-sidebar__links">
<li>
<a href="{{ site.social.instagram.url }}" target="_blank" rel="noopener" class="contact-sidebar__social">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
<span>{{ site.social.instagram.handle }}</span>
</a>
</li>
<li>
<a href="{{ site.social.tiktok.url }}" target="_blank" rel="noopener" class="contact-sidebar__social">
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
<span>{{ site.social.tiktok.handle }}</span>
</a>
</li>
<li>
<a href="{{ site.social.fanbase.url }}" target="_blank" rel="noopener" class="contact-sidebar__social">
<img src="/assets/img/fanbase-icon.png" alt="Fanbase" />
<span>{{ site.social.fanbase.handle }}</span>
</a>
</li>
</ul>
</div>
<div class="contact-sidebar__block">
<p class="contact-sidebar__heading">Join the Community</p>
<a href="/learn/" class="contact-sidebar__cta">
<span class="contact-sidebar__cta-text">The Rooted Wisdom Community</span>
<span class="contact-sidebar__cta-arrow">&rarr;</span>
</a>
<a href="/consultations/" class="contact-sidebar__cta">
<span class="contact-sidebar__cta-text">Book a Consultation</span>
<span class="contact-sidebar__cta-arrow">&rarr;</span>
</a>
</div>
</aside>
</div>
</section>

<section class="newsletter">
<div class="newsletter__inner">
<p class="eyebrow">Stay Connected</p>
<h2>Letters from the Roots</h2>
<p>Seasonal plant wisdom, event announcements, and dispatches from the school &mdash; delivered to your inbox.</p>
<form class="newsletter__form" action="https://buttondown.com/api/emails/embed-subscribe/therootedwisdom" method="post" target="_blank">
<div class="newsletter__fields">
<div class="newsletter__field">
<label for="contact-newsletter-name" class="sr-only">Your name</label>
<input type="text" id="contact-newsletter-name" name="metadata__name" placeholder="Your name" required>
</div>
<div class="newsletter__field">
<label for="contact-newsletter-email" class="sr-only">Your email address</label>
<input type="email" id="contact-newsletter-email" name="email" placeholder="Your email address" required>
</div>
</div>
<button type="submit">Subscribe</button>
</form>
</div>
</section>
