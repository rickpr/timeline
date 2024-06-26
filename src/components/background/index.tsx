import React, { useContext } from 'react'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'

import Spline from './spline'

const Background = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { background } = darkModeStyle(darkMode)
  return (
    <div className='fixed-background' style={{ background }}>
      <Spline />
    </div>
  )
}

export default Background
