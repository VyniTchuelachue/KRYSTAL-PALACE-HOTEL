import SectionHeading from './ui/SectionHeading.jsx'
import { allRoomCategories, featuredRooms } from '../data/content.js'

export default function Rooms() {
  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Chambres & Suites"
          title="12 catégories, un même souci du détail"
          description="Des chambres Twin aux suites signature Mandela et Meugang, chaque espace a été pensé pour offrir confort, élégance et vue sur la ville ou le fleuve Wouri."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room) => (
            <article key={room.name} className="group">
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
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-charcoal/10 pt-12">
          <h3 className="font-display text-2xl text-charcoal sm:text-3xl">Toutes nos catégories</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal/15 text-xs uppercase tracking-[0.2em] text-gold-600">
                  <th className="py-3 pr-4 font-medium">Catégorie</th>
                  <th className="py-3 pr-4 font-medium">Surface</th>
                  <th className="py-3 font-medium">Capacité</th>
                </tr>
              </thead>
              <tbody>
                {allRoomCategories.map((room) => (
                  <tr key={room.name} className="border-b border-charcoal/10">
                    <td className="py-3 pr-4 text-charcoal">{room.name}</td>
                    <td className="py-3 pr-4 text-charcoal-dim">{room.surface}</td>
                    <td className="py-3 text-charcoal-dim">{room.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
