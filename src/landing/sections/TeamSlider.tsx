import { useEffect, useState } from 'react'

const teamCards = [
  { name: 'Mr. Sam', role: 'Staff Advisor' },
  { name: 'Akinwale Aremu', role: 'President' },
  { name: 'Bolujo Joseph', role: 'Vice President' },
  { name: 'Ayomide Arimoro', role: 'President' },
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
        <img src={image} alt={name} className="h-[260px] w-full object-cover" loading="lazy" />
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
  const [pos, setPos] = useState(0)
  const [paused, setPaused] = useState(false)

  const CARD_WIDTH_WITH_GAP = 240
  const VISIBLE_CARDS = 3
  const maxPos = Math.max(0, teamCards.length - VISIBLE_CARDS)

  useEffect(() => {
    if (paused) return

    const timer = window.setInterval(() => {
      setPos((current) => (current >= maxPos ? 0 : current + 1))
    }, 3000)

    return () => window.clearInterval(timer)
  }, [paused, maxPos])

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-5 pb-3"
        style={{
          transform: `translateX(-${pos * CARD_WIDTH_WITH_GAP}px)`,
          transition: 'transform 0.7s ease-in-out',
        }}
      >
        {teamCards.map((member, index) => (
          <TeamCard key={`${member.name}-${index}`} index={index} {...member} />
        ))}
      </div>
    </div>
  )
}