import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { TestimonialsColumn } from './TestimonialsColumn.jsx'
import { guestTestimonials, hotel } from '../data/content.js'

const firstColumn = guestTestimonials.slice(0, 4)
const secondColumn = guestTestimonials.slice(4, 7)
const thirdColumn = guestTestimonials.slice(7, 10)

export default function GoogleTestimonials() {
  return (
    <section className="relative bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold-600 sm:text-sm">Avis Vérifiés</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-dim">
            {hotel.ratings.google.score}/5 sur Google ({hotel.ratings.google.count.toLocaleString('fr-FR')} avis)
            &middot; {hotel.ratings.tripadvisor.score}/5 sur Tripadvisor ({hotel.ratings.tripadvisor.count} avis)
          </p>
        </motion.div>

        <div className="mt-14 flex max-h-[640px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} duration={26} className="hidden sm:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={23} className="hidden lg:block" />
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            to="/avis"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold-600 hover:text-gold-700"
          >
            Voir tous les avis <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
