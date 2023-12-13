import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/case_study.scss'

const textAndImageStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'flex-start',
  fontSize: '3rem',
  fontWeight: 'bold',
  width: '85%'
}

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain' as const,
  borderRadius: '20px'
}

const Header = (): JSX.Element => {
  const { darkMode, name, heroPhoto } = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(darkMode)
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    color
  }

  return (
    <div style={containerStyle} data-aos='slide-up'>
      <div style={textAndImageStyle}>
        <div>{name}</div>
        {heroPhoto !== undefined && <img src={heroPhoto} alt={name} style={imageStyle} />}
      </div>
    </div>
  )
}

export default Header
