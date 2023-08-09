import { Link } from 'gatsby'
import React from 'react'

const Header = (): JSX.Element =>
    <header>
      <nav className='header-navbar'>
        <h3><Link to='/adalida' className='nav-link' activeClassName='active'>Adalida</Link></h3>
        <h3><Link to='/us' className='nav-link' activeClassName='active'>Us</Link></h3>
        <h3><Link to='/ricardo' className='nav-link' activeClassName='active'>Ricardo</Link></h3>
      </nav>
    </header>

export default Header
