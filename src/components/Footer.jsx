export default function Footer() {
  const navItems = ['Home', 'Menu', 'About', 'Gallery', 'Location']

  return (
    <footer className="border-t border-[#ebdcc7] bg-[#f5efe9] py-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <p className="font-display text-3xl tracking-[0.12em] text-[#2a201a]">SENYUM SANTAI</p>
          <p className="mt-3 text-sm leading-7 text-[#68574e]">
            Kopi, makanan, dan suasana santai yang membuat hari terasa lebih indah di Sanur, Bali.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:gap-12">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm text-[#483a34]">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#8d5d47]">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm text-[#483a34]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-[#8d5d47]">
              Instagram
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="transition hover:text-[#8d5d47]">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-[#e8d9c4] pt-6 text-sm text-[#68574e]">
        © 2026 Senyum Santai Coffee &amp; Eatery. All rights reserved.
      </div>
    </footer>
  )
}
