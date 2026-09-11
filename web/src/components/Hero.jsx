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
        <h1
          className="animate-fade-up max-w-4xl font-display text-4xl leading-[1.1] text-ivory-50 sm:text-6xl lg:text-7xl"
        >
          {hotel.tagline}
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3 sm:px-6 sm:pb-4 lg:px-10">
        <BookingBar />
      </div>
    </section>
  )
}
