import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        inView ? 'opacity-100 translate-y-0 scale-100 blur-none' : 'opacity-0 translate-y-12 scale-[0.95] blur-[4px]'
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
