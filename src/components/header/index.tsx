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
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 7.5dvw',
          height: `${headerPixels}px`
        }}
        className='thin-glass'
      >
        {isHomePage ? <HomeLink /> : <BackButton />}
        {isHomePage && <PortfolioPageSwitch isPortfolioPage={isPortfolioPage} setIsPortfolioPage={setIsPortfolioPage} />}
        <DarkModeButton />
      </div>
    </>
  )
}

export default Header
