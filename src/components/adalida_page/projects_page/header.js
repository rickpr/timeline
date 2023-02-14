import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import AdalidaFace from 'images/adalida_face.jpg'
import MediaWithText from './media_with_text'

import 'sass/adalida_page/project.scss'

const Header = () => {
  const { background, name, description, heroPhotoPath } = useContext(ThemeContext)
  const containerStyle = {
    minWidth: '95%',
    padding: '5em',
    position: 'relative',
    background
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
      <div className='header-intro'>
        <img alt="Adalida Portrait" src={AdalidaFace} className='header-portrait' />
        <div className='header-intro-text'>
          Adalida Baca
          <em style={{ fontSize: '12px' }}>Digital Product Designer</em>
        </div>
      </div>
      <MediaWithText media={heroPhotoPath} text={text} reversed />
    </div>
  )
}

export default Header
