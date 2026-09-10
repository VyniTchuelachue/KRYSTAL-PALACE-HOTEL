import SectionHeading from './ui/SectionHeading.jsx'
import { hotel, nearby } from '../data/content.js'

export default function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(hotel.mapQuery)}&output=embed`

  return (
    <section id="emplacement" className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Emplacement"
          title="Au cœur d’Akwa, le quartier des affaires de Douala"
          description="À deux pas des institutions, restaurants et commerces d’Akwa, et à seulement 20 minutes de l’aéroport international de Douala."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 h-[360px] overflow-hidden sm:h-[440px] lg:order-1">
            <iframe
              title="Localisation du Krystal Palace Douala"
              src={mapSrc}
              className="h-full w-full grayscale-0"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-base leading-relaxed text-charcoal-dim">{hotel.address}</p>
            <p className="mt-1 text-sm text-charcoal-dim">Plus code&nbsp;: {hotel.plusCode}</p>

            <div className="mt-8 flex flex-col gap-2">
              {hotel.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-base text-charcoal hover:text-gold-600"
                >
                  {phone}
                </a>
              ))}
              <a href={`mailto:${hotel.email}`} className="text-base text-charcoal hover:text-gold-600">
                {hotel.email}
              </a>
            </div>

            <ul className="mt-10 flex flex-col gap-4 border-t border-charcoal/10 pt-8">
              {nearby.map((place) => (
                <li key={place.label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-charcoal">{place.label}</span>
                  <span className="whitespace-nowrap text-charcoal-dim">{place.distance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
