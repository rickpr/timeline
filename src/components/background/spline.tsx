import React, { useContext } from 'react'
import SplineComponent from '@splinetool/react-spline'

import FileQuery from 'queries/file'
import { ThemeContext } from 'theme_context'

const Spline = (): JSX.Element => {
  const context = useContext(ThemeContext)
  const { darkMode } = context
  const filename = `${darkMode ? 'dark' : 'light'}_mode.splinecode`
  const backgroundAnimation = FileQuery(filename).publicURL

  return <SplineComponent scene={backgroundAnimation} />
}

export default Spline
