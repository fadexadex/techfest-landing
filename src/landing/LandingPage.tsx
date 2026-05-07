import type { ReactNode } from 'react'
import { TeamSlider } from './sections/TeamSlider'
import { SponsorsSlider } from './sections/SponsorsSlider'
import { SpeakerPortraitSvg, HackathonCard, GamesCard } from './TechfestGraphics'

const heroWordmarkImage = '/techfest/techfest-5-wordmark.png'
const headerGroupLogoMark = '/techfest/group-logo-mark.png'
const aboutImage = '/techfest/2bc946c6-33c7-4315-b584-34a2ceae4bd0.png'
const merchImage = '/techfest/merch.jpeg'
const vrImage = '/techfest/vr.jpg'

const expectArt = {
  keynote: '/techfest/expect/president.png',
  panel: '/techfest/expect/debate.png',
  networking: '/techfest/expect/network.png',
  hackathon: '/techfest/expect/software-code.png',
  exhibitors: '/techfest/expect/ice-cream.png',
  games: '/techfest/expect/card.png',
} as const

const aboutStats = [
  { value: '1200+', label: 'ATTENDEES' },
  { value: '4', label: 'EDITIONS' },
  { value: '10+', label: 'SPEAKERS' },
  { value: '10+', label: 'SPONSORS & PARTNERS' },
]

const speakerCards = [
  {
    name: 'John Doe',
    role: 'AI Specialist',
    topic: 'Topic: Leveraging The Power Of AI',
    accent: 'from-[#3e546a] to-[#141a20]',
  },
  {
    name: 'Doe John',
    role: 'Managing Director, OOP',
    topic: 'Topic: Staying Relevant Today',
    accent: 'from-[#536f86] to-[#1a2330]',
  },
  {
    name: 'Elijah Brown',
    role: 'UX Designer',
    topic: 'Topic: Beyond Design',
    accent: 'from-[#4d5d68] to-[#161d23]',
  },
  {
    name: 'Abayomi Abiodun',
    role: 'Panelist',
    topic: 'Topic: Leveraging The Power Of AI',
    accent: 'from-[#5a7e8b] to-[#172228]',
    image: '/techfest/Abayomi Abiodun.jpeg',
  },
  {
    name: 'Laja',
    role: 'Panelist',
    topic: 'Topic: Staying Relevant Today',
    accent: 'from-[#4b6983] to-[#182029]',
    image: '/techfest/Laja.jpeg',
  },
  {
    name: 'Israel',
    role: 'Panelist',
    topic: 'Topic: Beyond Design',
    accent: 'from-[#7e6558] to-[#201a18]',
    image: '/techfest/Israel.jpeg',
  },
  {
    name: 'Eve Chukuma',
    role: 'Panelist',
    topic: 'Topic: Innovation & Growth',
    accent: 'from-[#6b5a8b] to-[#1a1628]',
    image: '/techfest/eve_chukuma.jpg',
  },
]

const moments = [
  {
    image: aboutImage,
    className: 'lg:col-span-8',
    alt: 'Attendees working and learning together during TechFest.',
    eyebrow: 'Workshops',
  },
  {
    image: '/techfest/moments/innovation.jpg',
    className: 'lg:col-span-4',
    alt: 'Team collaborating on laptops during a build session and ideation.',
    eyebrow: 'Innovation',
  },
  {
    image: '/techfest/moments/community.jpg',
    className: 'lg:col-span-5',
    alt: 'People meeting and networking at a professional tech event.',
    eyebrow: 'Community',
  },
  {
    image: '/techfest/moments/energy.jpg',
    className: 'lg:col-span-7',
    alt: 'Vibrant stage lighting and crowd atmosphere at a live event.',
    eyebrow: 'Energy',
  },
]

function Shell({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1608px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </section>
  )
}

function HeaderBrandLockup() {
  return (
    <a
      href="/"
      className="relative flex min-w-0 flex-1 items-center gap-2 outline-none transition-opacity hover:opacity-95 sm:gap-3"
      aria-label="RUN Tech Space — home"
    >
      <img
        src={headerGroupLogoMark}
        alt=""
        width={41}
        height={36}
        className="h-9 w-auto shrink-0 object-contain object-left sm:h-10"
        decoding="async"
      />
      <span className="flex min-w-0 flex-col items-start gap-0.5 leading-none">
        <span className="inline-flex flex-wrap items-baseline gap-0 font-sans text-[clamp(1rem,4.5vw,1.375rem)] tracking-[-0.06em] sm:text-[22px]">
          <span className="font-bold text-tech-accent">RUN</span>
          <span className="font-normal text-tech-white">Tech</span>
        </span>
        <span className="font-sans text-[clamp(0.75rem,3vw,0.875rem)] font-normal tracking-normal text-tech-white">
          Space
        </span>
      </span>
    </a>
  )
}

function EventLogo({ subtle = false }: { subtle?: boolean }) {
  return (
    <img
      src={heroWordmarkImage}
      alt="Techfest 5.0 — RUNTech Space"
      width={1036}
      height={581}
      decoding="async"
      loading={subtle ? 'lazy' : 'eager'}
      fetchPriority={subtle ? 'low' : 'high'}
      className={`mx-auto h-auto w-full max-w-[min(92vw,1036px)] ${subtle ? 'opacity-[0.14]' : ''}`}
    />
  )
}

function SocialRow() {
  const iconClassName =
    'flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white/90 transition hover:border-tech-accent hover:text-tech-accent'

  return (
    <div className="flex gap-2.5">
      <a href="#" aria-label="Instagram" className={iconClassName}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.88 1.12a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
        </svg>
      </a>
      <a href="#" aria-label="X" className={iconClassName}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
          <path d="M18.9 2H22l-6.77 7.75L23 22h-6.16l-4.83-6.3L6.51 22H3.4l7.24-8.28L1 2h6.31l4.37 5.75L18.9 2Zm-1.08 18.15h1.72L6.36 3.76H4.5Z" />
        </svg>
      </a>
      <a href="#" aria-label="LinkedIn" className={iconClassName}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
          <path d="M6.94 8.5V21H3.1V8.5Zm.25-4.02A2.22 2.22 0 1 1 4.97 2.3a2.22 2.22 0 0 1 2.22 2.18ZM21 13.16V21h-3.82v-7.19c0-1.8-.64-3.02-2.25-3.02-1.23 0-1.96.82-2.28 1.62-.12.29-.15.69-.15 1.09V21H8.67s.05-10.28 0-11.35h3.83v1.6c.51-.79 1.43-1.92 3.49-1.92 2.55 0 4.47 1.67 4.47 5.25Z" />
        </svg>
      </a>
    </div>
  )
}

function SpeakerCard({
  name,
  role,
  topic,
  accent,
  image,
}: {
  name: string
  role: string
  topic: string
  accent: string
  image?: string
}) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <article className="overflow-hidden rounded-[12px] bg-white/6 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
      {image ? (
        <img
          src={image}
          alt={name}
          className="h-[320px] w-full object-cover md:h-[390px]"
        />
      ) : (
        <SpeakerPortraitSvg
          initials={initials}
          accentFrom={accent.match(/from-\[(#[0-9A-Fa-f]{6})\]/)?.[1] ?? '#41576d'}
          accentTo={accent.match(/to-\[(#[0-9A-Fa-f]{6})\]/)?.[1] ?? '#161d23'}
          className="h-[320px] w-full md:h-[390px]"
        />
      )}
      <div className="flex items-start justify-between gap-4 bg-white/7 px-4 py-5">
        <div>
          <h3 className="text-[1.15rem] font-medium text-white">{name}</h3>
          <p className="mt-1 text-sm text-white/75">{role}</p>
          <p className="mt-1 text-sm text-white/60">{topic}</p>
        </div>
        <SocialRow />
      </div>
    </article>
  )
}

function ExpectArt({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === '' ? true : undefined}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`pointer-events-none absolute bottom-0 right-0 object-contain object-right-bottom select-none ${className}`}
    />
  )
}

function ExpectCard({
  title,
  description,
  tone,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  contentClassName = '',
  children,
}: {
  title: string
  description: string
  tone: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  contentClassName?: string
  children: ReactNode
}) {
  return (
    <article
      className={`relative min-w-0 overflow-hidden rounded-[12px] p-5 ring-1 ring-black/15 sm:p-7 lg:p-8 ${tone} ${className}`}
    >
      <div className={`relative z-10 min-w-0 w-full max-w-full text-pretty ${contentClassName}`}>
        <h3
          className={`text-[clamp(1.125rem,2.8vw,1.45rem)] font-medium uppercase leading-[1.2] tracking-[0.01em] text-white sm:leading-[1.15] ${titleClassName}`}
        >
          {title}
        </h3>
        {description.trim() ? (
          <p
            className={`mt-2.5 text-[0.8125rem] leading-relaxed sm:mt-3.5 sm:text-sm sm:leading-[1.6] ${descriptionClassName || 'text-white/80'}`}
          >
            {description}
          </p>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">{children}</div>
    </article>
  )
}

export function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-tech-bg text-tech-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_top,rgba(5,128,195,0.28),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[42rem] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(104,203,226,0.1),transparent_52%)]"
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-tech-accent focus:px-4 focus:py-2 focus:text-tech-white"
      >
        Skip to content
      </a>

      <header className="relative pt-10 sm:pt-14">
        <Shell>
          <div className="flex min-w-0 items-center justify-between gap-4 sm:gap-6">
            <HeaderBrandLockup />
            <a href="#register" className="btn-register shrink-0">
              Register now
            </a>
          </div>
        </Shell>
      </header>

      <main id="main-content" className="relative pb-20 sm:pb-28">
        <Shell className="pt-14 text-center sm:pt-20">
          <div className="mx-auto max-w-[1243px]">
            <EventLogo />
            <p className="mx-auto mt-7 max-w-[56rem] text-pretty px-3 text-center font-sans text-[clamp(1rem,4vw,1.875rem)] font-normal leading-snug tracking-normal text-tech-subtext sm:mt-8 sm:px-6 sm:leading-relaxed">
              Experience a fusion of innovation, creativity, and community through immersive
              sessions, hands-on learning, and meaningful connections.
            </p>
          </div>
        </Shell>

        <Shell className="pt-28 sm:pt-36">
          <div className="grid gap-12 xl:grid-cols-[660px_minmax(0,1fr)] xl:items-end">
            <div>
              <p className="text-2xl text-white/78">About Techfest</p>
              <h2 className="mt-2 text-[clamp(1.625rem,5vw,3rem)] font-semibold tracking-[-0.05em]">
                WHERE INNOVATION <span className="text-tech-accent">MEET TALENT</span>
              </h2>
              <img
                src={aboutImage}
                alt="Techfest attendees immersed in a live session."
                className="mt-8 h-[340px] w-full rounded-[12px] object-cover sm:h-[420px] lg:h-[517px]"
              />
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-right sm:grid-cols-4">
                {aboutStats.map((stat, index) => (
                  <div key={`stat-${index}`}>
                    <p className="text-[1.55rem] font-medium text-tech-accent">{stat.value}</p>
                    <p className="mt-1 text-sm tracking-[0.18em] text-white/72">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-[12px] bg-tech-soft px-7 py-6 text-black">
                  <h3 className="text-xl font-medium">What is TechFest?</h3>
                  <p className="mt-3 text-base leading-7 text-black/78">
                    TechFest is Redeemer&apos;s University&apos;s annual celebration of technology,
                    innovation, and creativity, bringing ideas, talent, and opportunity together in
                    one space.
                  </p>
                </article>

                <article className="rounded-[12px] bg-[#263238] px-7 py-6">
                  <h3 className="text-xl font-medium">Learn &amp; Build</h3>
                  <p className="mt-3 text-base leading-7 text-white/75">
                    Explore emerging tech trends, build practical skills through hands-on
                    workshops, and engage in insightful sessions designed to deepen your knowledge
                    and support your growth in the tech space.
                  </p>
                </article>
              </div>

              <article className="rounded-[12px] bg-white/10 px-7 py-7">
                <h3 className="text-xl font-medium text-tech-soft">Connect &amp; Grow</h3>
                <p className="mt-3 max-w-[42rem] text-base leading-7 text-tech-soft/85">
                  Connect with a vibrant community of tech enthusiasts, engage with industry
                  experts, and discover meaningful opportunities that extend beyond the event from
                  collaborations and mentorship to career growth and innovation.
                </p>
              </article>
            </div>
          </div>
        </Shell>

        <Shell className="min-w-0 pt-24 sm:pt-32">
          <div className="mx-auto max-w-[945px] px-3 text-center sm:px-4">
            <h2 className="text-balance text-[clamp(1.5rem,6vw,3rem)] font-bold uppercase leading-[1.08] tracking-[-0.05em]">
              <span className="text-tech-white">WHAT </span>
              <span className="text-[#0675b2]">TO EXPECT</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-[clamp(0.875rem,2.5vw,0.9375rem)] font-normal leading-relaxed text-tech-subtext [overflow-wrap:anywhere] sm:mt-4 md:max-w-[80ch]">
              A mix of inspiring sessions, practical learning, meaningful connections, and exciting
              experiences all in one place.
            </p>
          </div>

          <div className="mt-10 grid min-w-0 auto-rows-auto gap-4 sm:mt-12 sm:gap-6 xl:[grid-template-columns:repeat(12,minmax(0,1fr))] xl:grid-rows-[auto_auto_auto] xl:gap-x-7 xl:gap-y-7 xl:[&>article]:min-w-0">
            <ExpectCard
              title="KEYNOTE SPEAKERS"
              description="Hear from leading voices in tech as they share valuable insights, emerging trends, and real-world experiences shaping the future."
              tone="bg-[linear-gradient(180deg,#181523_0%,#452a55_100%)]"
              className="min-h-[280px] sm:min-h-[380px] xl:col-span-4 xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:min-h-[500px]"
              contentClassName="pb-[45%] sm:pb-[40%] xl:pb-0 xl:max-w-[85%]"
              titleClassName="text-[#dea0bd]"
              descriptionClassName="text-tech-subtext"
            >
              <ExpectArt
                src={expectArt.keynote}
                alt=""
                className="max-h-[42%] w-auto max-w-[min(90%,340px)] xl:bottom-0 xl:right-1/2 xl:translate-x-1/2 xl:max-h-[60%] xl:max-w-[min(90%,360px)]"
              />
            </ExpectCard>

            <ExpectCard
              title="PANEL DISCUSSION"
              description="Be part of interactive discussions as industry voices share ideas, experiences, and different perspectives on the future of tech."
              tone="bg-[linear-gradient(90deg,#121c32_0%,#1a3b7c_100%)]"
              className="min-h-[260px] sm:min-h-[340px] xl:col-span-8 xl:col-start-5 xl:row-start-1 xl:min-h-[280px] xl:flex xl:flex-col xl:justify-center"
              contentClassName="pb-[45%] sm:pb-[38%] xl:pb-0 xl:max-w-[40%] xl:ml-auto xl:-mt-2"
              titleClassName="text-[#5c8def]"
              descriptionClassName="text-tech-subtext"
            >
              <ExpectArt
                src={expectArt.panel}
                alt=""
                className="max-h-[40%] w-auto max-w-[min(88%,320px)] xl:bottom-0 xl:left-8 xl:right-auto xl:max-h-[92%] xl:max-w-[50%]"
              />
            </ExpectCard>

            <ExpectCard
              title="NETWORKING"
              description="Connect with like-minded students, professionals, and future collaborators."
              tone="bg-[linear-gradient(180deg,#101b2a_0%,#0a2240_100%)]"
              className="min-h-[240px] sm:min-h-[300px] xl:col-span-4 xl:col-start-5 xl:row-start-2 xl:min-h-[240px]"
              contentClassName="pb-[35%] sm:pb-[28%] xl:pb-[32%] xl:max-w-[90%]"
              titleClassName="text-[#4198cc]"
              descriptionClassName="text-tech-subtext"
            >
              <ExpectArt
                src={expectArt.networking}
                alt=""
                className="max-h-[38%] w-auto max-w-[min(85%,300px)] xl:bottom-3 xl:right-1/2 xl:translate-x-1/2 xl:max-h-[45%] xl:max-w-[80%]"
              />
            </ExpectCard>

            <ExpectCard
              title="HACKATHON & IDEATION SESSION"
              description=""
              tone="bg-[linear-gradient(135deg,#1a232c_0%,#12171c_100%)]"
              className="min-h-[320px] sm:min-h-[380px] xl:col-span-4 xl:col-start-9 xl:row-start-2 xl:min-h-[360px]"
              contentClassName="max-w-[46ch] xl:max-w-[90%]"
              titleClassName="text-[#a5cbe5] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
              descriptionClassName="text-tech-subtext"
            >
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end overflow-hidden px-5 pb-6 sm:px-7 sm:pb-8 lg:px-8 lg:pb-9">
                <HackathonCard className="w-full shrink-0" />
              </div>
            </ExpectCard>

            <ExpectCard
              title="EXHIBITORS & FOOD VENDORS"
              description="Discover cool tech, meet amazing brands, and enjoy a wide variety of great food — all in one lively space where innovation, connection, and experience come together."
              tone="bg-[linear-gradient(90deg,#1b1c31_0%,#322353_100%)]"
              className="min-h-[260px] sm:min-h-[320px] xl:col-span-8 xl:col-start-1 xl:row-start-3 xl:min-h-[280px] xl:flex xl:flex-col xl:justify-center"
              contentClassName="pb-[45%] sm:pb-[38%] xl:pb-0 xl:max-w-[45%]"
              titleClassName="text-[#9d8ed3]"
              descriptionClassName="text-tech-subtext"
            >
              <ExpectArt
                src={expectArt.exhibitors}
                alt=""
                className="max-h-[45%] w-auto max-w-[min(88%,320px)] xl:bottom-0 xl:right-[6%] xl:max-h-[85%] xl:max-w-[45%]"
              />
            </ExpectCard>

            <GamesCard
              vrImage={vrImage}
              className="min-h-[260px] sm:min-h-[300px] xl:col-span-4 xl:col-start-9 xl:row-start-3 xl:min-h-[260px]"
            />
            <div className="min-h-[300px] sm:min-h-[360px] xl:col-span-12 xl:row-start-4 xl:min-h-[420px] rounded-[12px] overflow-hidden">
              <img
                src={merchImage}
                alt="TechFest 5.0 branded T-shirts"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </Shell>

        <Shell className="pt-24 sm:pt-28">
          <div className="w-fit border-t border-white/25 pt-3">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-tech-accent sm:text-5xl">
              POWER SPEAKERS
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {speakerCards.slice(0, 3).map((speaker, index) => (
              <SpeakerCard key={`speaker-top-${index}`} {...speaker} />
            ))}
          </div>

          <div className="mt-16 w-fit border-t border-white/25 pt-3">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">PANEL VOICES</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {speakerCards.slice(3).map((speaker, index) => (
              <SpeakerCard key={`speaker-bottom-${index}`} {...speaker} />
            ))}
          </div>
        </Shell>

        <Shell className="pt-24 sm:pt-28">
          <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            THE MINDS BEHIND <span className="text-tech-accent">IT</span>
          </h2>
          <div className="mt-12">
            <TeamSlider />
          </div>
        </Shell>

        <Shell className="pt-24 sm:pt-28">
          <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            OUR <span className="text-tech-accent">SPONSORS</span>
          </h2>
          <div className="mt-12">
            <SponsorsSlider />
          </div>
        </Shell>

        <Shell className="pt-24 sm:pt-28">
          <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            THE <span className="text-tech-accent">MOMENTS</span>
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {moments.map((moment, index) => (
              <div key={`moment-${index}`} className={`${moment.className} overflow-hidden rounded-[12px]`}>
                <div className="group relative overflow-hidden rounded-[12px]">
                  <img
                    src={moment.image}
                    alt={moment.alt}
                    className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[424px]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.04),rgba(17,19,24,0.72))]" />
                  <div className="absolute left-5 top-5 rounded-full bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                    {moment.eyebrow}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-[52ch] text-pretty text-center text-[10px] leading-relaxed text-white/38">
            Workshop photo: event library. Other tiles use stock photography from{' '}
            <a
              href="https://unsplash.com?utm_source=techfest_landing&utm_medium=referral"
              className="text-white/55 underline decoration-white/25 underline-offset-2 transition hover:text-white/75"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
            .
          </p>
        </Shell>
      </main>

      <footer className="relative overflow-hidden py-20 pb-32 sm:pb-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[#020617] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/techfest/footer-bg.png')" }}
        />
        <div className="relative z-10 mx-auto flex max-w-[883px] items-center justify-center px-6 text-center">
          <img
            src="/techfest%205.0.png"
            alt="Techfest 5.0"
            width={1036}
            height={581}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-[min(92vw,1036px)] opacity-[0.15] mix-blend-screen"
          />
        </div>
      </footer>
    </div>
  )
}