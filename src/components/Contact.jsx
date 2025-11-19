function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-blue-200/80">
            Have a project in mind or just want to say hello? Drop a message and I’ll get back within 24 hours.
          </p>
        </div>

        <form className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-200/80 mb-1">Name</label>
            <input type="text" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-200/80 mb-1">Email</label>
            <input type="email" placeholder="you@email.com" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-blue-200/80 mb-1">Message</label>
            <textarea rows="5" placeholder="Tell me about your project" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"></textarea>
          </div>

        <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
          <button type="button" className="rounded-lg bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50">
            Send Message
          </button>
          <p className="text-sm text-blue-200/70">Or email me at <span className="text-white">hello@yourname.dev</span></p>
        </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
