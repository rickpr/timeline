import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import useDarkMode from 'hooks/use_dark_mode'

import GainTain from 'components/case_studies/gaintain'
import Layout from 'components/layout'

const GainTainPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={CaseStudyThemes.GainTain} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <GainTain />
    </Layout>
  )
}

export default GainTainPage
