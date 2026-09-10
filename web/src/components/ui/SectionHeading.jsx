export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs sm:text-sm tracking-[0.3em] uppercase font-medium ${
            light ? 'text-gold-300' : 'text-gold-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl leading-tight ${
          light ? 'text-ivory-50' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-ivory-200/80' : 'text-charcoal-dim'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
