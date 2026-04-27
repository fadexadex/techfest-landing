import { Container } from '../Container'

const brands = ['Northwind', 'Aperture', 'Helio', 'Stackhouse', 'Vertex Labs']

export function TrustStrip() {
  return (
    <section
      className="border-b border-rts-border-subtle/60 bg-rts-surface/40"
      aria-labelledby="trust-heading"
    >
      <Container className="py-12 sm:py-14">
        <h2 id="trust-heading" className="text-center text-xs font-semibold uppercase tracking-widest text-rts-muted">
          Trusted by product teams at
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((name) => (
            <li key={name}>
              <span className="font-display text-sm font-medium text-rts-foreground-dim/90 sm:text-base">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
