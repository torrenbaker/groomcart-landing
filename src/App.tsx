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

function Wordmark() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-3.5 h-3.5 bg-[#1d1d1f] rounded-[3px]"></div>
      <span className="text-xs font-medium text-[#1d1d1f]">groomcart</span>
    </div>
  )
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)

  return (
    <nav className="sticky top-0 z-50 h-11 bg-white/85 backdrop-blur-xl border-b border-black/5">
      <div className="h-full px-5 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Wordmark />
          <div className="hidden sm:flex items-center gap-7">
            <a href="#product" className="text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity">Product</a>
            <a href="#proof" className="text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity">Customers</a>
            <a href="#about" className="text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity">About</a>
            <a href="#cta" className="text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity">Book a demo</a>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          <a href={APP_URL} className="text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity">Sign in</a>
        </div>
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="sm:hidden w-8 h-8 -mr-2 flex items-center justify-center text-[#1d1d1f]"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>
      {mobileOpen && (
        <div className="sm:hidden bg-white border-b border-black/5">
          <div className="px-6 py-3 flex flex-col">
            <a href="#product" onClick={close} className="py-2 text-sm text-[#1d1d1f]">Product</a>
            <a href="#proof" onClick={close} className="py-2 text-sm text-[#1d1d1f]">Customers</a>
            <a href="#about" onClick={close} className="py-2 text-sm text-[#1d1d1f]">About</a>
            <a href="#cta" onClick={close} className="py-2 text-sm text-[#1d1d1f]">Book a demo</a>
            <a href={APP_URL} className="py-2 text-sm text-[#1d1d1f]">Sign in</a>
          </div>
        </div>
      )}
    </nav>
  )
}

function ChevronLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  const color = dark ? 'text-[#2997ff]' : 'text-[#0066cc]'
  return (
    <a href={href} className={`${color} text-sm sm:text-base hover:underline whitespace-nowrap`}>
      {children} <span className="text-xs">›</span>
    </a>
  )
}

function HeroTile() {
  return (
    <section className="bg-[#f5f5f7] rounded-[18px] min-h-[560px] sm:min-h-[640px] px-6 sm:px-10 pt-14 sm:pt-20 pb-0 flex flex-col items-center text-center overflow-hidden">
      <p className="text-[13px] font-medium text-[#6e6e73] mb-2">Inventory for the back room</p>
      <h1 className="font-display-tile text-3xl sm:text-5xl md:text-[56px] text-[#1d1d1f] leading-[1.04] tracking-tight max-w-[14ch] mx-auto">
        Built for the working grooming shop.
      </h1>
      <p className="text-base sm:text-lg text-[#6e6e73] mt-4 max-w-[28ch] leading-snug">
        It watches what you use, parses your invoices, and writes Monday's reorder list.
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-5">
        <ChevronLink href="#product">Watch the demo</ChevronLink>
        <ChevronLink href="#cta">Book a 20-min call</ChevronLink>
      </div>
      <div className="mt-auto w-[94%] max-w-[640px] pt-10">
        <div className="rounded-t-2xl overflow-hidden shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.12)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            className="block w-full h-auto"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

function MondayViewTile() {
  const reveal = useScrollReveal()
  return (
    <section
      id="product"
      className="bg-[#1d1d1f] rounded-[18px] min-h-[560px] sm:min-h-[640px] px-6 sm:px-10 pt-12 sm:pt-16 pb-0 flex flex-col items-center text-center overflow-hidden"
    >
      <div ref={reveal.ref} className={`flex flex-col items-center w-full ${reveal.className}`}>
        <p className="text-[13px] font-medium text-[#a1a1a6] mb-2">The Monday view</p>
        <h2 className="font-display-tile text-3xl sm:text-4xl md:text-5xl text-[#f5f5f7] leading-[1.04] tracking-tight max-w-[18ch] mx-auto">
          Everything you need, before you need it.
        </h2>
        <p className="text-base sm:text-lg text-[#a1a1a6] mt-4 max-w-[32ch] leading-snug">
          5 items to reorder. Grouped by vendor. Drafted while you slept.
        </p>
        <div className="mt-5">
          <ChevronLink href="#cta" dark>See the product</ChevronLink>
        </div>
        <div className="mt-auto w-full max-w-[600px] pt-10">
          <div className="bg-[#2a2a2c] rounded-t-[14px] p-4 sm:p-5 text-left">
            <div className="bg-[#c98c1e]/15 border border-[#f3e2b3]/30 rounded-xl p-3 flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#c98c1e] text-white flex items-center justify-center text-sm font-semibold">!</div>
                <div>
                  <p className="text-xs font-medium text-[#f3e2b3]">5 items need reordering this week</p>
                  <p className="text-[11px] text-[#f3e2b3]/70 mt-0.5">2 out, 3 low — about $187 to restock</p>
                </div>
              </div>
              <span className="bg-[#c98c1e] text-[#1d1d1f] text-[11px] font-semibold px-3 py-1.5 rounded-md">Review</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-[#e0584d]/15 p-2.5 rounded-lg">
                <p className="text-[10px] text-[#ff8a82]">Almost out</p>
                <p className="text-xl sm:text-2xl font-semibold text-white mt-0.5 tracking-tight">2</p>
              </div>
              <div className="bg-[#c98c1e]/20 p-2.5 rounded-lg">
                <p className="text-[10px] text-[#f3c878]">Low</p>
                <p className="text-xl sm:text-2xl font-semibold text-white mt-0.5 tracking-tight">3</p>
              </div>
              <div className="bg-[#2d8a52]/20 p-2.5 rounded-lg">
                <p className="text-[10px] text-[#6cd89a]">Stocked</p>
                <p className="text-xl sm:text-2xl font-semibold text-white mt-0.5 tracking-tight">38</p>
              </div>
              <div className="bg-white/5 p-2.5 rounded-lg">
                <p className="text-[10px] text-[#a1a1a6]">Tracked</p>
                <p className="text-xl sm:text-2xl font-semibold text-white mt-0.5 tracking-tight">46</p>
              </div>
            </div>
            <div className="bg-white/[0.04] rounded-lg px-3.5">
              <ItemRow name="Andis #10 Blade" vendor="PetEdge · $32.99" status="out" />
              <ItemRow name="Bio-Groom Ear Cleaner 8oz" vendor="Ryan's · $14.50" status="low" border />
              <ItemRow name="Nature's Specialties Shampoo" vendor="PetEdge · $42.00" status="low" border />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ItemRow({ name, vendor, status, border = false }: { name: string; vendor: string; status: 'out' | 'low'; border?: boolean }) {
  const dot = status === 'out' ? 'bg-[#ff8a82]' : 'bg-[#f3c878]'
  const label = status === 'out' ? 'text-[#ff8a82]' : 'text-[#f3c878]'
  const labelText = status === 'out' ? 'Out' : 'Low'
  return (
    <div className={`flex items-center justify-between py-2.5 text-xs ${border ? 'border-t border-white/[0.06]' : ''}`}>
      <div className="flex items-center gap-2.5 min-w-0">
        <div className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`}></div>
        <span className="text-[#f5f5f7] font-medium truncate">{name}</span>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-[#a1a1a6] font-mono text-[10px] hidden sm:inline">{vendor}</span>
        <span className={`${label} text-[11px] font-medium`}>{labelText}</span>
      </div>
    </div>
  )
}

function InvoiceIntakeTile() {
  const reveal = useScrollReveal()
  return (
    <section className="bg-[#f5f5f7] rounded-[18px] min-h-[440px] sm:min-h-[480px] px-6 sm:px-8 pt-12 pb-0 flex flex-col overflow-hidden">
      <div ref={reveal.ref} className={`flex flex-col w-full ${reveal.className}`}>
        <p className="text-[12px] font-medium text-[#6e6e73] mb-1.5">Invoice intake</p>
        <h3 className="font-display-tile text-2xl sm:text-3xl text-[#1d1d1f] leading-[1.06] tracking-tight">
          Drop the PDF.<br />
          We read every line.
        </h3>
        <p className="text-sm text-[#6e6e73] mt-3 max-w-[28ch] leading-snug">
          Forward your supplier emails. Every line item lands in your records, every product matched.
        </p>
        <div className="mt-3">
          <ChevronLink href="#cta">See the product</ChevronLink>
        </div>
      </div>
      <div className="mt-auto pt-8 relative h-[180px]">
        <div
          className="absolute top-0 left-2 bg-white border border-black/5 rounded-md p-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)] w-[180px]"
          style={{ transform: 'rotate(-3deg)' }}
        >
          <div className="font-mono text-[9px] text-gray-500 tracking-widest mb-1.5">PETEDGE INV# 04992</div>
          <div className="font-mono text-[10px] text-[#1a1a1a]">Andis Blade ... $32.99</div>
          <div className="font-mono text-[10px] text-[#1a1a1a]">N.S. Shampoo ... $42.00</div>
          <div className="font-mono text-[10px] text-[#1a1a1a]">Cotton balls ... $18.50</div>
        </div>
        <div
          className="absolute top-[68px] right-1 bg-white rounded-lg p-3 shadow-[0_8px_18px_rgba(0,0,0,0.08)] w-[180px]"
          style={{ transform: 'rotate(2deg)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2d8a52]"></div>
            <span className="text-[#1a1a1a] text-xs font-medium">14 items parsed</span>
          </div>
          <div className="h-1 bg-gray-100 rounded mt-1.5 overflow-hidden">
            <div className="h-full w-full bg-[#2d8a52] rounded"></div>
          </div>
          <p className="text-gray-500 text-[10px] mt-1.5">2.3s · automatic</p>
        </div>
      </div>
    </section>
  )
}

function CustomerQuoteTile() {
  const reveal = useScrollReveal()
  return (
    <section
      id="proof"
      className="bg-[#fff8e7] rounded-[18px] min-h-[440px] sm:min-h-[480px] px-6 sm:px-8 pt-12 pb-0 flex flex-col overflow-hidden"
    >
      <div ref={reveal.ref} className={`flex flex-col w-full ${reveal.className}`}>
        <p className="text-[12px] font-medium text-[#8a6320] mb-1.5">From a pilot shop</p>
        <h3 className="font-display-tile text-lg sm:text-xl text-[#1d1d1f] leading-[1.18] tracking-tight max-w-[28ch]">
          “I used to lose an hour every Sunday on this. Now I just look at the screen Monday morning and know what to order.”
        </h3>
        <p className="text-xs text-[#6b4a0a] mt-3 leading-relaxed">
          <span className="font-semibold text-[#1d1d1f]">Sarah</span> · The Wash House · Decatur, GA<br />
          Four-table shop · on GroomCart since February
        </p>
        <div className="mt-3">
          <ChevronLink href="#proof">Read more from pilot shops</ChevronLink>
        </div>
      </div>
      <div className="mt-auto pt-8">
        {/* PLACEHOLDER: replace with real photo of Sarah at her station when shoot is done.
             Recommended: portrait photo, soft natural light, real shop background, ~1.8:1 aspect. */}
        <div
          className="rounded-t-xl overflow-hidden bg-[#c8a888]"
          style={{ aspectRatio: '1.8 / 1' }}
        >
          <svg viewBox="0 0 320 178" className="block w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="178" fill="#c8a888" />
            <rect width="320" height="50" y="128" fill="#a47d52" />
            <ellipse cx="160" cy="138" rx="120" ry="10" fill="#5a3f23" opacity="0.35" />
            <ellipse cx="180" cy="138" rx="48" ry="32" fill="#1f3027" />
            <ellipse cx="180" cy="118" rx="38" ry="32" fill="#dac6a8" />
            <rect x="160" y="106" width="40" height="14" fill="#8b6f4e" />
            <ellipse cx="180" cy="108" rx="40" ry="6" fill="#5a3f23" />
            <ellipse cx="166" cy="120" rx="3" ry="4" fill="#1f1c14" />
            <ellipse cx="194" cy="120" rx="3" ry="4" fill="#1f1c14" />
            <ellipse cx="180" cy="132" rx="2.5" ry="2" fill="#1f1c14" />
            <ellipse cx="80" cy="148" rx="32" ry="20" fill="#f5e8d0" />
            <ellipse cx="80" cy="124" rx="28" ry="22" fill="#f5e8d0" />
            <ellipse cx="64" cy="116" rx="9" ry="16" fill="#e8d4b0" />
            <ellipse cx="96" cy="116" rx="9" ry="16" fill="#e8d4b0" />
            <circle cx="72" cy="124" r="2.5" fill="#1f1c14" />
            <circle cx="88" cy="124" r="2.5" fill="#1f1c14" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function FinalCTATile() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="cta"
      className="bg-[#1d1d1f] rounded-[18px] min-h-[280px] sm:min-h-[320px] px-6 sm:px-10 py-14 sm:py-16 flex flex-col items-center text-center"
    >
      <p className="text-[13px] font-medium text-[#a1a1a6] mb-2">Working with our first shops now</p>
      <h2 className="font-display-tile text-3xl sm:text-4xl md:text-5xl text-[#f5f5f7] leading-[1.04] tracking-tight max-w-[16ch] mx-auto">
        Twenty minutes with us, in your shop.
      </h2>
      <p className="text-base sm:text-lg text-[#a1a1a6] mt-4 max-w-[32ch] leading-snug">
        Bring your invoices. We'll show you what changes.
      </p>

      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (email.includes('@') && email.includes('.')) setSubmitted(true)
          }}
          className="mt-6 flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourshop.com"
            aria-label="Your email address"
            className="flex-1 w-full h-11 px-4 rounded-lg bg-white/8 text-white placeholder-white/40 text-sm focus:outline-none focus:bg-white/12 transition-colors"
          />
          <button
            type="submit"
            className="h-11 px-5 bg-white text-[#1d1d1f] font-medium rounded-lg text-sm whitespace-nowrap hover:bg-white/90 transition-colors w-full sm:w-auto"
          >
            Book a 20-min call
          </button>
        </form>
      ) : (
        <p className="mt-6 text-[#f5f5f7]">You're on the list. We'll reach out shortly.</p>
      )}

      <div className="flex gap-6 mt-5">
        <ChevronLink href="mailto:hello@groomcart.com" dark>hello@groomcart.com</ChevronLink>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="about" className="bg-[#f5f5f7] py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6e6e73]">
        <p>GroomCart · Austin, TX · {new Date().getFullYear()}</p>
        <p>Backed by Y Combinator · About · Privacy</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="p-3 space-y-3">
        <HeroTile />
        <MondayViewTile />
        <div className="grid md:grid-cols-2 gap-3">
          <InvoiceIntakeTile />
          <CustomerQuoteTile />
        </div>
        <FinalCTATile />
      </main>
      <Footer />
    </div>
  )
}
