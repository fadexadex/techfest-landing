import { Container } from '../Container'

export function CompanySection() {
  return (
    <section
      id="company"
      className="border-b border-rts-border-subtle/60 py-20 sm:py-24"
      aria-labelledby="company-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2
              id="company-heading"
              className="font-display text-3xl font-semibold tracking-tight text-rts-foreground sm:text-4xl"
            >
              Built for teams who can’t ship “close enough” latency
            </h2>
            <p className="mt-4 text-lg text-rts-muted">
              We started in live infrastructure because we were tired of duct-taping websockets, queues, and
              caches just to get a product that felt instant. RTS is that stack, without the week-long
              whiteboard session.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex text-sm font-semibold text-rts-accent transition hover:text-rts-foreground"
            >
              Meet the team
              <span className="ml-1" aria-hidden>
                →
              </span>
            </a>
          </div>
          <figure className="rounded-2xl border border-rts-border bg-rts-surface/50 p-8 shadow-rts-card">
            <blockquote className="font-display text-lg font-medium leading-relaxed text-rts-foreground-dim sm:text-xl">
              “The moment we moved live updates onto RTS, support tickets about ‘stale data’ dropped off a
              cliff. Our app finally felt as fast as our ambition.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-rts-muted">
              <span className="block font-medium text-rts-foreground">Elena M.</span>
              VP Engineering, Helio
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
