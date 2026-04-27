const sponsors = [
  { name: 'Payaza' },
  { name: 'VFD' },
]

export function SponsorsSlider() {
  const items = [...sponsors, ...sponsors, ...sponsors]

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div
        className="flex gap-7 w-max"
        style={{ animation: 'scroll 22s linear infinite' }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {items.map((sponsor, i) => (
          <div key={i} className="sponsor-card">
            <span>{sponsor.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}