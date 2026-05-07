type Sponsor = {
  name: string
  logo?: string
}

const sponsors: Sponsor[] = [
  { name: 'Payaza' },
  { name: 'VFD' },
]

export function SponsorsSlider() {
  const items = [...sponsors, ...sponsors, ...sponsors]

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max gap-6"
        style={{ animation: 'techfest-marquee 22s linear infinite' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running'
        }}
      >
        {items.map((sponsor, i) => (
          <div
            key={i}
            className="flex flex-none items-center gap-3 rounded-[12px] border border-white/10 bg-white/6 px-7 py-4 transition-colors hover:border-[#0675b2]/50 hover:bg-[#0675b2]/12"
          >
            {sponsor.logo && (
              <img
                src={sponsor.logo}
                alt=""
                aria-hidden
                className="h-6 w-auto object-contain opacity-80"
              />
            )}

            <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/75">
              {sponsor.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes techfest-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}