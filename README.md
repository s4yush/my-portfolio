# 🌌 Suyash — 3D Portfolio

<p align="center">
  <a href="https://s4yush.github.io/my-portfolio/">
    <img src="https://img.shields.io/badge/🌐%20CHECK%20LIVE-Portfolio-f12639?style=for-the-badge" alt="Check Live Portfolio">
  </a>
</p>

An interactive, cinematic 3D portfolio website built to showcase my profile, skills, and projects.

## 🔄 How The Website Works

```mermaid
flowchart TD
    A[🌐 Open Portfolio] --> B[🎬 Cinematic 3D Hero]
    B --> C[👨‍💻 About Suyash]
    C --> D[🛠️ Explore Skills]
    D --> E[📂 Explore Projects]
    E --> F[🔗 GitHub Projects]
    F --> G[📩 Contact / Connect]

    B --> H[🎨 Theme Controls]
    H --> I{Choose Color}
    I --> I1[🔴 Red]
    I --> I2[🟣 Purple]
    I --> I3[🔵 Blue]
    I --> I4[🟢 Green]

    H --> J{Choose Mode}
    J --> J1[☀️ Day]
    J --> J2[🌙 Night]

    I1 --> K[💾 Save Preferences]
    I2 --> K
    I3 --> K
    I4 --> K
    J1 --> K
    J2 --> K

    K --> L[⚡ Load Saved Theme]
```

## 🎯 Project Flow

**User enters the website →**

1. **Hero Section** — Cinematic 3D animation introduces Suyash.
2. **About Section** — First-year B.Tech student interested in CSE.
3. **Skills Section** — Python, Git & GitHub, and Computer Science learning.
4. **Projects Section** — Current work and upcoming projects.
5. **GitHub Integration** — Direct access to my GitHub projects.
6. **Contact Section** — Connect and collaborate.

## 🎨 Theme System

```mermaid
flowchart LR
    A[Theme Button] --> B{Select}
    B --> C[Color Theme]
    B --> D[Day / Night Mode]

    C --> E[Local Storage]
    D --> E

    E --> F[Website Loads]
    F --> G[Saved Theme Applied]
```

### 🎨 Available Colors

`Red` · `Purple` · `Blue` · `Green`

### 🌓 Modes

`Day` · `Night`

Color and mode preferences are stored separately.

## 🧩 Project Structure

```text
my-portfolio/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── space.js
    ├── theme.js
    └── ui.js
```

## 🚀 Run Locally

```bash
git clone https://github.com/s4yush/my-portfolio.git
cd my-portfolio
```

Then open `index.html` in your browser.

## 📂 Projects

More projects are coming soon.

## 🔗 Connect

- GitHub: https://github.com/s4yush

---

### CODE • LEARN • BUILD • GROW

Made by **Suyash**.
