// Ümumi köməkçi funksiyalar (hamı üçün əlçatan: window.Core)
window.Core=(()=>{
  const MONTHS=['yanvar','fevral','mart','aprel','may','iyun','iyul','avqust','sentyabr','oktyabr','noyabr','dekabr'];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmtDate=iso=>{const[y,m,d]=iso.split('-');return `${+d} ${MONTHS[m-1]} ${y}`};
  const fmtShort=iso=>{const[,m,d]=iso.split('-');return `${+d} ${MONTHS[m-1]}`};

  // Foto yoxdursa göstərilən təmiz SVG şəkil (şəkil faylı lazım deyil)
  function placeholder(label,hint){
    const showHint=window.QARABAG_CONFIG?.showPlaceholderHints&&hint;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1f3a"/><stop offset="1" stop-color="#16406b"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><rect y="0" width="267" height="6" fill="#0092bc"/><rect x="267" width="266" height="6" fill="#d6213a"/><rect x="533" width="267" height="6" fill="#2f8f4e"/><text x="400" y="235" text-anchor="middle" font-family="Georgia,serif" font-size="54" fill="#e6c97a">${esc(label)}</text>${showHint?`<text x="400" y="290" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#9fb2cf">Foto əlavə edin: ${esc(hint)}</text>`:''}</svg>`;
    return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  }
  // <img>: əvvəl real foto, tapılmasa placeholder
  function img(src,alt,label,hint,eager){
    const ph=placeholder(label,hint);
    return `<img src="${esc(src||ph)}" alt="${esc(alt)}" ${eager?'':'loading="lazy"'} data-ph="${esc(ph)}" onerror="if(this.src!==this.dataset.ph){this.src=this.dataset.ph}">`;
  }
  const eventImagePath=e=>e.image||`assets/images/timeline/${e.id}.jpg`;
  const regionImagePath=r=>r.image||`assets/images/regions/${r.id}.jpg`;
  const data=()=>window.QARABAG||{};
  const events=()=>(data().timeline||[]).filter(e=>!e.hidden);
  const regions=()=>data().regions||[];
  const dayLabel=e=>e.day?`${e.day}-ci gün`:'Yekun';

  // Məlumatın düzgünlüyünü yoxlayır, problemləri konsola yazır
  function validate(){
    const ids=new Set(),rids=new Set(regions().map(r=>r.id));
    (data().timeline||[]).forEach(e=>{
      if(ids.has(e.id))console.warn('[timeline.js] təkrar id:',e.id);ids.add(e.id);
      if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date))console.warn('[timeline.js] yanlış tarix:',e.id,e.date);
      (e.regionIds||[]).forEach(r=>{if(!rids.has(r))console.warn('[timeline.js] naməlum rayon:',e.id,r)});
    });
  }
  return{esc,fmtDate,fmtShort,placeholder,img,eventImagePath,regionImagePath,events,regions,dayLabel,validate,data};
})();
