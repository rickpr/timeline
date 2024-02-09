import React from 'react'

import ContactInformation from './contact_information'
import Container from '../card/container'
import SectionHeading from '../section_heading'

import 'sass/adalida_page/index.scss'

const containerStyle = {
  transition: 'background-color 0.5s ease-in-out',
  padding: '0 7.5dvw',
  gap: '2em',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center'
}

const ProfessionPage = (): JSX.Element => {
  return (
    <div style={containerStyle}>
      <ContactInformation />
      <div style={{ maxWidth: '100dvw' }}>
        <SectionHeading title='Portfolio' />
        <Container />
      </div>
    </div>
  )
}

export default ProfessionPage
