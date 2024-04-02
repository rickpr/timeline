import React from 'react'

import PortfolioPageSwitch from './portfolio_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

interface Props {
  isPortfolioPage?: boolean
  setIsPortfolioPage?: (updatePortfolioPage: boolean | ((isPortfolioPage: boolean) => boolean)) => void
}

export const headerPixels = 80

const Header = ({ isPortfolioPage, setIsPortfolioPage }: Props): JSX.Element => {
  const isHomePage = setIsPortfolioPage !== undefined
  return (
    <div className='thin-glass navbar' >
      {isHomePage ? <HomeLink /> : <BackButton />}
      {isHomePage && <PortfolioPageSwitch isPortfolioPage={isPortfolioPage} setIsPortfolioPage={setIsPortfolioPage} />}
      <DarkModeButton />
    </div>
  )
}

export default Header
