// Ümumi: menyu, footer, scroll animasiyaları, məlumat yoxlaması
(()=>{
  Core.validate();
  const f=document.getElementById('footLinks');
  if(f)f.innerHTML=(window.FOOTER_LINKS||[]).map(l=>`<a class="btn" href="${Core.esc(l.href)}">${Core.esc(l.label)}</a>`).join('');
  const b=document.getElementById('burger'),n=document.getElementById('nav');
  b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')}));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();
