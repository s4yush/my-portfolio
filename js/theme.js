(() => {
const MODE="portfolio-theme-mode", COLOR="portfolio-theme-color";
const modes=["day","night"], colors=["red","purple","blue","green"];
function applyMode(v){if(!modes.includes(v))v="night";document.body.dataset.mode=v;localStorage.setItem(MODE,v);document.querySelectorAll("[data-mode]").forEach(x=>x.classList.toggle("selected",x.dataset.mode===v));document.getElementById("modeBtn").textContent=v==="night"?"☾":"☀";}
function applyColor(v){if(!colors.includes(v))v="red";document.body.dataset.color=v;localStorage.setItem(COLOR,v);document.querySelectorAll("[data-color]").forEach(x=>x.classList.toggle("selected",x.dataset.color===v));window.dispatchEvent(new Event("themechange"));}
const savedM=localStorage.getItem(MODE),savedC=localStorage.getItem(COLOR);
applyMode(modes.includes(savedM)?savedM:"night");applyColor(colors.includes(savedC)?savedC:"red");
document.getElementById("modeBtn").onclick=()=>applyMode(document.body.dataset.mode==="night"?"day":"night");
document.querySelectorAll("[data-mode]").forEach(x=>x.onclick=()=>applyMode(x.dataset.mode));
document.querySelectorAll("[data-color]").forEach(x=>x.onclick=()=>applyColor(x.dataset.color));
})();