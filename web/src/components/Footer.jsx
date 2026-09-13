import { Link } from 'react-router-dom'
import { hotel, legalLinks, navSections } from '../data/content.js'
import { IconArrow, IconFacebook, IconInstagram, IconLinkedIn, IconTwitterX } from './icons.jsx'

const socialLinks = [
  { href: hotel.social.facebook, icon: IconFacebook, label: 'Facebook' },
  { href: hotel.social.instagram, icon: IconInstagram, label: 'Instagram' },
  { href: hotel.social.linkedin, icon: IconLinkedIn, label: 'LinkedIn' },
  { href: hotel.social.twitter, icon: IconTwitterX, label: 'X' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 py-16 text-ivory-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <img src="/img/logo.png" alt={hotel.name} className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{hotel.address}</p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300">Recevez nos offres exclusives</h4>
            <form
              className="mt-4 flex max-w-xs border-b border-ivory-100/20 focus-within:border-gold-300"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Votre adresse e-mail"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-ivory-50 outline-none placeholder:text-ivory-100/40"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-2 py-2 text-xs uppercase tracking-[0.15em] text-gold-300 hover:text-gold-200"
              >
                S&apos;inscrire <IconArrow className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300">Navigation</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gold-300">
                  Accueil
                </Link>
              </li>
              {navSections.map((section) => (
                <li key={section.id}>
                  <Link to={section.to} className="hover:text-gold-300">
                    {section.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="hover:text-gold-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300">Suivez-nous</h4>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-ivory-100/20 text-ivory-100/70 transition-colors hover:border-gold-300 hover:text-gold-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm">
              <a href={`tel:${hotel.phones[0].replace(/\s/g, '')}`} className="hover:text-gold-300">
                {hotel.phones[0]}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory-100/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {hotel.name}. Tous droits réservés.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {legalLinks.map((link, i) => (
              <span key={link.to} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden>&middot;</span>}
                {link.label}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
