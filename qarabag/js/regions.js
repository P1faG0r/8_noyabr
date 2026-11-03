// Rayon kartları və rayon pəncərəsi. Məlumat: data/regions.js
(()=>{
  const {esc,fmtShort,img,regions,events,dayLabel,regionImagePath}=Core;
  const grid=document.getElementById('regionGrid');
  const days=r=>events().filter(e=>(e.regionIds||[]).includes(r.id));
  grid.innerHTML=regions().map(r=>{const n=days(r).length;
    return `<button class="rcard reveal" data-id="${r.id}"><div class="ph">${img(regionImagePath(r),r.name+' — foto',r.name,regionImagePath(r))}</div>
    <div class="tx"><span class="badge">${esc(r.badge||'')}</span><h3>${esc(r.name)}</h3><p>${esc(r.summary)}</p>${n?`<p><small>Salnamədə: ${n} gün</small></p>`:''}</div></button>`}).join('');
  grid.onclick=e=>{const c=e.target.closest('.rcard');if(c)open(c.dataset.id)};
  document.addEventListener('openregion',e=>open(e.detail));

  function open(id){
    const r=regions().find(x=>x.id===id);if(!r)return;const ds=days(r),g=r.gallery||[];
    Modal.open(`${img(regionImagePath(r),r.name,r.name,regionImagePath(r),true)}
      <span class="badge">${esc(r.badge||'')}</span><h3>${esc(r.name)}</h3>
      <p><b>Coğrafi mövqe:</b> ${esc(r.area)}</p>
      ${(r.history||[]).map(p=>`<p>${esc(p)}</p>`).join('')}
      ${g.length?`<div class="thumbs">${g.map((x,k)=>`<button data-g="${k}" aria-label="Fotonu böyüt">${img(x.src,x.caption||'',r.name,'')}</button>`).join('')}</div>`:''}
      ${ds.length?`<h4>Salnamədəki günlər</h4><div class="chips">${ds.map(e=>`<button class="chip" data-day="${e.id}">${dayLabel(e)} · ${fmtShort(e.date)}</button>`).join('')}</div>`:''}`);
    document.querySelectorAll('#modalBody [data-day]').forEach(b=>b.onclick=()=>{Modal.close();Timeline.selectById(b.dataset.day)});
    document.querySelectorAll('#modalBody [data-g]').forEach(b=>b.onclick=()=>Modal.view(g.map(x=>({src:x.src,caption:x.caption||r.name,credit:x.credit})),+b.dataset.g));
  }
})();
