import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { IconArrowLeft } from '@tabler/icons-react'

import { ThemeContext } from 'theme_context'
import { glassStyles } from '../styles'

const BackButton = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const color = darkMode ? 'white' : 'black'
  const backButtonStyle = {
    ...glassStyles,
    transition: 'all 0.5s ease-in-out',
    height: '40px',
    width: '40px',
    color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer' as const
  }

  return <Link to='/' style={backButtonStyle}><IconArrowLeft /></Link>
}

export default BackButton
