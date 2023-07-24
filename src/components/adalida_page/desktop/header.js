import PropTypes from 'prop-types'
import React from 'react'

import Title from './title'

const headerStyles = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  zIndex: 2,
  pointerEvents: 'none',
  height: '100%'
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
  padding: '0 10dvw',
  display: 'flex',
  flexDirection: 'column',
  gap: '2dvh',
  justifyContent: 'space-between',
  bottom: '10dvh',
  transition: 'all 0.5s ease',
  height: 'min-content',
  position: 'fixed',
  top: '50%',
  transform: 'translate(0, -50%)'
}
const barStyle = {
  borderWidth: '0.5dvw',
  borderRadius: '0.5dvw',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease',
  width: '0.5dvw',
  background: 'none',
  padding: 0,
  pointerEvents: 'auto',
  cursor: 'pointer'
}

const Header = ({ projectRefs, closestProject }) => {
  const indicators = Object.keys(projectRefs.current).map(project => {
    const active = closestProject === project
    const opacity = active ? 1 : 0.2
    const borderColor = active ? 'white' : '#E7E5E7'
    return (
      <div key={project} style={{ display: 'flex', gap: '1dvw', opacity }}>
        <button
          style={{ ...barStyle, borderColor, opacity }}
          onClick={() => projectRefs.current[project]?.current?.scrollIntoView({ behavior: 'smooth' }) }
        />
        <Title title={project} active={active} />
      </div>
    )
  })
  return (
    <div style={headerStyles}>
      <div style={menuStyles}>
        <h1 style={{ fontSize: '18px', fontWeight: 400 }}>ADALIDA</h1>
        <h1 style={{ fontSize: '18px', fontWeight: 400 }}>ABOUT</h1>
      </div>
      <div style={indicatorStyle}>
        {indicators}
      </div>
    </div>
  )
}

Header.propTypes = {
  projectRefs: PropTypes.object,
  closestProject: PropTypes.string
}

export default Header
