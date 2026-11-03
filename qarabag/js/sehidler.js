(function () {
  'use strict';
  const data = Array.isArray(window.SEHIDLER) ? window.SEHIDLER : [];
  const $ = (id) => document.getElementById(id);
  const grid = $('shGrid'), search = $('shSearch'), awardSel = $('shAward'), mduChk = $('shMdu'),
        count = $('shCount'), empty = $('shEmpty'), moreBtn = $('shMore'),
        dlg = $('shDialog'), dlgBody = $('shDialogBody'), closeBtn = $('shClose');
  if (!grid) return;

  const SITE = 'https://unudulmazlar.az/az';
  const PAGE = 12;
  let shown = PAGE;
  let current = [];

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => String(s || '').toLocaleLowerCase('az');

  // Award filtri: ən çox rast gəlinəndən başla
  const freq = {};
  data.forEach((p) => (p.awards || []).forEach((a) => { freq[a] = (freq[a] || 0) + 1; }));
  Object.keys(freq).sort((a, b) => freq[b] - freq[a] || a.localeCompare(b, 'az'))
    .forEach((a) => awardSel.add(new Option(`${a} (${freq[a]})`, a)));

  const photoHtml = (p, cls) => p.image
    ? `<img class="${cls}" src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" data-ini="${esc(p.initials || '')}">`
    : `<div class="sh-ini">${esc(p.initials || '')}</div>`;

  function card(p) {
    const first = (p.awards || [])[0];
    return `
      <article class="sh-card" tabindex="0" role="button" data-id="${esc(p.id)}" aria-label="${esc(p.name)} haqqında ətraflı">
        <div class="sh-photo">
          ${photoHtml(p, 'sh-img')}
          ${p.badge ? `<span class="sh-badge">${esc(p.badge)}</span>` : ''}
          <div class="sh-ribbon"><i></i><i></i><i></i></div>
        </div>
        <div class="sh-info">
          <div class="sh-name">${esc(p.name)}</div>
          <div class="sh-dates">${esc(p.birthDate || '—')} – ${esc(p.deathDate || '—')}</div>
          ${first ? `<div class="sh-place">${esc(first)} medalı${p.awards.length > 1 ? ` +${p.awards.length - 1}` : ''}</div>` : ''}
          <div class="sh-more"><span class="sh-btn">Ətraflı</span></div>
        </div>
      </article>`;
  }

  function render(reset) {
    if (reset) {
      shown = PAGE;
      const q = norm(search.value.trim()), a = awardSel.value, mdu = mduChk.checked;
      current = data.filter((p) =>
        (!q || norm(p.name).includes(q)) &&
        (!a || (p.awards || []).includes(a)) &&
        (!mdu || p.mduGraduate));
    }
    grid.innerHTML = current.slice(0, shown).map(card).join('');
    count.textContent = `${current.length} nəfər`;
    empty.hidden = current.length > 0;
    moreBtn.hidden = shown >= current.length;
  }

  // Şəkil tapılmasa — baş hərflər
  document.addEventListener('error', (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.dataset.ini && img.dataset.ini !== '') return;
    if (!img.closest('#shGrid, #shDialog')) return;
    const d = document.createElement('div');
    d.className = 'sh-ini';
    d.textContent = img.dataset.ini;
    img.replaceWith(d);
  }, true);

  // Bioqrafiyanı iki hissəyə böl: həyat yolu + rəsmi təltif mətni
  function splitBio(text) {
    const t = String(text || '');
    const m = t.search(/Azərbaycan Respublikasının\s+[Pp]rezidenti\s+İlham Əliyevin\s?\d/);
    return m > 80 ? [t.slice(0, m).trim(), t.slice(m).trim()] : [t, ''];
  }

  function openDetail(id) {
    const p = data.find((x) => String(x.id) === String(id));
    if (!p) return;
    const [life, official] = splitBio(p.biography);
    const chips = (p.awards || []).map((a) => `<span class="sh-chip">${esc(a)}</span>`).join('');
    dlgBody.innerHTML = `
      <div class="sh-detail">
        <div class="sh-detail-photo">${photoHtml(p, 'sh-dimg')}</div>
        <div class="sh-detail-body">
          ${p.badge ? `<div class="sh-rank">${esc(p.badge)}</div>` : ''}
          <h3>${esc(p.name)}</h3>
          <dl class="sh-facts">
            <dt>Doğum tarixi</dt><dd>${esc(p.birthDate || '—')}</dd>
            <dt>Şəhid olduğu tarix</dt><dd>${esc(p.deathDate || '—')}</dd>
          </dl>
          ${chips ? `<div class="sh-chips">${chips}</div>` : ''}
          <p class="sh-bio">${esc(life)}</p>
          ${official ? `<details class="sh-official"><summary>Təltif haqqında rəsmi məlumat</summary><p>${esc(official)}</p></details>` : ''}
          <div class="sh-actions">
            <a class="sh-btn sh-btn-gold" href="${SITE}" target="_blank" rel="noopener noreferrer">Ətraflı ↗</a>
            <button class="sh-btn" type="button" id="shBack">Bağla</button>
          </div>
        </div>
      </div>`;
    $('shBack').addEventListener('click', () => dlg.close());
    dlg.showModal();
    dlg.scrollTop = 0;
  }

  grid.addEventListener('click', (e) => { const c = e.target.closest('.sh-card'); if (c) openDetail(c.dataset.id); });
  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const c = e.target.closest('.sh-card');
    if (c) { e.preventDefault(); openDetail(c.dataset.id); }
  });
  closeBtn.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  moreBtn.addEventListener('click', () => { shown += PAGE; render(false); });
  search.addEventListener('input', () => render(true));
  awardSel.addEventListener('change', () => render(true));
  mduChk.addEventListener('change', () => render(true));

  render(true);
})();