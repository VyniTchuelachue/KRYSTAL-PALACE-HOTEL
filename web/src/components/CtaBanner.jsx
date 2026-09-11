import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-ink-950 py-24 text-center">
      <img
        src="/img/entrance-night.jpg"
        alt="Entrée du Krystal Palace Douala de nuit"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/60" />
      <div className="relative z-10 mx-auto max-w-2xl px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Krystal Palace Douala</p>
        <h2 className="mt-5 font-display text-3xl text-ivory-50 sm:text-4xl">
          Prêt à vivre l’expérience Krystal Palace&nbsp;?
        </h2>
        <p className="mt-4 text-base text-ivory-100/75">
          Notre équipe est à votre disposition pour organiser votre séjour, du choix de la chambre à l’accueil à
          votre arrivée.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
        >
          Réserver maintenant
        </Link>
      </div>
    </section>
  )
}
