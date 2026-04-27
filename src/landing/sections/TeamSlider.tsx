import { useRef, useState, type PointerEvent } from 'react'

const teamCards = [
  { name: 'Mr. Sam', role: 'Staff Advisor' },
  { name: 'Akinwale Aremu', role: 'President' },
  { name: 'Bolujo Joseph', role: 'Vice President' },
  { name: 'Ayomide Arimoro', role: 'General Secretary' },
  { name: 'Blossom Ubochi', role: 'Public Relations Officer' },
  { name: 'Ifeoluwa Omidire', role: 'Programs & Strategy Lead' },
  { name: 'Emmanuel Latunde', role: 'Partnership Lead' },
  { name: 'Godbless Peter', role: 'Technical Lead' },
  { name: 'Fadehan Daniel', role: 'Assistant Technical Lead' },
  { name: 'Nnadozie Destiny', role: 'Creative Director' },
  { name: 'Enoch Abe', role: 'Assistant Creative Director' },
  { name: 'Peace Amudipe', role: 'Welfare Director' },
]

function TeamCard({
  image,
  name,
  role,
  index,
}: {
  image?: string
  name: string
  role: string
  index: number
}) {
  return (
    <article className="flex-none w-[220px] overflow-hidden rounded-[12px] bg-[#111f2c] ring-1 ring-white/8 select-none">
      {image ? (
        <img src={image} alt={name} className="h-[260px] w-full object-cover" />
      ) : (
        <div
          className={`flex h-[260px] items-end bg-[radial-gradient(circle_at_top,rgba(6,117,178,0.7),transparent_45%),linear-gradient(180deg,#22384a_0%,#0f161f_100%)] p-4 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          <div className="rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-[10px] uppercase tracking-[0.35em] text-white/70">
            TechFest Team
          </div>
        </div>
      )}

      <div className="bg-[rgba(255,255,255,0.05)] px-4 py-4 text-center">
        <h3 className="text-base font-medium text-white">{name}</h3>
        <p className="mt-0.5 text-sm text-white/75">{role}</p>
      </div>
    </article>
  )
}

export function TeamSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(0)

  const dragStart = useRef<number | null>(null)
  const dragPos = useRef(0)

  const CARD_W = 240
  const MAX = Math.max(0, teamCards.length - 1)

  function goTo(n: number) {
    const next = Math.max(0, Math.min(n, MAX))
    setPos(next)
  }

  const PAGE = 3
  const pages = Math.ceil(teamCards.length / PAGE)

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    dragStart.current = e.clientX
    dragPos.current = pos
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (dragStart.current === null) return
    const delta = dragStart.current - e.clientX
    const steps = Math.round(delta / CARD_W)
    goTo(dragPos.current + steps)
  }

  function onPointerUp() {
    dragStart.current = null
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <button onClick={() => goTo(pos - 1)} disabled={pos === 0} className="btn-nav">←</button>
        <button onClick={() => goTo(pos + 1)} disabled={pos >= MAX} className="btn-nav">→</button>

        <div className="ml-2 flex gap-1.5">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i * PAGE)}
              className={`dot ${Math.floor(pos / PAGE) === i ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="-mx-1 overflow-hidden px-1">
        <div
          ref={trackRef}
          className="flex gap-5 pb-3 cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${pos * CARD_W}px)`,
            transition: 'transform 0.38s ease',
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {teamCards.map((member, index) => (
            <TeamCard key={index} index={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}