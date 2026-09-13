import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
import { diningWellnessTeasers, roomAmenities } from '../data/content.js'
import { IconArrow, IconBell, IconCity, IconSnowflake, IconWifi } from './icons.jsx'

const amenityIcons = { wifi: IconWifi, bell: IconBell, snowflake: IconSnowflake, city: IconCity }

export default function RoomsSplit() {
  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img
            src="/img/room-01.jpg"
            alt="Chambre du Krystal Palace Douala"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Nos chambres & suites"
              title="Votre chambre vous attend"
              description="Suites élégantes, chambres spacieuses, tout est pensé pour votre confort et votre sérénité."
            />
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              {roomAmenities.map((amenity) => {
                const Icon = amenityIcons[amenity.icon]
                return (
                  <div key={amenity.label} className="flex items-center gap-3 text-sm text-charcoal-dim">
                    <Icon className="h-4 w-4 shrink-0 text-gold-500" />
                    {amenity.label}
                  </div>
                )
              })}
            </div>
            <Link
              to="/chambres"
              className="mt-10 inline-flex items-center gap-3 bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
            >
              Découvrir les chambres <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {diningWellnessTeasers.map((teaser) => (
            <Link
              key={teaser.title}
              to={teaser.to}
              className="group relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]"
            >
              <img
                src={teaser.image}
                alt={teaser.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300 sm:text-xs">
                  {teaser.eyebrow}
                </span>
                <h3 className="mt-2 font-display text-xl text-ivory-50 sm:text-2xl">{teaser.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold-300 sm:text-xs">
                  {teaser.linkLabel} <IconArrow className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
