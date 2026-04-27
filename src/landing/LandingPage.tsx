import type { ReactNode } from 'react'
import { TeamSlider } from './sections/TeamSlider'
import { SponsorsSlider } from './sections/SponsorsSlider'
const aboutImage = '/techfest/2bc946c6-33c7-4315-b584-34a2ceae4bd0.png'

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
    name: 'Anna Willows',
    role: 'QA Tester',
    topic: 'Topic: Beyond Classroom Learning',
    accent: 'from-[#5a7e8b] to-[#172228]',
  },
  {
    name: 'John Doe',
    role: 'Moderator',
    topic: 'Topic: Beyond Classroom Learning',
    accent: 'from-[#4b6983] to-[#182029]',
  },
  {
    name: 'John Doe',
    role: 'Content Creator',
    topic: 'Topic: Beyond Classroom Learning',
    accent: 'from-[#7e6558] to-[#201a18]',
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
    eyebrow: 'Innovation',
    accent: 'from-[#0f3551] to-[#0d1822]',
    className: 'lg:col-span-4',
    alt: 'Abstract art representing creative experimentation during TechFest.',
  },
  {
    eyebrow: 'Community',
    accent: 'from-[#113753] to-[#101721]',
    className: 'lg:col-span-5',
    alt: 'Abstract card representing community moments from the event.',
  },
  {
    eyebrow: 'Energy',
    accent: 'from-[#123a57] to-[#111921]',
    className: 'lg:col-span-7',
    alt: 'Abstract card representing the energy of the event.',
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

function EventLogo({ subtle = false }: { subtle?: boolean }) {
  return (
    <div
      className={`font-display leading-none tracking-[-0.05em] ${
        subtle ? 'opacity-10' : 'text-white'
      }`}
      aria-label="Techfest 5.0"
    >
      <div className="relative flex items-start justify-center text-[clamp(3.5rem,11vw,8rem)] font-semibold">
        <span className="relative">
          Tech
          <span className="text-tech-accent">fest</span>
          <span className="absolute right-1 top-0 text-2xl text-white sm:-right-4 sm:-top-4 sm:text-3xl">*</span>
          <span className="absolute right-7 top-8 text-lg text-white sm:right-8 sm:top-10 sm:text-2xl">*</span>
        </span>
      </div>
      <div className="mt-1 text-center text-[clamp(1.7rem,4vw,3.4rem)] font-medium tracking-[-0.08em]">
        5.0
      </div>
    </div>
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
}: {
  name: string
  role: string
  topic: string
  accent: string
}) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <article className="overflow-hidden rounded-[12px] bg-white/6 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
      <div
        className={`relative flex h-[320px] items-end overflow-hidden bg-gradient-to-b ${accent} px-6 pb-6 md:h-[390px]`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(152,203,255,0.18),transparent_36%)]" />
        <div className="absolute right-6 top-6 h-14 w-14 rounded-full border border-white/15 bg-white/6" />
        <div className="absolute left-1/2 top-12 h-24 w-24 -translate-x-1/2 rounded-full bg-white/85 text-[2rem] font-semibold tracking-[-0.08em] text-slate-900 flex items-center justify-center">
          {initials}
        </div>
        <div className="absolute bottom-0 left-1/2 h-[58%] w-[44%] -translate-x-1/2 rounded-t-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(215,225,234,0.78))]" />
        <div className="absolute bottom-[28%] left-1/2 h-6 w-[30%] -translate-x-1/2 rounded-full bg-slate-800/18" />
        <div className="absolute bottom-4 left-6 rounded-full border border-white/15 bg-black/18 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/70">
          Speaker
        </div>
      </div>
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


function ExpectCard({
  title,
  description,
  tone,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  children,
}: {
  title: string
  description: string
  tone: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  children: ReactNode
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[12px] p-8 ring-1 ring-black/15 ${tone} ${className}`}
    >
      <div className="relative z-10 max-w-[21rem]">
        <h3
          className={`max-w-[14ch] text-[2rem] font-semibold uppercase leading-none tracking-[-0.04em] text-white ${titleClassName}`}
        >
          {title}
        </h3>
        <p className={`mt-4 text-base leading-7 text-white/78 ${descriptionClassName}`}>
          {description}
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0">{children}</div>
    </article>
  )
}

export function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-tech-bg text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_top,rgba(6,117,178,0.32),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[42rem] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(152,203,255,0.08),transparent_52%)]"
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-tech-accent focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      <header className="relative pt-10 sm:pt-14">
        <Shell>
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-medium tracking-[-0.03em] text-white/88">
              <span className="text-tech-accent">R</span> Techfest 5.0
            </div>
            <a
              href="#register"
              className="inline-flex items-center rounded-full bg-[#98cbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
            >
              Register now
            </a>
          </div>
        </Shell>
      </header>

      <main id="main-content" className="relative pb-20 sm:pb-28">
        <Shell className="pt-14 text-center sm:pt-20">
          <div className="mx-auto max-w-[1243px]">
            <EventLogo />
            <p className="mx-auto mt-7 max-w-[56rem] text-balance text-sm leading-7 text-white/72 sm:text-lg">
              Experience a fusion of innovation, creativity, and community through immersive
              sessions, hands-on learning, and meaningful connections.
            </p>
          </div>
        </Shell>

        <Shell className="pt-28 sm:pt-36">
          <div className="grid gap-12 xl:grid-cols-[660px_minmax(0,1fr)] xl:items-end">
            <div>
              <p className="text-2xl text-white/78">About Techfest</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
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
                <article className="rounded-[12px] bg-[#98cbff] px-7 py-6 text-black">
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

        <Shell className="pt-24 sm:pt-32">
          <div className="mx-auto max-w-[945px] text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">WHAT TO EXPECT</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              A mix of inspiring sessions, practical learning, meaningful connections, and exciting
              experiences all in one place.
            </p>
          </div>

          <div className="mt-16 grid gap-6 xl:grid-cols-12 xl:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
            <ExpectCard
              title="KEYNOTE SPEAKERS"
              description="Hear from leading voices in tech as they share valuable insights, emerging trends, and real-world experiences shaping the future."
              tone="bg-[#5d4475]"
              className="min-h-[430px] xl:col-span-4 xl:row-span-2"
            >
              <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(31,10,49,0.65)_22%,rgba(31,10,49,0.95)_100%)]" />
              <div className="absolute right-8 top-8 h-4 w-4 rounded-full bg-white" />
              <div className="absolute right-20 top-16 h-2.5 w-2.5 rounded-full bg-white/80" />
              <div className="absolute bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_66%)]" />
              <div className="absolute bottom-0 left-1/2 h-[48%] w-40 -translate-x-1/2 rounded-t-[999px] bg-[linear-gradient(180deg,#2a183c_0%,#d99cf5_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
              <div className="absolute bottom-[27%] left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#1a1024]" />
              <div className="absolute bottom-[17%] left-1/2 h-28 w-28 -translate-x-1/2 rounded-t-[999px] bg-[#2b1b40]" />
            </ExpectCard>

            <ExpectCard
              title="PANEL DISCUSSION"
              description="Be part of interactive discussions as industry voices share ideas, experiences, and different perspectives on the future of tech."
              tone="bg-[#163f91]"
              className="min-h-[380px] xl:col-span-5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(152,203,255,0.22),transparent_26%),linear-gradient(180deg,rgba(9,18,38,0)_0%,rgba(9,18,38,0.28)_35%,rgba(9,18,38,0.7)_100%)]" />
              <div className="absolute right-8 top-10 rounded-2xl bg-white/90 px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[#163f91] shadow-lg shadow-black/15">
                Live ideas
              </div>
              <div className="absolute left-[16%] top-[34%] h-20 w-20 rounded-full bg-[#e7efff]" />
              <div className="absolute right-[18%] top-[34%] h-20 w-20 rounded-full bg-[#a6c5ff]" />
              <div className="absolute bottom-0 left-[12%] h-[34%] w-[22%] rounded-t-[999px] bg-[#f7f9ff]" />
              <div className="absolute bottom-0 right-[14%] h-[34%] w-[22%] rounded-t-[999px] bg-[#9bbcf7]" />
              <div className="absolute bottom-[26%] left-[15%] h-3 w-[18%] rounded-full bg-white/70" />
              <div className="absolute bottom-[26%] right-[17%] h-3 w-[18%] rounded-full bg-white/45" />
            </ExpectCard>

            <ExpectCard
              title="LEARN & BUILD"
              description="Explore emerging tech trends and sharpen practical skills through hands-on workshops and live sessions."
              tone="bg-[#34404a]"
              className="min-h-[380px] xl:col-span-3"
            >
              <div className="absolute inset-x-4 bottom-4 top-28 rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))]" />
              <div className="absolute inset-x-10 top-32 h-4 rounded-full bg-white/12" />
              <div className="absolute inset-x-10 top-[10.5rem] h-2 rounded-full bg-tech-soft/50" />
              <div className="absolute inset-x-10 top-[12.5rem] h-2 rounded-full bg-white/25" />
              <div className="absolute inset-x-10 top-[14.5rem] h-2 rounded-full bg-white/25" />
              <div className="absolute left-10 top-[16.75rem] h-16 w-16 rounded-2xl bg-tech-soft/18 ring-1 ring-white/10" />
              <div className="absolute right-10 top-[16.75rem] h-20 w-24 rounded-2xl bg-black/18 ring-1 ring-white/10" />
            </ExpectCard>

            <ExpectCard
              title="NETWORKING"
              description="Connect with like-minded students, professionals, and future collaborators."
              tone="bg-[#123048]"
              className="min-h-[320px] xl:col-span-4"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(152,203,255,0.2),transparent_28%)]" />
              <div className="absolute left-[13%] top-[24%] rounded-full bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#123048]">
                Meet
              </div>
              <div className="absolute left-[38%] top-[17%] rounded-full bg-tech-soft px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#123048]">
                Connect
              </div>
              <div className="absolute right-[15%] top-[23%] rounded-full bg-white/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#123048]">
                Grow
              </div>
              <div className="absolute bottom-0 left-[8%] h-[32%] w-[16%] rounded-t-[999px] bg-[#93b9f7]" />
              <div className="absolute bottom-0 left-[25%] h-[36%] w-[18%] rounded-t-[999px] bg-[#d6f0ff]" />
              <div className="absolute bottom-0 right-[25%] h-[34%] w-[16%] rounded-t-[999px] bg-[#f2f6ff]" />
              <div className="absolute bottom-0 right-[9%] h-[30%] w-[15%] rounded-t-[999px] bg-[#9fcaf8]" />
            </ExpectCard>

            <ExpectCard
              title="HACKATHON & IDEATION SESSION"
              description="Brainstorm innovative ideas, collaborate with a team, build real solutions, and compete in a fast-paced challenge with meaningful impact."
              tone="bg-[#9bc7ef] text-black"
              className="min-h-[320px] xl:col-span-4"
              titleClassName="text-[#10263f]"
              descriptionClassName="text-[#10263f]/78"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_35%)]" />
              <div className="absolute bottom-10 right-8 h-28 w-40 rounded-[18px] bg-[#f6fbff] shadow-[0_24px_40px_rgba(16,38,63,0.18)] ring-1 ring-[#10263f]/10" />
              <div className="absolute bottom-16 right-14 h-3 w-20 rounded-full bg-[#10263f]/20" />
              <div className="absolute bottom-12 right-14 h-3 w-28 rounded-full bg-[#10263f]/12" />
              <div className="absolute bottom-12 left-10 h-24 w-24 rounded-t-[999px] bg-[#315b87]" />
              <div className="absolute bottom-12 left-28 h-24 w-24 rounded-t-[999px] bg-[#1c3a56]" />
              <div className="absolute left-10 top-28 h-12 w-12 rotate-12 rounded-xl bg-white/70" />
              <div className="absolute left-[6.5rem] top-34 h-14 w-14 -rotate-6 rounded-xl bg-[#4f83b5]/40" />
            </ExpectCard>

            <ExpectCard
              title="EXHIBITORS & FOOD VENDORS"
              description="Discover cool tech, meet amazing brands, and enjoy a wide variety of great food in one lively space."
              tone="bg-[#65549a]"
              className="min-h-[320px] xl:col-span-4"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(255,255,255,0.24),transparent_26%)]" />
              <div className="absolute bottom-10 left-8 h-24 w-44 rounded-t-[22px] bg-[#ffca89]" />
              <div className="absolute bottom-32 left-8 flex gap-2">
                <span className="h-8 w-10 rounded-t-lg bg-white/90" />
                <span className="h-8 w-10 rounded-t-lg bg-[#ffd4b1]" />
                <span className="h-8 w-10 rounded-t-lg bg-white/90" />
                <span className="h-8 w-10 rounded-t-lg bg-[#ffd4b1]" />
              </div>
              <div className="absolute bottom-0 right-12 h-[32%] w-[22%] rounded-t-[999px] bg-[#f7ebff]" />
            </ExpectCard>

            <ExpectCard
              title="GAMES & ENTERTAINMENT"
              description="Enjoy fun games and interactive experiences in one lively, high-energy space."
              tone="bg-[#8a4a63]"
              className="min-h-[320px] xl:col-span-4"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.18),transparent_26%)]" />
              <div className="absolute bottom-10 left-[14%] h-28 w-20 rotate-[-12deg] rounded-xl bg-white shadow-[0_14px_32px_rgba(0,0,0,0.24)]" />
              <div className="absolute bottom-12 left-[28%] h-28 w-20 rotate-[10deg] rounded-xl bg-[#ffd9e6] shadow-[0_14px_32px_rgba(0,0,0,0.24)]" />
              <div className="absolute right-[14%] top-[28%] h-16 w-16 rounded-full border-8 border-white/85 bg-[#f4a6c4]" />
            </ExpectCard>
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
                {moment.image ? (
                  <div className="group relative overflow-hidden rounded-[12px]">
                    <img
                      src={moment.image}
                      alt={moment.alt}
                      className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[424px]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.04),rgba(17,19,24,0.72))]" />
                    <div className="absolute left-5 top-5 rounded-full bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                      {moment.eyebrow}
                    </div>
                  </div>
                ) : (
                  <div
                    aria-label={moment.alt}
                    className={`relative h-[320px] w-full rounded-[12px] bg-gradient-to-br ${moment.accent} sm:h-[424px]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(152,203,255,0.2),transparent_36%)]" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                      {moment.eyebrow}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 h-px bg-white/20" />
                    <div className="absolute bottom-9 left-6 h-16 w-16 rounded-full border border-white/18 bg-white/6" />
                    <div className="absolute bottom-9 right-6 h-24 w-24 rounded-full border border-white/18 bg-white/6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Shell>
      </main>

      <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#111318_0%,#082538_100%)] py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,203,255,0.12),transparent_50%)]"
        />
        <div className="relative mx-auto flex max-w-[883px] items-center justify-center px-6 text-center">
          <EventLogo subtle />
        </div>
      </footer>
    </div>
  )
}
