import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[32px] border border-[#eadbc4] bg-[#f7f0e8] p-6 shadow-[0_25px_60px_rgba(56,34,22,0.06)]">
          <div className="mb-6 flex items-center gap-3 text-[#2d201b]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2d201b] text-[#f9f0e9]">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e45]">Visit us</p>
              <h3 className="mt-1 text-2xl font-semibold">Senyum Santai Coffee</h3>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e6d4b1] bg-white/70 p-4">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Beach view Sanur Bali"
              className="h-72 w-full rounded-[20px] object-cover"
            />
          </div>

          <div className="mt-6">
            <p className="text-lg font-medium text-[#2d201b]">Jl. Segara Ayu, Sanur, Denpasar Selatan, Bali</p>
            <a
              href="https://maps.google.com/?q=Jl.+Segara+Ayu,+Sanur,+Denpasar+Selatan,+Bali"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2d201b] px-5 py-3 text-sm font-semibold text-[#f7f2ed] transition hover:-translate-y-0.5 hover:bg-[#4b3126]"
            >
              <Navigation size={16} />
              Open Google Maps
            </a>
          </div>
        </div>

        <div className="rounded-[32px] bg-[#2b201d] p-6 text-[#f7efe8] shadow-[0_25px_60px_rgba(32,20,17,0.18)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dfbf9b]">Contact</p>
          <h3 className="mt-4 font-display text-4xl text-[#fffaf6]">Let’s hang out and sip slow.</h3>

          <div className="mt-8 space-y-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5e1c2] text-[#2b201d]">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#d8b591]">Instagram</p>
                <p className="mt-1 text-base font-medium">@senyumsantai.coffee</p>
              </div>
            </a>

            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d6f3d4] text-[#1d3b1f]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#bfe0bf]">WhatsApp</p>
                <p className="mt-1 text-base font-medium">+62 812 3456 7890</p>
              </div>
            </a>

            <a href="https://maps.google.com/?q=Jl.+Segara+Ayu,+Sanur,+Denpasar+Selatan,+Bali" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5d4c6] text-[#3c1f1a]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#efc0a6]">Google Maps</p>
                <p className="mt-1 text-base font-medium">Sanur, Bali</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
