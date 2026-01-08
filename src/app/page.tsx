import CopyButton from '@/components/CopyButton';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-accent-primary selection:text-white">
      <div className="bg-cyber-grid fixed inset-0 -z-20 opacity-40"></div>
      <div className="gradient-mesh fixed top-0 left-0 -z-10 h-full w-full"></div>
      <div className="animate-scan pointer-events-none fixed inset-0 -z-10 h-[200%] bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent"></div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-5 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="animate-float absolute top-20 left-10 hidden h-24 w-24 rounded-full border border-accent-primary/20 delay-100 lg:block"></div>
        <div className="animate-float absolute right-10 bottom-40 hidden h-32 w-32 rounded-full border border-accent-secondary/20 delay-300 lg:block"></div>
        <div className="animate-pulse-glow absolute top-1/3 right-1/4 hidden h-4 w-4 rounded-full bg-accent-primary md:block"></div>

        <div className="z-10 mx-auto w-full max-w-6xl space-y-12 text-center sm:space-y-14 lg:space-y-16">
          <div className="animate-reveal space-y-6 sm:space-y-7 lg:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/50 px-3.5 py-2 backdrop-blur-md sm:px-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary"></span>
              </span>
              <span className="font-mono text-[10px] font-medium tracking-wider text-foreground/70 uppercase sm:text-xs">
                v1.0.0 Public Release
              </span>
            </div>

            <div className="relative inline-block px-4 sm:px-0">
              <h1 className="mix-blend-mode-multiply dark:mix-blend-mode-normal font-display text-[clamp(3rem,12vw,5rem)] leading-[0.9] font-bold tracking-tighter text-foreground sm:text-[clamp(4rem,10vw,6rem)] lg:text-[clamp(6rem,8vw,8rem)]">
                PHOTON
                <span className="animate-pulse-glow block bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  NEXT
                </span>
              </h1>
              <span className="absolute top-0 -left-4 font-mono text-[clamp(2.5rem,10vw,4rem)] font-thin text-foreground/10 sm:-left-6 sm:text-[clamp(3rem,8vw,5rem)] lg:-left-8 lg:text-[clamp(4rem,7vw,6rem)]">
                {'['}
              </span>
              <span className="absolute top-0 -right-4 font-mono text-[clamp(2.5rem,10vw,4rem)] font-thin text-foreground/10 sm:-right-6 sm:text-[clamp(3rem,8vw,5rem)] lg:-right-8 lg:text-[clamp(4rem,7vw,6rem)]">
                {']'}
              </span>
            </div>

            <p className="mx-auto max-w-2xl px-4 font-body text-base leading-relaxed text-foreground/60 sm:px-0 sm:text-lg lg:text-xl">
              The ultimate{' '}
              <span className="font-bold text-foreground">Next.js 16</span>{' '}
              starter kit. Forged with React 19, TypeScript, and Tailwind v4.
              <span className="mt-2 block font-serif text-sm italic sm:text-base">
                Brutally efficient. Visually striking.
              </span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 px-4 pt-2 sm:gap-3 sm:px-0 sm:pt-4">
              {[
                { name: 'Next.js 16', color: 'bg-foreground text-background' },
                { name: 'React 19', color: 'bg-blue-600 text-white' },
                { name: 'TypeScript', color: 'bg-blue-500 text-white' },
                { name: 'Tailwind v4', color: 'bg-cyan-500 text-white' }
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`transform px-3 py-1.5 font-mono text-[11px] font-bold tracking-wide uppercase shadow-sm transition-transform duration-200 hover:-translate-y-1 active:translate-y-0 sm:px-4 sm:py-2 sm:text-xs ${tech.color}`}
                >
                  {tech.name}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 px-4 pt-6 sm:flex-row sm:gap-6 sm:px-0 sm:pt-8">
              <a
                href="https://github.com/AungMyoKyaw/photon-next"
                target="_blank"
                rel="noopener noreferrer"
                className="group brutalist-shadow brutalist-shadow-hover relative min-h-[44px] w-full bg-foreground px-6 py-3 font-mono text-xs font-bold tracking-wider text-background uppercase transition-all duration-300 hover:bg-accent-primary active:translate-x-0 active:translate-y-0 active:shadow-none sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
                className="min-h-[44px] w-full border-2 border-foreground bg-transparent px-6 py-3 font-mono text-xs font-bold tracking-wider text-foreground uppercase transition-all duration-300 hover:bg-foreground hover:text-background active:bg-foreground/90 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                View Documentation
              </a>
            </div>
          </div>

          <div className="animate-reveal mx-auto max-w-3xl px-4 pt-8 delay-200 sm:px-6 lg:pt-12">
            <div className="group relative overflow-hidden rounded-lg border-2 border-foreground bg-[#0a0a0a] text-left shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#333] bg-[#1a1a1a] px-3 py-2 sm:px-4">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3"></div>
                </div>
                <div className="font-mono text-[10px] text-gray-400 sm:text-xs">
                  bash — 80x24
                </div>
              </div>

              <div className="relative overflow-x-auto p-4 font-mono text-xs sm:p-6 sm:text-sm lg:text-base">
                <div className="mb-2 flex items-center gap-2 text-green-400">
                  <span>➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="hidden sm:inline">create-next-app</span>
                </div>
                <div className="flex flex-col gap-1 text-gray-300 sm:gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-purple-400">npx</span>
                    <span className="text-sm sm:text-base">
                      create-next-app
                    </span>
                  </div>
                  <div className="flex flex-wrap items-start gap-1.5 pl-0 sm:gap-2 sm:pl-4">
                    <span className="text-gray-500">--example</span>
                    <span className="text-xs break-all sm:text-sm">
                      https://github.com/AungMyoKyaw/photon-next
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100 sm:top-4 sm:right-4">
                  <CopyButton
                    text="npx create-next-app --example https://github.com/AungMyoKyaw/photon-next my-app"
                    className="border-[#444] bg-[#2a2a2a] text-white hover:bg-[#333]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="animate-reveal grid grid-cols-1 gap-4 px-4 pt-12 delay-300 sm:gap-5 sm:px-6 md:grid-cols-3 md:gap-6 lg:pt-20">
            {[
              {
                title: 'Lightning Fast',
                desc: 'Turbopack powered. 53% faster startup. 94% faster updates.',
                icon: (
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
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
                    className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
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
                    className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
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
                className="group border-2 border-foreground/5 bg-surface/30 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-foreground hover:shadow-xl active:translate-y-0 sm:p-7 lg:p-8"
              >
                <div
                  className={`mb-3 inline-block rounded-lg bg-foreground/5 p-2.5 text-foreground transition-colors sm:mb-4 sm:p-3 ${feature.accent}`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold sm:text-xl">
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-foreground/10 bg-surface/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://github.com/AungMyoKyaw/photon-next"
              className="text-foreground/60 transition-colors hover:text-foreground"
              aria-label="GitHub Repository"
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
              <div className="relative flex h-7 w-7 items-center justify-center transition-transform duration-300 hover:scale-110 sm:h-8 sm:w-8">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4V20" className="stroke-accent-primary" />
                  <path
                    d="M11 5H14C16.7614 5 19 7.23858 19 10C19 12.7614 16.7614 15 14 15H11"
                    className="stroke-accent-secondary"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-foreground/60 sm:text-base">
                &copy; {new Date().getFullYear()} Photon Next. Open Source.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
