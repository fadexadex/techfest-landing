import { Container } from '../Container'
import { RtsLogo } from '../RtsLogo'

const cols = [
  {
    title: 'Product',
    links: [
      { href: '#product', label: 'Overview' },
      { href: '#solutions', label: 'Solutions' },
      { href: '#contact', label: 'Security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#company', label: 'About' },
      { href: '#resources', label: 'Careers' },
      { href: '#resources', label: 'Blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#', label: 'Privacy' },
      { href: '#', label: 'Terms' },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-rts-border-subtle/60 bg-rts-surface/20 py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <RtsLogo />
            <p className="mt-4 max-w-xs text-sm text-rts-muted">
              Real-time systems for product teams. Built for latency, reliability, and a calm on-call
              rotation.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-rts-foreground-dim/80">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-rts-muted transition hover:text-rts-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-rts-border-subtle/50 pt-8 text-center text-xs text-rts-muted">
          © {new Date().getFullYear()} RTS. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
