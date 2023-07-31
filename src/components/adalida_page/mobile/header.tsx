import PropTypes from 'prop-types'
import React from 'react'

import GlobalHeader from '../header'

const headerStyles = {
  position: 'sticky',
  flexGrow: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100dvw',
  overflow: 'hidden',
  justifyContent: 'space-between',
  zIndex: 2
}
const indicatorStyle = {
  width: '100%',
  display: 'flex',
  gap: '2dvh',
  padding: '0 7.5dvw',
  justifyContent: 'space-around'
}
const barStyle = {
  borderWidth: '1dvw',
  borderRadius: '1dvw',
  height: '1dvw',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease',
  background: 'none',
  padding: 0,
  cursor: 'pointer'
}

const Header = ({ projectRefs, currentProject }) => {
  const indicators = Object.keys(projectRefs.current).map(project => {
    const active = currentProject === project
    const opacity = active ? 1 : 0.5
    const borderColor = active ? 'white' : '#E7E5E7'
    return (
      <button
        key={project}
        style={{ ...barStyle, opacity, borderColor }}
        onClick={() => projectRefs.current[project]?.current?.scrollIntoView({ behavior: 'smooth' }) }
      />
    )
  })
  return (
    <div style={headerStyles}>
      <GlobalHeader showDarkModeButton={false} />
      <div style={indicatorStyle}>{indicators}</div>
    </div>
  )
}

Header.propTypes = {
  projectRefs: PropTypes.object,
  currentProject: PropTypes.string
}

export default Header
