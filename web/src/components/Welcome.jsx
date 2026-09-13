import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
import { aboutStats } from '../data/content.js'

export default function Welcome() {
  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="À propos de l'hôtel"
              title="Le meilleur de Douala, Boulevard de la Liberté"
              description="Le Krystal Palace Douala est un hôtel 5 étoiles au cœur du quartier des affaires. Découvrez un cadre d'exception, des chambres élégantes, une cuisine raffinée et des services haut de gamme pour un séjour inoubliable."
            />
            <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-gold-600 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-charcoal-dim">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/notre-hotel"
              className="mt-10 inline-flex items-center gap-3 border border-gold-500/70 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-gold-600 transition-colors hover:bg-gold-500 hover:text-ink-950 sm:text-sm"
            >
              En savoir plus
            </Link>
          </div>
          <div className="relative">
            <img
              src="/img/about-facade.jpg"
              alt="Entrée du Krystal Palace Douala au crépuscule"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
