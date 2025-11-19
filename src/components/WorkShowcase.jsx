import { useEffect, useState } from 'react'

const cards = [
  {
    title: 'Fintech Dashboard',
    desc: 'Data‑dense analytics with real‑time charts and theming.',
    tags: ['React', 'Tailwind', 'Recharts'],
  },
  {
    title: '3D Product Page',
    desc: 'Interactive viewer powered by WebGL for a retail brand.',
    tags: ['Spline', 'Three.js', 'UX'],
  },
  {
    title: 'SaaS Marketing',
    desc: 'Conversion‑focused site with A/B tested components.',
    tags: ['A/B', 'SEO', 'Framer'],
  },
]

function WorkShowcase() {
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px')
      document.documentElement.style.setProperty('--my', e.clientY + 'px')
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_var(--mx)_var(--my),rgba(59,130,246,0.10),transparent_60%)]" />

      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-blue-200/80">
            A few projects that reflect my approach: clarity, craft, and performance.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10 hover:border-white/20"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-400/10 to-cyan-400/10" />

              <div className="relative">
                <div className="h-36 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-blue-200/70 text-sm">
                  Preview image placeholder
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-blue-200/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkShowcase
