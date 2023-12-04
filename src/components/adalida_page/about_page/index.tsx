import React from 'react'

import ContactInformation from './contact_information'
import MyStory from './my_story'

import 'sass/adalida_page/index.scss'

const AboutPage = (): JSX.Element => {
  const containerStyle = {
    transition: 'background-color 0.5s ease-in-out',
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
