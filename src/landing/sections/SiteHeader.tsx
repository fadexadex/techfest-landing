import { Container } from '../Container'
import { RtsLogo } from '../RtsLogo'

const nav = [
  { href: '#product', label: 'Product' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#company', label: 'Company' },
  { href: '#resources', label: 'Resources' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rts-border-subtle/80 bg-rts-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <RtsLogo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-rts-foreground-dim transition hover:text-rts-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-sm font-medium text-rts-foreground-dim sm:inline transition hover:text-rts-foreground"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-rts-primary px-4 text-sm font-semibold text-rts-bg shadow-sm transition hover:bg-rts-primary-hover"
          >
            Get a demo
          </a>
        </div>
      </Container>
    </header>
  )
}
