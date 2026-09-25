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

export function IconBriefcase({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </svg>
  )
}

export function IconHeart({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20.5s-7.5-4.6-9.8-9.3C.7 8 2 4.8 5.2 4.1c2-.4 3.9.5 4.9 2.2 1-1.7 2.9-2.6 4.9-2.2 3.2.7 4.5 3.9 3 7.1-2.3 4.7-9.8 9.3-9.8 9.3z" />
    </svg>
  )
}

export function IconUsers({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 19c1.1-3.3 3.5-5 6.5-5s5.4 1.7 6.5 5" />
      <path d="M15.5 5.3a3 3 0 0 1 0 5.7M18.5 19c-.5-2.2-1.5-3.8-3-4.7" />
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

export function IconBed({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M3 19v-8.5A1.5 1.5 0 0 1 4.5 9H15a4 4 0 0 1 4 4v6" />
      <path d="M3 15h18M3 19v2M21 19v2" />
      <circle cx="7.5" cy="12" r="1.25" />
    </svg>
  )
}

export function IconFork({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11M9 3v3M5 3v3" />
      <path d="M17 3c-1.5 1.5-2 3-2 5.5S17 13 17 13v8" />
    </svg>
  )
}

export function IconLeaf({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 4c-9 0-15.5 5.5-15.5 13.5C4.5 19 5 20 6.5 20 14.5 20 20 13.5 20 4Z" />
      <path d="M6.5 20c2-6 6-10.5 12-14" />
    </svg>
  )
}

export function IconWifi({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 9a15 15 0 0 1 17 0" />
      <path d="M6.5 12.7a10.5 10.5 0 0 1 11 0" />
      <path d="M9.7 16.3a5.7 5.7 0 0 1 4.6 0" />
      <circle cx="12" cy="19.3" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconBell({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M6 17V11a6 6 0 0 1 12 0v6" />
      <path d="M3.5 17h17M10 20a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function IconSnowflake({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
      <path d="M8 4l4 2 4-2M8 20l4-2 4 2M2.5 9.5l4 2.5-4 2.5M21.5 9.5l-4 2.5 4 2.5" />
    </svg>
  )
}

export function IconCity({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M3 21V9l6-4v16M9 21V5l6 4v12M15 21V11l6-2v12" />
      <path d="M3 21h18M6 12h.01M6 16h.01M12 9h.01M12 13h.01M12 17h.01M18 14h.01M18 18h.01" />
    </svg>
  )
}

export function IconStarFilled({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.5l2.9 6.15 6.6.72-4.9 4.6 1.3 6.53L12 17.6l-5.9 3.4 1.3-6.53-4.9-4.6 6.6-.72Z" />
    </svg>
  )
}

export function IconFacebook({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.6-1.5h1.7V3.4C17.5 3.3 16.5 3 15.4 3c-2.4 0-4 1.5-4 4.2v2.6H8.7V13h2.7v8h3.1Z" />
    </svg>
  )
}

export function IconInstagram({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconLinkedIn({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5v6M8 7.8v.01M12.2 16.5v-3.6c0-1.3.9-2.1 2-2.1s1.8.8 1.8 2.1v3.6" />
    </svg>
  )
}

export function IconTwitterX({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  )
}

export function IconDumbbell({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />
    </svg>
  )
}

export function IconPool({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M8 4v11M16 4v11M8 7.5h8M8 11.5h8" />
      <path d="M3 18.5c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
    </svg>
  )
}

export function IconCar({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 16.5v-4l2-5.5h11l2 5.5v4h-15Z" />
      <path d="M4.5 12.5h15M7.5 16.5v2M16.5 16.5v2" />
      <circle cx="8" cy="14.5" r=".6" fill="currentColor" stroke="none" />
      <circle cx="16" cy="14.5" r=".6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconMapPin({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  )
}

export function IconMail({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6.5L20.5 7" />
    </svg>
  )
}

export function IconClock({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}
