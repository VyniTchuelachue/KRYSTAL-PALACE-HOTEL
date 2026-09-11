import { hotel } from '../data/content.js'
import BookingBar from './BookingBar.jsx'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink-950 pb-32 pt-32 sm:pb-36">
      <img
        src="/img/hero-background.jpg"
        alt="Hall d'accueil du Krystal Palace Douala"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
      <div className="absolute inset-0 bg-ink-950/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="animate-fade-up text-xs uppercase tracking-[0.4em] text-gold-300 sm:text-sm">
          {hotel.name} &middot; {hotel.category}
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-4xl font-display text-4xl leading-[1.1] text-ivory-50 sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          {hotel.tagline}
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-ivory-100/85 sm:text-lg"
          style={{ animationDelay: '0.2s' }}
        >
          Au cœur du quartier des affaires d&apos;Akwa, vivez une expérience unique dans un cadre serein et
          luxueux, avec vue sur le fleuve Wouri &mdash; à 20 minutes de l&apos;aéroport international de Douala.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10">
        <BookingBar />
      </div>
    </section>
  )
}
