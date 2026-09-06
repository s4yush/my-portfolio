(() => {
const menu=document.getElementById("themeMenu"),btn=document.getElementById("colorBtn");
btn.onclick=e=>{e.stopPropagation();menu.classList.toggle("open")};
document.addEventListener("click",e=>{if(!menu.contains(e.target)&&e.target!==btn)menu.classList.remove("open")});
const observer=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle("visible",e.isIntersecting)),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
const links=[...document.querySelectorAll(".navlinks a")],sections=links.map(a=>document.querySelector(a.hash));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.hash==="#"+e.target.id))}),{rootMargin:"-42% 0px -48% 0px"});
sections.forEach(s=>s&&so.observe(s));
})();