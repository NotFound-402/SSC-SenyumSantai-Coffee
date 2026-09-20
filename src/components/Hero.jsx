import { ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f4efe9]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#170f0d]/45" />

      <div className="section-shell relative flex min-h-screen items-center pb-16 pt-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl rounded-[32px] border border-white/15 bg-[#f8f1e8]/10 p-6 shadow-[0_18px_60px_rgba(16,10,7,0.25)] backdrop-blur-[2px] sm:p-8 lg:p-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#f9f2e9]">
            <MapPin size={12} />
            Sanur, Bali
          </div>

          <h1 className="font-display text-5xl leading-[0.95] text-[#fffaf5] sm:text-6xl lg:text-7xl">
            Coffee, Beach &amp; Good Vibes.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#f2e9df] sm:text-lg">
            Nikmati kopi favoritmu dalam suasana santai di Sanur, Bali.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5e3c7] px-6 py-3 text-sm font-semibold text-[#2e201b] transition hover:-translate-y-0.5 hover:bg-[#f8eedf]"
            >
              Explore Menu
              <ArrowRight size={16} />
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-[#fffaf6] transition hover:bg-white/10"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
