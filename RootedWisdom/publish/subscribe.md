---
layout: layouts/base.njk
title: Subscribe
permalink: /subscribe/
---
<style>
.bdsub { padding: 4rem 2rem; }
.bdsub-inner { max-width: 480px; margin: 0 auto; text-align: center; }
.bdsub-eyebrow { max-width: none; font-size: 0.68rem; font-weight: 400; letter-spacing: 0.32em; text-transform: uppercase; color: #4a7a9b; margin-bottom: 1rem; }
.bdsub-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 400; color: #3b2010; line-height: 1.15; margin-bottom: 0.8rem; }
.bdsub-title em { font-style: italic; color: #b5601a; }
.bdsub-body { max-width: none; font-size: 0.9rem; font-weight: 300; color: #5a3a20; line-height: 1.8; margin: 0 auto 2.5rem; }
.bdsub-form { display: flex; flex-direction: column; gap: 0.9rem; text-align: left; }
.bdsub-label { font-size: 0.62rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #8a6040; margin-bottom: -0.4rem; }
.bdsub-input { background: rgba(255,252,245,0.85); border: 1px solid rgba(139,90,30,0.25); color: #2a1608; padding: 0.85rem 1.1rem; font-family: 'Jost', sans-serif; font-size: 0.9rem; font-weight: 300; outline: none; border-radius: 3px; transition: border-color 0.2s; }
.bdsub-input::placeholder { color: #8a6040; opacity: 0.7; }
.bdsub-input:focus { border-color: rgba(181,96,26,0.55); }
.bdsub-btn { margin-top: 0.4rem; background: #b5601a; color: #fff; border: none; padding: 0.9rem 1.6rem; font-family: 'Jost', sans-serif; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; cursor: pointer; border-radius: 3px; box-shadow: inset 0 -2px 0 rgba(0,0,0,0.15), 0 3px 12px rgba(181,96,26,0.3); transition: background 0.2s, transform 0.2s; }
.bdsub-btn:hover { background: #d4813a; transform: translateY(-1px); }
.bdsub-powered { max-width: none; font-size: 0.7rem; color: #8a6040; margin-top: 1.5rem; }
.bdsub-powered a { color: #8a6040; text-decoration: underline; }
</style>
<section class="bdsub">
  <div class="bdsub-inner">
    <p class="bdsub-eyebrow">Stay Close</p>
    <h1 class="bdsub-title">Join the <em>Newsletter</em></h1>
    <p class="bdsub-body">Seasonal plant notes, new monographs, ceremony invitations, and what's moving in the school — delivered when there's something worth saying.</p>
    <form class="bdsub-form" action="https://buttondown.com/api/emails/embed-subscribe/therootedwisdom" method="post">
      <label class="bdsub-label" for="bd-name">Name</label>
      <input class="bdsub-input" type="text" name="metadata__first_name" id="bd-name" placeholder="Your name" />
      <label class="bdsub-label" for="bd-email">Email</label>
      <input class="bdsub-input" type="email" name="email" id="bd-email" placeholder="you@example.com" required />
      <input type="hidden" name="embed" value="1" />
      <button class="bdsub-btn" type="submit">Subscribe</button>
    </form>
    <p class="bdsub-powered"><a href="https://buttondown.com/refer/therootedwisdom" target="_blank" rel="noopener">Powered by Buttondown.</a></p>
  </div>
</section>
