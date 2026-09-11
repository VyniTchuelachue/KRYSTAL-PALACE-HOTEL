import SectionHeading from './ui/SectionHeading.jsx'

const spaces = [
  {
    name: 'Krystal Spa',
    image: '/img/spa.jpg',
    copy: 'Un cocon de bien-être pensé pour la détente, entre soins et moments de calme.',
  },
  {
    name: 'Piscine sur le toit',
    image: '/img/terrace.jpg',
    copy: 'Une terrasse suspendue au-dessus de Douala, idéale pour un bain ou un cocktail au coucher du soleil.',
  },
  {
    name: 'Vue sur le Wouri',
    image: '/img/lounge-sunset.jpg',
    copy: 'Nos salons panoramiques offrent l’un des plus beaux points de vue sur le fleuve Wouri.',
  },
]

export default function Wellness() {
  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Bien-être"
          title="Se ressourcer, entre spa, piscine et vue sur le fleuve"
          description="Accessibles à tous nos hôtes, nos espaces de bien-être invitent à la détente après une journée d’affaires ou de découverte de Douala."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {spaces.map((space) => (
            <div key={space.name} className="group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-xl text-charcoal sm:text-2xl">{space.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-dim">{space.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
