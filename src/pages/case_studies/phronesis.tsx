import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/layout'
import Phronesis from 'components/case_studies/phronesis'

const PhronesisPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={CaseStudyThemes.Phronesis} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Phronesis />
    </Layout>
  )
}

export default PhronesisPage
