import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const headerStyles = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc((100dvh - 85dvw) / 4)',
  padding: '1dvh 7.5% 0 7.5%',
  overflow: 'hidden',
  gap: '30px',
  justifyContent: 'space-between',
  zIndex: 2
}
const menuStyles = {
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}
const indicatorStyle = {
  width: '100%',
  display: 'flex',
  gap: '2dvh',
  justifyContent: 'space-between'
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
const navStyle = {
  fontSize: '18px',
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}

const Header = ({ projectRefs, closestProject }) => {
  const indicators = Object.keys(projectRefs.current).map(project => {
    const active = closestProject === project
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
      <div style={menuStyles}>
        <div style={navStyle}>
          <Link to='/adalida'>ADALIDA</Link>
        </div>
        <div style={navStyle}>
          <Link to='/adalida/about'>ABOUT</Link>
        </div>
      </div>
      <div style={indicatorStyle}>{indicators}</div>
    </div>
  )
}

Header.propTypes = {
  projectRefs: PropTypes.object,
  closestProject: PropTypes.string
}

export default Header
