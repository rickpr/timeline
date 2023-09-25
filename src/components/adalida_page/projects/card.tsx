import React, { useContext } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'
import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

const Card = ({ children, fullHeight = true }: { children: React.ReactNode, fullHeight?: boolean }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = useDarkModeStyle(darkMode)
  useAnimateOnScroll()
  const containerStyle = {
    transition: 'all 0.5s ease-in-out',
    minWidth: '95%',
    margin: `${fullHeight ? '4vh' : 0} 2.5vw`,
    minHeight: fullHeight ? '92vh' : 0,
    background,
    color: text,
    padding: `${fullHeight ? '2em' : 0} 7%`,
    borderRadius: '2vh'
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: fullHeight ? '79.12vh' : 0 // minHeight of 92vh minus 7% margin on top and bottom
  }
  return (
    <div data-aos='fade-up' style={containerStyle}>
      <div style={gridStyle}>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Card
