import { Container } from '../Container'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-rts-border-subtle/60"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-rts-glow/20 via-rts-accent/5 to-transparent blur-3xl"
        aria-hidden
      />
      <Container as="div" className="relative py-20 sm:py-28 lg:py-32">
        <p className="mb-4 inline-flex max-w-prose text-sm font-medium text-rts-accent">
          Real-time, everywhere
        </p>
        <h1
          id="hero-heading"
          className="font-display max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-rts-foreground sm:text-5xl lg:text-6xl"
        >
          Build products your users feel in the moment, not the morning after.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-rts-muted">
          RTS is the control plane for low-latency data, live collaboration, and resilient delivery —
          so your team can ship the experience, not just the feature.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-rts-primary px-6 text-base font-semibold text-rts-bg transition hover:bg-rts-primary-hover"
          >
            Start free trial
          </a>
          <a
            href="#product"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-rts-border bg-rts-surface/50 px-6 text-base font-semibold text-rts-foreground transition hover:border-rts-muted hover:bg-rts-surface-raised/80"
          >
            See the platform
          </a>
        </div>
        <dl className="mt-16 grid gap-6 border-t border-rts-border-subtle/80 pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-rts-muted">Median latency</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-rts-foreground">
              &lt; 40ms
            </dd>
          </div>
          <div>
            <dt className="text-sm text-rts-muted">Global edge regions</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-rts-foreground">
              32+
            </dd>
          </div>
          <div>
            <dt className="text-sm text-rts-muted">Uptime (rolling)</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-rts-foreground">
              99.99%
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
