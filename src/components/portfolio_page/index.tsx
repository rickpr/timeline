import React from 'react'

import ContactInformation from './contact_information'
import Container from './container'
import SectionHeading from '../section_heading'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <ContactInformation />
      <SectionHeading title='Selected Work' />
      <Container />
    </>
  )
}

export default PortfolioPage
