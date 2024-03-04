import { Link } from 'gatsby'
import React from 'react'

const navbarStyles = {
  border: '5px solid black',
  display: 'flex',
  flexWrap: 'wrap' as const,
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '2em',
  minheight: '5em'
}

const Header = (): JSX.Element =>
    <header>
      <nav style={navbarStyles}>
        <h3><Link to='/'>Adalida</Link></h3>
        <h3><Link to='/us'>Us</Link></h3>
        <h3><Link to='/ricardo'>Ricardo</Link></h3>
      </nav>
    </header>

export default Header
