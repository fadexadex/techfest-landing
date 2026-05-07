type SvgProps = {
  className?: string
  subtle?: boolean
}

function Star({ x, y, size = 18, opacity = 1 }: { x: number; y: number; size?: number; opacity?: number }) {
  return (
    <path
      d={`
        M ${x} ${y - size}
        L ${x + size * 0.22} ${y - size * 0.22}
        L ${x + size} ${y}
        L ${x + size * 0.22} ${y + size * 0.22}
        L ${x} ${y + size}
        L ${x - size * 0.22} ${y + size * 0.22}
        L ${x - size} ${y}
        L ${x - size * 0.22} ${y - size * 0.22}
        Z
      `}
      fill="white"
      opacity={opacity}
    />
  )
}

export function TechfestWordmarkSvg({ className = '', subtle = false }: SvgProps) {
  const textColor = subtle ? 'rgba(255,255,255,0.1)' : '#F5F7FA'
  const accentColor = subtle ? 'rgba(5,128,195,0.22)' : '#0580C3'
  const numberColor = subtle ? 'rgba(255,255,255,0.14)' : '#FFFFFF'

  return (
    <svg
      viewBox="0 0 1036 581"
      role="img"
      aria-label="Techfest 5.0"
      className={className}
      shapeRendering="geometricPrecision"
    >
      <defs>
        <linearGradient id="festGradient" x1="0" x2="1">
          <stop offset="0%" stopColor={accentColor} />
          <stop offset="100%" stopColor={subtle ? 'rgba(5,128,195,0.12)' : '#68CBE2'} />
        </linearGradient>
      </defs>

      <rect width="1036" height="581" fill="transparent" />

      <text
        x="104"
        y="276"
        fill={textColor}
        fontFamily="'DM Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="150"
        fontWeight="700"
        letterSpacing="-8"
      >
        Tech
      </text>
      <text
        x="497"
        y="276"
        fill="url(#festGradient)"
        fontFamily="'DM Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="150"
        fontWeight="700"
        letterSpacing="-8"
      >
        fest
      </text>
      <text
        x="437"
        y="392"
        fill={numberColor}
        fontFamily="'DM Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="82"
        fontWeight="500"
        letterSpacing="-5"
      >
        5.0
      </text>

      <Star x={857} y={116} size={16} opacity={subtle ? 0.4 : 1} />
      <Star x={728} y={184} size={12} opacity={subtle ? 0.34 : 0.95} />
    </svg>
  )
}

export function TechfestMiniMarkSvg({ className = '' }: SvgProps) {
  return (
    <svg viewBox="0 0 132 38" role="img" aria-label="Techfest 5.0" className={className}>
      <text
        x="0"
        y="26"
        fill="#F5F7FA"
        fontFamily="'DM Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-1.4"
      >
        Tech
      </text>
      <text
        x="48"
        y="26"
        fill="#0580C3"
        fontFamily="'DM Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-1.4"
      >
        fest
      </text>
      <text
        x="44"
        y="37"
        fill="#FFFFFF"
        fontFamily="'DM Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="12"
        fontWeight="500"
      >
        5.0
      </text>
      <Star x={111} y={8} size={4} />
      <Star x={99} y={14} size={3} opacity={0.88} />
    </svg>
  )
}

export function KeynoteIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 453 1053" aria-hidden className={className}>
      <defs>
        <linearGradient id="keynoteGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7B62A2" />
          <stop offset="100%" stopColor="#B77FE0" />
        </linearGradient>
        <linearGradient id="keynoteBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6C528A" />
          <stop offset="100%" stopColor="#2A123E" />
        </linearGradient>
      </defs>
      <rect width="453" height="1053" rx="12" fill="url(#keynoteBg)" />
      <circle cx="416" cy="52" r="8" fill="white" />
      <circle cx="374" cy="88" r="5" fill="rgba(255,255,255,0.8)" />
      <rect x="0" y="431" width="453" height="622" fill="rgba(35,16,51,0.6)" />
      <rect x="152" y="548" width="149" height="505" rx="74.5" fill="url(#keynoteGlow)" />
      <circle cx="226.5" cy="706" r="38" fill="#251533" />
      <path d="M173 786c0-46 37-83 83-83s83 37 83 83v87H173z" fill="#36204B" />
    </svg>
  )
}

export function PanelIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1053 453" aria-hidden className={className}>
      <defs>
        <radialGradient id="panelGlow" cx="50%" cy="12%" r="55%">
          <stop offset="0%" stopColor="rgba(104,203,226,0.28)" />
          <stop offset="100%" stopColor="rgba(104,203,226,0)" />
        </radialGradient>
      </defs>
      <rect width="1053" height="453" rx="12" fill="#163F91" />
      <rect width="1053" height="453" rx="12" fill="url(#panelGlow)" />
      <rect x="774" y="40" width="217" height="58" rx="29" fill="rgba(255,255,255,0.9)" />
      <text x="824" y="78" fill="#163F91" fontFamily="'DM Sans', sans-serif" fontSize="22" fontWeight="500" letterSpacing="4">
        LIVE IDEAS
      </text>
      <circle cx="245" cy="201" r="66" fill="#E7EFFF" />
      <circle cx="794" cy="201" r="66" fill="#9DBAF2" />
      <path d="M135 383c0-86 70-156 156-156s156 70 156 156v70H135z" fill="#F5F7FA" />
      <path d="M668 383c0-86 70-156 156-156s156 70 156 156v70H668z" fill="#93B0E9" />
      <rect x="180" y="269" width="213" height="18" rx="9" fill="rgba(255,255,255,0.55)" />
      <rect x="686" y="269" width="207" height="18" rx="9" fill="rgba(255,255,255,0.38)" />
    </svg>
  )
}

export function LearnIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 496 453" aria-hidden className={className}>
      <rect width="496" height="453" rx="12" fill="#3D4954" />
      <rect x="26" y="132" width="444" height="247" rx="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
      <rect x="58" y="146" width="348" height="10" rx="5" fill="rgba(255,255,255,0.16)" />
      <rect x="58" y="166" width="305" height="10" rx="5" fill="#88ADD6" />
      <rect x="58" y="201" width="348" height="9" rx="4.5" fill="rgba(255,255,255,0.24)" />
      <rect x="58" y="236" width="348" height="9" rx="4.5" fill="rgba(255,255,255,0.24)" />
      <rect x="58" y="278" width="86" height="66" rx="20" fill="#5A7087" />
      <rect x="352" y="278" width="120" height="90" rx="22" fill="#33404D" stroke="rgba(255,255,255,0.18)" />
    </svg>
  )
}

export function NetworkingIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 495 538" aria-hidden className={className}>
      <rect width="495" height="538" rx="12" fill="#123048" />
      <circle cx="108" cy="128" r="16" fill="rgba(104,203,226,0.25)" />
      <rect x="54" y="80" width="74" height="36" rx="18" fill="white" />
      <rect x="190" y="58" width="107" height="38" rx="19" fill="#68CBE2" />
      <rect x="350" y="84" width="74" height="36" rx="18" fill="rgba(255,255,255,0.85)" />
      <text x="75" y="103" fill="#123048" fontFamily="'DM Sans', sans-serif" fontSize="16" fontWeight="700" letterSpacing="3">
        MEET
      </text>
      <text x="208" y="82" fill="#123048" fontFamily="'DM Sans', sans-serif" fontSize="16" fontWeight="700" letterSpacing="3">
        CONNECT
      </text>
      <text x="367" y="107" fill="#123048" fontFamily="'DM Sans', sans-serif" fontSize="16" fontWeight="700" letterSpacing="3">
        GROW
      </text>
      <path d="M40 438c0-46 37-83 83-83s83 37 83 83v100H40z" fill="#89A9E7" />
      <path d="M209 420c0-56 45-101 101-101s101 45 101 101v118H209z" fill="#C3DDEF" />
      <path d="M389 447c0-44 35-79 79-79s79 35 79 79v91H389z" fill="#9AC0EB" transform="translate(-52 0)" />
      <path d="M330 432c0-50 40-90 90-90s90 40 90 90v106H330z" fill="#F1F4FA" />
    </svg>
  )
}

export function HackathonIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1010 453" aria-hidden className={className}>
      <rect width="1010" height="453" rx="12" fill="#9BC7EF" />
      <circle cx="121" cy="128" r="38" fill="rgba(255,255,255,0.55)" />
      <path d="M84 377c0-66 53-119 119-119s119 53 119 119v76H84z" fill="#416B99" />
      <path d="M181 377c0-66 53-119 119-119s119 53 119 119v76H181z" fill="#274A70" />
      <rect x="640" y="244" width="296" height="148" rx="28" fill="#F8FBFF" />
      <rect x="742" y="318" width="106" height="18" rx="9" fill="rgba(39,74,112,0.22)" />
      <rect x="712" y="344" width="137" height="18" rx="9" fill="rgba(39,74,112,0.14)" />
    </svg>
  )
}

export function ExhibitorsIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 453 424" aria-hidden className={className}>
      <defs>
        <radialGradient id="exhibitGlow" cx="72%" cy="20%" r="30%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="453" height="424" rx="12" fill="#6E60A7" />
      <rect width="453" height="424" rx="12" fill="url(#exhibitGlow)" />
      <path d="M28 274c0-36 29-65 65-65h84c36 0 65 29 65 65v82H28z" fill="#FFC986" />
      <rect x="28" y="191" width="40" height="31" rx="8" fill="rgba(255,255,255,0.82)" />
      <rect x="76" y="184" width="40" height="38" rx="8" fill="rgba(255,255,255,0.92)" />
      <rect x="124" y="186" width="40" height="36" rx="8" fill="rgba(255,255,255,0.82)" />
      <rect x="172" y="183" width="40" height="39" rx="8" fill="#FFD4B1" />
      <path d="M307 375c0-42 34-76 76-76s76 34 76 76v49H307z" fill="#E9DDF7" />
    </svg>
  )
}

export function GamesIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 496 424" aria-hidden className={className}>
      <rect width="496" height="424" rx="12" fill="#985774" />
      <rect x="336" y="90" width="64" height="64" rx="32" fill="#F4A6C4" stroke="white" strokeWidth="10" />
      <g transform="translate(132 262) rotate(-11)">
        <rect x="0" y="0" width="80" height="112" rx="14" fill="#FBFBFC" />
      </g>
      <g transform="translate(201 270) rotate(9)">
        <rect x="0" y="0" width="80" height="112" rx="14" fill="#F4CEDB" />
      </g>
      <ellipse cx="166" cy="324" rx="84" ry="24" fill="rgba(17,19,24,0.22)" />
    </svg>
  )
}

export function SpeakerPortraitSvg({
  className = '',
  initials,
  accentFrom,
  accentTo,
}: {
  className?: string
  initials: string
  accentFrom: string
  accentTo: string
}) {
  return (
    <svg viewBox="0 0 488 474" aria-hidden className={className}>
      <defs>
        <linearGradient id={`speaker-${initials}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accentFrom} />
          <stop offset="100%" stopColor={accentTo} />
        </linearGradient>
      </defs>
      <rect width="488" height="474" rx="12" fill={`url(#speaker-${initials})`} />
      <circle cx="414" cy="52" r="18" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.16)" />
      <circle cx="244" cy="126" r="66" fill="rgba(255,255,255,0.9)" />
      <text
        x="244"
        y="141"
        textAnchor="middle"
        fill="#1C2330"
        fontFamily="'DM Sans', sans-serif"
        fontSize="54"
        fontWeight="700"
        letterSpacing="-4"
      >
        {initials}
      </text>
      <path d="M135 402c0-91 73-164 164-164s164 73 164 164v72H135z" fill="rgba(255,255,255,0.86)" />
      <rect x="34" y="418" width="120" height="24" rx="12" fill="rgba(17,19,24,0.18)" />
    </svg>
  )
}

export function TeamPlaceholderSvg({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 344 335" aria-hidden className={className}>
      <defs>
        <radialGradient id="teamGlow" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="rgba(5,128,195,0.62)" />
          <stop offset="100%" stopColor="rgba(5,128,195,0)" />
        </radialGradient>
      </defs>
      <rect width="344" height="335" rx="12" fill="#11202C" />
      <rect width="344" height="335" rx="12" fill="url(#teamGlow)" />
      <rect x="94" y="258" width="156" height="30" rx="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.16)" />
      <text
        x="172"
        y="278"
        textAnchor="middle"
        fill="rgba(255,255,255,0.72)"
        fontFamily="'DM Sans', sans-serif"
        fontSize="15"
        fontWeight="500"
        letterSpacing="3"
      >
        TECHFEST TEAM
      </text>
    </svg>
  )
}


export function HackathonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex w-full max-w-full flex-col font-sans ${className}`}>
      <div className="relative flex w-full flex-row items-end justify-center gap-3 pb-0 pt-0 min-[400px]:gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <PodiumCol
          className="min-w-0 flex-1 basis-0"
          prize="N50K"
          rank="2nd"
          blockHeight="h-[108px] min-[380px]:h-[118px] sm:h-[170px]"
          blockColor="#e9c0ce"
          ribbonA="#e63946"
          ribbonB="#f4a261"
        />
        <PodiumCol
          className="min-w-0 flex-1 basis-0 sm:mt-2"
          prize="N100K"
          rank="1st"
          blockHeight="h-[138px] min-[380px]:h-[150px] sm:h-[220px]"
          blockColor="#18c9a3"
          ribbonA="#1565c0"
          ribbonB="#64b5f6"
          prizeLarge
        />
        <PodiumCol
          className="min-w-0 flex-1 basis-0"
          prize="N30K"
          rank="3rd"
          blockHeight="h-[86px] min-[380px]:h-[96px] sm:h-[140px]"
          blockColor="#60b8d4"
          ribbonA="#9e9e9e"
          ribbonB="#e0e0e0"
        />
      </div>
    </div>
  )
}

export function GamesCard({
  vrImage,
  className = '',
}: {
  vrImage: string
  className?: string
}) {
  return (
    <article
      className={`group relative min-w-0 overflow-hidden rounded-[12px] ring-1 ring-black/15 flex flex-col justify-end ${className}`}
    >
      <img
        src={vrImage}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ filter: 'brightness(0.68) saturate(1.15)' }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(28,6,10,0.62) 0%, rgba(28,6,10,0.08) 38%, rgba(28,6,10,0.0) 52%, rgba(28,6,10,0.9) 100%)',
        }}
      />

      <div className="absolute top-4 right-4 z-10 rounded-lg border border-[rgba(220,60,80,0.45)] bg-[rgba(220,60,80,0.18)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ff8a9a] backdrop-blur-sm select-none">
        Live at TechFest
      </div>

      <div className="relative z-10 p-5 sm:p-7">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.4px] text-white/85 backdrop-blur-sm">
          Entertainment
        </div>
        <h3 className="text-[clamp(1.1rem,2.8vw,1.4rem)] font-bold uppercase leading-[1.15] tracking-[-0.01em] text-[#df93a9]">
          Games &amp; Entertainment
        </h3>
        <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/75 sm:mt-3 sm:text-sm sm:leading-[1.6]">
          Enjoy fun games and interactive experiences in one lively, high-energy space.
        </p>
      </div>
    </article>
  )
}

function MedalSvg({
  rank,
  ribbonA,
  ribbonB,
}: {
  rank: string
  ribbonA: string
  ribbonB: string
}) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <rect x="19" y="0" width="6" height="20" rx="2" fill={ribbonA} transform="rotate(-10 22 10)" />
      <rect x="27" y="0" width="6" height="20" rx="2" fill={ribbonB} transform="rotate(10 30 10)" />
      <circle cx="26" cy="34" r="16" fill="#f5c842" />
      <circle cx="26" cy="34" r="11" fill="none" stroke="#e6a800" strokeWidth="1.5" />
      <circle cx="26" cy="34" r="7" fill="#ffd84d" />
      <text
        x="26"
        y="38"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="#7a4800"
        fontFamily="system-ui, sans-serif"
      >
        {rank}
      </text>
    </svg>
  )
}

function PodiumCol({
  prize,
  rank,
  blockHeight,
  blockColor,
  ribbonA,
  ribbonB,
  prizeLarge = false,
  className = '',
}: {
  prize: string
  rank: string
  blockHeight: string
  blockColor: string
  ribbonA: string
  ribbonB: string
  prizeLarge?: boolean
  className?: string
}) {
  return (
    <div className={`flex min-w-0 flex-col ${className}`}>
      <div className="mx-auto flex w-full max-w-[168px] flex-col items-center sm:max-w-[178px]">
        <p
          className={`mb-2 text-center tabular-nums tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)] sm:mb-2.5 ${prizeLarge ? 'text-[0.9375rem] font-black min-[380px]:text-[15px] sm:text-lg' : 'text-[0.8125rem] font-black min-[380px]:text-[13px] sm:text-[15px]'}`}
        >
          {prize}
        </p>
        <div className="relative z-10 -mb-3.5 origin-bottom scale-[0.9] min-[460px]:scale-100">
          <MedalSvg rank={rank} ribbonA={ribbonA} ribbonB={ribbonB} />
        </div>
        <div
          className={`relative w-full overflow-hidden rounded-t-xl ${blockHeight} flex flex-col items-center justify-end px-2 pb-[1.125rem] ring-1 ring-inset ring-black/20 sm:px-0 sm:pb-5`}
          style={{ backgroundColor: blockColor }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/25 to-transparent"
            aria-hidden
          />
          <p className="relative z-[1] mb-0.5 text-[clamp(13px,2.9vw,15px)] font-extrabold leading-none tracking-tight text-neutral-950">
            {rank}
          </p>
          <p className="relative z-[1] text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-neutral-950/90 sm:text-[11px] sm:tracking-[0.14em]">
            Position
          </p>
        </div>
      </div>
    </div>
  )
}
