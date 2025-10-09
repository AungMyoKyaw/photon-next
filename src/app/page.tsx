import Image from 'next/image';
import CopyButton from '@/components/CopyButton';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-md opacity-50"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl sm:text-3xl">
                  P
                </span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Photon Next
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A modern, production-ready Next.js 15 starter template built with
            React 19, TypeScript, and Tailwind CSS v4
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[.05] dark:bg-white/[.06] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
              Next.js 15
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[.05] dark:bg-white/[.06] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              React 19
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[.05] dark:bg-white/[.06] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              TypeScript
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[.05] dark:bg-white/[.06] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              Tailwind v4
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8">
            <a
              className="group rounded-full border-2 border-solid border-transparent transition-all flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white gap-2 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 hover:scale-105 font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
              href="https://github.com/AungMyoKyaw/photon-next"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Use This Template
            </a>
            <a
              className="rounded-full border-2 border-solid border-black/[.08] dark:border-white/[.145] transition-all flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-black/[.15] dark:hover:border-white/[.25] font-semibold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
              href="https://github.com/AungMyoKyaw/photon-next#readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Documentation
            </a>
          </div>

          {/* Quick Start Code */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="bg-black/[.03] dark:bg-white/[.04] rounded-2xl p-6 border border-black/[.08] dark:border-white/[.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Quick Start
                </span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
              </div>
              <div className="relative">
                <code className="font-mono text-sm sm:text-base text-left block text-gray-800 dark:text-gray-200">
                  <span className="text-purple-600 dark:text-purple-400">
                    npx
                  </span>{' '}
                  create-next-app{' '}
                  <span className="text-blue-600 dark:text-blue-400">
                    --example
                  </span>{' '}
                  <span className="text-green-600 dark:text-green-400">
                    https://github.com/AungMyoKyaw/photon-next
                  </span>{' '}
                  <span className="text-orange-600 dark:text-orange-400">
                    my-app
                  </span>
                </code>
                <div className="absolute top-0 right-0 p-2">
                  <CopyButton
                    text="npx create-next-app --example https://github.com/AungMyoKyaw/photon-next my-app"
                    className="bg-white/90 dark:bg-black/90 backdrop-blur-sm border-white/20 dark:border-black/20 shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto">
            <div className="group p-8 rounded-2xl bg-black/[.02] dark:bg-white/[.02] border border-black/[.08] dark:border-white/[.08] hover:border-black/[.12] dark:hover:border-white/[.12] hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/15 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <svg
                    className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-gray-100">Lightning Fast</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Built with Turbopack for blazing fast development and optimized
                  production builds
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-2xl bg-black/[.02] dark:bg-white/[.02] border border-black/[.08] dark:border-white/[.08] hover:border-black/[.12] dark:hover:border-white/[.12] hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/15 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <svg
                    className="w-7 h-7 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-gray-100">Type-Safe</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Full TypeScript support with strict mode for robust,
                  maintainable code
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-2xl bg-black/[.02] dark:bg-white/[.02] border border-black/[.08] dark:border-white/[.08] hover:border-black/[.12] dark:hover:border-white/[.12] hover:shadow-lg hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/15 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                  <svg
                    className="w-7 h-7 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-gray-100">Modern Styling</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tailwind CSS v4 with dark mode and custom theme system out of
                  the box
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[.08] dark:border-white/[.08] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with</span>
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js"
                width={60}
                height={12}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                className="flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href="https://github.com/AungMyoKyaw/photon-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <a
                className="flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="Docs"
                  width={14}
                  height={14}
                />
                Docs
              </a>
              <a
                className="flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel"
                  width={16}
                  height={16}
                />
                Deploy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
