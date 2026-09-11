import { useNavigate } from 'react-router-dom'

function toISODate(date) {
  return date.toISOString().split('T')[0]
}

export default function BookingBar() {
  const navigate = useNavigate()
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  return (
    <form
      className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden border border-ivory-200 bg-ivory-200 shadow-xl md:grid-cols-4"
      onSubmit={(e) => {
        e.preventDefault()
        navigate('/contact')
      }}
    >
      <label className="flex flex-col gap-1 bg-ivory-50 px-5 py-4">
        <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal-dim">Arrivée</span>
        <input
          type="date"
          defaultValue={toISODate(today)}
          className="bg-transparent text-sm text-charcoal outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 bg-ivory-50 px-5 py-4">
        <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal-dim">Départ</span>
        <input
          type="date"
          defaultValue={toISODate(tomorrow)}
          className="bg-transparent text-sm text-charcoal outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 bg-ivory-50 px-5 py-4">
        <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal-dim">Voyageurs</span>
        <select defaultValue="2" className="bg-transparent text-sm text-charcoal outline-none">
          <option value="1">1 Chambre, 1 Adulte</option>
          <option value="2">1 Chambre, 2 Adultes</option>
          <option value="3">2 Chambres, 4 Adultes</option>
        </select>
      </label>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-gold-500 px-5 py-4 text-xs uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400 sm:text-sm"
      >
        Réserver
      </button>
    </form>
  )
}
