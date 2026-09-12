export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center' : 'items-start'}`}>
          <span
            className={`font-sans text-xs sm:text-sm tracking-[0.25em] uppercase font-medium ${
              light ? 'text-gold-300' : 'text-gold-600'
            }`}
          >
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-gold-500" />
        </div>
      )}
      <h2
        className={`font-display font-normal text-4xl sm:text-5xl md:text-6xl leading-[0.98] tracking-tight ${
          light ? 'text-ivory-50' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-sans text-base sm:text-lg leading-relaxed ${
            light ? 'text-ivory-200/80' : 'text-charcoal-dim'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
