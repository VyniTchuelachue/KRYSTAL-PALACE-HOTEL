import SectionHeading from './ui/SectionHeading.jsx'

const events = [
  {
    name: 'Mariages',
    image: '/img/wedding.jpg',
    copy: 'Dites oui au bord de notre piscine ou dans nos salons, pour une cérémonie mémorable.',
  },
  {
    name: 'Séminaires & Réceptions',
    image: '/img/event-dinner.jpg',
    copy: 'Des espaces de réunion et de conférence modulables pour vos événements d’entreprise.',
  },
  {
    name: 'Espace Enfants',
    image: '/img/kids.jpg',
    copy: 'Un coin ludique et coloré pensé pour occuper les plus jeunes en toute sécurité.',
  },
]

export default function Events() {
  return (
    <section id="evenements" className="relative overflow-hidden bg-ink-950 py-24 text-ivory-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Événements"
          title="Un cadre d’exception pour vos grands moments"
          light
          description="Mariages, séminaires d’entreprise, dîners de gala ou réceptions privées : notre équipe met tout en œuvre pour donner vie à vos événements les plus importants."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {events.map((event) => (
            <div key={event.name} className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl text-ivory-50 sm:text-2xl">{event.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/80">{event.copy}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-300 hover:text-gold-200"
        >
          Demander un devis événementiel <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </section>
  )
}
