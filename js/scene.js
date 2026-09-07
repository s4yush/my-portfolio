const SpaceScene = (() => {
  const canvas = document.querySelector("#space");

  let scene;
  let camera;
  let renderer;
  let stars;
  let planet;
  let ring;
  let clock;
  let targetX = 0;
  let targetY = 0;
  let scrollDepth = 0;

  function init() {
    if (!window.THREE || !canvas) return;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1800
    );

    camera.position.set(0, 0, 12);

    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);

    clock = new THREE.Clock();

    createStars();
    createPlanet();
    createLights();

    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resize);

    animate();
  }

  function createStars() {
    const count = 7000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 130;
      positions[i * 3 + 2] = -Math.random() * 360;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.045,
      transparent: true,
      opacity: 0.8
    });

    stars = new THREE.Points(geometry, material);
    scene.add(stars);
  }

  function createPlanet() {
    const geometry = new THREE.SphereGeometry(2.5, 48, 48);

    const material = new THREE.MeshStandardMaterial({
      color: 0x251247,
      roughness: 0.7,
      metalness: 0.25,
      emissive: 0x12051e,
      emissiveIntensity: 1.1
    });

    planet = new THREE.Mesh(geometry, material);
    planet.position.set(4.8, -1.2, -11);
    scene.add(planet);

    const ringGeometry = new THREE.TorusGeometry(3.35, 0.025, 12, 180);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x9b6cff,
      transparent: true,
      opacity: 0.75
    });

    ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.copy(planet.position);
    ring.rotation.x = 1.0;
    scene.add(ring);
  }

  function createLights() {
    const key = new THREE.PointLight(0x9b6cff, 80, 80);
    key.position.set(5, 7, 5);
    scene.add(key);

    const fill = new THREE.PointLight(0x306bff, 25, 100);
    fill.position.set(-8, -5, -8);
    scene.add(fill);

    scene.add(new THREE.AmbientLight(0x7788bb, 1.2));
  }

  function handlePointer(event) {
    targetX = (event.clientX / window.innerWidth - 0.5) * 2;
    targetY = (event.clientY / window.innerHeight - 0.5) * 2;
  }

  function handleScroll() {
    scrollDepth = Math.min(window.scrollY * 0.003, 6);
  }

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime();

    stars.rotation.y += 0.00022;
    stars.rotation.x = Math.sin(time * 0.08) * 0.015;

    planet.rotation.y += 0.0018;
    planet.position.y = -1.2 + Math.sin(time * 0.45) * 0.12;

    ring.position.copy(planet.position);
    ring.rotation.z -= 0.0009;

    camera.position.x += (targetX * 0.8 - camera.position.x) * 0.025;
    camera.position.y += (-targetY * 0.5 - camera.position.y) * 0.025;
    camera.position.z += (12 - scrollDepth - camera.position.z) * 0.025;

    renderer.render(scene, camera);
  }

  function setAccent(hex) {
    if (!ring) return;

    ring.material.color.set(hex);

    const lights = scene.children.filter(
      object => object.isLight && object.type === "PointLight"
    );

    if (lights[0]) {
      lights[0].color.set(hex);
    }
  }

  return {
    init,
    setAccent
  };
})();
