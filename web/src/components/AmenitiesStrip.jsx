import { amenityHighlights } from '../data/content.js'
import { IconBed, IconCar, IconDumbbell, IconFork, IconLeaf, IconPool } from './icons.jsx'

const icons = { bed: IconBed, fork: IconFork, leaf: IconLeaf, dumbbell: IconDumbbell, pool: IconPool, car: IconCar }

export default function AmenitiesStrip() {
  return (
    <section className="bg-ivory-50 pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:gap-y-0 lg:px-10">
        {amenityHighlights.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 px-3 text-center lg:border-l lg:border-ivory-200 lg:first:border-l-0"
            >
              <Icon className="h-8 w-8 text-gold-600" />
              <p className="max-w-[16ch] text-xs leading-snug text-charcoal-dim sm:text-sm">{item.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
