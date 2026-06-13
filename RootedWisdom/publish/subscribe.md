---
layout: layouts/base.njk
title: Subscribe
permalink: /subscribe/
---
<style>
.bdsub { padding: 4rem 2rem; }
.bdsub-inner { max-width: 480px; margin: 0 auto; text-align: center; }
.bdsub [hidden] { display: none; }
.bdsub-eyebrow { max-width: none; font-size: 0.68rem; font-weight: 400; letter-spacing: 0.32em; text-transform: uppercase; color: #4a7a9b; margin-bottom: 1rem; }
.bdsub-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 400; color: #3b2010; line-height: 1.15; margin-bottom: 0.8rem; }
.bdsub-title em { font-style: italic; color: #b5601a; }
.bdsub-body { max-width: none; font-size: 0.9rem; font-weight: 300; color: #5a3a20; line-height: 1.8; margin: 0 auto 2.5rem; }
.bdsub-form { display: flex; flex-direction: column; gap: 0.9rem; text-align: left; }
.bdsub-label { font-size: 0.62rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #8a6040; margin-bottom: -0.4rem; }
.bdsub-input { background: rgba(255,252,245,0.85); border: 1px solid rgba(139,90,30,0.25); color: #2a1608; padding: 0.85rem 1.1rem; font-family: 'Jost', sans-serif; font-size: 1rem; font-weight: 300; outline: none; border-radius: 3px; transition: border-color 0.2s; }
.bdsub-input::placeholder { color: #8a6040; opacity: 0.7; }
.bdsub-input:focus { border-color: rgba(181,96,26,0.55); }
.bdsub-btn { margin-top: 0.4rem; width: 100%; background: #b5601a; color: #fff; border: none; padding: 0.95rem 1.6rem; font-family: 'Jost', sans-serif; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; cursor: pointer; border-radius: 3px; box-shadow: inset 0 -2px 0 rgba(0,0,0,0.15), 0 3px 12px rgba(181,96,26,0.3); transition: background 0.2s, transform 0.2s; }
.bdsub-btn:hover { background: #d4813a; transform: translateY(-1px); }
.bdsub-btn:disabled { background: #c9a07a; cursor: default; transform: none; box-shadow: none; }
.bdsub-btn-ghost { background: transparent; color: #4a7a9b; border: 1.5px solid #7aaec8; box-shadow: none; }
.bdsub-btn-ghost:hover { background: #4a7a9b; color: #fff; }
.bdsub-error { max-width: none; font-size: 0.82rem; color: #b5601a; background: rgba(181,96,26,0.08); border: 1px solid rgba(181,96,26,0.25); border-radius: 3px; padding: 0.7rem 0.9rem; margin-top: 0.9rem; text-align: center; }
.bdsub-powered { max-width: none; font-size: 0.7rem; color: #8a6040; margin-top: 1.5rem; }
.bdsub-powered a { color: #8a6040; text-decoration: underline; }
.bdsub-check { font-size: 2.4rem; line-height: 1; margin-bottom: 1rem; }
.bdsub-success-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 2.6rem); font-weight: 400; color: #3b2010; margin-bottom: 0.5rem; }
.bdsub-success-msg { max-width: none; font-size: 0.95rem; font-weight: 300; color: #5a3a20; margin-bottom: 2rem; }
.bdsub-export-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 400; color: #3b2010; margin-bottom: 0.4rem; }
.bdsub-export-count { max-width: none; font-size: 0.8rem; letter-spacing: 0.04em; color: #8a6040; margin-bottom: 1.5rem; }
.bdsub-export-actions { display: flex; gap: 0.8rem; flex-wrap: wrap; justify-content: center; margin-bottom: 1.2rem; }
.bdsub-export-actions .bdsub-btn { width: auto; flex: 1; min-width: 130px; margin-top: 0; }
.bdsub-export-area { width: 100%; min-height: 140px; background: rgba(255,252,245,0.85); border: 1px solid rgba(139,90,30,0.25); border-radius: 3px; padding: 0.8rem; font-family: monospace; font-size: 0.75rem; color: #2a1608; resize: vertical; }
.bdsub-export-note { max-width: none; font-size: 0.72rem; color: #8a6040; line-height: 1.6; margin-top: 0.8rem; }
.bdsub-export-clear { background: none; border: none; color: #b5601a; font-family: 'Jost', sans-serif; font-size: 0.72rem; letter-spacing: 0.08em; text-decoration: underline; cursor: pointer; margin-top: 1.2rem; }
</style>
<section class="bdsub">
  <div class="bdsub-inner">
    <div id="bdsub-form-view">
      <p class="bdsub-eyebrow">Stay Close</p>
      <h1 class="bdsub-title">Join the <em>Newsletter</em></h1>
      <p class="bdsub-body">Seasonal plant notes, new monographs, ceremony invitations, and what's moving in the school — delivered when there's something worth saying.</p>
      <form class="bdsub-form" id="bdsub-form" action="https://buttondown.com/api/emails/embed-subscribe/therootedwisdom" method="post">
        <label class="bdsub-label" for="bd-name">Name</label>
        <input class="bdsub-input" type="text" name="metadata__first_name" id="bd-name" placeholder="Your name" autocomplete="off" />
        <label class="bdsub-label" for="bd-email">Email</label>
        <input class="bdsub-input" type="email" name="email" id="bd-email" placeholder="you@example.com" autocomplete="off" required />
        <input type="hidden" name="embed" value="1" />
        <button class="bdsub-btn" id="bdsub-submit" type="submit">Subscribe</button>
      </form>
      <p class="bdsub-error" id="bdsub-error" hidden>Couldn't reach Buttondown — check your connection and tap Subscribe again. (Saved on this device as a backup either way.)</p>
      <p class="bdsub-powered"><a href="https://buttondown.com/refer/therootedwisdom" target="_blank" rel="noopener">Powered by Buttondown.</a></p>
    </div>
    <div id="bdsub-success" hidden>
      <p class="bdsub-check">🌿</p>
      <h2 class="bdsub-success-title">You're in!</h2>
      <p class="bdsub-success-msg" id="bdsub-success-msg">Welcome to the circle.</p>
      <button class="bdsub-btn" id="bdsub-next" type="button">Add the next person</button>
    </div>
    <div id="bdsub-export" hidden>
      <h2 class="bdsub-export-title">Saved signups</h2>
      <p class="bdsub-export-count" id="bdsub-export-count">No signups saved on this device yet.</p>
      <div class="bdsub-export-actions">
        <button class="bdsub-btn" id="bdsub-copy" type="button">Copy</button>
        <button class="bdsub-btn" id="bdsub-download" type="button">Download CSV</button>
      </div>
      <textarea class="bdsub-export-area" id="bdsub-export-area" readonly></textarea>
      <p class="bdsub-export-note">This list lives only on this device, as a backup to Buttondown. Copy or download it, then confirm those people are in your Buttondown subscribers before clearing.</p>
      <button class="bdsub-export-clear" id="bdsub-clear" type="button">Clear this device's backup</button>
      <div class="bdsub-export-actions" style="margin-top:1.5rem;">
        <button class="bdsub-btn bdsub-btn-ghost" id="bdsub-export-back" type="button">Back to signup form</button>
      </div>
    </div>
  </div>
</section>
<script>
(function () {
  var KEY = 'bdsub-backup';
  var form = document.getElementById('bdsub-form');
  var formView = document.getElementById('bdsub-form-view');
  var successView = document.getElementById('bdsub-success');
  var exportView = document.getElementById('bdsub-export');
  var successMsg = document.getElementById('bdsub-success-msg');
  var errorBox = document.getElementById('bdsub-error');
  var submitBtn = document.getElementById('bdsub-submit');
  var nextBtn = document.getElementById('bdsub-next');
  var nameInput = document.getElementById('bd-name');
  var emailInput = document.getElementById('bd-email');
  var endpoint = form.getAttribute('action');
  var exportCount = document.getElementById('bdsub-export-count');
  var exportArea = document.getElementById('bdsub-export-area');
  var copyBtn = document.getElementById('bdsub-copy');
  var downloadBtn = document.getElementById('bdsub-download');
  var clearBtn = document.getElementById('bdsub-clear');
  var exportBack = document.getElementById('bdsub-export-back');
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; }
  }
  function backup(name, email) {
    try {
      var list = read();
      list.push({ name: name, email: email, at: new Date().toISOString() });
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch (e) {}
  }
  function toCSV(list) {
    var rows = [['name', 'email', 'signed_up_at']];
    list.forEach(function (r) { rows.push([r.name || '', r.email || '', r.at || '']); });
    return rows.map(function (row) {
      return row.map(function (cell) {
        var s = String(cell);
        if (/[",\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
        return s;
      }).join(',');
    }).join('\n');
  }
  function showSuccess(name) {
    successMsg.textContent = name ? ('Welcome, ' + name + '.') : 'Welcome to the circle.';
    formView.hidden = true; successView.hidden = true; exportView.hidden = true;
    successView.hidden = false;
  }
  function showForm() {
    form.reset();
    errorBox.hidden = true;
    submitBtn.disabled = false;
    submitBtn.textContent = 'Subscribe';
    successView.hidden = true; exportView.hidden = true;
    formView.hidden = false;
    nameInput.focus();
  }
  function showExport() {
    var list = read();
    if (list.length) {
      exportCount.textContent = list.length + (list.length === 1 ? ' signup' : ' signups') + ' saved on this device.';
      exportArea.value = toCSV(list);
    } else {
      exportCount.textContent = 'No signups saved on this device yet.';
      exportArea.value = '';
    }
    formView.hidden = true; successView.hidden = true;
    exportView.hidden = false;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    errorBox.hidden = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Adding\u2026';
    var body = new URLSearchParams();
    body.append('email', email);
    if (name) body.append('metadata__first_name', name);
    body.append('embed', '1');
    fetch(endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      .then(function () { backup(name, email); showSuccess(name); })
      .catch(function () { backup(name, email); submitBtn.disabled = false; submitBtn.textContent = 'Subscribe'; errorBox.hidden = false; });
  });
  nextBtn.addEventListener('click', showForm);
  exportBack.addEventListener('click', function () { location.hash = ''; showForm(); });
  copyBtn.addEventListener('click', function () {
    exportArea.focus(); exportArea.select();
    var done = function () { copyBtn.textContent = 'Copied'; setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(exportArea.value).then(done).catch(function () { try { document.execCommand('copy'); done(); } catch (e) {} });
    } else { try { document.execCommand('copy'); done(); } catch (e) {} }
  });
  downloadBtn.addEventListener('click', function () {
    var blob = new Blob([exportArea.value], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'rooted-wisdom-signups.csv';
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 1000);
  });
  clearBtn.addEventListener('click', function () {
    if (confirm('Clear all signups saved on this device? Make sure you have copied or downloaded them first.')) {
      try { localStorage.removeItem(KEY); } catch (e) {}
      showExport();
    }
  });
  if (location.hash === '#export') { showExport(); }
  window.addEventListener('hashchange', function () { if (location.hash === '#export') showExport(); });
})();
