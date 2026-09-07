window.addEventListener("DOMContentLoaded", () => {
  SpaceScene.init();
  UI.init();

  window.addEventListener("load", () => {
    document.querySelector("#loader")?.classList.add("done");
  });
});
