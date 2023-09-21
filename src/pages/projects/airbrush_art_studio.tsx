import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/adalida_page/projects/layout'
import AirbrushArtStudio from 'components/adalida_page/projects/airbrush_art_studio'

const AirbrushArtStudioPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout project={Projects.AirbrushArtStudio} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <AirbrushArtStudio />
    </Layout>
  )
}

export default AirbrushArtStudioPage
