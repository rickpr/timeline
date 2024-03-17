import React from 'react'

import MainPage from 'components'
import { HomePageProvider } from 'components/home_page_context'
import useDarkMode from 'hooks/use_dark_mode'

const Portfolio = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <HomePageProvider portfolioPage>
      <MainPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </HomePageProvider>
  )
}

export const Head = (): JSX.Element => <title>Portfolio</title>
export default Portfolio
