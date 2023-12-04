import React from 'react'

import AboutPageSwitch from './about_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'

interface Props {
  isAboutPage?: boolean
  setIsAboutPage?: (updateAboutPage: boolean | ((isAboutPage: boolean) => boolean)) => void
}

export const headerPixels = 80

const Header = ({ isAboutPage, setIsAboutPage }: Props): JSX.Element => {
  const isHomePage = setIsAboutPage !== undefined
  return (
    <>
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 7.5dvw',
        height: `${headerPixels}px`
      }}>
        {isHomePage ? <HomeLink /> : <BackButton />}
        {isHomePage && <AboutPageSwitch isAboutPage={isAboutPage} setIsAboutPage={setIsAboutPage} />}
        <DarkModeButton />
      </div>
    </>
  )
}

export default Header
