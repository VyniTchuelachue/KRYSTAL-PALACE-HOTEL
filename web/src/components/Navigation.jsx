import { useEffect, useState } from 'react'
import { hotel, navSections, simpleLinks } from '../data/content.js'

function MenuIcon({ open }) {
  return (
    <span className="relative flex h-4 w-6 flex-col justify-between">
      <span
        className={`h-px w-full bg-current transition-transform duration-300 ${
          open ? 'translate-y-[7px] rotate-45' : ''
        }`}
      />
      <span className={`h-px w-full bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
      <span
        className={`h-px w-full bg-current transition-transform duration-300 ${
          open ? '-translate-y-[7px] -rotate-45' : ''
        }`}
      />
    </span>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState(navSections[0].id)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const activeSection = navSections.find((s) => s.id === activeId) ?? navSections[0]

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled || open
            ? 'bg-ink-950/95 backdrop-blur border-b border-ivory-100/10'
            : 'bg-gradient-to-b from-ink-950/60 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 text-ivory-50/90 transition-colors hover:text-gold-300"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
          >
            <MenuIcon open={open} />
            <span className="hidden text-xs uppercase tracking-[0.3em] sm:inline">
              {open ? 'Fermer' : 'Menu'}
            </span>
          </button>

          <a href="#accueil" className="flex items-center" onClick={() => setOpen(false)}>
            <img src="/img/logo.png" alt={hotel.name} className="h-9 w-auto sm:h-11" />
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={`tel:${hotel.phones[0].replace(/\s/g, '')}`}
              className="hidden text-sm text-ivory-50/80 transition-colors hover:text-gold-300 md:inline"
            >
              {hotel.phones[0]}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-gold-400/80 bg-gold-500 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:px-7"
            >
              Réserver
            </a>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-ink-950 text-ivory-50 transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-20 items-center justify-between border-b border-ivory-100/10 px-4 sm:px-6 lg:px-10">
          <a href="#accueil" className="flex items-center" onClick={() => setOpen(false)}>
            <img src="/img/logo.png" alt={hotel.name} className="h-9 w-auto sm:h-11" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-ivory-50/90 transition-colors hover:text-gold-300"
            aria-label="Fermer le menu"
          >
            <span className="hidden text-xs uppercase tracking-[0.3em] sm:inline">Fermer</span>
            <MenuIcon open />
          </button>
        </div>

        <div className="grid flex-1 overflow-y-auto md:grid-cols-[380px_1fr] md:overflow-hidden">
          <nav className="border-b border-ivory-100/10 px-4 py-8 sm:px-6 md:border-b-0 md:border-r md:px-10 md:py-12 md:overflow-y-auto">
            <ul className="flex flex-col">
              {navSections.map((section) => (
                <li key={section.id} className="border-b border-ivory-100/10">
                  <button
                    type="button"
                    onClick={() => setActiveId(section.id)}
                    onMouseEnter={() => setActiveId(section.id)}
                    className={`flex w-full items-center justify-between py-4 text-left font-display text-2xl transition-colors sm:text-3xl ${
                      activeId === section.id ? 'text-gold-300' : 'text-ivory-50 hover:text-gold-300'
                    }`}
                  >
                    {section.label}
                    <span className="text-lg text-ivory-50/40">&gt;</span>
                  </button>

                  {activeId === section.id && (
                    <div className="grid grid-cols-2 gap-3 pb-5 md:hidden">
                      {section.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.anchor}
                          onClick={() => setOpen(false)}
                          className="group overflow-hidden rounded-sm bg-ink-800"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                          />
                          <span className="block px-2 py-2 text-xs text-ivory-100">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex flex-col gap-1">
              {simpleLinks.map((link) => (
                <li key={link.anchor}>
                  <a
                    href={link.anchor}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm uppercase tracking-[0.2em] text-ivory-50/70 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-2 text-sm text-ivory-50/60">
              <a href={`tel:${hotel.phones[0].replace(/\s/g, '')}`} className="hover:text-gold-300">
                {hotel.phones[0]}
              </a>
              <a href={`mailto:${hotel.email}`} className="hover:text-gold-300">
                {hotel.email}
              </a>
            </div>
          </nav>

          <div className="hidden px-10 py-12 md:block md:overflow-y-auto">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-300/80">
              {activeSection.label}
            </p>
            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
              {activeSection.items.map((item) => (
                <a
                  key={item.name}
                  href={item.anchor}
                  onClick={() => setOpen(false)}
                  className="group flex flex-col gap-3"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-ink-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-sm text-ivory-100 transition-colors group-hover:text-gold-300">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            <a
              href={activeSection.cta.anchor}
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-300 hover:text-gold-200"
            >
              {activeSection.cta.label}
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
