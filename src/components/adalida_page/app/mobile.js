import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { Themes } from 'theme_context'

const Mobile = ({ forwardRef, title }) => {
  const theme = Themes[title]
  const { background, heroPhoto, projectPage } = theme

  const handleClick = () => {
    setTimeout(() => window.scrollTo(window.innerWidth + window.pageXOffset, 0) , 1000)
    navigate(projectPage)
  }

  const gridTemplateAreas = "'top-space' 'content' 'bottom-space'"

  const gridTemplateRows = '10vh 80vh 10vh'

  const gridStyle = {
    display: 'grid',
    height: '100vh',
    width: '100vw',
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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'start'
    }}>
    <div style={{ borderRadius: '3vmin', overflow: 'hidden', maxHeight: '70vh', maxWidth: '80vw' }}>
        <img style={{ maxHeight: '70vh', maxWidth: '80vw' }} src={heroPhoto} />
      </div>
    </div>
  )
  const button = (
    <div style={{ ...rowStyle }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '2vmin',
          border: 'none',
          fontSize: '3vmin',
          lineHeight: 'normal',
          marginTop: '1.5vmin',
          padding: '1.5vmin'
        }}
      >
        View Project
      </button>
    </div>
  )

  return (
    <div style={{ background, width: '100%' }} ref={forwardRef}>
      <div style={gridStyle}>
        <div style={{ gridArea: 'top-space' }} />
        <div style={{ gridArea: 'content', display: 'grid', gridTemplateRows: '55vh 25vh' }}>
          {heroPicture}{button}
        </div>
        <div style={{ gridArea: 'bottom-space' }} />
      </div>
    </div>
  )
}

Mobile.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }),
  title: PropTypes.string.isRequired
}

export default Mobile
