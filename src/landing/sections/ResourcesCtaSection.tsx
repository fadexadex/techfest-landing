import { useState, type FormEvent } from 'react'
import { Container } from '../Container'

export function ResourcesCtaSection() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="resources"
      className="border-b border-rts-border-subtle/60 py-20 sm:py-24"
      aria-labelledby="resources-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div id="contact">
            <h2
              id="resources-heading"
              className="font-display text-3xl font-semibold tracking-tight text-rts-foreground sm:text-4xl"
            >
              Get the architecture pack
            </h2>
            <p className="mt-4 text-lg text-rts-muted">
              Reference blueprints, latency checklists, and a migration guide to bring real-time data online
              without a big-bang rewrite.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-rts-foreground-dim">
              <li className="flex gap-2">
                <span className="text-rts-primary" aria-hidden>
                  •
                </span>
                PDF + Miro templates your platform team can use today
              </li>
              <li className="flex gap-2">
                <span className="text-rts-primary" aria-hidden>
                  •
                </span>
                Security questionnaire answers and threat model sample
              </li>
            </ul>
            <a
              href="mailto:hello@rts.example"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-rts-primary px-6 text-base font-semibold text-rts-bg transition hover:bg-rts-primary-hover"
            >
              Email us
            </a>
          </div>
          <div className="rounded-2xl border border-rts-border bg-rts-surface/50 p-6 shadow-rts-card sm:p-8">
            <h3 className="font-display text-lg font-semibold text-rts-foreground">Newsletter</h3>
            <p className="mt-2 text-sm text-rts-muted">
              Release notes, live architecture posts — no more than once a month.
            </p>
            {submitted ? (
              <p className="mt-6 text-sm text-rts-accent" role="status">
                Thanks — you are on the list.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Work email"
                    className="w-full rounded-lg border border-rts-border bg-rts-bg/80 px-4 py-3 text-sm text-rts-foreground placeholder:text-rts-muted/70 focus:border-rts-accent/60"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg border border-rts-border bg-rts-surface-raised py-3 text-sm font-semibold text-rts-foreground transition hover:border-rts-muted"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
