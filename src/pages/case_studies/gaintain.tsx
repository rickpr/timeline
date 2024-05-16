import React from 'react'

import ProjectThemes from 'project_themes'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/layout'
import SEO from 'components/seo'
import GainTain from 'components/case_studies/gaintain'

const GainTainPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={ProjectThemes.GainTain} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <GainTain />
    </Layout>
  )
}

export const Head = (): JSX.Element => <SEO title='GainTain' />

export default GainTainPage
