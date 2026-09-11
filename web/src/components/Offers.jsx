import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'

const offers = [
  {
    name: 'Séjours Affaires',
    copy: 'Chambres adaptées, salles de réunion et navette aéroport pour vos déplacements professionnels.',
  },
  {
    name: 'Escapades Romantiques',
    copy: 'Suites signature, vue sur le Wouri et dîners privés pour des moments à deux inoubliables.',
  },
  {
    name: 'Célébrations & Groupes',
    copy: 'Tarifs préférentiels pour mariages, séminaires et séjours de groupe sur demande.',
  },
]

export default function Offers() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Offres"
          title="Des séjours pensés pour chaque occasion"
          description="Contactez notre équipe pour connaître nos tarifs et offres actuelles, adaptés à votre séjour."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.name} className="border border-charcoal/10 bg-ivory-50 p-8">
              <h3 className="font-display text-xl text-charcoal sm:text-2xl">{offer.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-dim">{offer.copy}</p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-600 hover:text-gold-700"
        >
          Demander nos tarifs actuels <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
