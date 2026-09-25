import { Link } from 'react-router-dom'
import BookingBar from './BookingBar.jsx'
import { IconArrow } from './icons.jsx'

export default function Hero() {
  return (
    <div className="relative">
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-ink-950 pt-24 sm:pt-28">
        <img
          src="/img/hero-background.jpg"
          alt="Lobby du Krystal Palace Douala"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 from-0% via-ink-950/70 via-35% to-transparent to-96% sm:to-92% lg:via-30% lg:to-70% xl:to-56% 2xl:to-52%" />

        <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-28 pt-10 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="animate-fade-up text-xs uppercase tracking-[0.4em] text-gold-300 sm:text-sm">
              Hôtel de prestige à Douala
            </p>
            <h1
              className="animate-fade-up mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-ivory-50 sm:text-5xl lg:text-6xl"
              style={{ animationDelay: '0.1s' }}
            >
              L&apos;élégance <br className="hidden sm:block" />
              au cœur de Douala
            </h1>
            <p
              className="animate-fade-up mt-5 max-w-lg text-base leading-relaxed text-ivory-100/85 sm:text-lg"
              style={{ animationDelay: '0.2s' }}
            >
              Un cadre raffiné, un service d&apos;exception et des expériences inoubliables pour vos séjours
              d&apos;affaires ou de loisirs.
            </p>
            <Link
              to="/notre-hotel"
              className="animate-fade-up mt-8 inline-flex items-center gap-3 bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
              style={{ animationDelay: '0.3s' }}
            >
              Découvrir l&apos;hôtel <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-12 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <BookingBar />
        </div>
      </div>
    </div>
  )
}
