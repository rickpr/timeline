import React from 'react'

import ProjectThemes from 'project_themes'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/layout'
import SEO from 'components/seo'
import AirbrushArtStudio from 'components/case_studies/airbrush_art_studio'

const AirbrushArtStudioPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={ProjectThemes.AirbrushArtStudio} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <AirbrushArtStudio />
    </Layout>
  )
}

export const Head = (): JSX.Element => <SEO title='Airbrush Art Studio' />

export default AirbrushArtStudioPage
