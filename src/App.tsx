import { useEffect, useRef, useState } from 'react'

const APP_URL = 'https://app.groomcart.com'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, className: visible ? 'animate-fade-up' : 'opacity-0' }
}

function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = size === 'lg' ? 'w-10 h-10' : size === 'md' ? 'w-7 h-7' : 'w-5 h-5'
  const text = size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-lg' : 'text-sm'
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${dims} bg-brand-400 rounded-lg flex items-center justify-center`}>
        <svg viewBox="0 0 32 32" className={size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-4 h-4' : 'w-3 h-3'}>
          <rect x="6" y="15" width="20" height="11" rx="2.5" fill="white" />
          <rect x="10" y="7" width="12" height="10" rx="5" fill="white" opacity="0.6" />
        </svg>
      </div>
      <span className={`${text} font-display`}>GroomCart</span>
    </div>
  )
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
          <a href="#team" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Team</a>
          <a href={APP_URL} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Log in</a>
          <a href={APP_URL} className="text-sm font-medium text-white bg-brand-400 hover:bg-brand-500 px-4 py-2 rounded-lg transition-colors">
            Request a demo
          </a>
        </div>
        <div className="sm:hidden flex items-center gap-3">
          <a href={APP_URL} className="text-sm font-medium text-white bg-brand-400 hover:bg-brand-500 px-3.5 py-2 rounded-lg transition-colors">
            Request a demo
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            className="w-10 h-10 -mr-2 flex items-center justify-center text-gray-700 hover:text-gray-900"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            <a href="#features" onClick={close} className="py-2.5 text-sm text-gray-700 hover:text-gray-900">Features</a>
            <a href="#team" onClick={close} className="py-2.5 text-sm text-gray-700 hover:text-gray-900">Team</a>
            <a href={APP_URL} className="py-2.5 text-sm text-gray-700 hover:text-gray-900">Log in</a>
            <a href={APP_URL} className="mt-2 w-full text-center text-sm font-medium text-white bg-brand-400 hover:bg-brand-500 px-4 py-3 rounded-lg transition-colors">
              Request a demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero-grid relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-brand-100/60 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-300 opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400" />
              </span>
              <span className="text-xs font-medium text-brand-600">AI-powered inventory management</span>
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight animate-fade-up delay-1">
            Never run out of{' '}
            <span className="italic text-brand-400">supplies</span>{' '}
            mid-groom
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto animate-fade-up delay-2">
            GroomCart tracks your inventory, parses invoices with AI, compares vendor prices,
            and tells you exactly what to reorder — before you run out.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 animate-fade-up delay-3">
            <a href={APP_URL} className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-400 hover:bg-brand-500 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-brand-400/20 text-[15px]">
              Request a demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#team" className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 hover:text-gray-900 font-medium rounded-xl border border-gray-200 hover:border-gray-300 transition-all text-[15px]">
              Meet the team
            </a>
          </div>
        </div>

        {/* Product screenshot — full dashboard (md+) */}
        <div className="hidden md:block mt-16 animate-scale-in delay-5">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-b from-brand-50/50 to-transparent rounded-3xl -z-10" />
            <div className="product-shadow rounded-2xl overflow-hidden border border-gray-200/60 bg-white">
              {/* Mock dashboard screenshot */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 mx-12">
                  <div className="h-5 bg-gray-100 rounded-md max-w-xs mx-auto flex items-center justify-center">
                    <span className="text-[10px] text-gray-400">app.groomcart.com</span>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                {/* Nav mock */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-brand-400 rounded" />
                      <span className="text-xs font-medium">GroomCart</span>
                    </div>
                    <div className="flex gap-3">
                      {['Home', 'Plan', 'Inventory', 'Invoices'].map(t => (
                        <span key={t} className={`text-[11px] px-2 py-0.5 rounded ${t === 'Home' ? 'bg-gray-100 font-medium' : 'text-gray-400'}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 px-2 rounded border border-gray-200 flex items-center">
                      <span className="text-[10px] text-gray-400">Ask AI... ⌘K</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-brand-400" />
                  </div>
                </div>

                {/* Alert banner */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 text-sm">!</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-amber-900">5 items need reordering</p>
                      <p className="text-xs text-amber-700">2 almost out, 3 getting low. About $187 to restock.</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-amber-700 px-3 py-1.5 bg-amber-100 rounded-lg">Review plan →</span>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { label: 'Almost out', value: '2', color: 'bg-red-50 text-red-700', sub: 'Order now' },
                    { label: 'Getting low', value: '3', color: 'bg-amber-50 text-amber-700', sub: 'Order this week' },
                    { label: 'Well stocked', value: '38', color: 'bg-green-50 text-green-700', sub: 'No action needed' },
                    { label: 'Tracked', value: '46', color: 'bg-gray-50 text-gray-600', sub: '3 suppliers' },
                  ].map(c => (
                    <div key={c.label} className={`${c.color} rounded-xl p-3.5`}>
                      <p className="text-[10px] font-medium opacity-70">{c.label}</p>
                      <p className="text-2xl font-medium mt-0.5">{c.value}</p>
                      <p className="text-[10px] opacity-60 mt-0.5">{c.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Needs attention */}
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium">Needs attention</p>
                    <span className="text-[10px] text-brand-400 font-medium">View all 5 →</span>
                  </div>
                  {[
                    { name: 'Andis #10 Blade', level: 0, max: 4, status: 'Out', color: 'bg-red-50 text-red-700' },
                    { name: 'Bio-Groom Ear Cleaner 8oz', level: 2, max: 8, status: 'Low', color: 'bg-amber-50 text-amber-700' },
                    { name: "Nature's Specialties Shampoo", level: 1, max: 6, status: 'Low', color: 'bg-amber-50 text-amber-700' },
                  ].map(item => (
                    <div key={item.name} className="flex items-center justify-between py-2 border-t border-gray-50">
                      <span className="text-xs font-medium">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-1 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.level === 0 ? 'bg-red-400' : 'bg-amber-400'}`}
                            style={{ width: `${Math.max((item.level / item.max) * 100, 4)}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-gray-400 w-6">{item.level}/{item.max}</span>
                        <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${item.color}`}>{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified mobile version */}
        <div className="block md:hidden mt-12 animate-scale-in delay-5">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-b from-brand-50/50 to-transparent rounded-3xl -z-10" />
            <div className="product-shadow rounded-2xl overflow-hidden border border-gray-200/60 bg-white p-5">
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 text-base">!</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-amber-900">5 items need reordering</p>
                  <p className="text-xs text-amber-700">2 almost out, 3 getting low.</p>
                </div>
              </div>

              <div className="mt-5 border border-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium">Needs attention</p>
                  <span className="text-[10px] text-brand-400 font-medium">View all 5 →</span>
                </div>
                {[
                  { name: 'Andis #10 Blade', status: 'Out', color: 'bg-red-50 text-red-700' },
                  { name: 'Bio-Groom Ear Cleaner', status: 'Low', color: 'bg-amber-50 text-amber-700' },
                  { name: "Nature's Specialties Shampoo", status: 'Low', color: 'bg-amber-50 text-amber-700' },
                ].map(item => (
                  <div key={item.name} className="flex items-center justify-between py-2 border-t border-gray-50 gap-3">
                    <span className="text-xs font-medium truncate">{item.name}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded flex-shrink-0 ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 bg-gradient-to-b from-white/0 to-white relative -mt-20 z-10 pointer-events-none" />
    </section>
  )
}

function PainPoints() {
  const points = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#b91c1c" strokeWidth="1.2"/><path d="M10 6v5M10 13.5h.01" stroke="#b91c1c" strokeWidth="1.2" strokeLinecap="round"/></svg>
      ),
      text: "You've run out of a product mid-appointment and had to improvise",
      sub: "Now you're reshuffling your whole afternoon.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="#92400e" strokeWidth="1.2"/><path d="M7 8h6M7 11h4" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round"/></svg>
      ),
      text: "You spend more time managing orders than actually grooming",
      sub: "And you always end up forgetting something.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M5 6h10M5 14h10" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round"/><path d="M4 10l2.5-4 2.5 4M4 10a2.5 2.5 0 005 0M11 10l2.5-4 2.5 4M11 10a2.5 2.5 0 005 0" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      ),
      text: "You don't know if you're overpaying until it's too late",
      sub: "Switching suppliers feels like starting from scratch.",
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Sound familiar?</p>
        <div className="space-y-4">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 border border-gray-100 max-w-lg mx-auto card-hover">
              <div className="flex-shrink-0">{p.icon}</div>
              <div className="text-left">
                <p className="text-[15px] text-gray-700">{p.text}</p>
                <p className="text-xs text-gray-400 mt-1">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VendorStrip() {
  const reveal = useScrollReveal()
  const names = ["Ryan's Pet Supplies", "PetEdge", "Any supplier with PDF invoices"]
  return (
    <section className="py-10 px-6">
      <div ref={reveal.ref} className={`max-w-3xl mx-auto text-center ${reveal.className}`}>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Works with suppliers you already use</p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {names.map(name => (
            <span key={name} className="text-sm font-medium text-gray-400 px-4 py-2 rounded-lg border border-gray-100 bg-gray-50/50">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const reveal = useScrollReveal()
  return (
    <section id="features" className="py-24 px-6 bg-gray-50/50">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto ${reveal.className}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Features</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Everything a groomer <span className="italic">actually</span> needs
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Not another booking app. GroomCart is purpose-built for the supply side of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Inventory tracking',
              desc: "Visual stock levels with color-coded status. See at a glance what's critical, low, or well stocked across all your products.",
              badge: 'Real-time',
              icon: (
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><path d="M5 23V13M12 23V8M19 23v-7M26 23H4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              ),
            },
            {
              title: 'Smart reorder plans',
              desc: "Based on your actual usage from bookings, not guesses. Grouped by vendor with real prices so you can place orders in minutes.",
              badge: 'Forecast',
              icon: (
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><rect x="6" y="5" width="16" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><rect x="10" y="3" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.4"/><path d="M10 13l2 2 4-4M10 19l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ),
            },
            {
              title: 'Price comparison',
              desc: 'See which vendor has the best price for every product, with full price history tracked from every invoice you upload.',
              badge: 'Save money',
              icon: (
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><path d="M14 4v20M6 9h16M6 19h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M3 14l3-5 3 5M3 14a3 3 0 006 0M19 14l3-5 3 5M19 14a3 3 0 006 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              ),
            },
            {
              title: 'Multi-vendor support',
              desc: "Track products across all your suppliers. Compare prices and consolidate orders so nothing slips through the cracks.",
              badge: 'Vendors',
              icon: (
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="6" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M14 9v3M14 12l-7 8M14 12l7 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              ),
            },
          ].map(f => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-7 card-hover">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-400 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[17px] font-medium tracking-tight">{f.title}</h3>
                <span className="text-[10px] font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full flex-shrink-0 ml-3">{f.badge}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  const team = [
    {
      name: 'Torren Baker',
      role: 'Co-Founder',
      initials: 'TB',
      bio: "Managed supply chain analytics for a portfolio of 10,000+ properties before realizing small business owners deal with the same inventory headaches, just without the tools. Built GroomCart to fix that.",
    },
    {
      name: 'Bobby Groves',
      role: 'Co-Founder',
      initials: 'BG',
      bio: "Spent years helping businesses figure out what their customers actually want and how to reach them. Joined GroomCart because groomers deserve better tools than spreadsheets and sticky notes.",
    },
    {
      name: 'Adam Torregrossa',
      role: 'Co-Founder',
      initials: 'AT',
      bio: "Comes from engineering where if you run out of parts, production stops. Same problem groomers face every day. Now he's the guy who walks you through GroomCart and makes sure it actually works for your shop.",
    },
  ]

  const reveal = useScrollReveal()
  return (
    <section id="team" className="py-24 px-6 bg-gray-50/50">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto ${reveal.className}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Our team</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Built by people who <span className="italic">get it</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            We're a small team obsessed with solving the supply headaches that groomers deal with every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map(t => (
            <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-7 text-center card-hover">
              <div className="w-20 h-20 rounded-full bg-brand-400 flex items-center justify-center text-white text-2xl font-display mx-auto mb-7 ring-2 ring-brand-200 ring-offset-4 ring-offset-white">
                {t.initials}
              </div>
              <h3 className="text-[17px] font-medium tracking-tight">{t.name}</h3>
              <p className="text-xs text-brand-400 font-medium mt-1">{t.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed mt-4">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const reveal = useScrollReveal()

  return (
    <section className="py-24 px-6">
      <div ref={reveal.ref} className={`max-w-3xl mx-auto text-center ${reveal.className}`}>
        <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
          See GroomCart <span className="italic text-brand-400">in action</span>
        </h2>
        <p className="mt-5 text-gray-500 text-lg max-w-xl mx-auto">
          We're working with grooming businesses now. Drop your email and we'll set up a quick walkthrough.
        </p>

        {!submitted ? (
          <>
            <div className="mt-10 flex items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yoursalon.com"
                className="flex-1 h-12 px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100 transition-all"
              />
              <button
                onClick={() => { if (email.includes('@')) setSubmitted(true) }}
                className="h-12 px-6 bg-brand-400 hover:bg-brand-500 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-brand-400/20 flex items-center gap-2 text-sm whitespace-nowrap"
              >
                Request a demo
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">We'll be in touch within 24 hours.</p>
          </>
        ) : (
          <div className="mt-10 bg-brand-50 border border-brand-100 rounded-2xl p-8 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-brand-400 flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-lg font-medium text-brand-600">You're on the list</p>
            <p className="text-sm text-brand-500 mt-2">We'll reach out shortly to schedule your walkthrough.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Logo size="sm" />
        <div className="flex items-center gap-6 text-xs text-gray-400">
          <a href="mailto:hello@groomcart.com" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>
        <p className="text-xs text-gray-300">&copy; {new Date().getFullYear()} GroomCart. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <PainPoints />
      <VendorStrip />
      <Features />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  )
}
