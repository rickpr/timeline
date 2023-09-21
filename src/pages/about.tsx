import React from 'react'
import 'sass/custom.scss'

import AdalidaPage from 'components/adalida_page'
import useDarkMode from 'hooks/use_dark_mode'

const About = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return <AdalidaPage aboutPage={true} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
}

export default About
