import { useEffect, useState } from 'react'
import SectionHeading from './ui/SectionHeading.jsx'
import { galleryImages } from '../data/content.js'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % galleryImages.length)
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Galerie"
          title="Le Krystal Palace en images"
          description="Chambres, espaces communs, événements : un aperçu de l’expérience qui vous attend."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group aspect-square overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 text-sm uppercase tracking-[0.2em] text-ivory-50/80 hover:text-gold-300 sm:right-8 sm:top-8"
          >
            Fermer &times;
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-2 text-3xl text-ivory-50/70 hover:text-gold-300 sm:left-6"
            aria-label="Image précédente"
          >
            &#8249;
          </button>

          <figure className="flex max-h-full max-w-5xl flex-col items-center gap-4">
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-h-[75vh] w-auto object-contain"
            />
            <figcaption className="text-sm text-ivory-100/70">{galleryImages[activeIndex].alt}</figcaption>
          </figure>

          <button
            type="button"
            onClick={() => setActiveIndex((i) => (i + 1) % galleryImages.length)}
            className="absolute right-2 text-3xl text-ivory-50/70 hover:text-gold-300 sm:right-6"
            aria-label="Image suivante"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
