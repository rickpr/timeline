import React from 'react'

import ContactInformaton from './contact_information'
import Container from './container'
import SectionHeading from '../section_heading'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <ContactInformaton />
      <SectionHeading title='Selected Work' />
      <Container />
    </>
  )
}

export default PortfolioPage
