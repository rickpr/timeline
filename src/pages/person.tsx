import React from 'react'
import 'sass/custom.scss'

import AdalidaPage from 'components/adalida_page'
import useDarkMode from 'hooks/use_dark_mode'

const Person = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return <AdalidaPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
}

export const Head = (): JSX.Element => <title>Person</title>
export default Person
