import SectionHeading from './ui/SectionHeading.jsx'
import { hotel } from '../data/content.js'

const stats = [
  { value: '5', label: 'Étoiles' },
  { value: '12', label: 'Catégories de chambres & suites' },
  { value: `${hotel.ratings.google.score}/5`, label: `Google · ${hotel.ratings.google.count.toLocaleString('fr-FR')} avis` },
  { value: '20 min', label: "De l'aéroport international de Douala" },
]

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Notre Histoire"
            title="L’art de recevoir, entre modernité et héritage africain"
            description="Vivez une expérience unique au cœur du quartier des affaires d’Akwa, dans un cadre serein et luxueux. Le Krystal Palace Douala marie un décor chic et contemporain à des touches artistiques africaines, avec des chambres en étage élevé offrant une vue imprenable sur la ville et le fleuve Wouri."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-dim">
            Nos suites signature portent le nom d’icônes culturelles africaines &mdash; Mandela et Meugang &mdash;
            en hommage à un continent dont nous célébrons chaque jour l’élégance et le raffinement.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-gold-600 sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-charcoal-dim">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative">
            <img
              src="/img/african-decor.jpg"
              alt="Décor aux touches artistiques africaines du Krystal Palace"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 border border-gold-400/60 sm:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
