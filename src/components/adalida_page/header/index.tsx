import { Link } from 'gatsby'
import React from 'react'

import DarkModeButton from './dark_mode_button'
import Logo from './logo'

const Header = (): JSX.Element => {
  const navElementStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    lineHeight: 1,
    border: 'none',
    pointerEvents: 'auto' as const
  }

  return (
    <div style={{
      width: '100dvw',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '18px 7.5dvw 0 7.5dvw'
    }}>
      <div style={navElementStyle}>
        <Link style={{ display: 'flex', alignItems: 'center', gap: '5px' }} to='/adalida'>
          <Logo style={{ height: '15px' }} />
          ADALIDA
        </Link>
      </div>
      <div style={navElementStyle}>
        <DarkModeButton />
      </div>
      <div style={navElementStyle}>
        <Link to='/adalida/about'>
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Header
