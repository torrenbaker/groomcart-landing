import { useEffect, useRef, useState } from 'react'

const APP_URL = 'https://app.groomcart.com'
const HERO_VIDEO = `${import.meta.env.BASE_URL}hero-loop.mp4`
const HERO_POSTER = `${import.meta.env.BASE_URL}hero-poster.jpg`

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

function Logo({ size = 'md', light = false }: { size?: 'sm' | 'md' | 'lg', light?: boolean }) {
  const dims = size === 'lg' ? 'w-10 h-10' : size === 'md' ? 'w-7 h-7' : 'w-5 h-5'
  const text = size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-lg' : 'text-sm'
  const bg = light ? 'bg-white' : 'bg-brand-400'
  const fill = light ? '#1a7a42' : 'white'
  const textColor = light ? 'text-white' : ''
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${dims} ${bg} rounded-lg flex items-center justify-center`}>
        <svg viewBox="0 0 32 32" className={size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-4 h-4' : 'w-3 h-3'}>
          <rect x="6" y="15" width="20" height="11" rx="2.5" fill={fill} />
          <rect x="10" y="7" width="12" height="10" rx="5" fill={fill} opacity="0.6" />
        </svg>
      </div>
      <span className={`${text} font-display ${textColor}`}>GroomCart</span>
    </div>
  )
}

function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <section className="relative bg-[#1a1411] min-h-[640px] sm:min-h-[720px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55 pointer-events-none" />

      <nav className="relative z-20 px-6 sm:px-8 py-5 flex items-center justify-between">
        <Logo light />
        <div className="hidden sm:flex items-center gap-6">
          <a href="#product" className="text-sm text-white/75 hover:text-white transition-colors">Product</a>
          <a href="#team" className="text-sm text-white/75 hover:text-white transition-colors">Team</a>
          <a href={APP_URL} className="text-sm text-white/75 hover:text-white transition-colors">Log in</a>
          <a href="#cta" className="text-sm font-medium text-gray-900 bg-white hover:bg-white/95 px-4 py-2 rounded-lg transition-colors">
            Get a demo
          </a>
        </div>
        <div className="sm:hidden flex items-center gap-3">
          <a href="#cta" className="text-sm font-medium text-gray-900 bg-white px-3.5 py-2 rounded-lg">
            Get a demo
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            className="w-10 h-10 -mr-2 flex items-center justify-center text-white"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="sm:hidden relative z-20 bg-black/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            <a href="#product" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm text-white/85">Product</a>
            <a href="#team" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm text-white/85">Team</a>
            <a href={APP_URL} className="py-2.5 text-sm text-white/85">Log in</a>
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 sm:px-8 pb-24 sm:pb-28 pointer-events-none">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-white/70 uppercase tracking-[0.18em] mb-3 sm:mb-4 drop-shadow">Tuesday &middot; 5:15pm</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight max-w-2xl drop-shadow-lg">
            Henley walks out clean and on time.
          </h1>
          <p className="mt-3 sm:mt-4 font-display italic text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl drop-shadow-lg">
            Because GroomCart told her groomer to reorder ear cleaner last Friday.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 sm:px-8 py-6 flex items-center justify-between">
        <p className="text-xs text-white/55 uppercase tracking-[0.16em] hidden sm:block">Inventory for grooming shops</p>
        <a href="#cta" className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-white hover:bg-white/95 px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-black/10">
          See the product
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </section>
  )
}

function MondayMorning() {
  const reveal = useScrollReveal()
  return (
    <section id="product" className="bg-[#fbf8ee] pt-20 sm:pt-28 pb-12 sm:pb-16 px-6 relative">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-start ${reveal.className}`}>
        <div className="lg:col-span-5 lg:pt-10">
          <p className="text-xs text-gray-500 uppercase tracking-[0.18em] mb-3">Five minutes before you open</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-[1.05] tracking-tight">
            The Monday list <span className="italic">is already written.</span>
          </h2>
          <p className="mt-5 text-base text-gray-600 leading-relaxed max-w-md">
            GroomCart watches what you used last week &mdash; every appointment, every bottle, every blade &mdash; and tells you what to reorder before you've finished your coffee.
          </p>
          <p className="mt-10 text-xs text-gray-400 italic">&mdash; Sample readout, a Monday in May.</p>
        </div>
        <div className="lg:col-span-7 relative z-10 lg:-mb-40 lg:mr-[-2rem] xl:mr-[-3rem] bg-white border border-gray-200/70 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)]">
          <div className="bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <span className="flex-1 text-center text-[10px] text-gray-400">app.groomcart.com</span>
          </div>
          <div className="p-4">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3.5 flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-medium">!</div>
                <div>
                  <p className="text-xs font-medium text-amber-900">5 items need reordering</p>
                  <p className="text-[11px] text-amber-700">2 out, 3 low &mdash; about $187 to restock</p>
                </div>
              </div>
              <span className="bg-amber-100 text-amber-800 text-[11px] font-medium px-2.5 py-1 rounded">Plan</span>
            </div>
            <div className="border border-gray-100 rounded-xl px-3 py-1">
              <div className="flex items-center justify-between py-2 border-b border-gray-50 text-xs">
                <span className="text-gray-900">Andis #10 Blade</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-400">PetEdge</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-red-50 text-red-700">Out</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-50 text-xs">
                <span className="text-gray-900">Bio-Groom Ear Cleaner</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-400">Ryan's</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-50 text-amber-700">Low</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 text-xs">
                <span className="text-gray-900">Nature's Specialties Shampoo</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-400">PetEdge</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-50 text-amber-700">Low</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const reveal = useScrollReveal()
  return (
    <section className="bg-white pt-32 sm:pt-48 lg:pt-64 pb-24 sm:pb-32 px-6 relative">
      <div ref={reveal.ref} className={`max-w-5xl mx-auto ${reveal.className}`}>
        <div className="mb-20 sm:mb-28 max-w-xl">
          <p className="text-xs text-brand-400 uppercase tracking-[0.18em] mb-3">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-[1.05] tracking-tight">
            It learns what you use. <span className="italic">So you stop running out.</span>
          </h2>
        </div>

        <div className="space-y-20 sm:space-y-28">
          <div className="flex gap-6 sm:gap-10 items-baseline max-w-2xl">
            <p className="font-display italic text-5xl sm:text-7xl text-brand-400 flex-shrink-0 leading-none">i.</p>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-gray-900 mb-3 leading-snug">It watches.</p>
              <p className="text-base text-gray-500 leading-relaxed">Every appointment on the books, every product used, every PDF invoice you forward in. It knows what's flowing through your shop.</p>
            </div>
          </div>

          <div className="flex gap-6 sm:gap-10 items-baseline max-w-2xl ml-auto">
            <p className="font-display italic text-5xl sm:text-7xl text-brand-400 flex-shrink-0 leading-none">ii.</p>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-gray-900 mb-3 leading-snug">It learns your patterns.</p>
              <p className="text-base text-gray-500 leading-relaxed">Doodle weeks burn through more shampoo than poodle weeks. Spring goes through more ear cleaner than winter. GroomCart figures out yours.</p>
            </div>
          </div>

          <div className="flex gap-6 sm:gap-10 items-baseline max-w-2xl mx-auto">
            <p className="font-display italic text-5xl sm:text-7xl text-brand-400 flex-shrink-0 leading-none">iii.</p>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-gray-900 mb-3 leading-snug">It writes the order.</p>
              <p className="text-base text-gray-500 leading-relaxed">Sunday night, while you're on the couch. Grouped by vendor. You approve and send &mdash; or edit first. The decision is still yours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MoneyTriptych() {
  const reveal = useScrollReveal()
  return (
    <section className="bg-brand-400 py-24 sm:py-32 lg:py-40 px-6 relative overflow-hidden">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto ${reveal.className}`}>
        <p className="text-xs text-white/55 uppercase tracking-[0.22em] mb-10 sm:mb-14">&mdash; What changes</p>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.18] tracking-tight max-w-4xl">
          When you don't run out, you stop paying <span className="italic">$28 to overnight a $14 bottle.</span> When you don't over-order, cash isn't tied up on the shelf for nine months. And when Sunday is just Sunday, you get <span className="italic">the back end of your weekend back.</span>
        </p>
      </div>
    </section>
  )
}

function Team() {
  const team = [
    {
      name: 'Torren Baker',
      initials: 'TB',
      tag: 'supply chain',
      bio: "Managed supply chain analytics for a portfolio of 10,000+ properties before realizing small business owners deal with the same inventory headaches, just without the tools.",
    },
    {
      name: 'Bobby Groves',
      initials: 'BG',
      tag: 'consumer strategy',
      bio: "Former L.E.K. strategy consultant on consumer and pet engagements — a close-up view of how small service businesses operate and where the inefficiencies are buried.",
    },
    {
      name: 'Adam Torregrossa',
      initials: 'AT',
      tag: 'engineering',
      bio: "Comes from engineering, where if you run out of parts, production stops. Same problem groomers face every day. Walks you through GroomCart and makes sure it works for your shop.",
    },
  ]

  const reveal = useScrollReveal()
  return (
    <section id="team" className="bg-[#fbf8ee] py-24 sm:py-32 px-6">
      <div ref={reveal.ref} className={`max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 ${reveal.className}`}>
        <div className="lg:col-span-5">
          <p className="text-xs text-gray-500 uppercase tracking-[0.18em] mb-3">Built by three people in Austin</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-[1.05] tracking-tight">
            We've been in about thirty back rooms. <span className="italic">Yours could be next.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-12 lg:space-y-14">
          {team.map((t, i) => (
            <div
              key={t.name}
              className={`flex gap-5 sm:gap-6 ${i === 1 ? 'lg:pl-12' : i === 2 ? 'lg:pl-4' : ''}`}
            >
              <div className={`rounded-full bg-brand-400 text-white flex items-center justify-center font-display flex-shrink-0 ${i === 0 ? 'w-20 h-20 text-2xl' : 'w-14 h-14 text-lg'}`}>
                {t.initials}
              </div>
              <div className="pt-1">
                <p className="text-base font-medium text-gray-900">{t.name}</p>
                <p className="text-xs text-brand-400 mt-1">{t.tag}</p>
                <p className="text-sm text-gray-500 leading-relaxed mt-3 max-w-md">{t.bio}</p>
              </div>
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
    <section id="cta" className="bg-[#1a1411] py-20 sm:py-24 px-6">
      <div ref={reveal.ref} className={`max-w-3xl mx-auto text-center ${reveal.className}`}>
        <p className="text-xs text-white/55 uppercase tracking-[0.18em] mb-4">Working with our first shops now</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] tracking-tight">
          Twenty minutes with us, in your shop.
        </h2>

        {!submitted ? (
          <>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email.includes('@') && email.includes('.')) setSubmitted(true) }}
              className="mt-10 flex items-center gap-2.5 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourshop.com"
                aria-label="Your email address"
                className="flex-1 h-12 px-4 rounded-lg bg-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:bg-white/15 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-5 bg-white text-gray-900 font-medium rounded-lg text-sm whitespace-nowrap hover:bg-white/90 transition-colors"
              >
                Get a demo →
              </button>
            </form>
            <p className="mt-3 text-xs text-white/45">We'll be in touch within 24 hours.</p>
          </>
        ) : (
          <div className="mt-10 max-w-md mx-auto">
            <p className="font-display text-2xl text-white">You're on the list.</p>
            <p className="mt-2 text-sm text-white/60">We'll reach out shortly to schedule your walkthrough.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1a1411] border-t border-white/10 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <Logo size="sm" light />
        <a href="mailto:hello@groomcart.com" className="text-xs text-white/55 hover:text-white/80 transition-colors">hello@groomcart.com</a>
        <p className="text-xs text-white/35">&copy; {new Date().getFullYear()} GroomCart</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MondayMorning />
      <HowItWorks />
      <MoneyTriptych />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  )
}
