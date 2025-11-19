import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden isolate">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(59,130,246,0.35),transparent_60%)]" />

      {/* Content */}
      <div className="relative container mx-auto px-6 py-28 md:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Open to full-time & freelance opportunities
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Crafting modern, interactive experiences
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-blue-100/90 leading-relaxed">
            I’m a front‑end engineer focused on delightful UI, performance, and
            immersive web 3D. I blend clean design with robust engineering to ship
            products people love to use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
