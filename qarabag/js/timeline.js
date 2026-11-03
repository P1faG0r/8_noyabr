// Zaman şkalası: gün seçimi, detal kartı, ətraflı pəncərə.
// Məlumat: data/timeline.js. Bu faylı adətən dəyişmək lazım deyil.
(()=>{
  const {esc,fmtDate,fmtShort,img,events,regions,dayLabel,eventImagePath}=Core;
  const items=events(),rail=document.getElementById('tl'),box=document.getElementById('tlDetail'),
        prev=document.getElementById('tlPrev'),next=document.getElementById('tlNext'),prog=document.getElementById('tlProg');
  if(!items.length){box.textContent='Salnamə məlumatı tapılmadı (data/timeline.js).';return}
  let cur=0;
  const regionById=id=>regions().find(r=>r.id===id);

  rail.innerHTML=items.map((e,i)=>`<button class="tl-card ${e.status==='todo'?'todo':''}" role="listitem" data-i="${i}" aria-pressed="false"><small>${dayLabel(e)}</small><b>${fmtShort(e.date)}</b><span>${esc(e.title)}</span></button>`).join('');
  rail.onclick=ev=>{const c=ev.target.closest('.tl-card');if(c)select(+c.dataset.i,true)};
  prev.onclick=()=>select(cur-1,true);next.onclick=()=>select(cur+1,true);
  document.getElementById('timeline').addEventListener('keydown',ev=>{
    if(/INPUT|SELECT|TEXTAREA/.test(ev.target.tagName))return;
    if(ev.key==='ArrowRight'){select(cur+1,true);ev.preventDefault()}
    if(ev.key==='ArrowLeft'){select(cur-1,true);ev.preventDefault()}});

  const badge=e=>({sourced:'<span class="badge sourced">Mənbə göstərilib</span>',draft:'<span class="badge draft">Mənbə əlavə edilməlidir</span>',todo:'<span class="badge todo">Məlumat tamamlanmalıdır</span>'}[e.status]||'');

  function select(i,scroll){
    if(i<0||i>=items.length)return;cur=i;const e=items[i];
    rail.querySelectorAll('.tl-card').forEach((c,k)=>{const on=k===i;c.classList.toggle('active',on);c.setAttribute('aria-pressed',on)});
    const act=rail.children[i];if(scroll)act.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
    prev.disabled=i===0;next.disabled=i===items.length-1;prog.style.width=((i+1)/items.length*100)+'%';
    const regs=(e.regionIds||[]).map(regionById).filter(Boolean);
    box.innerHTML=`<div class="event">
      <button class="photo" aria-label="Fotonu böyüt" id="evPhoto">${img(eventImagePath(e),e.title+' — foto',dayLabel(e),eventImagePath(e),true)}</button>
      <div class="body"><div class="meta"><span class="badge">${dayLabel(e)}</span><span>${fmtDate(e.date)}</span>${badge(e)}</div>
        <h3>${esc(e.title)}</h3><p>${esc(e.short)}</p>
        ${regs.length?`<div class="chips">${regs.map(r=>`<button class="chip" data-region="${r.id}">${esc(r.name)}</button>`).join('')}</div>`:''}
        <button class="btn gold" id="evMore">Ətraflı</button></div></div>`;
    box.querySelector('#evMore').onclick=()=>details(e);
    box.querySelector('#evPhoto').onclick=()=>Modal.view(gallery(e),0);
    box.querySelectorAll('[data-region]').forEach(b=>b.onclick=()=>document.dispatchEvent(new CustomEvent('openregion',{detail:b.dataset.region})));
    history.replaceState(null,'','#'+e.id);
    document.dispatchEvent(new CustomEvent('daychange',{detail:e.date}));
  }
  // Əsas foto + əlavə fotolar (böyüdücü üçün)
  function gallery(e){return [{src:box.querySelector?.('#evPhoto img')?.src||eventImagePath(e),caption:e.title}].concat((e.gallery||[]).map(g=>({src:g.src,caption:g.caption||e.title,credit:g.credit})))}

  function details(e){
    const regs=(e.regionIds||[]).map(regionById).filter(Boolean),g=e.gallery||[];
    Modal.open(`${img(eventImagePath(e),e.title,dayLabel(e),eventImagePath(e),true)}
      <div class="meta"><span class="badge">${dayLabel(e)}</span><span>${fmtDate(e.date)}</span>${badge(e)}</div>
      <h3>${esc(e.title)}</h3><p>${esc(e.description)}</p>
      ${e.places?.length?`<p><b>Yer adları:</b> ${e.places.map(esc).join(', ')}</p>`:''}
      ${regs.length?`<p><b>Rayon:</b> ${regs.map(r=>esc(r.name)).join(', ')}</p>`:''}
      ${e.facts?.length?`<h4>Vacib faktlar</h4><ul class="facts">${e.facts.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>`:''}
      ${g.length?`<h4>Əlavə fotolar</h4><div class="thumbs">${g.map((x,k)=>`<button data-g="${k}" aria-label="Fotonu böyüt">${img(x.src,x.caption||'',e.title,'')}</button>`).join('')}</div>`:''}
      ${e.sources?.length?`<h4>Mənbələr</h4><ul class="sources">${e.sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join('')}</ul>`:''}`);
    document.querySelectorAll('#modalBody [data-g]').forEach(b=>b.onclick=()=>Modal.view(g.map(x=>({src:x.src,caption:x.caption||e.title,credit:x.credit})),+b.dataset.g));
  }

  // Xaricdən çağırış: rayon pəncərəsindən günə keçid, # ilə açılış
  window.Timeline={selectById:id=>{const i=items.findIndex(e=>e.id===id);if(i>=0){select(i,true);document.getElementById('timeline').scrollIntoView()}}};
  const h=location.hash.slice(1),start=items.findIndex(e=>e.id===h);
  select(start>=0?start:0,false);
  if(start>=0)setTimeout(()=>document.getElementById('timeline').scrollIntoView(),50);
})();
