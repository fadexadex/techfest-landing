import { Container } from '../Container'

const features = [
  {
    title: 'Sync that stays honest',
    body:
      'CRDT-friendly channels with predictable ordering, so your UI never shows two truths at once.',
    id: 'product',
  },
  {
    title: 'Resilience as default',
    body:
      'Automatic retries, regional failover, and health-aware routing keep sessions alive when the network wobbles.',
  },
  {
    title: 'Observability in one glass pane',
    body:
      'Traces, stream lag, and client heartbeats in a single place — share links, not log dumps.',
  },
  {
    title: 'Guardrails for every team',
    body:
      'Policy-based access, read/write scopes, and env isolation so every deploy stays boring.',
  },
  {
    title: 'SDKs you will not fight',
    body:
      'Idiomatic clients for web, iOS, Android, and server runtimes. Types included, surprises not.',
  },
  {
    title: 'Enterprise-ready on day one',
    body: 'SAML, SCIM, audit exports, and data residency options that satisfy security reviews.',
  },
] as const

export function FeaturesSection() {
  return (
    <section
      id="solutions"
      className="border-b border-rts-border-subtle/60 py-20 sm:py-24"
      aria-labelledby="features-heading"
    >
      <Container>
        <div className="max-w-2xl" id="product">
          <h2
            id="features-heading"
            className="font-display text-3xl font-semibold tracking-tight text-rts-foreground sm:text-4xl"
          >
            Everything between your product and the edge, handled.
          </h2>
          <p className="mt-4 text-lg text-rts-muted">
            One platform to stream, store, and secure the live data that powers your experience — without
            bolting on five different vendors.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <li
              key={f.title}
              className="rounded-2xl border border-rts-border bg-rts-surface/50 p-6 shadow-rts-card transition hover:border-rts-border/90 hover:bg-rts-surface-raised/30"
            >
              <span
                className="mb-3 inline-block font-mono text-xs font-medium text-rts-accent"
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-semibold text-rts-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-rts-muted">{f.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
