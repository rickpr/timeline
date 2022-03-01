import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { Themes } from 'theme_context'

const App = ({forwardRef, title }) => {
  const theme = Themes[title]
  const { background, heroPhoto, projectPage } = theme

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight + window.pageYOffset)
    }, 1000)
    navigate(projectPage)
  }

  const gridTemplateAreas = `
    'top-space'
    'hero-photo'
    'button'
    'bottom-space'
  `

  const gridTemplateRows = '10vh 70vh 10vh 10vh'
  const gridStyle = {
    display: 'grid',
    height: '100vh',
    width: '95%',
    scrollSnapAlign: 'start',
    gridTemplateAreas,
    gridTemplateRows,
    transition: 'opacity 1s ease',
    justifyItems: 'center',
    margin: '0 auto'
  }
  const rowStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const heroPicture = (
    <div style={{ gridArea: 'hero-photo', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40%' }}>
      <img style={{ objectFit: 'contain', height: '100%', width: '100%' }} src={heroPhoto} />
    </div>
  )
  const button = (
    <div style={{ gridArea: 'button', ...rowStyle }}>
      <button onClick={handleClick} style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: 'none', fontSize: '3vmin' }}>
        View Project
      </button>
    </div>
  )

  return (
    <div style={{ background, width: '100%' }} ref={forwardRef}>
      <div style={gridStyle}>
        <div style={{ gridArea: 'top-space' }} />
        {heroPicture}
        {button}
        <div style={{ gridArea: 'bottom-space' }} />
      </div>
    </div>
  )
}

App.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }).isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}

export default App
