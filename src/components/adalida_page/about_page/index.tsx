import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import ContactInformation from './contact_information'
import MyStory from './my_story'

import 'sass/adalida_page/index.scss'

const AboutPage = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = useDarkModeStyle(darkMode)
  const containerStyle = {
    transition: 'background-color 0.5s ease-in-out',
    background,
    color: text,
    padding: '1dvh 7.5dvw',
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
