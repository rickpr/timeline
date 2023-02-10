import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Header = () => {
  const { name, description, heroPhotoPath } = useContext(ThemeContext)
  const containerStyle = {
    minWidth: '95%',
    padding: '5em',
    backgroundImage: 'linear-gradient(#F8473D, #E83161)'
  }

  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3, color: '#FFFFFF' }}>
      <h1 className="project-heading">{name}</h1>
      <div className="project-description">
        {description}
      </div>
    </div>
  )

  return (
    <div style={containerStyle}>
      <MediaWithText media={heroPhotoPath} text={text} reversed />
    </div>
  )
}

export default Header
