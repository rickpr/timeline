import React, { useContext, useMemo } from 'react'

import { ThemeContext, darkBackgroundColor, lightBackgroundColor } from 'theme_context'
import Blobs from './blobs'

const Background = (): JSX.Element => {
  const context = useContext(ThemeContext)
  const { darkMode } = context
  const background = useMemo(
    () => darkMode ? darkBackgroundColor : lightBackgroundColor,
    [darkMode]
  )
  return (
    <div className='fixed-background' style={{ background }}>
      <Blobs />
    </div>
  )
}

export default Background
