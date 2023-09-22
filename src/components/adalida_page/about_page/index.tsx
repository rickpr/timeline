import React, { useContext, useState } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import About from './about'
import ContactInformation from './contact_information'
import ChallengeDesigns from './challenge_designs'
import SegmentedPicker from './segmented_picker'

import 'sass/adalida_page/index.scss'

const AboutPage = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = useDarkModeStyle(darkMode)
  const [pickedSegment, setPickedSegment] = useState('About')
  const containerStyle = {
    transition: 'background-color 0.5s ease-in-out',
    background,
    color: text,
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
