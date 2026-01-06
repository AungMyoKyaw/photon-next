# Photon Next

A modern, production-ready **Next.js 16** starter template built with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed with a **Neo-Brutalist / Cyber** aesthetic, this template provides a high-performance foundation with the latest web technologies, featuring a CSS-first configuration approach and lightning-fast builds via Turbopack.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js&style=flat-square)
![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss&style=flat-square)
![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-red?style=flat-square)

**Repository:** [https://github.com/AungMyoKyaw/photon-next](https://github.com/AungMyoKyaw/photon-next)
**Live Demo:** [https://photon-next.vercel.app/](https://photon-next.vercel.app/)

## 🚀 Quick Start

### Option 1: One-command Install (Recommended)

```bash
npx create-next-app --example https://github.com/AungMyoKyaw/photon-next my-app
cd my-app
```

### Option 2: Clone & Install

```bash
# Clone the repo
git clone https://github.com/AungMyoKyaw/photon-next.git your-app-name
cd your-app-name

# Remove git history to start fresh
rm -rf .git
git init

# Install dependencies
npm install
```

### 2. Start Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## ⚡ Tech Stack

- **Next.js 16.1.1**: App Router, Server Components, and advanced routing.
- **React 19.2.3**: Latest React features including Actions and optimized hooks.
- **Tailwind CSS v4**: The new high-performance, CSS-first styling engine.
- **TypeScript 5**: Strict type safety and modern JavaScript features.
- **Turbopack**: Lightning-fast incremental builds (53% faster startup).
- **Geist Fonts**: Optimized generic sans and mono fonts by Vercel.

## 🎨 Design System: Neo-Brutalist / Cyber

This template features a bold, high-contrast design system defined entirely in CSS.

- **Visual Style**: High contrast, defined borders, "Cyber Grid" backgrounds.
- **Animations**: Custom keyframes for `float`, `scan-line`, and `pulse-glow`.
- **Theme**: Dark mode supported via system preference (`prefers-color-scheme`).

### Key Components

- **Background**: A CSS-generated cyber grid pattern.
- **Utilities**: Custom classes like `.brutalist-border` and `.brutalist-shadow`.

## 🛠️ Configuration & Customization

### Tailwind CSS v4 (CSS-First)

Unlike v3, **there is no `tailwind.config.ts`**. All configuration is handled directly in `src/app/globals.css` using the new `@theme` directive.

**To customize colors:**
Edit `src/app/globals.css`:

```css
@theme inline {
  /* Define your design tokens here */
  --color-background: var(--background);
  --color-accent-primary: #0000ff; /* Change this */
  --font-display: var(--font-space-grotesk);
}
```

**To add custom utilities:**
Use the `@utility` directive or standard CSS classes in the same file.

### Project Structure

```
photon-next/
├── src/
│   ├── app/
│   │   ├── globals.css    # SOURCE OF TRUTH: Tailwind theme & styles
│   │   ├── layout.tsx     # Root layout & Metadata
│   │   └── page.tsx       # Landing page (Demo)
│   └── components/        # React components
├── public/                # Static assets
├── next.config.ts         # Next.js config
├── postcss.config.mjs     # PostCSS config (for Tailwind v4)
└── package.json           # Deps & Scripts
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Vercel will automatically detect the Next.js framework and deploy.

### Build Locally

```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes.
4. Push to branch & open a PR.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with ❤️ using **Next.js 16** & **Tailwind v4**
