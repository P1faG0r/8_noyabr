// Modal pəncərə və foto böyüdücü (<dialog> — klaviatura və Esc özü işləyir)
window.Modal=(()=>{
  const m=document.getElementById('modal'),body=document.getElementById('modalBody'),
        v=document.getElementById('viewer'),vImg=document.getElementById('vImg'),vCap=document.getElementById('vCap');
  let list=[],idx=0,opener=null;
  const closeOnBackdrop=d=>d.addEventListener('click',e=>{if(e.target===d)d.close()});
  closeOnBackdrop(m);closeOnBackdrop(v);
  document.getElementById('modalX').onclick=()=>m.close();
  document.getElementById('viewerX').onclick=()=>v.close();
  m.addEventListener('close',()=>opener&&opener.focus?.());
  function open(html){opener=document.activeElement;body.innerHTML=html;m.showModal();m.scrollTop=0}
  function close(){if(m.open)m.close()}
  // images: [{src,caption,credit}]
  function view(images,i){list=images;idx=i;show()}
  function show(){const it=list[idx];vImg.src=it.src;vImg.alt=it.caption||'';
    vCap.textContent=[it.caption,it.credit&&('Mənbə: '+it.credit)].filter(Boolean).join(' — ');
    document.getElementById('vPrev').hidden=document.getElementById('vNext').hidden=list.length<2;
    if(!v.open)v.showModal()}
  document.getElementById('vPrev').onclick=()=>{idx=(idx-1+list.length)%list.length;show()};
  document.getElementById('vNext').onclick=()=>{idx=(idx+1)%list.length;show()};
  return{open,close,view};
})();
