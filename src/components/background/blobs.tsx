import React, { useContext, useMemo } from 'react'

import darkModeStyle from 'dark_mode_style'
import { ThemeContext, darkBackgroundColor, lightBackgroundColor } from 'theme_context'

import BottomBlob from './bottom_blob'
import TopBlob from './top_blob'

const Blobs = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const gradientColor = useMemo(() => themeContext.darkMode ? darkBackgroundColor : lightBackgroundColor, [themeContext.darkMode])
  const { background } = darkModeStyle(themeContext.darkMode, themeContext)

  return (
    <>
      <div className='background-blob top-right-blob'>
        <TopBlob background={background} gradientColor={gradientColor} />
      </div>
      <div className='background-blob bottom-left-blob'>
        <BottomBlob background={background} gradientColor={gradientColor} />
      </div>
    </>
  )
}

export default Blobs
