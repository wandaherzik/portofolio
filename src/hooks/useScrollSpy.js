import { useEffect, useState } from 'react'

export default function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id)
          }
        })
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: 0,
      },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, offset])

  return active
}
