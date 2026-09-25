import { Link } from 'react-router-dom'
import { footerLinks, hotel, legalLinks } from '../data/content.js'
import {
  IconArrow,
  IconClock,
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTwitterX,
} from './icons.jsx'

const socialLinks = [
  { href: hotel.social.facebook, icon: IconFacebook, label: 'Facebook' },
  { href: hotel.social.instagram, icon: IconInstagram, label: 'Instagram' },
  { href: hotel.social.linkedin, icon: IconLinkedIn, label: 'LinkedIn' },
  { href: hotel.social.twitter, icon: IconTwitterX, label: 'X' },
]

const headingClass = 'text-xs uppercase tracking-[0.2em] text-gold-300'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 py-16 text-ivory-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/img/logo.png" alt={hotel.name} className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Un hôtel de prestige au cœur de Douala, alliant confort, élégance et hospitalité pour des séjours
              inoubliables.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-ivory-100/70 transition-colors hover:text-gold-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={headingClass}>Liens rapides</h4>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Informations</h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li className="flex gap-3">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span>{hotel.address}</span>
              </li>
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href={`tel:${hotel.phones[0].replace(/\s/g, '')}`} className="hover:text-gold-300">
                  {hotel.phones[0]}
                </a>
              </li>
              <li className="flex gap-3">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href={`mailto:${hotel.email}`} className="break-all hover:text-gold-300">
                  {hotel.email}
                </a>
              </li>
              <li className="flex gap-3">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span>Ouvert 24h/24 - 7j/7</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Newsletter</h4>
            <p className="mt-5 text-sm">Recevez nos offres exclusives</p>
            <form className="mt-4 flex max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Votre e-mail"
                aria-label="Votre e-mail"
                className="min-w-0 flex-1 bg-ivory-50 px-4 py-3 text-sm text-charcoal outline-none placeholder:text-charcoal-dim/60"
              />
              <button
                type="submit"
                aria-label="S'inscrire"
                className="flex w-12 shrink-0 items-center justify-center bg-gold-500 text-ink-950 transition-colors hover:bg-gold-400"
              >
                <IconArrow className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory-100/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {hotel.name}. Tous droits réservés.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {legalLinks.map((label, i) => (
              <span key={label} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden>|</span>}
                {label}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
