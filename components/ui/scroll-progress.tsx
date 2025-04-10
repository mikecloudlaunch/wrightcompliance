"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight > 0) {
        const percentage = (currentScrollPos / scrollHeight) * 100
        setScrollProgress(percentage)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress)

    // Initial call to set progress
    updateScrollProgress()

    // Clean up
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-800">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
