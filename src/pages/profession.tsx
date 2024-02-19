import React from 'react'
import 'sass/custom.scss'

import AdalidaPage from 'components/adalida_page'
import { HomePageProvider } from 'components/adalida_page/home_page_context'
import useDarkMode from 'hooks/use_dark_mode'

const Profession = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <HomePageProvider professionPage>
      <AdalidaPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </HomePageProvider>
  )
}

export const Head = (): JSX.Element => <title>Profession</title>
export default Profession
