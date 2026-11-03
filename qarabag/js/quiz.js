// Viktorina. Suallar: data/quiz.js
(()=>{
  const Q=window.QARABAG?.quiz||[],box=document.getElementById('quizBox'),esc=Core.esc;let i=0,ans=[];
  const show=()=>{const q=Q[i];box.innerHTML=`<div class="prog">${i+1}/${Q.length}</div><h3>${esc(q.q)}</h3>${q.o.map((t,k)=>`<button class="opt" data-k="${k}">${esc(t)}</button>`).join('')}`;
    box.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{ans.push(+b.dataset.k);++i<Q.length?show():end()})};
  const end=()=>{const ok=Q.filter((q,k)=>ans[k]===q.a).length;
    box.innerHTML=`<h3>Nəticə: ${ok} düzgün, ${Q.length-ok} səhv</h3><p class="msg">${ok===Q.length?'Əla! Bütün suallara düzgün cavab verdiniz!':'Tariximizi öyrənmək davamlı bir yoldur. Düzgün cavabları nəzərdən keçirin.'}</p>
    ${Q.map((q,k)=>{const r=ans[k]===q.a;return `<div class="res ${r?'ok':'bad'}"><b>${k+1}. ${esc(q.q)}</b><br>Sizin cavab: ${esc(q.o[ans[k]])} ${r?'✔':'✘'}<br>Düzgün cavab: ${esc(q.o[q.a])}</div>`}).join('')}<button class="btn gold" id="retry">Yenidən cəhd et</button>`;
    document.getElementById('retry').onclick=()=>{i=0;ans=[];show()}};
  if(Q.length)show();
})();
