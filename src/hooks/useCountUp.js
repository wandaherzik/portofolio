import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function useCountUp(target, duration = 1500) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(target)
      return
    }
    let raf
    let start
    const tick = (t) => {
      start ??= t
      const p = Math.min((t - start) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, reduce])

  return [ref, value]
}
