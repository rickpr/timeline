import React from 'react'
import { Link } from 'gatsby'

const Header = ({ color }) => {
  const navbarStyles = {
    borderLeft: `0.25em solid ${color}`,
    borderRight: `0.25em solid ${color}`,
    borderTop: `0.25em solid ${color}`
  }

  return (
    <div style={{ position: 'fixed', width: '100%' }}>
      <div style={{ minHeight: '2em' }} />
      <header>
        <div className="adalida-navbar" style={navbarStyles} />
        <nav>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
            <div key="adalida">
              <h2><Link to="/adalida" style={{ color: '#FFFFFF' }}>ADALIDA BACA</Link></h2>
            </div>
            <div key="about">
              <h2><Link to="/adalida" style={{ color: '#FFFFFF' }}>ABOUT</Link></h2>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
