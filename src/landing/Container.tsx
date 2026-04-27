import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
}

export function Container({ children, className = '', as: Comp = 'div', id }: ContainerProps) {
  return (
    <Comp
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`.trim()}
    >
      {children}
    </Comp>
  )
}
