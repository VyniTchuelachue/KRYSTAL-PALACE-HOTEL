import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-600">Erreur 404</p>
      <h1 className="mt-4 font-display text-4xl text-charcoal sm:text-5xl">Page introuvable</h1>
      <p className="mt-4 max-w-md text-base text-charcoal-dim">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
      >
        Retour à l&apos;accueil
      </Link>
    </section>
  )
}
