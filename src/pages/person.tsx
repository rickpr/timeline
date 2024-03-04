import React from 'react'

import AdalidaPage from 'components/adalida_page'
import { HomePageProvider } from 'components/adalida_page/home_page_context'
import useDarkMode from 'hooks/use_dark_mode'

const Person = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <HomePageProvider professionPage={false}>
      <AdalidaPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </HomePageProvider>
  )
}

export const Head = (): JSX.Element => <title>Person</title>
export default Person
