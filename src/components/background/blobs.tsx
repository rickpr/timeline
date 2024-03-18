import React, { useContext, useMemo } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext, darkGradientColor, lightGradientColor } from 'theme_context'

import BottomBlob from './bottom_blob'
import TopBlob from './top_blob'

const Blobs = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const gradientColor = useMemo(() => themeContext.darkMode ? darkGradientColor : lightGradientColor, [themeContext.darkMode])
  const { background } = useDarkModeStyle(themeContext.darkMode, themeContext)

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
