import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/project.scss'

const Header = () => {
  const { name, heroPhoto } = useContext(ThemeContext)
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
  if (name === 'Phronesis') containerStyle.color = 'white'

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
