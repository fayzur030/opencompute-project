'use client'

import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  suffix?: string
}

export default function CountUp({ to, suffix = '' }: CountUpProps) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  })

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, to, {
      duration: 3.8, // আগে ছিল 1.4
      ease: [0.22, 1, 0.36, 1], // Smooth easing
      onUpdate(value) {
        setCount(Math.round(value))
      },
    })

    return () => controls.stop()
  }, [isInView, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
