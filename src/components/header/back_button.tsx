import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { IconArrowLeft } from '@tabler/icons-react'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'

const BackButton = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text: color } = darkModeStyle(darkMode)
  const backButtonStyle = {
    transition: 'all 0.5s ease-in-out',
    height: '40px',
    width: '40px',
    color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer' as const
  }

  return <Link className='glass' to='/' style={backButtonStyle}><IconArrowLeft /></Link>
}

export default BackButton
