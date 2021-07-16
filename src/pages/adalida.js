import React from 'react'
import { Link } from 'gatsby'
import '../sass/custom.scss'

import NavLink from '../components/header/nav_link'
import MobileHamburger from '../components/header/mobile_hamburger'
import AdalidaPage from '../components/adalida_page'

const Adalida = () =>
  <>
    <div style={{minHeight: '2em'}}></div>
    <header>
      <div style={{ border: '5px solid black', position: 'absolute', top: '15px', right: '15px', left: '15px', zIndex: -1, height: '2em' }}>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <MobileHamburger collapsibleId={`navbarSupportedContent`} />
        <div className="navbar-nav row collapse navbar-collapse" id={`navbarSupportedContent`}>
          <div className={`nav-item col-md-4 col-12`}>
            <h2><Link to="/adalida" className="nav-link">ADALIDA BACA</Link></h2>
          </div>
          <div className={`nav-item col-md-6 col-12`}></div>
          <NavLink text="ABOUT" width={1} />
        </div>
      </nav>
    </header>
    <AdalidaPage />
  </>

export default Adalida
