import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'

export default function Dining() {
  return (
    <section className="bg-ink-950 py-24 text-ivory-50 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <img
            src="/img/dining-inspire.jpg"
            alt="Créations gastronomiques du Krystal Palace Douala"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Restauration"
            title="Une table qui célèbre les saveurs du Cameroun"
            light
            description="Notre restaurant et notre cafétéria proposent une cuisine soignée, entre classiques internationaux et créations locales, à déguster dans un cadre chaleureux ou en toute intimité grâce au room service."
          />
          <ul className="mt-8 flex flex-col gap-4 text-sm text-ivory-100/85 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
              Petit-déjeuner et cafétéria &mdash; une large sélection à découvrir chaque matin.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
              Restaurant sur place pour vos déjeuners d&apos;affaires et dîners.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
              Room service disponible pour savourer chaque instant depuis votre chambre.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
              Dîners de prestige et réceptions gastronomiques sur demande.
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-300 hover:text-gold-200"
          >
            Réserver une table <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
