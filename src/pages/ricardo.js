import React from 'react'
import { Link } from 'gatsby'
import '../sass/custom.scss'

import NavLink from '../components/header/nav_link'
import MobileHamburger from '../components/header/mobile_hamburger'
import RicardoPage from '../components/ricardo_page'

const Ricardo = () =>
  <>
    <div style={{minHeight: '2em'}}></div>
    <header>
      <div style={{ border: '5px solid black', position: 'absolute', top: '15px', right: '15px', left: '15px', zIndex: -1, height: '2em' }}>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <MobileHamburger collapsibleId={`navbarSupportedContent`} />
        <div className="navbar-nav row collapse navbar-collapse" id={`navbarSupportedContent`}>
          <div className={`nav-item col-md-4 col-12`}>
            <h2><Link to="/ricardo" className="nav-link">Ricardo</Link></h2>
          </div>
          <div className={`nav-item col-md-3 col-12`}></div>
          <NavLink href="/ricardo" text="Work" width={1} />
          <NavLink text="About" width={1} />
          <NavLink text="Resume" width={1} />
          <NavLink text="Contact" width={1} />
        </div>
      </nav>
    </header>
    <RicardoPage />
  </>

export default Ricardo