import React, { useContext, useEffect, useState, type CSSProperties } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext, darkGradientColor, lightGradientColor } from 'theme_context'

const backgroundGradient = (color: string, darkMode: boolean): string => {
  const gradientColor = darkMode ? darkGradientColor : lightGradientColor
  return `linear-gradient(248deg, ${gradientColor} 13.28%, ${color} 58.07%, ${gradientColor} 90.12%)`
}

const sphereGradient = (color: string, darkMode: boolean): string => {
  const gradientColor = darkMode ? darkGradientColor : lightGradientColor
  return `radial-gradient(circle at 33% 33%, ${color}, ${gradientColor})`
}

const Background = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { background } = useDarkModeStyle(themeContext.darkMode, themeContext)

  const [isTransitioning, setIsTransitioning] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [oldBackground, setOldBackground] = useState<CSSProperties['background']>(background)
  useEffect(() => {
    if (oldBackground === background) return
    setOpacity(0)
    setIsTransitioning(true)
    const opacityTimeout = setTimeout(() => { setOpacity(1) }, 50)
    const useStateTimeout = setTimeout(() => {
      setOldBackground(background)
      setIsTransitioning(false)
    }, 550)
    return () => {
      clearTimeout(opacityTimeout)
      clearTimeout(useStateTimeout)
    }
  }, [background, oldBackground])

  return (
    <>
      <div className='fixed-background' style={{ background: backgroundGradient(oldBackground, themeContext.darkMode) }}>
        <div className='background-sphere top-left-sphere' style={{ background: sphereGradient(oldBackground, themeContext.darkMode) }} />
        <div className='background-sphere bottom-right-sphere' style={{ background: sphereGradient(oldBackground, themeContext.darkMode) }} />
      </div>
      {isTransitioning && (
        <div className='fixed-background' style={{ zIndex: -1, background: backgroundGradient(background, themeContext.darkMode), opacity }}>
          <div className='background-sphere' style={{ background: sphereGradient(background, themeContext.darkMode) }} />
          <div className='background-sphere bottom-right-sphere' style={{ background: sphereGradient(background, themeContext.darkMode) }} />
        </div>
      )}
    </>
  )
}

export default Background
