import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['Coffee', 'Non Coffee', 'Food', 'Best Seller']

const formatPrice = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)

export default function Menu({ items }) {
  const [activeCategory, setActiveCategory] = useState('Coffee')

  const filteredItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [items, activeCategory],
  )

  return (
    <section id="menu" className="bg-[#f5efe9] py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b5e45]">Our menu</p>
            <h2 className="mt-3 font-display text-4xl text-[#2d211c] sm:text-5xl">Brewed for slow mornings and good stories.</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-[#2d201b] text-[#f9f2ea] shadow-lg'
                    : 'border border-[#ddcdb5] bg-[#fffaf4] text-[#42352d] hover:bg-[#f3e7d8]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[28px] border border-[#eadfce] bg-[#fffaf5] shadow-[0_25px_60px_rgba(64,39,25,0.06)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-[#2d201b]">{item.name}</h3>
                  <span className="text-sm font-semibold text-[#8b5e45]">{formatPrice(item.price)}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#68574e]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
