import React from 'react'
import { motion } from 'motion/react'

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-200 font-display text-sm text-gold-700">
      {initials}
    </div>
  )
}

export function TestimonialsColumn({ className = '', testimonials, duration = 10 }) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-6 pb-6"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role }, i) => (
              <div
                key={i}
                className="w-full max-w-xs border border-charcoal/10 bg-ivory-50 p-8 shadow-sm shadow-charcoal/5"
              >
                <p className="text-sm leading-relaxed text-charcoal-dim">{text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar name={name} />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight text-charcoal">{name}</div>
                    <div className="text-xs leading-5 tracking-tight text-charcoal-dim/80">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
