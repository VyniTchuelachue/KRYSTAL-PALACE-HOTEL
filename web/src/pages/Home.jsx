import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import BookingBar from '../components/BookingBar.jsx'
import SectionPreviewGrid from '../components/SectionPreviewGrid.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { hotel } from '../data/content.js'

export default function Home() {
  return (
    <>
      <Hero />
      <BookingBar />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <img
            src="/img/african-decor.jpg"
            alt="Décor aux touches artistiques africaines du Krystal Palace"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-600 sm:text-sm">Notre Histoire</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
            L’art de recevoir, entre modernité et héritage africain
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-dim">
            Vivez une expérience unique au cœur du quartier des affaires d’Akwa, dans un cadre serein et
            luxueux. Nos suites signature portent le nom d’icônes culturelles africaines &mdash; Mandela et
            Meugang.
          </p>
          <Link
            to="/notre-hotel"
            className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-600 hover:text-gold-700"
          >
            En savoir plus sur l&apos;hôtel <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <SectionPreviewGrid />

      <section className="bg-ivory-100 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
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
          <Link
            to="/avis"
            className="text-sm uppercase tracking-[0.25em] text-gold-600 hover:text-gold-700"
          >
            Lire les avis de nos clients <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
