import React from 'react'

import MainPage from 'components'
import { HomePageProvider } from 'components/home_page_context'
import useDarkMode from 'hooks/use_dark_mode'

const About = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <HomePageProvider portfolioPage={false}>
      <MainPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </HomePageProvider>
  )
}

export const Head = (): JSX.Element => <title>About</title>
export default About
