import React, { useContext, useEffect, useState } from 'react'
import SplineComponent from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

import FileQuery from 'queries/file'
import { ThemeContext, darkBackgroundColor, lightBackgroundColor } from 'theme_context'

const ANIMATION_DURATION = 42000

const Spline = (): JSX.Element => {
  const context = useContext(ThemeContext)
  const { darkMode } = context
  const backgroundAnimation = FileQuery('background.splinecode').publicURL
  const [spline, setSpline] = useState<Application | null>(null)

  const onSplineLoad = (splineApplication: Application): void => {
    setSpline(splineApplication)
    setInterval(() => {
      splineApplication.stop()
      splineApplication.play()
    }, ANIMATION_DURATION)
  }

  useEffect(() => {
    spline?.setBackgroundColor(darkMode ? darkBackgroundColor : lightBackgroundColor)
  }, [darkMode, spline])

  return <SplineComponent scene={backgroundAnimation} onLoad={onSplineLoad} style={{ transition: 'background-color 0.5s ease-in-out' }} />
}

export default Spline
