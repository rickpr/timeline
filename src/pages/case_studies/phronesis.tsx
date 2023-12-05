import React from 'react'
import 'sass/custom.scss'

import CaseStudyThemes from 'case_study_themes'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/adalida_page/layout'
import Phronesis from 'components/adalida_page/case_studies/phronesis'

const PhronesisPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={CaseStudyThemes.Phronesis} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Phronesis />
    </Layout>
  )
}

export default PhronesisPage
