import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/project.scss'

const Header = (): JSX.Element => {
  const { darkMode, name, heroPhoto } = useContext(ThemeContext)
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    color: darkMode ? '#F5F5F5' : '#1A191C'
  }

  const text = (
    <div className='project-header'>
      <div className='project-heading'>{name}</div>
      <img src={heroPhoto} alt={name} />
    </div>
  )

  return (
    <div style={containerStyle}>{text}</div>
  )
}

export default Header
