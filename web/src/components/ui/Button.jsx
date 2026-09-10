const variants = {
  gold: 'bg-gold-500 text-ink-950 hover:bg-gold-400',
  outline: 'border border-ivory-100/40 text-ivory-50 hover:border-gold-300 hover:text-gold-300',
  outlineDark: 'border border-charcoal/30 text-charcoal hover:border-gold-600 hover:text-gold-600',
  ghost: 'text-gold-600 hover:text-gold-700',
}

export default function Button({
  as = 'a',
  href,
  onClick,
  type = 'button',
  variant = 'gold',
  className = '',
  children,
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${variants[variant]} ${className}`

  if (as === 'button') {
    return (
      <button type={type} onClick={onClick} className={classes}>
        {children}
      </button>
    )
  }

  return (
    <a href={href} onClick={onClick} className={classes}>
      {children}
    </a>
  )
}
