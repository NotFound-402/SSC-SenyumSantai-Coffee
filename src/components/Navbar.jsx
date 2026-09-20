import { useEffect, useState } from 'react'
import { Menu, X, Coffee } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="section-shell relative pt-4">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-3 shadow-[0_12px_35px_rgba(59,36,23,0.08)] backdrop-blur-xl transition-all duration-300 md:px-6 ${
            scrolled
              ? 'border-[#e7d4b5] bg-[#f7f1ea]/85'
              : 'border-white/20 bg-[#f7f1ea]/80'
          }`}
        >
          <a href="#home" className="flex items-center gap-3 text-[#2d1f1a]" aria-label="Senyum Santai home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2c2019] text-[#f8f1e8] shadow-md">
              <Coffee size={18} />
            </div>
            <div>
              <p className="font-display text-xl leading-none tracking-[0.22em]">SENYUM</p>
              <p className="font-display text-[9px] tracking-[0.5em] text-[#6d4d3e]">SANTAI</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#2f221d] transition hover:text-[#9f5a38]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#location"
              className="inline-flex items-center rounded-full bg-[#2d201b] px-5 py-2.5 text-sm font-semibold text-[#f9f3ed] transition hover:-translate-y-0.5 hover:bg-[#4a2f24]"
            >
              Order Now
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9cab8] bg-white/70 text-[#2d201b] md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 overflow-hidden rounded-[28px] border border-[#e7dac5] bg-[#f9f3ee]/95 p-4 shadow-lg backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[#2d201b] transition hover:bg-[#f1e4d4]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#location"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#2d201b] px-4 py-2.5 text-sm font-semibold text-[#f8f2ea]"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
