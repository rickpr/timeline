import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import useDarkMode from 'hooks/use_dark_mode'

import TLDR from 'components/adalida_page/case_studies/tldr'
import Layout from 'components/adalida_page/layout'

const TLDRPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={CaseStudyThemes.TLDR} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <TLDR />
    </Layout>
  )
}

export default TLDRPage
