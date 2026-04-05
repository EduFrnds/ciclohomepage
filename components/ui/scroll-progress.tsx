"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener("scroll", updateProgress, { passive: true })
    updateProgress()
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full h-0.5 z-60 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-linear-to-r from-primary via-primary-alt to-accent transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
