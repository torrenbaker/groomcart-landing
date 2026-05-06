import { useEffect, useRef, useState } from 'react'

const APP_URL = 'https://app.groomcart.com'
const BOBBY_PHOTO = `${import.meta.env.BASE_URL}bobby.jpeg`
const TORREN_PHOTO = `${import.meta.env.BASE_URL}torren.jpeg`

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
            <a href="#team" className="text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity">Team</a>
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
            <a href="#team" onClick={close} className="py-2 text-sm text-[#1d1d1f]">Team</a>
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
    <section className="bg-[#f5f5f7] rounded-[18px] min-h-[420px] sm:min-h-[480px] px-6 sm:px-10 py-20 sm:py-28 flex flex-col items-center justify-center text-center overflow-hidden">
      <p className="text-[13px] font-medium text-[#6e6e73] mb-3">Inventory for the back room</p>
      <h1 className="font-display-tile text-3xl sm:text-5xl md:text-6xl text-[#1d1d1f] leading-[1.04] tracking-tight max-w-[14ch] mx-auto">
        Built for the working grooming shop.
      </h1>
      <p className="text-base sm:text-lg text-[#6e6e73] mt-5 max-w-[28ch] leading-snug">
        It watches what you use, parses your invoices, and writes Monday's reorder list.
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
        <ChevronLink href="#product">See how it works</ChevronLink>
        <ChevronLink href="#cta">Book a 20-min call</ChevronLink>
      </div>
    </section>
  )
}

function SoundFamiliarTile() {
  const reveal = useScrollReveal()
  return (
    <section className="bg-[#f5f5f7] rounded-[18px] min-h-[260px] px-6 sm:px-10 py-14 sm:py-16 flex flex-col items-center justify-center text-center">
      <div ref={reveal.ref} className={`${reveal.className} flex flex-col items-center`}>
        <p className="text-[13px] font-medium text-[#6e6e73] mb-3">Sound familiar?</p>
        <p className="font-display-tile text-xl sm:text-2xl md:text-[26px] text-[#1d1d1f] leading-[1.3] max-w-[26ch]">
          You're juggling three supplier sites. You ordered from memory and missed something. You can't tell where your supply money goes.
        </p>
        <p className="text-sm text-[#6e6e73] mt-3 max-w-[36ch] leading-relaxed">
          It doesn't have to be like this.
        </p>
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

function SmartReorderTile() {
  const reveal = useScrollReveal()
  return (
    <section className="bg-[#fff8e7] rounded-[18px] min-h-[440px] sm:min-h-[480px] px-6 sm:px-8 pt-12 pb-0 flex flex-col overflow-hidden">
      <div ref={reveal.ref} className={`flex flex-col w-full ${reveal.className}`}>
        <p className="text-[12px] font-medium text-[#8a6320] mb-1.5">Smart reorder plans</p>
        <h3 className="font-display-tile text-2xl sm:text-3xl text-[#1d1d1f] leading-[1.06] tracking-tight">
          Forecast, not<br />
          guesswork.
        </h3>
        <p className="text-sm text-[#6b4a0a] mt-3 max-w-[28ch] leading-snug">
          Built from your actual usage from bookings, grouped by vendor with real prices.
        </p>
        <div className="mt-3">
          <ChevronLink href="#product">See the product</ChevronLink>
        </div>
      </div>
      <div className="mt-auto pt-8">
        <div className="bg-white rounded-t-xl p-3.5 shadow-[0_4px_14px_rgba(58,42,24,0.06)] -mx-3 -mb-0.5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-semibold text-[#1d1d1f]">Week of May 11</p>
            <span className="text-[10px] font-medium text-[#2d8a52]">Approve all →</span>
          </div>
          <div className="bg-[#fafaf6] border border-[#ebe2c8]/80 rounded-md px-2.5 py-2 mb-1.5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-medium text-[#1d1d1f]">PetEdge</span>
              <span className="text-[10px] font-mono text-[#6b6b6b]">$112.49</span>
            </div>
            <div className="flex justify-between py-0.5 text-[10px] text-[#6b6b6b] border-t border-dashed border-[#ebe2c8]">
              <span>Andis Blade × 1</span><span>$32.99</span>
            </div>
            <div className="flex justify-between py-0.5 text-[10px] text-[#6b6b6b]">
              <span>N.S. Shampoo × 1</span><span>$42.00</span>
            </div>
          </div>
          <div className="bg-[#fafaf6] border border-[#ebe2c8]/80 rounded-md px-2.5 py-2">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-medium text-[#1d1d1f]">Ryan's Pet</span>
              <span className="text-[10px] font-mono text-[#6b6b6b]">$74.50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          <ChevronLink href="#product">See the product</ChevronLink>
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

function TeamTile() {
  const reveal = useScrollReveal()
  return (
    <section
      id="team"
      className="bg-[#e8f1ec] rounded-[18px] min-h-[520px] px-6 sm:px-10 pt-14 sm:pt-16 pb-12 flex flex-col items-center text-center overflow-hidden"
    >
      <div ref={reveal.ref} className={`flex flex-col items-center w-full ${reveal.className}`}>
        <p className="text-[13px] font-medium text-[#5a7a68] mb-2">The team</p>
        <h2 className="font-display-tile text-3xl sm:text-4xl md:text-5xl text-[#1f3027] leading-[1.04] tracking-tight max-w-[18ch] mx-auto">
          Three people who've been in about thirty back rooms.
        </h2>
        <p className="text-base sm:text-lg text-[#5a7a68] mt-4 max-w-[32ch] leading-snug">
          Built in Austin by people obsessed with the supply headaches groomers actually face.
        </p>
        <div className="mt-5">
          <a href="#cta" className="text-[#2d5a3a] text-sm sm:text-base hover:underline whitespace-nowrap">
            Meet the team <span className="text-xs">›</span>
          </a>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-[600px]">
          <div className="text-center">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#c8d8d0] shadow-[0_4px_14px_rgba(31,48,39,0.08)]">
              <img
                src={TORREN_PHOTO}
                alt="Torren Baker"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-[15px] font-semibold text-[#1f3027] mt-3">Torren Baker</p>
            <p className="text-[11px] sm:text-xs text-[#5a7a68] mt-0.5">supply chain</p>
          </div>
          <div className="text-center">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#c8d8d0] shadow-[0_4px_14px_rgba(31,48,39,0.08)]">
              <img
                src={BOBBY_PHOTO}
                alt="Bobby Groves"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-[15px] font-semibold text-[#1f3027] mt-3">Bobby Groves</p>
            <p className="text-[11px] sm:text-xs text-[#5a7a68] mt-0.5">consumer strategy</p>
          </div>
          <div className="text-center">
            {/* PLACEHOLDER: replace with adam.jpeg when photo is ready. Same crop/aspect as the others. */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#2d5a3a] flex items-center justify-center shadow-[0_4px_14px_rgba(31,48,39,0.08)]">
              <span className="font-display-tile text-3xl sm:text-4xl text-[#e8f1ec]">AT</span>
            </div>
            <p className="text-sm sm:text-[15px] font-semibold text-[#1f3027] mt-3">Adam Torregrossa</p>
            <p className="text-[11px] sm:text-xs text-[#5a7a68] mt-0.5">engineering</p>
          </div>
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
    <footer className="bg-[#f5f5f7] py-5 px-6">
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
        <SoundFamiliarTile />
        <MondayViewTile />
        <div className="grid md:grid-cols-2 gap-3">
          <SmartReorderTile />
          <InvoiceIntakeTile />
        </div>
        <TeamTile />
        <FinalCTATile />
      </main>
      <Footer />
    </div>
  )
}
