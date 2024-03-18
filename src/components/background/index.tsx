import React, { useContext, useMemo } from 'react'

import { ThemeContext, darkGradientColor, lightGradientColor } from 'theme_context'
import Blobs from './blobs'

const Background = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const background = useMemo(
    () => darkMode ? darkGradientColor : lightGradientColor,
    [darkMode]
  )
  return (
    <div className='fixed-background' style={{ backgroundColor: background }}>
      <Blobs />
    </div>
  )
}

export default Background
