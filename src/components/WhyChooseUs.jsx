import { Coffee, Sparkles, Users, Wallet } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Fresh Coffee',
    description: 'Kopi diseduh segar setiap hari dengan biji pilihan dan proses yang teliti.',
  },
  {
    icon: Sparkles,
    title: 'Beach Atmosphere',
    description: 'Suasana Sanur yang hangat dan tenang membuat setiap kunjungan terasa rileks.',
  },
  {
    icon: Users,
    title: 'Friendly Service',
    description: 'Tim kami siap menyambut dengan keramahan dan rekomendasi yang tepat.',
  },
  {
    icon: Wallet,
    title: 'Affordable Price',
    description: 'Harga yang ramah di kantong tanpa mengorbankan rasa dan kualitas.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b5e45]">Why choose us</p>
          <h2 className="mt-4 font-display text-4xl text-[#2a201a] sm:text-5xl">Sebuah tempat untuk berhenti sejenak.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-[28px] border border-[#e8dcc8] bg-white/80 p-6 shadow-[0_25px_60px_rgba(60,39,25,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(60,39,25,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4e6d4] text-[#3d261d] transition group-hover:bg-[#2d201b] group-hover:text-[#fdf7f2]">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#2b1f1a]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#68574e]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
