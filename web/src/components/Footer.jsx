import { hotel, navSections } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 py-16 text-ivory-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
            <img src="/img/logo.png" alt={hotel.name} className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{hotel.address}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300">Explorer</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a href={section.anchor} className="hover:text-gold-300">
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300">Contact</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {hotel.phones.slice(0, 1).map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-gold-300">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${hotel.email}`} className="hover:text-gold-300">
                  {hotel.email}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href={hotel.social.facebook} target="_blank" rel="noreferrer" className="hover:text-gold-300">
                  FB
                </a>
                <a href={hotel.social.instagram} target="_blank" rel="noreferrer" className="hover:text-gold-300">
                  IG
                </a>
                <a href={hotel.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold-300">
                  IN
                </a>
                <a href={hotel.social.twitter} target="_blank" rel="noreferrer" className="hover:text-gold-300">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory-100/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {hotel.name}. Tous droits réservés.
          </p>
          <p>{hotel.category} &middot; Akwa, Douala, Cameroun</p>
        </div>
      </div>
    </footer>
  )
}
