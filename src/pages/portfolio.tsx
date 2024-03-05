import React from 'react'

import AdalidaPage from 'components/adalida_page'
import { HomePageProvider } from 'components/adalida_page/home_page_context'
import useDarkMode from 'hooks/use_dark_mode'

const Portfolio = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <HomePageProvider portfolioPage>
      <AdalidaPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </HomePageProvider>
  )
}

export const Head = (): JSX.Element => <title>Portfolio</title>
export default Portfolio
