import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconArrow } from './icons.jsx'

function ImagePanel({ images }) {
  const [index, setIndex] = useState(0)
  const many = images.length > 1
  const go = (delta) => setIndex((i) => (i + delta + images.length) % images.length)

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-ink-950 lg:aspect-auto lg:min-h-[460px]">
      {images.map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {images[index].caption && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950/75 to-transparent" />
          <p className="pointer-events-none absolute bottom-10 left-5 font-display text-xl text-ivory-50 sm:bottom-9 sm:left-6 sm:text-2xl">
            {images[index].caption}
          </p>
        </>
      )}
      {many && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Image précédente"
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ivory-50/70 bg-ink-950/30 text-ivory-50 backdrop-blur-sm transition-colors hover:bg-ink-950/60"
          >
            <IconArrow className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Image suivante"
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ivory-50/70 bg-ink-950/30 text-ivory-50 backdrop-blur-sm transition-colors hover:bg-ink-950/60"
          >
            <IconArrow className="h-4 w-4" />
          </button>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Afficher l'image ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-ivory-50' : 'bg-ivory-50/40 hover:bg-ivory-50/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function FeatureSplit({ eyebrow, title, description, cta, images, imageSide = 'right', dark = false }) {
  const imageRight = imageSide === 'right'

  return (
    <section className={`grid lg:grid-cols-2 ${dark ? 'bg-ink-900' : 'bg-ivory-50'}`}>
      <div className={imageRight ? 'lg:order-2' : ''}>
        <ImagePanel images={images} />
      </div>
      <div
        className={`flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-16 xl:px-24 ${
          imageRight ? 'lg:order-1' : ''
        }`}
      >
        <span
          className={`flex items-center gap-3 text-xs uppercase tracking-[0.25em] ${
            dark ? 'text-gold-300' : 'text-gold-600'
          }`}
        >
          {eyebrow}
          <span className="h-px w-10 bg-gold-500" />
        </span>
        <h2
          className={`mt-5 max-w-lg font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl ${
            dark ? 'text-ivory-50' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-5 max-w-md text-sm leading-relaxed sm:text-base ${
            dark ? 'text-ivory-100/75' : 'text-charcoal-dim'
          }`}
        >
          {description}
        </p>
        <Link
          to={cta.to}
          className="mt-8 inline-flex w-fit items-center gap-3 bg-gold-500 px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-gold-400"
        >
          {cta.label} <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
