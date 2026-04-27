export function RtsLogo({ className = '' }: { className?: string }) {
  return (
    <a
      href="#"
      className={`group flex items-center gap-2.5 ${className}`.trim()}
      aria-label="RTS home"
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-rts-surface-raised ring-1 ring-rts-border/80"
        aria-hidden
      >
        <span className="font-display text-sm font-bold tracking-tight text-rts-primary">R</span>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-rts-foreground">
        RTS
      </span>
    </a>
  )
}
