import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
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
          className="mx-auto"
        >
          <SectionHeading
            eyebrow="Avis Vérifiés"
            title="Ce que disent nos clients"
            description={`${hotel.ratings.google.score}/5 sur Google (${hotel.ratings.google.count.toLocaleString('fr-FR')} avis) · ${hotel.ratings.tripadvisor.score}/5 sur Tripadvisor (${hotel.ratings.tripadvisor.count} avis)`}
            align="center"
          />
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
