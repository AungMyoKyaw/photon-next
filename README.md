# Photon Next

A modern, production-ready Next.js 15 starter template built with React 19, TypeScript, and Tailwind CSS v4. This template provides a solid foundation for building high-performance web applications with the latest technologies and best practices.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss)
![Template](https://img.shields.io/badge/Template-Ready-green)

**Repository:** [https://github.com/AungMyoKyaw/photon-next](https://github.com/AungMyoKyaw/photon-next)

## Quick Start (Use as Template)

### Option 1: Use this template directly

1. Click the **"Use this template"** button at the top of this repository
2. Choose a name for your new repository
3. Clone your new repository locally

### Option 2: Create with create-next-app

```bash
npx create-next-app --example https://github.com/AungMyoKyaw/photon-next your-app-name
```

### Option 3: Clone and customize

```bash
git clone https://github.com/AungMyoKyaw/photon-next.git your-app-name
cd your-app-name
rm -rf .git
git init
npm install
```

## Features

- **Next.js 15.5.4** with App Router for enhanced routing and layouts
- **React 19.1.0** with latest features and optimizations
- **TypeScript** for type-safe development
- **Tailwind CSS v4** with modern styling system
- **Turbopack** for lightning-fast development builds
- **ESLint** and **Prettier** for code quality and consistency
- **Responsive design** with mobile-first approach
- **Dark mode support** with system preference detection
- **Optimized fonts** using Next.js font optimization

## What's Included in This Template

- ✅ **Next.js 15.5.4** with App Router configured
- ✅ **React 19.1.0** with latest features
- ✅ **TypeScript** configuration with strict mode
- ✅ **Tailwind CSS v4** with dark mode support
- ✅ **ESLint** and **Prettier** for code quality
- ✅ **Turbopack** for fast development builds
- ✅ **Geist fonts** (Sans and Mono) pre-configured
- ✅ **Responsive design** starter
- ✅ **Dark mode** system preference detection
- ✅ **Optimized metadata** configuration

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AungMyoKyaw/photon-next.git
   cd photon-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

## Customization Guide

### Update Project Information

1. **Update `package.json`**

   ```json
   {
     "name": "your-app-name",
     "description": "Your app description",
     "author": "Your Name"
   }
   ```

2. **Update metadata in `src/app/layout.tsx`**

   ```typescript
   export const metadata: Metadata = {
     title: 'Your App Name',
     description: 'Your app description'
   };
   ```

3. **Update favicon**
   Replace `src/app/favicon.ico` with your own favicon

4. **Customize styles**
   Modify `src/app/globals.css` to update:
   - Color scheme (CSS variables)
   - Font families
   - Global styles

### Add Your Content

1. **Edit the home page** in `src/app/page.tsx`
2. **Create new pages** by adding `page.tsx` files in new directories under `src/app/`
3. **Add components** in `src/components/` (create this directory if needed)
4. **Add layouts** for sections using `layout.tsx` files

### Configure Tailwind CSS

Edit `tailwind.config.ts` to:

- Add custom colors
- Configure breakpoints
- Add custom utilities
- Extend the theme

## Project Structure

```
photon-next/
├── public/                 # Static assets (images, icons, etc.)
│   ├── next.svg           # Next.js logo
│   ├── vercel.svg         # Vercel logo
│   ├── globe.svg          # Globe icon
│   ├── window.svg         # Window icon
│   └── file.svg           # File icon
├── src/                   # Application source code
│   ├── app/               # App Router directory
│   │   ├── favicon.ico    # Favicon
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout component
│   │   └── page.tsx       # Home page component
│   └── components/        # Reusable components (create as needed)
├── .eslintrc.json         # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Tech Stack

### Core Framework

- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript 5** - Static type checking

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **CSS Variables** - Theme system with dark mode support

### Development Tools

- **ESLint 9** - Code linting and error detection
- **Prettier 3.6.2** - Code formatting
- **Turbopack** - Fast bundler for development

### Fonts

- **Geist Sans** - Modern sans-serif font
- **Geist Mono** - Modern monospace font

## Configuration

### TypeScript Configuration

The project uses TypeScript with strict mode enabled and path aliases (`@/*` maps to `./src/*`).

### Tailwind CSS Configuration

- Uses Tailwind CSS v4 with modern theme system
- Custom CSS variables for colors and fonts
- Dark mode support via system preference

### ESLint Configuration

- Next.js ESLint configuration for best practices
- TypeScript support with proper type checking

## Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Vercel will automatically detect Next.js and configure settings**
3. **Deploy** - Your app will be live on a Vercel domain

### Other Platforms

#### Build the application

```bash
npm run build
```

#### Start production server

```bash
npm run start
```

The application will be available on port 3000.

## Key Features Explained

### App Router

This project uses Next.js 15's App Router, which provides:

- Server and Client Components
- Shared layouts
- Streaming and suspense
- Advanced routing patterns

### Turbopack

Development uses Turbopack for:

- 53% faster local startup
- 94% faster code updates
- Optimized bundling

### Tailwind CSS v4

Latest version with:

- Enhanced color system
- Improved responsive utilities
- Built-in dark mode support
- Better performance

## Development Best Practices

### Code Organization

- Use the `src/` directory for all application code
- Keep components co-located with their styles
- Utilize TypeScript interfaces for type safety

### Styling Guidelines

- Use Tailwind utility classes for styling
- Leverage CSS variables for theme consistency
- Follow mobile-first responsive design

### Performance Optimization

- Use Next.js Image component for optimized images
- Implement proper loading states
- Utilize React 19's latest optimizations

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Contributing to the Template

Found an issue or want to improve this template? Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This template is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Team](https://vercel.com/) for the amazing framework
- [Tailwind CSS Team](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the hosting platform

---

🚀 **Start building your next project with this template!**

Built with ❤️ using Next.js 15, React 19, and Tailwind CSS v4
