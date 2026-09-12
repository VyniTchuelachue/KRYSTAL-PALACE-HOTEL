import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading.jsx'
import { galleryImages } from '../data/content.js'

const picks = galleryImages.slice(0, 6)

export default function GalleryPreview() {
  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="En Images" title="Le Krystal Palace en images" />
          <Link
            to="/galerie"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold-600 hover:text-gold-700"
          >
            Toute la galerie <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {picks.map((image) => (
            <Link key={image.src} to="/galerie" className="group aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
