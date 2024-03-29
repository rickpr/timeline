import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/layout'
import AirbrushArtStudio from 'components/case_studies/airbrush_art_studio'

const AirbrushArtStudioPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={CaseStudyThemes.AirbrushArtStudio} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <AirbrushArtStudio />
    </Layout>
  )
}

export default AirbrushArtStudioPage
