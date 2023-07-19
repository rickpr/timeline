import React, { useContext, useEffect, useState } from 'react'
import { IconCircleArrowUpFilled } from '@tabler/icons-react'

import { ThemeContext } from 'theme_context'

const ScrollProgress = () => {
  const { colors: { primary } } = useContext(ThemeContext)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showUpArrow, setShowUpArrow] = useState(false)

  useEffect(() => {
    const updateScrollProgressSize = () => {
      const maxScrollY = document.body.clientHeight - document.documentElement.clientHeight
      const scrollProgress = 100 * window.scrollY / maxScrollY
      setScrollProgress(scrollProgress)
      setShowUpArrow(scrollProgress >= 50)
    }
    window.addEventListener('scroll', updateScrollProgressSize)
    updateScrollProgressSize()
    return () => window.removeEventListener('scroll', updateScrollProgressSize)
  }, [])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: `${scrollProgress}%`,
          height: '1vmax',
          background: primary,
          top: 0,
          zIndex: 3
        }}
      />
      <div
        style={{
          position: 'fixed',
          height: '5vh',
          width: '5vh',
          bottom: 0,
          right: 0,
          zIndex: 3,
          opacity: '10%',
          cursor: 'pointer',
          display: showUpArrow ? 'block' : 'none'
        }}
      >
        <a href='#top' style={{ color: 'black', display: 'block', width: '100%', height: '100%' }}>
          <IconCircleArrowUpFilled size='5vh' />
        </a>
      </div>
    </>
  )
}

export default ScrollProgress
