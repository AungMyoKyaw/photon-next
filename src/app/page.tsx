import Image from 'next/image';
import CopyButton from '@/components/CopyButton';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-accent-primary selection:text-white">
      <div className="bg-cyber-grid fixed inset-0 -z-20 opacity-40"></div>
      <div className="gradient-mesh fixed top-0 left-0 -z-10 h-full w-full"></div>
      <div className="animate-scan pointer-events-none fixed inset-0 -z-10 h-[200%] bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent"></div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="animate-float absolute top-20 left-10 hidden h-24 w-24 rounded-full border border-accent-primary/20 delay-100 lg:block"></div>
        <div className="animate-float absolute right-10 bottom-40 hidden h-32 w-32 rounded-full border border-accent-secondary/20 delay-300 lg:block"></div>
        <div className="animate-pulse-glow absolute top-1/3 right-1/4 hidden h-4 w-4 rounded-full bg-accent-primary md:block"></div>

        <div className="z-10 mx-auto w-full max-w-6xl space-y-16 text-center">
          <div className="animate-reveal space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/50 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary"></span>
              </span>
              <span className="font-mono text-xs font-medium tracking-wider text-foreground/70 uppercase">
                v1.0.0 Public Release
              </span>
            </div>

            <div className="relative inline-block">
              <h1 className="mix-blend-mode-multiply dark:mix-blend-mode-normal font-display text-6xl leading-none font-bold tracking-tighter text-foreground sm:text-7xl md:text-9xl">
                PHOTON
                <span className="animate-pulse-glow block bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  NEXT
                </span>
              </h1>
              <span className="absolute top-0 -left-8 hidden font-mono text-6xl font-thin text-foreground/10 sm:block md:text-8xl">
                {'['}
              </span>
              <span className="absolute top-0 -right-8 hidden font-mono text-6xl font-thin text-foreground/10 sm:block md:text-8xl">
                {']'}
              </span>
            </div>

            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-foreground/60 sm:text-xl">
              The ultimate{' '}
              <span className="font-bold text-foreground">Next.js 16</span>{' '}
              starter kit. Forged with React 19, TypeScript, and Tailwind v4.
              <span className="mt-2 block font-serif italic">
                Brutally efficient. Visually striking.
              </span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {[
                { name: 'Next.js 16', color: 'bg-foreground text-background' },
                { name: 'React 19', color: 'bg-blue-600 text-white' },
                { name: 'TypeScript', color: 'bg-blue-500 text-white' },
                { name: 'Tailwind v4', color: 'bg-cyan-500 text-white' }
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`transform px-4 py-2 font-mono text-sm font-bold tracking-wide uppercase shadow-sm transition-transform duration-200 hover:-translate-y-1 ${tech.color}`}
                >
                  {tech.name}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
              <a
                href="https://github.com/AungMyoKyaw/photon-next"
                target="_blank"
                rel="noopener noreferrer"
                className="group brutalist-shadow brutalist-shadow-hover relative w-full bg-foreground px-8 py-4 font-mono text-sm font-bold tracking-wider text-background uppercase transition-colors duration-300 hover:bg-accent-primary sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5"
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
                  Use Template
                </span>
              </a>
              <a
                href="#docs"
                className="w-full border-2 border-foreground bg-transparent px-8 py-4 font-mono text-sm font-bold tracking-wider text-foreground uppercase transition-all duration-300 hover:bg-foreground hover:text-background sm:w-auto"
              >
                View Documentation
              </a>
            </div>
          </div>

          <div className="animate-reveal mx-auto max-w-3xl pt-12 delay-200">
            <div className="group relative overflow-hidden rounded-lg border-2 border-foreground bg-[#0a0a0a] text-left shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#333] bg-[#1a1a1a] px-4 py-2">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-gray-400">
                  bash — 80x24
                </div>
              </div>

              <div className="relative p-6 font-mono text-sm sm:text-base">
                <div className="mb-2 flex items-center gap-2 text-green-400">
                  <span>➜</span>
                  <span className="text-blue-400">~</span>
                  <span>create-next-app</span>
                </div>
                <div className="flex flex-col gap-2 text-gray-300 sm:flex-row sm:items-center">
                  <span className="text-purple-400">npx</span>
                  <span>create-next-app</span>
                  <span className="text-gray-500">--example</span>
                  <span className="whitespace-nowrap">
                    https://github.com/AungMyoKyaw/photon-next
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <CopyButton
                    text="npx create-next-app --example https://github.com/AungMyoKyaw/photon-next my-app"
                    className="border-[#444] bg-[#2a2a2a] text-white hover:bg-[#333]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="animate-reveal grid grid-cols-1 gap-6 pt-20 delay-300 md:grid-cols-3">
            {[
              {
                title: 'Lightning Fast',
                desc: 'Turbopack powered. 53% faster startup. 94% faster updates.',
                icon: (
                  <svg
                    className="h-8 w-8"
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
                ),
                accent: 'group-hover:text-yellow-400'
              },
              {
                title: 'Type-Safe',
                desc: 'Strict TypeScript. No more runtime errors. Sleep better.',
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                accent: 'group-hover:text-blue-400'
              },
              {
                title: 'Modern Stack',
                desc: 'Tailwind v4. React 19. Next 16. The bleeding edge, tamed.',
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
                accent: 'group-hover:text-purple-400'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group border-2 border-foreground/5 bg-surface/30 p-8 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-foreground hover:shadow-xl"
              >
                <div
                  className={`mb-4 inline-block rounded-lg bg-foreground/5 p-3 text-foreground ${feature.accent} transition-colors`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-foreground/70">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-foreground/10 bg-surface/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://github.com/AungMyoKyaw/photon-next"
              className="text-foreground/60 hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
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
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
                P
              </div>
              <p className="text-center text-base text-foreground/60">
                &copy; 2024 Photon Next. Open Source.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
