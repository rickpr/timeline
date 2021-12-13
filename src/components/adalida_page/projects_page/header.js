
import React from 'react'
import { Link } from 'gatsby'

import NavLink from '../../../components/header/nav_link'
import MobileHamburger from '../../../components/header/mobile_hamburger'

const Header = () => {
  const navbarStyles = {
    borderLeft: '0.25em solid #FFFFFF',
    borderRight: '0.25em solid #FFFFFF',
    borderTop: '0.25em solid #FFFFFF'
  }
  return (
    <div style={{ position: 'fixed', width: '100%' }}>
      <div style={{ minHeight: '1em' }} />
      <header>
        <div className="adalida-navbar" style={navbarStyles} />
        <nav>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
            <div key="back-home">
              <h2><Link to="/adalida" style={{ color: '#39FF14' }}>HOME</Link></h2>
            </div>
            <div key="about">
              <h2><Link to="/adalida" style={{ color: '#39FF14' }}>ABOUT</Link></h2>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
