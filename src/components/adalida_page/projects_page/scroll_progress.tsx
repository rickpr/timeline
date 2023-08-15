import React, { useContext, useEffect, useState } from 'react'
import { IconCircleArrowUpFilled } from '@tabler/icons-react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'
import Header from '../header'

const ScrollProgress = (): JSX.Element => {
  const { darkMode, background: scrollBar } = useContext(ThemeContext)
  const { background, text: color } = useDarkModeStyle(darkMode)

  const [scrollProgress, setScrollProgress] = useState(0)
  const [showUpArrow, setShowUpArrow] = useState(false)

  useEffect(() => {
    const updateScrollProgressSize = (): void => {
      const maxScrollY = document.body.clientHeight - document.documentElement.clientHeight
      const scrollProgress = 100 * window.scrollY / maxScrollY
      setScrollProgress(scrollProgress)
      setShowUpArrow(scrollProgress >= 50)
    }
    window.addEventListener('scroll', updateScrollProgressSize)
    updateScrollProgressSize()
    return () => { window.removeEventListener('scroll', updateScrollProgressSize) }
  }, [])

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 3,
          transition: 'background 0.5s',
          background,
          color
        }}
      >
        <Header />
        <div
          style={{
            width: `${scrollProgress}%`,
            height: '1vh',
            background: scrollBar,
            borderRadius: '0 1vh 1vh 0',
            top: 0,
            zIndex: 3
          }}
        />
      </div>
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
