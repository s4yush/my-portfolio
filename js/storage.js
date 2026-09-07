const Storage = {
  keys: {
    theme: "suyash-theme",
    color: "suyash-accent"
  },

  getTheme() {
    return localStorage.getItem(this.keys.theme) || "night";
  },

  getColor() {
    return localStorage.getItem(this.keys.color) || "#9b6cff";
  },

  setTheme(theme) {
    localStorage.setItem(this.keys.theme, theme);
  },

  setColor(color) {
    localStorage.setItem(this.keys.color, color);
  }
};
