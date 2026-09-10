import { useState } from 'react'
import SectionHeading from './ui/SectionHeading.jsx'
import { allRoomCategories, hotel } from '../data/content.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const phone = data.get('phone')
    const arrival = data.get('arrival')
    const departure = data.get('departure')
    const room = data.get('room')
    const message = data.get('message')

    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      `Arrivée : ${arrival || 'Non précisée'}`,
      `Départ : ${departure || 'Non précisée'}`,
      `Catégorie souhaitée : ${room}`,
      '',
      message,
    ].join('\n')

    const mailto = `mailto:${hotel.email}?subject=${encodeURIComponent(
      'Demande de réservation — Krystal Palace Douala',
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" className="bg-ink-950 py-24 text-ivory-50 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Réservation & Contact"
            title="Préparons votre séjour"
            light
            description="Renseignez vos informations : votre messagerie s’ouvrira avec une demande pré-remplie, directement adressée à notre équipe de réservation."
          />

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              required
              name="name"
              type="text"
              placeholder="Nom complet"
              className="col-span-2 border-b border-ivory-100/30 bg-transparent py-3 text-sm placeholder:text-ivory-100/50 focus:border-gold-400 focus:outline-none sm:col-span-1"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Adresse email"
              className="col-span-2 border-b border-ivory-100/30 bg-transparent py-3 text-sm placeholder:text-ivory-100/50 focus:border-gold-400 focus:outline-none sm:col-span-1"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Téléphone"
              className="col-span-2 border-b border-ivory-100/30 bg-transparent py-3 text-sm placeholder:text-ivory-100/50 focus:border-gold-400 focus:outline-none sm:col-span-1"
            />
            <select
              name="room"
              defaultValue=""
              className="col-span-2 border-b border-ivory-100/30 bg-transparent py-3 text-sm text-ivory-100/70 focus:border-gold-400 focus:outline-none sm:col-span-1"
            >
              <option value="" disabled>
                Catégorie souhaitée
              </option>
              {allRoomCategories.map((room) => (
                <option key={room.name} value={room.name} className="text-ink-950">
                  {room.name}
                </option>
              ))}
            </select>
            <label className="col-span-2 flex flex-col gap-1 sm:col-span-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-ivory-100/50">Arrivée</span>
              <input
                name="arrival"
                type="date"
                className="border-b border-ivory-100/30 bg-transparent py-2 text-sm focus:border-gold-400 focus:outline-none"
              />
            </label>
            <label className="col-span-2 flex flex-col gap-1 sm:col-span-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-ivory-100/50">Départ</span>
              <input
                name="departure"
                type="date"
                className="border-b border-ivory-100/30 bg-transparent py-2 text-sm focus:border-gold-400 focus:outline-none"
              />
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Votre message (optionnel)"
              className="col-span-2 border-b border-ivory-100/30 bg-transparent py-3 text-sm placeholder:text-ivory-100/50 focus:border-gold-400 focus:outline-none"
            />

            <button
              type="submit"
              className="col-span-2 mt-2 inline-flex w-fit items-center justify-center bg-gold-500 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
            >
              Envoyer la demande
            </button>
            {sent && (
              <p className="col-span-2 text-sm text-gold-300">
                Votre messagerie va s’ouvrir avec votre demande pré-remplie.
              </p>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-between gap-10 border-t border-ivory-100/10 pt-10 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
          <div>
            <h3 className="font-display text-2xl">{hotel.name}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-100/70">{hotel.address}</p>
          </div>
          <div className="flex flex-col gap-2">
            {hotel.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm hover:text-gold-300">
                {phone}
              </a>
            ))}
            <a href={`mailto:${hotel.email}`} className="text-sm hover:text-gold-300">
              {hotel.email}
            </a>
          </div>
          <div className="flex gap-5 text-sm uppercase tracking-[0.2em] text-ivory-100/70">
            <a href={hotel.social.facebook} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              Facebook
            </a>
            <a href={hotel.social.instagram} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              Instagram
            </a>
            <a href={hotel.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
