import React, { useContext } from 'react'
import SplineComponent from '@splinetool/react-spline'

import FileQuery from 'queries/file'
import DarkModeContext from 'dark_mode_context'

const Spline = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const filename = `${darkMode ? 'dark' : 'light'}_mode.splinecode`
  const backgroundAnimation = FileQuery(filename)

  return <SplineComponent scene={backgroundAnimation} />
}

export default Spline
