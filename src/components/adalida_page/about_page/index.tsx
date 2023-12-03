import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import ContactInformation from './contact_information'
import MyStory from './my_story'

import 'sass/adalida_page/index.scss'

const gradients = {
  lightMode: 'linear-gradient(159deg, #F6F6F6 -4.28%, rgba(209, 12, 24, 0.99) 210.45%), linear-gradient(142deg, #121212 10.56%, #590517 88.51%)',
  darkMode: 'linear-gradient(142deg, #121212 10.56%, #590517 88.51%)'
}

const AboutPage = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { text } = useDarkModeStyle(darkMode)
  const containerStyle = {
    transition: 'background-color 0.5s ease-in-out',
    background: darkMode ? gradients.darkMode : gradients.lightMode,
    color: text,
    padding: '0 7.5dvw',
    gap: '2em',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center'
  }

  return (
    <div style={containerStyle}>
      <ContactInformation />
      <MyStory />
    </div>
  )
}

export default AboutPage
