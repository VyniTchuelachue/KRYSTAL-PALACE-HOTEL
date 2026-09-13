import { Link } from 'react-router-dom'
import { hotel } from '../data/content.js'
import BookingBar from './BookingBar.jsx'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950 pt-24 sm:pt-28">
      <img
        src="/img/hero-background.jpg"
        alt="Lobby du Krystal Palace Douala"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
      <div className="absolute inset-0 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto h-full w-full max-w-7xl">
          <div className="h-full max-w-2xl bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="animate-fade-up text-xs uppercase tracking-[0.4em] text-gold-300 sm:text-sm">
            {hotel.category}
          </p>
          <h1
            className="animate-fade-up mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ivory-50 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.1s' }}
          >
            L&apos;élégance au <span className="text-gold-400">cœur</span> de Douala
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-lg text-base leading-relaxed text-ivory-100/85 sm:text-lg"
            style={{ animationDelay: '0.2s' }}
          >
            Un séjour d&apos;exception entre élégance, confort et hospitalité camerounaise.
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
            >
              Réserver votre séjour
            </Link>
            <Link
              to="/notre-hotel"
              className="inline-flex items-center justify-center border border-ivory-100/50 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory-50 transition-colors hover:border-ivory-50 hover:bg-ivory-50/10 sm:text-sm"
            >
              Découvrir l&apos;hôtel
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <BookingBar />
        </div>
      </div>
    </section>
  )
}
