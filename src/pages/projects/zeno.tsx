import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/adalida_page/projects/layout'
import Zeno from 'components/adalida_page/projects/zeno'

const ZenoPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout project={Projects.Zeno} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Zeno />
    </Layout>
  )
}

export default ZenoPage
