import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
import { hotel } from '../data/content.js'

export default function Welcome() {
  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Bienvenue"
              title="Le meilleur de Douala, Boulevard de la Liberté"
              description="Le Krystal Palace Douala offre un raffinement 5 étoiles au cœur du quartier des affaires d’Akwa. Décor chic aux touches africaines, chambres en étage élevé avec vue sur la ville ou le fleuve Wouri, et un service pensé pour ceux qui cherchent le meilleur au Cameroun."
            />
            <div className="mt-8 flex flex-col gap-1 text-sm text-charcoal-dim">
              <p>{hotel.address}</p>
              <p>
                <a href={`tel:${hotel.phones[0].replace(/\s/g, '')}`} className="hover:text-gold-600">
                  {hotel.phones[0]}
                </a>
                {' · '}
                <a href={`mailto:${hotel.email}`} className="break-words hover:text-gold-600">
                  {hotel.email}
                </a>
              </p>
            </div>
            <Link
              to="/notre-hotel"
              className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-600 hover:text-gold-700"
            >
              Découvrir l&apos;hôtel <span aria-hidden>&rarr;</span>
            </Link>
          </div>
          <div className="relative">
            <img
              src="/img/welcome-facade.jpg"
              alt="Façade du Krystal Palace Douala au crépuscule"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 border border-gold-400/60 sm:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
