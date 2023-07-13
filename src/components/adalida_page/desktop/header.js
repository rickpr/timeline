import PropTypes from 'prop-types'
import React from 'react'

import Projects from 'project_data'

import Title from './title'

const headerStyles = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  zIndex: 2,
  pointerEvents: 'none'
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
  width: '50%',
  height: '80dvh',
  padding: '0 10dvw',
  display: 'flex',
  flexDirection: 'column',
  gap: '2dvh',
  justifyContent: 'space-between',
  bottom: '10dvh',
  transition: 'all 0.5s ease'
}
const barStyle = {
  borderWidth: '0.5dvw',
  borderRadius: '0.5dvw',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease',
  width: '0.5dvw'
}

const Header = ({ closestProject }) => {
  const indicators = Object.keys(Projects).map(project => {
    const active = closestProject === project
    const opacity = active ? 1 : 0.2
    const borderColor = active ? 'white' : '#E7E5E7'
    return (
      <div key={project} style={{ display: 'flex', gap: '1dvw', opacity }}>
        <div style={{ ...barStyle, borderColor, opacity }} />
        <Title title={project} active={active} />
      </div>
    )
  })
  return (
    <div style={headerStyles}>
      <div style={menuStyles}>
        <h1 style={{ fontSize: '22px', fontWeight: 700 }}>ADALIDA</h1>
        <h1 style={{ fontSize: '18px', fontWeight: 400 }}>ABOUT</h1>
      </div>
      <div style={indicatorStyle}>
        {indicators}
      </div>
    </div>
  )
}

Header.propTypes = { closestProject: PropTypes.string }

export default Header
