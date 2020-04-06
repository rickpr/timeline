import React from 'react'
import MobileHamburger from './mobile_hamburger'
import NavLink from './nav_link'

const Header = () => {
  const collapsibleId = 'navbarSupportedContent'
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <MobileHamburger collapsibleId={collapsibleId} />
        <div className="collapse navbar-collapse" id={collapsibleId} >
          <div className="navbar-nav row">
            <NavLink href="/adalida" text="Adalida" className="col-xs-4" />
            <NavLink href="/" text="Us Page" className="col-xs-4" />
            <NavLink href="/ricardo" text="Ricardo" className="col-xs-4" />
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header
