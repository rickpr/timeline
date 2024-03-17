import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import useDarkMode from 'hooks/use_dark_mode'

import TLDR from 'components/case_studies/tldr'
import Layout from 'components/layout'

const TLDRPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={CaseStudyThemes.TLDR} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <TLDR />
    </Layout>
  )
}

export default TLDRPage
