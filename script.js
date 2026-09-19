const root=document.documentElement;
const themes=document.getElementById("themes");
const themeToggle=document.getElementById("themeToggle");
const closeThemes=document.getElementById("closeThemes");

const saved=localStorage.getItem("s4yush-theme")||"blue";
if(saved!=="blue") root.dataset.theme=saved;

themeToggle.addEventListener("click",()=>themes.classList.toggle("open"));
closeThemes.addEventListener("click",()=>themes.classList.remove("open"));

document.querySelectorAll("[data-theme]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const t=btn.dataset.theme;
    if(t==="blue") root.removeAttribute("data-theme");
    else root.dataset.theme=t;
    localStorage.setItem("s4yush-theme",t);
  });
});

document.addEventListener("click",e=>{
  if(!themes.contains(e.target)&&!themeToggle.contains(e.target)) themes.classList.remove("open");
});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll("section[id]")];
const links=[...document.querySelectorAll(".side-nav a,.topnav a")];
const activeObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>activeObserver.observe(s));

document.getElementById("autoTheme").addEventListener("change",e=>{
  if(!e.target.checked)return;
  const h=new Date().getHours();
  const t=h<6||h>=19?"purple":h<12?"blue":h<17?"green":"orange";
  if(t==="blue")root.removeAttribute("data-theme");else root.dataset.theme=t;
});

document.querySelectorAll(".app").forEach(a=>{
  a.addEventListener("mousemove",e=>{
    const r=a.getBoundingClientRect();
    a.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px) scale(1.07)`;
  });
  a.addEventListener("mouseleave",()=>a.style.transform="");
});
