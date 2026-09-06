(() => {
if(!window.THREE)return;
const canvas=document.getElementById("particles"),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(55,innerWidth/innerHeight,.1,100);
camera.position.z=7;
const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);
const n=innerWidth<650?550:1000, pos=new Float32Array(n*3);
for(let i=0;i<pos.length;i++)pos[i]=(Math.random()-.5)*26;
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(pos,3));
const m=new THREE.PointsMaterial({size:.018,transparent:true,opacity:.65});const stars=new THREE.Points(g,m);scene.add(stars);
const group=new THREE.Group();scene.add(group);
const geo=new THREE.TorusKnotGeometry(1.45,.035,160,12),wire=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({wireframe:true,transparent:true,opacity:.18}));
wire.position.set(2.2,.3,-.8);group.add(wire);
const ring=new THREE.Mesh(new THREE.TorusGeometry(2.15,.018,8,120),new THREE.MeshBasicMaterial({transparent:true,opacity:.35}));
ring.position.copy(wire.position);ring.rotation.x=1.1;group.add(ring);
function accent(){return getComputedStyle(document.body).getPropertyValue("--a").trim()||"#f12639"}
function recolor(){wire.material.color.set(accent());ring.material.color.set(accent());m.color.set(accent())}recolor();addEventListener("themechange",recolor);
let tx=0,ty=0;addEventListener("pointermove",e=>{tx=(e.clientX/innerWidth-.5)*.25;ty=(e.clientY/innerHeight-.5)*.15},{passive:true});
addEventListener("resize",()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
const clock=new THREE.Clock();function loop(){let t=clock.getElapsedTime();stars.rotation.y=t*.002;group.rotation.y+=(tx-group.rotation.y)*.03;group.rotation.x+=(ty-group.rotation.x)*.03;wire.rotation.x=t*.15;wire.rotation.z=t*.08;ring.rotation.z=-t*.12;renderer.render(scene,camera);requestAnimationFrame(loop)}loop();
})();