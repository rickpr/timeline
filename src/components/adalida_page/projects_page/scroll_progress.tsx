import { Link } from 'gatsby'
import React, { useContext, useEffect, useState } from 'react'
import { IconCircleArrowUpFilled, IconMoonStars } from '@tabler/icons-react'

import { ThemeContext } from 'theme_context'
import Header from '../header'

const ScrollProgress = () => {
  const { colors: { scrollBar }, darkMode, setDarkMode } = useContext(ThemeContext)
  const darkModeButtonStyle = {
    border: 'none',
    background: 'none',
    color: darkMode ? 'white' : 'black',
    display: 'flex',
    alignItems: 'flex-end'
  }

  const [scrollProgress, setScrollProgress] = useState(0)
  const [showUpArrow, setShowUpArrow] = useState(false)
  const navElementStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    border: 'none',
    background: 'none',
    color: darkMode ? 'white' : 'black'
  }

  useEffect(() => {
    const updateScrollProgressSize = () => {
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
          background: darkMode ? '#1A191C' : '#F5F5F5'
        }}
      >
        <Header showDarkModeButton={true} />
        <div
          style={{
            width: `${scrollProgress}%`,
            height: '1vmax',
            background: scrollBar,
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
