import React, { useContext, useEffect, useState } from 'react'

import { ThemeContext } from 'theme_context'

const ScrollProgress = (): JSX.Element => {
  const { background: scrollBar } = useContext(ThemeContext)

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgressSize = (): void => {
      const maxScrollY = document.body.clientHeight - document.documentElement.clientHeight
      const scrollProgress = 100 * window.scrollY / maxScrollY
      setScrollProgress(scrollProgress)
    }
    window.addEventListener('scroll', updateScrollProgressSize)
    updateScrollProgressSize()
    return () => { window.removeEventListener('scroll', updateScrollProgressSize) }
  }, [])

  return (
    <div>
      <div
        style={{
          width: `${scrollProgress}%`,
          height: '1vh',
          background: scrollBar,
          borderRadius: '0 1vh 1vh 0'
        }}
      />
    </div>
  )
}

export default ScrollProgress
