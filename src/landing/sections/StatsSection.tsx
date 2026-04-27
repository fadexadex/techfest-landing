import { Container } from '../Container'

const stats = [
  { label: 'Messages / day', value: '2.1B' },
  { label: 'Active sessions', value: '840k' },
  { label: 'Regions online', value: '32' },
] as const

export function StatsSection() {
  return (
    <section
      className="border-b border-rts-border-subtle/60 bg-gradient-to-b from-rts-surface/30 to-rts-bg py-20 sm:py-24"
      aria-labelledby="stats-heading"
    >
      <Container>
        <h2 id="stats-heading" className="sr-only">
          Key metrics
        </h2>
        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {stats.map((s) => (
            <li key={s.label} className="text-center sm:text-left">
              <p className="font-display text-4xl font-semibold text-rts-foreground sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-rts-muted">{s.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
