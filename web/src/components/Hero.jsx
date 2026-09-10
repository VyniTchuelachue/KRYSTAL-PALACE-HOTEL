import { hotel } from '../data/content.js'

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-end overflow-hidden bg-ink-950">
      <img
        src="/img/hero-pool.jpg"
        alt="Piscine et façade du Krystal Palace Douala au crépuscule"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
      <div className="absolute inset-0 bg-ink-950/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-40 sm:px-6 lg:px-10 lg:pb-36">
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
        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
          >
            Réserver un séjour
          </a>
          <a
            href="#hotel"
            className="inline-flex items-center justify-center border border-ivory-100/40 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory-50 transition-colors hover:border-gold-300 hover:text-gold-300 sm:text-sm"
          >
            Découvrir l&apos;hôtel
          </a>
        </div>
      </div>
    </section>
  )
}
