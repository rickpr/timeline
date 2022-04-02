import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { Themes } from 'theme_context'

const Content = ({ title }) => {
  const { heroPhoto, projectPage } = Themes[title]
  const handleClick = () => {
    setTimeout(() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }), 1000)
    navigate(projectPage)
  }

  const rowStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const heroPicture = (
    <div style={{ ...rowStyle, alignItems: 'start' }}>
      <div style={{ borderRadius: '3vmin', overflow: 'hidden', height: '100%', maxWidth: '100%' }}>
        <img style={{ width: '100%', maxHeight: '50vh' }} src={heroPhoto} />
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

  return [heroPicture, button]
}

Content.propTypes = {
  title: PropTypes.string.isRequired
}

export default Content
