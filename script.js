const root=document.documentElement, panel=document.getElementById('themePanel');
const saved=localStorage.getItem('s4yush-theme')||'blue';
if(saved!=='blue') root.dataset.theme=saved;
document.querySelector('.theme-btn').onclick=()=>panel.classList.toggle('open');
document.querySelectorAll('.theme-option').forEach(b=>b.onclick=()=>{
 const t=b.dataset.theme;
 if(t==='blue') root.removeAttribute('data-theme'); else root.dataset.theme=t;
 localStorage.setItem('s4yush-theme',t); panel.classList.remove('open');
});
document.addEventListener('click',e=>{
 if(!panel.contains(e.target)&&!e.target.closest('.theme-btn')) panel.classList.remove('open');
});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
document.querySelector('.menu').onclick=()=>{document.querySelector('nav').style.display=document.querySelector('nav').style.display==='flex'?'none':'flex'};
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{if(innerWidth<=850)document.querySelector('nav').style.display='none'});
