// Google Maps (yalnız Maps JavaScript API). Nöqtələr: data/locations.js
(()=>{
  const el=document.getElementById('gmap'),locs=window.QARABAG?.locations||[];
  const COL={'şəhər':'#d6213a','qəsəbə':'#0092bc','strateji':'#b8922f','körpü':'#2f8f4e','kənd':'#5b6b7c'},esc=Core.esc;
  // Xəritə açılmasa, nöqtələri siyahı kimi göstəririk
  const err=m=>{el.innerHTML=`<div class="maperr"><p>${m}</p><ul>${locs.map(l=>`<li><b>${esc(l.name)}</b> — ${esc(l.district)}, ${Core.fmtShort(l.date)} ${l.date.slice(0,4)}</li>`).join('')}</ul></div>`};
  const key=window.GOOGLE_MAPS_API_KEY;
  if(!key){err('Google Maps API açarı təyin edilməyib: <b>js/config.js</b> faylına yazın.');return}
  window.gm_authFailure=()=>err('Google Maps açarı etibarsızdır və ya Maps JavaScript API aktiv deyil.');
  window.initMap=()=>{
    const map=new google.maps.Map(el,{center:{lat:39.6,lng:46.9},zoom:8,mapTypeControl:true}),iw=new google.maps.InfoWindow(),
      fFrom=document.getElementById('fFrom'),fTo=document.getElementById('fTo'),fD=document.getElementById('fDist');
    [...new Set(locs.map(l=>l.district))].sort().forEach(d=>fD.add(new Option(d,d)));
    document.getElementById('legend').innerHTML=Object.entries(COL).map(([k,c])=>`<span><i style="background:${c}"></i>${k}</span>`).join('');
    const ms=locs.map(l=>{const m=new google.maps.Marker({position:l,map,title:l.name,icon:{path:google.maps.SymbolPath.CIRCLE,scale:9,fillColor:COL[l.cat]||'#b8922f',fillOpacity:1,strokeColor:'#fff',strokeWeight:2}});
      m.addListener('click',()=>{iw.setContent(`<div><h4>${esc(l.name)}</h4><p><b>Tarix:</b> ${l.date.split('-').reverse().join('.')}<br><b>Rayon:</b> ${esc(l.district)}</p><p>${esc(l.desc)}</p></div>`);iw.open(map,m)});return{l,m}});
    const apply=()=>{const a=fFrom.value||'0000',b=fTo.value||'9999',d=fD.value;ms.forEach(({l,m})=>m.setVisible(l.date>=a&&l.date<=b&&(!d||l.district===d)))};
    [fFrom,fTo,fD].forEach(x=>x.onchange=apply);
    document.getElementById('fReset').onclick=()=>{fFrom.value=fTo.value=fD.value='';apply()};
    document.addEventListener('daychange',e=>ms.forEach(({l,m})=>{const hit=l.date===e.detail;m.setAnimation(hit?google.maps.Animation.BOUNCE:null);if(hit){map.panTo(l);setTimeout(()=>m.setAnimation(null),1800)}}));
  };
  const s=document.createElement('script');s.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=initMap&loading=async`;
  s.async=true;s.onerror=()=>err('Google Maps yüklənmədi.');document.head.appendChild(s);
})();
