import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const navbarStyles = {
    borderLeft: '0.25em solid #FFFFFF',
    borderRight: '0.25em solid #FFFFFF',
    borderTop: '0.25em solid #FFFFFF',
  }

  return (
    <nav className='adalida-navbar' style={navbarStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
        <div>
          <h1><Link to='/adalida' style={{ color: '#FFFFFF' }}>HOME</Link></h1>
        </div>
        <div>
          <h1><Link to='/adalida' style={{ color: '#FFFFFF' }}>ABOUT</Link></h1>
        </div>
      </div>
    </nav>
  )
}

export default Header
