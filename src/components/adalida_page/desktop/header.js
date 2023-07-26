import PropTypes from 'prop-types'
import React from 'react'

import Title from './title'

import GlobalHeader from '../header'

const headerStyles = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  zIndex: 2,
  pointerEvents: 'none',
  height: '100%'
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
  borderWidth: '0.2dvw',
  borderRadius: '0.2dvw',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease',
  width: '0.5dvw',
  background: 'none',
  padding: 0,
  pointerEvents: 'auto',
  cursor: 'pointer'
}
const projectStyle = {
  display: 'flex',
  gap: '1dvw',
  transition: 'all 0.5s ease',
  pointerEvents: 'auto',
  cursor: 'pointer'
}

const Header = ({ projectRefs, closestProject }) => {
  const indicators = Object.keys(projectRefs.current).map(project => {
    const active = closestProject === project
    const opacity = active ? 1 : 0.2
    const borderColor = active ? 'white' : '#E7E5E7'
    return (
      <div
        key={project}
        style={{ opacity, ...projectStyle }}
        onClick={() => projectRefs.current[project]?.current?.scrollIntoView({ behavior: 'smooth' }) }
      >
        <div style={{ ...barStyle, borderColor }} />
        <Title title={project} active={active} />
      </div>
    )
  })
  return (
    <div style={headerStyles}>
      <GlobalHeader showDarkModeButton={false} />
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
