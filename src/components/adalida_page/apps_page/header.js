
import React from 'react'
import { Link } from 'gatsby'

import NavLink from '../../../components/header/nav_link'
import MobileHamburger from '../../../components/header/mobile_hamburger'

const Header = () =>
  <>
    <div style={{minHeight: '2em', backgroundColor: '#000000'}}></div>
    <header>
      <div style={{ border: '5px solid #FFFFFF', position: 'absolute', top: '15px', right: '15px', left: '15px', height: '2em' }}>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom bg-dark" style={{marginBottom: '0'}}>
        <MobileHamburger collapsibleId={`navbarSupportedContent`} />
        <div className="navbar-nav row collapse navbar-collapse" id={`navbarSupportedContent`}>
          <div className={`nav-item col-md-4 col-12`}>
            <h2><Link to="/adalida" className="nav-link">BACK HOME</Link></h2>
          </div>
          <div className={`nav-item col-md-6 col-12`}></div>
          <NavLink href="/adalida" text="ABOUT" width={1} />
        </div>
      </nav>
    </header>
  </>

export default Header
