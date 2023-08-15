import React, { useContext } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'
import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

const Card = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = useDarkModeStyle(darkMode)
  useAnimateOnScroll()
  const containerStyle = {
    minWidth: '95%',
    margin: '4vh 2.5vw',
    minHeight: '92vh',
    background,
    color: text,
    padding: '2em 7%',
    borderRadius: '2vh'
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: '79.12vh' // minHeight of 92vh minus 7% margin on top and bottom
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
