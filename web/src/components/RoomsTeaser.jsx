import { Link } from 'react-router-dom'
import { featuredRooms } from '../data/content.js'

const picks = [featuredRooms[1], featuredRooms[6], featuredRooms[8]]

export default function RoomsTeaser() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-600 sm:text-sm">Hébergement</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Chambres & Suites
            </h2>
          </div>
          <Link
            to="/chambres"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold-600 hover:text-gold-700"
          >
            Toutes les chambres & suites <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {picks.map((room) => (
            <Link key={room.name} to="/chambres" className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-ink-900">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-charcoal sm:text-2xl">{room.name}</h3>
                <span className="whitespace-nowrap pt-1 text-xs uppercase tracking-[0.15em] text-gold-600">
                  {room.surface}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-dim">{room.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
