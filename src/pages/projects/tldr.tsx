import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'
import useDarkMode from 'hooks/use_dark_mode'

import TLDR from 'components/adalida_page/projects/tldr'
import Layout from 'components/adalida_page/layout'

const TLDRPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout project={Projects.TLDR} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <TLDR />
    </Layout>
  )
}

export default TLDRPage
