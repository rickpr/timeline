import React from 'react'
import 'sass/custom.scss'

import AdalidaPage from 'components/adalida_page'
import useDarkMode from 'hooks/use_dark_mode'

const Profession = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return <AdalidaPage professionPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
}

export const Head = (): JSX.Element => <title>Profession</title>
export default Profession
