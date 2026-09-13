import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
import { guestTestimonials, hotel } from '../data/content.js'
import { IconStarFilled } from './icons.jsx'

const featured = [guestTestimonials[3], guestTestimonials[2], guestTestimonials[7]]

function Stars({ className = 'h-3.5 w-3.5' }) {
  return (
    <div className="flex gap-0.5 text-gold-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStarFilled key={i} className={className} />
      ))}
    </div>
  )
}

export default function GoogleTestimonials() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Témoignages" title="Ce que disent nos clients" align="center" />

        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:items-center sm:gap-4 lg:gap-6">
          {featured.map((testimonial, i) => {
            const isCenter = i === 1
            return (
              <div
                key={testimonial.name}
                className={`flex flex-col gap-4 p-8 ${
                  isCenter
                    ? 'bg-ivory-50 shadow-xl sm:scale-105 sm:py-10'
                    : 'bg-ivory-50/60'
                }`}
              >
                <Stars />
                <p className="font-display text-lg italic leading-relaxed text-charcoal">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-sm text-charcoal-dim">&mdash; {testimonial.name}</p>
                {isCenter && (
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-ivory-200 pt-4 text-xs text-charcoal-dim">
                    <span>{hotel.ratings.google.score}/5 Google</span>
                    <span>{hotel.ratings.tripadvisor.score}/5 Tripadvisor</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
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
