import { experienceSteps } from '../data/content.js'
import { IconBed, IconFork, IconLeaf } from './icons.jsx'

const icons = { bed: IconBed, fork: IconFork, leaf: IconLeaf }

export default function ExperienceBand() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <img
        src="/img/lounge-sunset.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-ink-950/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-300">L&apos;expérience Krystal Palace</span>
            <h2 className="mt-4 font-display text-3xl leading-[1.15] text-ivory-50 sm:text-4xl lg:text-5xl">
              Bien plus qu&apos;un séjour. Une expérience pensée dans les moindres détails.
            </h2>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-10 lg:gap-14">
            {experienceSteps.map((step) => {
              const Icon = icons[step.icon]
              return (
                <div key={step.number} className="flex items-start gap-4 sm:flex-col sm:items-start sm:gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/60 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.15em] text-gold-300/80">{step.number}</p>
                    <p className="mt-1 font-display text-xl text-ivory-50">{step.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
