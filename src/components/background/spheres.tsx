import React, { useContext, useMemo } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext, darkGradientColor, lightGradientColor } from 'theme_context'

import SphereWithTransition from './sphere_with_transition'

const Spheres = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const gradientColor = useMemo(() => themeContext.darkMode ? darkGradientColor : lightGradientColor, [themeContext.darkMode])
  const { background } = useDarkModeStyle(themeContext.darkMode, themeContext)

  return (
    <>
      <div className='background-sphere top-left-sphere'>
        <SphereWithTransition background={background} gradientColor={gradientColor} />
      </div>
      <div className='background-sphere bottom-right-sphere'>
        <SphereWithTransition background={background} gradientColor={gradientColor} />
      </div>
    </>
  )
}

export default Spheres
