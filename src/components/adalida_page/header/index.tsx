import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

import AboutPageSwitch from './about_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'

interface Props {
  sticky?: React.ReactNode
  isAboutPage?: boolean
  setIsAboutPage?: (updateAboutPage: boolean | ((isAboutPage: boolean) => boolean)) => void
}

const Header = ({ sticky, isAboutPage, setIsAboutPage }: Props): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text: color } = useDarkModeStyle(darkMode)

  return (
    <div style={{ position: 'fixed', top: 0, transition: 'all 0.5s', zIndex: 1, background, color }}>
      <div style={{
        width: '100dvw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px 7.5dvw 10px'
      }}>
        <HomeLink />
        {setIsAboutPage !== undefined &&
          <AboutPageSwitch
            isAboutPage={isAboutPage}
            setIsAboutPage={setIsAboutPage}
          />
        }
        <DarkModeButton />
      </div>
      {sticky}
    </div>
  )
}

export default Header
