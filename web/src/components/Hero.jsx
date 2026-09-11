import { Link } from 'react-router-dom'
import { hotel } from '../data/content.js'
import BookingBar from './BookingBar.jsx'
import { IconArrow, IconCard, IconRefresh, IconTag } from './icons.jsx'

const trustItems = [
  { icon: IconTag, label: 'Meilleur tarif garanti' },
  { icon: IconRefresh, label: 'Annulation flexible' },
  { icon: IconCard, label: "Paiement à l'hôtel" },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950 pt-24 sm:pt-28">
      <img
        src="/img/hero-background.jpg"
        alt="Lobby du Krystal Palace Douala"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/50 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="animate-fade-up text-xs uppercase tracking-[0.4em] text-gold-300 sm:text-sm">
            Luxe &bull; Confort &bull; Excellence
          </p>
          <h1
            aria-label={hotel.tagline}
            className="animate-fade-up mt-5 max-w-3xl font-display text-[2.1rem] leading-[1.1] text-ivory-50 sm:text-7xl lg:text-8xl"
            style={{ animationDelay: '0.1s' }}
          >
            <span aria-hidden="true">
              <span className="block">Pour toi qui cherche</span>
              <span className="block">le meilleur</span>
              <span className="block">au Cameroun</span>
            </span>
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-lg text-base leading-relaxed text-ivory-100/85 sm:text-lg"
            style={{ animationDelay: '0.2s' }}
          >
            Vivez une expérience hôtelière 5 étoiles au cœur de Douala.
          </p>
          <Link
            to="/notre-hotel"
            className="animate-fade-up mt-8 inline-flex items-center gap-3 border border-gold-300/70 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-gold-300 transition-colors hover:bg-gold-300 hover:text-ink-950 sm:text-sm"
            style={{ animationDelay: '0.3s' }}
          >
            Découvrir l&apos;expérience <IconArrow />
          </Link>
        </div>
      </div>

      <div className="relative z-10 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <BookingBar />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-ivory-100/70 sm:gap-x-10 sm:text-xs">
            {trustItems.map(({ icon: Icon, label }, i) => (
              <span key={label} className="flex items-center gap-4">
                {i > 0 && <span className="hidden h-4 w-px bg-ivory-100/25 sm:block" />}
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-gold-300" />
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
