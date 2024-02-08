import React from 'react'

import MyStory from './my_story'

import 'sass/adalida_page/index.scss'

const containerStyle = {
  transition: 'background-color 0.5s ease-in-out',
  padding: '0 7.5dvw',
  gap: '2em',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center'
}

const AboutPage = (): JSX.Element => {
  return <div style={containerStyle}><MyStory /></div>
}

export default AboutPage
