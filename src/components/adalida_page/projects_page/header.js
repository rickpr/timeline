import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import { makeMediaTag } from './media_with_text'

import 'sass/adalida_page/project.scss'

const Header = () => {
  const { name, heroPhotoPath } = useContext(ThemeContext)
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }

  const heroPhoto = makeMediaTag({ media: heroPhotoPath })
  const text = (
    <div className='project-header'>
      <div className='project-heading'>{name}</div>
      {heroPhoto}
    </div>
  )

  return (
    <div style={containerStyle}>{text}</div>
  )
}

export default Header
