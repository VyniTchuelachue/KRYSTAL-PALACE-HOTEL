const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export function IconCalendar({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  )
}

export function IconUser({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.4-3.8 4.3-5.7 7.5-5.7s6.1 1.9 7.5 5.7" />
    </svg>
  )
}

export function IconChevronDown({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function IconPhone({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3c0 1-.9 1.8-1.9 1.6-8-1.3-13.8-7.1-15-15C3.1 4.4 4 3.5 5 3.5z" />
    </svg>
  )
}

export function IconTag({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M11.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v6.5c0 .4.16.78.44 1.06l9 9c.58.58 1.53.58 2.12 0l6.5-6.5c.58-.58.58-1.53 0-2.12l-9-9a1.5 1.5 0 0 0-1.06-.44Z" />
      <circle cx="8.25" cy="8.25" r="1.25" />
    </svg>
  )
}

export function IconRefresh({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 11a8 8 0 0 0-14.9-3.9M4 4v4.5h4.5" />
      <path d="M4 13a8 8 0 0 0 14.9 3.9M20 20v-4.5h-4.5" />
    </svg>
  )
}

export function IconCard({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="1.75" />
      <path d="M2.5 10h19" />
      <path d="M6 15h4" />
    </svg>
  )
}

export function IconArrow({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  )
}
