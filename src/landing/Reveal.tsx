import { useEffect, useRef, useState, type ReactNode } from 'react'

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger in ms, applied as transition-delay when visible */
  delay?: number
}

/**
 * Fades and slides content into view on scroll. Respects `prefers-reduced-motion` via CSS
 * and skips the observer when the user prefers reduced motion.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion()) {
      return
    }

    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
            break
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
