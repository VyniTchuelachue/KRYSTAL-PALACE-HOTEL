import { Link } from 'react-router-dom'
import { sectionPreviews } from '../data/content.js'

export default function SectionPreviewGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {sectionPreviews.map((item) => (
        <Link key={item.id} to={item.to} className="group relative aspect-[4/5] overflow-hidden bg-ink-950">
          <img
            src={item.image}
            alt={item.label}
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="font-display text-2xl text-ivory-50">{item.label}</h3>
            <p className="mt-2 max-w-[22ch] text-sm leading-snug text-ivory-100/75">{item.copy}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Découvrir <span aria-hidden>&rarr;</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  )
}
