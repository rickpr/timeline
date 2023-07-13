import PropTypes from 'prop-types'
import React from 'react'

import Projects from 'project_data'

const headerStyles = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  zIndex: 2
}
const menuStyles = {
  color: 'white',
  display: 'flex',
  padding: '0 10dvw',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}
const indicatorStyle = {
  width: '100%',
  padding: '0 10dvw',
  display: 'flex',
  gap: '2dvh',
  justifyContent: 'space-between'
}
const barStyle = {
  borderWidth: '1dvw',
  borderRadius: '1dvw',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease'
}

const Header = ({ closestProject }) => {
  const indicators = Object.keys(Projects).map(project => {
    const active = closestProject === project
    const opacity = active ? 1 : 0.5
    const borderColor = active ? 'white' : '#E7E5E7'
    return <div key={project} style={{ ...barStyle, opacity, borderColor }} />
  })
  return (
    <div style={headerStyles}>
      <div style={menuStyles}>
        <h1 style={{ fontSize: '22px', fontWeight: 700 }}>ADALIDA</h1>
        <h1 style={{ fontSize: '18px', fontWeight: 400 }}>ABOUT</h1>
      </div>
      <div style={indicatorStyle}>{indicators}</div>
    </div>
  )
}

Header.propTypes = { closestProject: PropTypes.string }

export default Header
