import { Link } from 'react-router-dom'
import { IconArrow } from './icons.jsx'

export default function CtaBanner() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-ink-950 py-20 text-center sm:py-24">
      <img
        src="/img/lounge-sunset.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/50 to-ink-950/70" />
      <div className="relative z-10 mx-auto max-w-2xl px-4">
        <h2 className="font-display text-3xl leading-tight text-ivory-50 sm:text-4xl lg:text-5xl">
          Vivez l&apos;expérience Krystal Palace
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ivory-100/85 sm:text-base">
          Réservez dès aujourd&apos;hui et laissez-vous séduire par un service d&apos;exception au cœur de Douala.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-3 bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
        >
          Réserver maintenant <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
