
import React from 'react'
import { Link } from 'gatsby'

import NavLink from '../../components/header/nav_link'
import MobileHamburger from '../../components/header/mobile_hamburger'

const Header = () =>
  <>
    <div style={{minHeight: '2em'}}></div>
    <header>
      <div className="adalida-navbar" />
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <MobileHamburger collapsibleId={`navbarSupportedContent`} />
        <div className="navbar-nav row collapse navbar-collapse" id={`navbarSupportedContent`}>
          <div className={`nav-item col-md-4 col-12`}>
            <h2><Link to="/adalida" className="nav-link">ADALIDA BACA</Link></h2>
          </div>
          <div className={`nav-item col-md-6 col-12`}></div>
          <NavLink href="/adalida" text="ABOUT" width={1} />
        </div>
      </nav>
    </header>
  </>

export default Header
