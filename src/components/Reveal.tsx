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
    <div style={{ perspective: '1200px' }} className={className}>
      <div
        ref={ref}
        className="transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0) scale(1) rotateX(0)' : 'translateY(100px) scale(0.85) rotateX(30deg)',
          filter: inView ? 'blur(0px)' : 'blur(10px)',
          transitionDelay: `${delay}ms`,
          transformOrigin: 'top center',
        }}
      >
        {children}
      </div>
    </div>
  )
}
