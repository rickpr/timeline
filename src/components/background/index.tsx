import React, { useContext, useMemo } from 'react'

import DarkModeContext from 'dark_mode_context'
import DarkModeStyle from 'dark_mode_style'
import Spheres from './spheres'

const Background = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { background } = useMemo(() => DarkModeStyle(darkMode), [darkMode])
  return (
    <div className='fixed-background' style={{ background }}>
      <Spheres />
      <div className='background-glass' />
    </div>
  )
}

export default Background
