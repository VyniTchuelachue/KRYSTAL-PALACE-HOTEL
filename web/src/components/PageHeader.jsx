import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, image }) {
  return (
    <header className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden bg-ink-950 pt-20">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/20" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] text-ivory-100/60 transition-colors hover:text-gold-300"
        >
          Accueil
        </Link>
        {eyebrow && (
          <p className="mt-4 text-xs uppercase tracking-[0.35em] text-gold-300 sm:text-sm">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl text-ivory-50 sm:text-5xl">{title}</h1>
      </div>
    </header>
  )
}
