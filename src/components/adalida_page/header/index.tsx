import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

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
  const { darkMode } = useContext(ThemeContext)
  const { background, text: color } = useDarkModeStyle(darkMode)
  const isHomePage = setIsAboutPage !== undefined
  return (
    <div style={{
      position: 'sticky',
      top: 0,
      transition: 'all 0.5s',
      zIndex: 1,
      background,
      color,
      width: '100dvw',
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
  )
}

export default Header
