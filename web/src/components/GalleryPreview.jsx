import { useState } from 'react'
import { Link } from 'react-router-dom'
import { galleryCategories, galleryImages } from '../data/content.js'

function Tile({ image, className = '' }) {
  return (
    <Link to="/galerie" className={`group relative overflow-hidden bg-ink-950 ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
  )
}

export default function GalleryPreview() {
  const [active, setActive] = useState('Tout')
  const all = active === 'Tout'
  const images = (all ? galleryImages : galleryImages.filter((image) => image.category === active)).slice(0, 8)

  return (
    <section className="bg-ivory-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-600 sm:text-sm">
            Galerie photos
          </span>
          <div className="-mx-4 flex gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
            role="tablist">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={`shrink-0 px-4 py-2 text-xs transition-colors ${
                  active === category
                    ? 'bg-gold-500 text-ink-950'
                    : 'text-charcoal-dim hover:text-gold-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {all ? (
          <div className="mt-8 grid auto-rows-[9rem] grid-cols-2 gap-2 sm:auto-rows-[11rem] sm:gap-3 lg:grid-cols-5">
            {images.map((image, i) => (
              <Tile key={image.src} image={image} className={i < 2 ? 'row-span-2' : ''} />
            ))}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {images.map((image) => (
              <Tile key={image.src} image={image} className="aspect-[4/3]" />
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            to="/galerie"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold-600 hover:text-gold-700"
          >
            Toute la galerie <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
