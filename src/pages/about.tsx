import React from 'react'

import Layout from 'components/adalida_page/layout'
import AboutPage from 'components/adalida_page/about_page'
import useDarkMode from 'hooks/use_dark_mode'
import FacetThemes from 'facet_themes'

const About = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={FacetThemes.About} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <AboutPage />
    </Layout>
  )
}

export const Head = (): JSX.Element => <title>About</title>
export default About
