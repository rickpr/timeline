import React from 'react'
import 'sass/custom.scss'

import Layout from 'components/adalida_page/layout'
import AboutPage from 'components/adalida_page/about_page'
import useDarkMode from 'hooks/use_dark_mode'
import { AboutTheme } from 'theme_context'

const About = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={AboutTheme} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <AboutPage />
    </Layout>
  )
}

export const Head = (): JSX.Element => <title>About</title>
export default About
