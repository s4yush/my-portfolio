const UI = (() => {
  const root = document.documentElement;
  const body = document.body;

  function applyTheme() {
    const theme = Storage.getTheme();
    const color = Storage.getColor();

    root.style.setProperty("--accent", color);

    body.classList.toggle("day", theme === "day");

    document.querySelectorAll(".color-btn").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.color.toLowerCase() === color.toLowerCase()
      );
    });

    const icon = document.querySelector("#modeIcon");

    if (icon) {
      icon.textContent = theme === "day" ? "☀" : "☾";
    }

    SpaceScene.setAccent(color);
  }

  function setupThemeControls() {
    document.querySelectorAll(".color-btn").forEach(button => {
      button.addEventListener("click", () => {
        Storage.setColor(button.dataset.color);
        applyTheme();
      });
    });

    document.querySelector("#modeToggle")?.addEventListener("click", () => {
      const next = Storage.getTheme() === "night" ? "day" : "night";

      Storage.setTheme(next);
      applyTheme();
    });
  }

  function setupMobileMenu() {
    const menu = document.querySelector("#mobileMenu");
    const toggle = document.querySelector("#menuToggle");

    toggle?.addEventListener("click", () => {
      menu?.classList.toggle("open");
    });

    menu?.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("open"));
    });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach(item => observer.observe(item));
  }

  function setupCursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    window.addEventListener("pointermove", event => {
      dot.style.transform =
        `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      ring.style.transform =
        `translate3d(${event.clientX - 18}px, ${event.clientY - 18}px, 0)`;
    });
  }

  function init() {
    applyTheme();
    setupThemeControls();
    setupMobileMenu();
    setupReveal();
    setupCursor();
  }

  return {
    init,
    applyTheme
  };
})();
