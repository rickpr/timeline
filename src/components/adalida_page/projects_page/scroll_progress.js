import React, { useContext, useEffect, useState } from 'react'

import { ThemeContext } from 'theme_context'

const ScrollProgress = () => {
  const { primary } = useContext(ThemeContext)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgressSize = () => {
      const maxScrollY = document.body.clientHeight - document.documentElement.clientHeight
      setScrollProgress(100 * window.scrollY / maxScrollY)
    }
    window.addEventListener('scroll', updateScrollProgressSize)
    return () => window.removeEventListener('scroll', updateScrollProgressSize)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        height: `${scrollProgress}%`,
        width: '1vw',
        background: primary,
        zIndex: 3
      }}
    />
  )
}

export default ScrollProgress
