import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'
import useIsMobile from 'hooks/use_is_mobile'

import DarkModeButton from './dark_mode_button'
import Logo from './logo'

const glassStyles = {
  borderRadius: '100px',
  border: '1px solid rgba(255, 255, 255, 0.10)',
  background: 'linear-gradient(159deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 100.06%)',
  boxShadow: '0px 4px 24px -1px rgba(21, 33, 99, 0.25)',
  backdropFilter: 'blur(20px)'
}

const navElementStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  lineHeight: 1,
  border: 'none',
  pointerEvents: 'auto' as const
}

const logoStyle = {
  ...glassStyles,
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  display: 'flex',
  height: '60px',
  width: '60px',
  padding: '8px'
}

const nameStyle = {
  fontFamily: 'Inter',
  fontSize: '20px'
}

const switchGridStyle = {
  color: 'unset',
  display: 'grid',
  background: 'none',
  border: 'none',
  position: 'relative' as const,
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(0, 1fr)',
  placeItems: 'center',
  placeContent: 'center',
  gap: '14px',
  padding: '8px',
  minHeight: '100%',
  pointerEvents: 'auto' as const,
  cursor: 'pointer' as const
}

const switchTextStyle = {
  fontSize: '18px',
  lineHeight: 1,
  padding: '8px'
}

interface Props {
  sticky?: React.ReactNode
  isAboutPage?: boolean
  setIsAboutPage?: (updateAboutPage: boolean | ((isAboutPage: boolean) => boolean)) => void
}

const toggleAboutPage = (setIsAboutPage?: (updateAboutPage: (isAboutPage: boolean) => boolean) => void): void => {
  if (setIsAboutPage === undefined) return

  setIsAboutPage((isAboutPage: boolean) => {
    history.pushState({}, '', isAboutPage ? '/' : '/about')
    return !isAboutPage
  })
}

const Header = ({ sticky, isAboutPage, setIsAboutPage }: Props): JSX.Element => {
  const isMobile = useIsMobile()
  const { darkMode } = useContext(ThemeContext)
  const { background, text: color } = useDarkModeStyle(darkMode)

  const homeLink = (
    <Link style={{ display: 'flex', alignItems: 'center', gap: '10px' }} to='/'>
      <Logo style={logoStyle} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', gap: '8px' }}>
        {isMobile === false &&
         <>
           <span style={{ ...nameStyle, fontWeight: 600 }}>Adalida Baca</span>
           <span style={{ ...nameStyle, fontWeight: 300 }}>Product Designer</span>
         </>
        }
      </div>
    </Link>
  )

  const aboutPageSwitch = (): JSX.Element => (
    <div style={{ padding: '6px', ...glassStyles }}>
      <button style={switchGridStyle} onClick={() => { toggleAboutPage(setIsAboutPage) }}>
        <span style={switchTextStyle}>ABOUT</span>
        <span style={switchTextStyle}>WORK</span>
        <div style={{
          ...glassStyles,
          position: 'absolute',
          backdropFilter: undefined,
          border: '1px solid rgba(255, 255, 255, 0.25)',
          width: '50%',
          height: '100%',
          transition: 'all 0.2s ease-in-out',
          left: 0,
          transform: isAboutPage === true ? undefined : 'translateX(100%)'
        }} />
      </button>
    </div>
  )

  return (
    <div style={{ position: 'sticky', top: 0, transition: 'all 0.5s', zIndex: 1, background, color }}>
      <div style={{
        width: '100dvw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px 60px 10px 60px'
      }}>
        <div style={navElementStyle}>{homeLink}</div>
        {setIsAboutPage !== undefined && <div style={navElementStyle}>{aboutPageSwitch()}</div>}
        <div style={navElementStyle}><DarkModeButton /></div>
      </div>
      {sticky}
    </div>
  )
}

export default Header
