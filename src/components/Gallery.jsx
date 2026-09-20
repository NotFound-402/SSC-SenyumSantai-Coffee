const galleryImages = [
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#f5efe9] py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b5e45]">Gallery</p>
          <h2 className="mt-4 font-display text-4xl text-[#2a201a] sm:text-5xl">Moments from the coast and our daily rituals.</h2>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 xl:columns-3">
          {galleryImages.map((image, index) => (
            <div key={image} className={`mb-5 overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(60,41,30,0.08)] ${index % 2 === 0 ? 'h-[260px]' : 'h-[360px]'}`}>
              <img
                src={image}
                alt="Senyum Santai gallery"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
