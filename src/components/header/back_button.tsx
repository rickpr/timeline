import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { IconArrowLeft } from '@tabler/icons-react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

const BackButton = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
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
