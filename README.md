# 🌌 Suyash — 3D Portfolio

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
