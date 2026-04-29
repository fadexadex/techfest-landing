import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

/** Match `w-[220px]` + Tailwind `gap-5` (1.25rem → 20px at default root). */
const CARD_WIDTH_PX = 220
const GAP_PX = 20
const SLOT_PX = CARD_WIDTH_PX + GAP_PX

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

const USER_PAUSE_MS = 10_000
const EDGE_EPS = 4

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
    <article
      className="w-[220px] shrink-0 snap-start overflow-hidden rounded-[12px] bg-[#111f2c] ring-1 ring-white/8"
      tabIndex={-1}
    >
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

function NavChevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-current" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
      )}
    </svg>
  )
}

export function TeamSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const programmaticRef = useRef(false)
  const userPauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [hoverPaused, setHoverPaused] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [canScroll, setCanScroll] = useState(false)

  const clearUserPauseTimer = useCallback(() => {
    if (userPauseTimerRef.current != null) {
      clearTimeout(userPauseTimerRef.current)
      userPauseTimerRef.current = null
    }
  }, [])

  const armUserPause = useCallback(() => {
    clearUserPauseTimer()
    setUserPaused(true)
    userPauseTimerRef.current = window.setTimeout(() => {
      setUserPaused(false)
      userPauseTimerRef.current = null
    }, USER_PAUSE_MS)
  }, [clearUserPauseTimer])

  const syncScrollbar = useCallback(() => {
    const el = scrollerRef.current
    const thumb = thumbRef.current
    if (!el) return

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    setCanScroll(maxScroll > EDGE_EPS)

    if (thumb) {
      if (maxScroll <= 0) {
        thumb.style.width = '100%'
        thumb.style.transform = 'translateX(0%)'
      } else {
        const ratio = el.clientWidth / el.scrollWidth
        const widthPct = Math.max(10, ratio * 100)
        const progress = el.scrollLeft / maxScroll
        const travel = ((1 - Math.max(0.1, ratio)) / Math.max(0.1, ratio)) * 100

        thumb.style.width = `${widthPct}%`
        thumb.style.transform = `translateX(${progress * travel}%)`
      }
    }
  }, [])

  const scrollStep = useCallback(
    (dir: 1 | -1) => {
      const el = scrollerRef.current
      if (!el) return

      const max = Math.max(0, el.scrollWidth - el.clientWidth)
      if (max <= 0) return

      programmaticRef.current = true
      window.setTimeout(() => {
        programmaticRef.current = false
      }, 650)

      if (dir === 1) {
        if (max - el.scrollLeft <= EDGE_EPS) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: SLOT_PX, behavior: 'smooth' })
        }
      } else {
        if (el.scrollLeft <= EDGE_EPS) {
          el.scrollTo({ left: max, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: -SLOT_PX, behavior: 'smooth' })
        }
      }

      armUserPause()
    },
    [armUserPause],
  )

  const scrollNext = useCallback(() => scrollStep(1), [scrollStep])
  const scrollPrev = useCallback(() => scrollStep(-1), [scrollStep])

  useLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    syncScrollbar()
    const ro = new ResizeObserver(syncScrollbar)
    ro.observe(el)
    const inner = el.firstElementChild
    if (inner) ro.observe(inner)
    return () => ro.disconnect()
  }, [syncScrollbar])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const onScroll = () => {
      syncScrollbar()
      if (programmaticRef.current) return
      armUserPause()
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [armUserPause, syncScrollbar])

  useEffect(() => {
    return () => clearUserPauseTimer()
  }, [clearUserPauseTimer])

  const autoPaused = hoverPaused || userPaused

  useEffect(() => {
    if (autoPaused) return

    const tick = () => {
      const el = scrollerRef.current
      if (!el) return
      const max = Math.max(0, el.scrollWidth - el.clientWidth)
      if (max <= 0) return

      programmaticRef.current = true
      window.setTimeout(() => {
        programmaticRef.current = false
      }, 650)

      if (max - el.scrollLeft <= EDGE_EPS) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: SLOT_PX, behavior: 'smooth' })
      }
    }

    const id = window.setInterval(tick, 3000)
    return () => window.clearInterval(id)
  }, [autoPaused])

  const buttonClass =
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white/90 transition hover:border-tech-accent hover:text-tech-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-accent disabled:pointer-events-none disabled:opacity-35'

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div
        ref={scrollerRef}
        role="region"
        aria-label="TechFest team members"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault()
            scrollPrev()
          } else if (e.key === 'ArrowRight') {
            e.preventDefault()
            scrollNext()
          }
        }}
        className="flex w-full snap-x snap-mandatory scroll-smooth overflow-x-auto overscroll-x-contain pb-6 outline-none [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-tech-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-tech-bg [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max gap-5 pr-5">
          {teamCards.map((member, index) => (
            <TeamCard key={`${member.name}-${index}`} index={index} {...member} />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-1/2 z-10 ${buttonClass} ${
          canScroll ? 'opacity-0 group-hover:opacity-100 focus-visible:opacity-100' : 'opacity-0 pointer-events-none'
        } bg-[#0a1118]/80 backdrop-blur-sm hidden sm:flex`}
        aria-label="Previous team members"
        disabled={!canScroll}
        onClick={() => scrollPrev()}
      >
        <NavChevron direction="left" />
      </button>

      <button
        type="button"
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-1/2 z-10 ${buttonClass} ${
          canScroll ? 'opacity-0 group-hover:opacity-100 focus-visible:opacity-100' : 'opacity-0 pointer-events-none'
        } bg-[#0a1118]/80 backdrop-blur-sm hidden sm:flex`}
        aria-label="Next team members"
        disabled={!canScroll}
        onClick={() => scrollNext()}
      >
        <NavChevron direction="right" />
      </button>
      
      {/* Custom Scrollbar/Progress */}
      <div
        className={`mx-auto mt-6 h-1.5 w-full max-w-3xl overflow-hidden rounded-full bg-white/10 sm:mt-10 transition-opacity duration-300 ${
          canScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          ref={thumbRef}
          className="h-full rounded-full bg-white transition-transform duration-75 ease-out"
          style={{ width: '100%', transform: 'translateX(0%)' }}
        />
      </div>
    </div>
  )
}
