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
          <ul className="navbar-nav mr-auto">
            <NavLink href="/" text="Home" />
            <NavLink href="/adalida" text="Adalida's Page" />
            <NavLink href="/ricardo" text="Ricardo's Page" />
            <NavLink href="/us" text="Us Page" />
          </ul>
        </div>
      </nav>
    </header>
  )
}


export default Header
