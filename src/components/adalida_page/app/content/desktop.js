import React from 'react'
import PropTypes from 'prop-types'

const Desktop = ({ handleClick, heroPhoto }) => {
  const rowStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const heroPicture = (
    <div style={{ ...rowStyle, alignItems: 'start' }}>
    <div style={{ borderRadius: '3vmin', overflow: 'hidden', maxHeight: '70vh' }}>
        <img style={{ maxHeight: '70vh' }} src={heroPhoto} />
      </div>
    </div>
  )
  const button = (
    <div style={rowStyle}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '0.5em',
          border: 'none',
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

Desktop.propTypes = {
  handleClick: PropTypes.func,
  heroPhoto: PropTypes.string.isRequired
}

export default Desktop
