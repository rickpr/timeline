import React from 'react'

import ProjectThemes from 'project_themes'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/layout'
import SEO from 'components/seo'
import Phronesis from 'components/case_studies/phronesis'

const PhronesisPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={ProjectThemes.Phronesis} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Phronesis />
    </Layout>
  )
}

export const Head = (): JSX.Element => <SEO title='Phronesis' />

export default PhronesisPage
