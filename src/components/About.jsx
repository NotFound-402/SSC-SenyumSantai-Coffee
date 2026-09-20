export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[32px] shadow-[0_18px_60px_rgba(50,31,22,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
            alt="Interior Senyum Santai Coffee"
            className="h-[540px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b5e45]">About us</p>
          <h2 className="mt-4 font-display text-4xl text-[#2a201a] sm:text-5xl">Kopi, makanan, dan suasana yang terasa seperti liburan.</h2>
          <p className="mt-6 text-base leading-8 text-[#5b4c45]">
            Senyum Santai Coffee &amp; Eatery hadir untuk menjadi ruang santai di Sanur, Bali,
            tempat kalian bisa menikmati secangkir kopi berkualitas, hidangan favorit, dan waktu
            yang terasa lebih tenang. Dari pagi sampai sore, kami menghadirkan rasa hangat, musik
            santai, dan keramahan yang membuat setiap kunjungan terasa personal.
          </p>
          <p className="mt-4 text-base leading-8 text-[#5b4c45]">
            Dengan konsep tropical-modern, kami menggabungkan cita rasa yang menggugah dan suasana
            pantai yang menenangkan untuk menciptakan pengalaman santai yang tak mudah dilupakan.
          </p>
        </div>
      </div>
    </section>
  )
}
