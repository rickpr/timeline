import React, { useContext, useState } from 'react'

import { ThemeContext } from 'theme_context'

import About from './about'
import ContactInformation from './contact_information'
import ChallengeDesigns from './challenge_designs'
import SegmentedPicker from './segmented_picker'

import 'sass/adalida_page/index.scss'

const AboutPage = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const [pickedSegment, setPickedSegment] = useState('About')
  const containerStyle = {
    transition: 'background-color 0.5s ease',
    backgroundColor: darkMode ? '#1A1A1A' : '#F5F5F5',
    color: darkMode ? '#F5F5F5' : '#1A1A1A',
    padding: '1dvh 7.5dvw',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center'
  }

  return (
    <div style={containerStyle}>
      <ContactInformation />
      <SegmentedPicker
        pickedSegment={pickedSegment}
        setPickedSegment={setPickedSegment}
        segments={['About', 'Fun']}
      />
      {pickedSegment === 'About' ? <About /> : <ChallengeDesigns />}
    </div>
  )
}

export default AboutPage
