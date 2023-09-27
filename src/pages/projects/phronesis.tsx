import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'
import useDarkMode from 'hooks/use_dark_mode'

import Layout from 'components/adalida_page/layout'
import Phronesis from 'components/adalida_page/projects/phronesis'

const PhronesisPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout project={Projects.Phronesis} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Phronesis />
    </Layout>
  )
}

export default PhronesisPage
