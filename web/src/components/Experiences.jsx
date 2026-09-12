import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
import { experiences } from '../data/content.js'
import { IconArrow, IconBriefcase, IconHeart, IconUsers } from './icons.jsx'

const icons = {
  briefcase: IconBriefcase,
  heart: IconHeart,
  users: IconUsers,
}

export default function Experiences() {
  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Expériences"
          title="Une adresse pour chaque façon de séjourner"
          description="À Douala, Krystal Palace vous accompagne pour vos déplacements professionnels, vos escapades à deux et vos plus beaux moments à célébrer."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {experiences.map((experience) => {
            const Icon = icons[experience.icon]
            return (
              <div key={experience.name} className="group relative aspect-[3/4] overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/70 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl uppercase tracking-wide text-ivory-50 sm:text-2xl">
                    {experience.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-100/80">{experience.copy}</p>
                  <Link
                    to="/experiences"
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-300 hover:text-gold-200"
                  >
                    {experience.linkLabel} <IconArrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-3 border border-gold-500/70 px-8 py-3.5 text-xs uppercase tracking-[0.18em] text-gold-600 transition-colors hover:bg-gold-500 hover:text-ink-950 sm:text-sm"
          >
            Voir toutes nos expériences <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
