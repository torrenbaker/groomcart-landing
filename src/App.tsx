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
          <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#team" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Team</a>
          <a href={APP_URL} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Log in</a>
          <a href={APP_URL} className="text-sm font-medium text-white bg-brand-400 hover:bg-brand-500 px-4 py-2 rounded-lg transition-colors">
            Get started free
          </a>
        </div>
        <div className="sm:hidden flex items-center gap-3">
          <a href={APP_URL} className="text-sm font-medium text-white bg-brand-400 hover:bg-brand-500 px-3.5 py-2 rounded-lg transition-colors">
            Get started
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
            <a href="#pricing" onClick={close} className="py-2.5 text-sm text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#team" onClick={close} className="py-2.5 text-sm text-gray-700 hover:text-gray-900">Team</a>
            <a href={APP_URL} className="py-2.5 text-sm text-gray-700 hover:text-gray-900">Log in</a>
            <a href={APP_URL} className="mt-2 w-full text-center text-sm font-medium text-white bg-brand-400 hover:bg-brand-500 px-4 py-3 rounded-lg transition-colors">
              Get started free
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
              Get started free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 hover:text-gray-900 font-medium rounded-xl border border-gray-200 hover:border-gray-300 transition-all text-[15px]">
              See how it works
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-400 animate-fade-up delay-4">No credit card required</p>
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
      text: "You're mid-groom and realize you're out of #10 blades",
      sub: "Now you're reshuffling your whole afternoon.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="#92400e" strokeWidth="1.2"/><path d="M7 8h6M7 11h4" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round"/></svg>
      ),
      text: "You're ordering from memory because spreadsheets are a chore",
      sub: "And you always forget something.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#1a7a42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      text: "You have no idea if Ryan's or PetEdge has a better price",
      sub: "You could be overpaying by 20% and never know.",
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
    <div className="py-10 px-6">
      <div ref={reveal.ref} className={`max-w-3xl mx-auto text-center ${reveal.className}`}>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Works with suppliers you already use</p>
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {names.map(name => (
            <span key={name} className="text-sm font-medium text-gray-400 px-4 py-2 rounded-lg border border-gray-100 bg-gray-50/50">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Upload your supplier invoices',
      desc: 'Drop a PDF and our AI extracts every line item, matches products, and updates your prices automatically.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="3" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="1.2"/><path d="M10 14l4-4 4 4M14 10v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
    },
    {
      num: '02',
      title: 'See what you need to order',
      desc: 'GroomCart tracks usage from your bookings and tells you exactly what to reorder, grouped by vendor, with the best prices.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.2"/><path d="M9 10l2 2 4-4M9 16l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
    },
    {
      num: '03',
      title: 'Ask your AI assistant anything',
      desc: '"What shampoo should I use for a matted doodle?" — answers based on your actual inventory and prices, not the internet.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="5" width="22" height="14" rx="3" stroke="currentColor" strokeWidth="1.2"/><path d="M10 23l4-4 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="14" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/></svg>
      ),
    },
  ]

  const reveal = useScrollReveal()
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto ${reveal.className}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">How it works</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Three steps to <span className="italic">never</span> run out
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(s => (
            <div key={s.num} className="relative group">
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 h-full card-hover overflow-hidden">
                <span className="pointer-events-none select-none absolute -top-2 right-4 font-display text-7xl text-gray-100 leading-none">
                  {s.num}
                </span>
                <div className="relative w-12 h-12 rounded-xl bg-brand-50 text-brand-400 flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="relative text-lg font-medium mb-3 tracking-tight">{s.title}</h3>
                <p className="relative text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
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
              title: 'AI invoice parsing',
              desc: 'Drop a supplier PDF and watch it extract every SKU, price, and quantity automatically. No more manual data entry.',
              badge: 'AI-powered',
              icon: (
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><rect x="4" y="3" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M10 14l4-4 4 4M14 10v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ),
            },
            {
              title: 'Smart reorder plans',
              desc: 'Based on your actual usage from bookings — not guesses. Grouped by vendor with real prices so you can place orders instantly.',
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
              title: 'AI assistant',
              desc: 'Ask questions in plain English: "What blades do I need?" or "Which shampoo is cheapest?" Answers from your real data.',
              badge: 'AI-powered',
              icon: (
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><rect x="3" y="5" width="22" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M10 23l4-4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="12" r="1.1" fill="currentColor"/><circle cx="14" cy="12" r="1.1" fill="currentColor"/><circle cx="19" cy="12" r="1.1" fill="currentColor"/></svg>
              ),
            },
            {
              title: 'Inventory tracking',
              desc: 'Visual stock levels with color-coded status. See at a glance what\'s critical, low, or well stocked across all products.',
              badge: 'Real-time',
              icon: (
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><path d="M5 23V13M12 23V8M19 23v-7M26 23H4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              ),
            },
            {
              title: 'Multi-vendor support',
              desc: 'Track products across Ryan\'s, PetEdge, and any supplier you buy from. Compare prices and consolidate orders.',
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

function AIDifferentiator() {
  const prompts = [
    'What am I running low on?',
    'Compare blade prices',
    'What did I order last month?',
    'Best shampoo for a goldendoodle?',
  ]
  const reveal = useScrollReveal()

  return (
    <section className="py-24 px-6">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto ${reveal.className}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">AI assistant</p>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight">
              Your inventory<br />
              <span className="italic">knows</span> your business
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              Ask anything in plain English. GroomCart's AI assistant understands your products,
              stock levels, vendors, and prices — not generic internet answers, but insights
              from your actual business data.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {prompts.map(p => (
                <span key={p} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-brand-200 hover:text-brand-500 transition-colors cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Command bar mockup */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-50/40 to-transparent rounded-3xl -z-10" />
            <div className="product-shadow rounded-2xl overflow-hidden border border-gray-200/60 bg-white">
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                    <div className="w-1 h-1 rounded-full bg-brand-400" />
                    <div className="w-1 h-1 rounded-full bg-brand-400 opacity-60" />
                    <div className="w-1 h-1 rounded-full bg-brand-400 opacity-30" />
                    <span className="text-[10px] font-medium text-gray-500 ml-0.5">AI</span>
                  </div>
                  <span className="text-sm text-gray-700">Compare ear cleaner prices</span>
                  <div className="ml-auto">
                    <span className="text-[10px] text-gray-300 px-1.5 py-0.5 border border-gray-200 rounded">Esc</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="bg-gray-50 rounded-xl p-4 ai-glow">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Bio-Groom Ear Cleaner 8oz is <span className="font-medium">$4.20 at Ryan's</span> vs <span className="font-medium">$5.10 at PetEdge</span>.
                    Ryan's is 18% cheaper. You last ordered it on March 5th and typically go through a bottle every 20 days.
                    At your current rate, you'll need more by March 25th.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
                  <div className="flex-1 h-8 rounded-lg border border-gray-200 flex items-center px-3">
                    <span className="text-xs text-gray-400">Ask a follow-up...</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const reveal = useScrollReveal()
  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div ref={reveal.ref} className={`max-w-4xl mx-auto text-center ${reveal.className}`}>
        <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-6">Built for groomers</p>
        <div className="grid grid-cols-3 gap-8 mb-12">
          {[
            { value: '154', label: 'Grooming products tracked' },
            { value: '3', label: 'Vendor integrations' },
            { value: '<2s', label: 'AI response time' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-display text-brand-400">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Why we built this</p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We watched groomers run out of supplies mid-appointment, order from memory,
            and overpay without realizing it. We built GroomCart because every groomer
            deserves a smarter way to manage their supplies.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-400 flex items-center justify-center text-white text-sm font-medium">TB</div>
            <div className="text-left">
              <p className="text-sm font-medium">Torren Baker</p>
              <p className="text-xs text-gray-400">Founding Partner, GroomCart</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const reveal = useScrollReveal()
  const [annual, setAnnual] = useState(false)
  const proPrice = annual ? 31 : 39
  return (
    <section id="pricing" className="py-24 px-6">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto ${reveal.className}`}>
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Simple, <span className="italic">honest</span> pricing
          </h2>
          <p className="mt-4 text-gray-500">Start free. Upgrade when you're ready.</p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm transition-colors ${!annual ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual(a => !a)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-brand-400' : 'bg-gray-200'}`}
          >
            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${annual ? 'left-7' : 'left-1'}`} />
          </button>
          <span className={`text-sm transition-colors ${annual ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>Annual</span>
          <span className="text-[10px] font-medium text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">Save 20%</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free tier */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 card-hover">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Starter</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-display">$0</span>
              <span className="text-sm text-gray-400">/month</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">Perfect for solo groomers getting started.</p>
            <ul className="mt-6 space-y-3">
              {[
                'Up to 25 products tracked',
                '3 invoice uploads / month',
                'Basic reorder alerts',
                'Single vendor',
              ].map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5"><path d="M4 8l3 3 5-5" stroke="#1a7a42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href={APP_URL} className="mt-8 block w-full text-center py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all">
              Get started free
            </a>
          </div>

          {/* Pro tier */}
          <div className="bg-brand-400 border border-brand-500 rounded-2xl p-8 text-white relative card-hover">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-medium bg-white/20 px-2.5 py-1 rounded-full">Most popular</span>
            </div>
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">Pro</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-display">${proPrice}</span>
              <span className="text-sm text-white/60">/month</span>
            </div>
            <p className="text-xs text-white/60 mt-1 h-4">{annual ? `Billed $${proPrice * 12}/year` : '\u00A0'}</p>
            <p className="text-sm text-white/70 mt-3">For growing salons that need the full toolkit.</p>
            <ul className="mt-6 space-y-3">
              {[
                'Unlimited products',
                'Unlimited invoice uploads',
                'AI assistant — ask anything about your stock',
                'Multi-vendor price comparison',
                'Smart reorder plans',
                'Priority support',
              ].map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5"><path d="M4 8l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href={APP_URL} className="mt-8 block w-full text-center py-3 rounded-xl bg-white text-brand-500 text-sm font-medium hover:bg-white/95 transition-all">
              Start 14-day free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const team = [
    {
      name: 'Torren Baker',
      role: 'Founding Partner',
      initials: 'TB',
      bio: 'Technical lead and architect behind GroomCart\'s AI-powered inventory platform. Turns grooming chaos into organized, data-driven operations.',
      city: 'Based in Charlotte, NC',
    },
    {
      name: 'Bobby Groves',
      role: 'Chief Marketing Officer',
      initials: 'BG',
      bio: 'Drives GroomCart\'s go-to-market strategy. Connects with the grooming community to build a product groomers actually love.',
      city: 'Based in Charlotte, NC',
    },
    {
      name: 'Adam Torregrossa',
      role: 'Sales Development Rep',
      initials: 'AT',
      bio: 'First point of contact for grooming businesses exploring GroomCart. Helps salons understand how smart inventory saves time and money.',
      city: 'Based in Charlotte, NC',
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
            We're a small team obsessed with solving the supply headaches that groomers face every day.
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
              <p className="text-xs text-gray-400 italic mt-3">{t.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  const [email, setEmail] = useState('')
  const reveal = useScrollReveal()

  return (
    <section className="py-24 px-6">
      <div ref={reveal.ref} className={`max-w-3xl mx-auto text-center ${reveal.className}`}>
        <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
          Stop guessing<br />what to <span className="italic text-brand-400">order</span>
        </h2>
        <p className="mt-5 text-gray-500 text-lg max-w-xl mx-auto">
          Join groomers who are saving time, saving money, and never running out of supplies again.
        </p>

        <div className="mt-10 flex items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@groomer.com"
            className="flex-1 h-12 px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100 transition-all"
          />
          <a
            href={APP_URL}
            className="h-12 px-6 bg-brand-400 hover:bg-brand-500 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-brand-400/20 flex items-center gap-2 text-sm whitespace-nowrap"
          >
            Get started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <p className="mt-3 text-xs text-gray-400">Free to start. No credit card required. Set up in 5 minutes.</p>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex -space-x-2">
            {['TB', 'BG', 'AT'].map(initials => (
              <div key={initials} className="w-7 h-7 rounded-full bg-brand-400 border-2 border-white flex items-center justify-center text-white text-[9px] font-medium">
                {initials}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Join our early access program</p>
        </div>
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
          <a href="mailto:hello@groomcart.com?subject=Terms%20of%20Service" className="hover:text-gray-600 transition-colors">Terms</a>
          <a href="mailto:hello@groomcart.com?subject=Privacy%20Policy" className="hover:text-gray-600 transition-colors">Privacy</a>
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
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 z-[60]" />
      <Nav />
      <Hero />
      <PainPoints />
      <VendorStrip />
      <HowItWorks />
      <Features />
      <AIDifferentiator />
      <SocialProof />
      <Pricing />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  )
}
