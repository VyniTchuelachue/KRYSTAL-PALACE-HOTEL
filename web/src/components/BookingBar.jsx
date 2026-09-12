import { useNavigate } from 'react-router-dom'
import { IconCalendar, IconChevronDown, IconUser } from './icons.jsx'

function toISODate(date) {
  return date.toISOString().split('T')[0]
}

const fieldClass =
  'flex min-w-0 flex-1 items-center gap-3 px-4 py-4 sm:px-6 sm:py-5'
const labelClass = 'text-[10px] uppercase tracking-[0.15em] text-ivory-100/55 sm:text-[11px] sm:tracking-[0.2em]'
const valueClass =
  'w-full min-w-0 appearance-none bg-transparent text-sm text-ivory-50 outline-none [&::-webkit-calendar-picker-indicator]:opacity-0'

export default function BookingBar() {
  const navigate = useNavigate()
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  return (
    <form
      className="mx-auto flex w-full max-w-6xl flex-col divide-y divide-ivory-100/15 border border-ivory-100/20 bg-ink-950/55 shadow-2xl backdrop-blur-md sm:flex-row sm:divide-x sm:divide-y-0"
      onSubmit={(e) => {
        e.preventDefault()
        navigate('/contact')
      }}
    >
      <label className={fieldClass}>
        <IconCalendar className="h-5 w-5 shrink-0 text-gold-300" />
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className={labelClass}>Arrivée</span>
          <span className="flex items-center gap-2">
            <input
              type="date"
              defaultValue={toISODate(today)}
              style={{ colorScheme: 'dark' }}
              className={valueClass}
            />
            <IconChevronDown className="h-4 w-4 shrink-0 text-ivory-100/50" />
          </span>
        </span>
      </label>

      <label className={fieldClass}>
        <IconCalendar className="h-5 w-5 shrink-0 text-gold-300" />
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className={labelClass}>Départ</span>
          <span className="flex items-center gap-2">
            <input
              type="date"
              defaultValue={toISODate(tomorrow)}
              style={{ colorScheme: 'dark' }}
              className={valueClass}
            />
            <IconChevronDown className="h-4 w-4 shrink-0 text-ivory-100/50" />
          </span>
        </span>
      </label>

      <label className={fieldClass}>
        <IconUser className="h-5 w-5 shrink-0 text-gold-300" />
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className={labelClass}>Voyageurs</span>
          <span className="flex items-center gap-2">
            <select defaultValue="2" style={{ colorScheme: 'dark' }} className={valueClass}>
              <option value="1">1 Chambre, 1 Adulte</option>
              <option value="2">1 Chambre, 2 Adultes</option>
              <option value="3">2 Chambres, 4 Adultes</option>
            </select>
            <IconChevronDown className="h-4 w-4 shrink-0 text-ivory-100/50" />
          </span>
        </span>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-gold-500 px-6 py-4 text-xs uppercase tracking-[0.15em] text-ink-950 transition-colors hover:bg-gold-400 sm:px-8 sm:py-5 sm:text-sm sm:tracking-[0.2em]"
      >
        Réserver
      </button>
    </form>
  )
}
