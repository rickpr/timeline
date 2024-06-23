import React, { useContext } from 'react'

import { HomePageContext } from '../home_page_context'
import PortfolioPageSwitch from './portfolio_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

export const headerPixels = 80

const Header = (): JSX.Element => {
  const { togglePortfolioPage } = useContext(HomePageContext)
  const isHomePage = togglePortfolioPage !== undefined
  return (
    <div className='thin-glass navbar' >
      {isHomePage ? <HomeLink /> : <BackButton />}
      {isHomePage && <PortfolioPageSwitch />}
      <DarkModeButton />
    </div>
  )
}

export default Header
