import { hotel, testimonial } from '../data/content.js'

export default function Reviews() {
  return (
    <section id="avis" className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-600 sm:text-sm">Avis clients</span>
        <p className="mt-6 font-display text-3xl leading-relaxed text-charcoal sm:text-4xl">
          &laquo; {testimonial.quote} &raquo;
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-charcoal-dim">
          {testimonial.author} &mdash; {testimonial.source}
        </p>

        <div className="mx-auto mt-14 flex max-w-md flex-col gap-6 border-t border-charcoal/10 pt-10 sm:flex-row sm:justify-center sm:gap-16">
          <div>
            <p className="font-display text-4xl text-gold-600">{hotel.ratings.google.score}/5</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-charcoal-dim">
              Google &middot; {hotel.ratings.google.count.toLocaleString('fr-FR')} avis
            </p>
          </div>
          <div>
            <p className="font-display text-4xl text-gold-600">{hotel.ratings.tripadvisor.score}/5</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-charcoal-dim">
              Tripadvisor &middot; {hotel.ratings.tripadvisor.count} avis
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
