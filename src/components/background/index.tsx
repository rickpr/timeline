import React, { useContext, useMemo } from 'react'

import { ThemeContext, darkGradientColor, lightGradientColor } from 'theme_context'
import Spheres from './spheres'

const Background = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const background = useMemo(
    () => darkMode ? darkGradientColor : lightGradientColor,
    [darkMode]
  )
  return <div className='fixed-background' style={{ background }}><Spheres /></div>
}

export default Background
