import Hero from './components/Hero'
import WorkShowcase from './components/WorkShowcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Subtle texture */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(59,130,246,0.06),transparent_60%)]" />

      {/* Navigation */}
      <header className="relative z-10">
        <nav className="container mx-auto flex items-center justify-between px-6 py-5">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-semibold tracking-tight">Your Name</span>
          </a>

          <div className="hidden sm:flex items-center gap-6 text-sm text-blue-200/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">System</a>
          </div>
        </nav>
      </header>

      <main className="relative z-0">
        <Hero />
        <WorkShowcase />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="container mx-auto px-6 py-8 text-sm text-blue-200/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
