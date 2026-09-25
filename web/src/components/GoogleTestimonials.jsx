import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
import { Marquee } from './ui/marquee.jsx'
import { guestTestimonials, hotel } from '../data/content.js'

const firstRow = guestTestimonials.slice(0, Math.ceil(guestTestimonials.length / 2))
const secondRow = guestTestimonials.slice(Math.ceil(guestTestimonials.length / 2))

function initials(name) {
  return name
    .replace(/['’]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function ReviewCard({ name, role, text }) {
  return (
    <div className="group flex h-full w-72 shrink-0 cursor-default flex-col gap-3 rounded-2xl border border-gold-200/50 bg-ivory-50 p-6 shadow-[0_2px_12px_rgba(17,17,17,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(17,17,17,0.1)] sm:w-80">
      <span className="font-display text-5xl leading-none text-gold-300/80" aria-hidden="true">
        &ldquo;
      </span>
      <p className="line-clamp-3 flex-1 font-display text-base italic leading-relaxed text-charcoal">
        {text}
      </p>
      <div className="flex items-center gap-3 border-t border-ivory-200 pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-200 to-gold-400 text-xs font-medium text-ink-950 ring-1 ring-gold-400/40">
          {initials(name)}
        </span>
        <div className="flex min-w-0 flex-col">
          <p className="truncate text-sm font-medium text-charcoal">{name}</p>
          <p className="truncate text-xs text-charcoal-dim">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function GoogleTestimonials() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Ils ont séjourné chez nous"
          title="Ce que disent nos clients"
          description={`${hotel.ratings.google.score}/5 sur Google (${hotel.ratings.google.count.toLocaleString('fr-FR')} avis) · ${hotel.ratings.tripadvisor.score}/5 sur Tripadvisor (${hotel.ratings.tripadvisor.count} avis)`}
          align="center"
        />
      </div>

      <div className="relative mt-14 flex w-full flex-col items-center gap-4 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:32s]">
          {firstRow.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:32s]">
          {secondRow.map((testimonial) => (
            <ReviewCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-ivory-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-ivory-100 to-transparent" />
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/avis"
          className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold-600 hover:text-gold-700"
        >
          Voir tous les avis <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
