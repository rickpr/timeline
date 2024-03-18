import React from 'react'

import ContactInformation from './contact_information'
import Container from './container'
import SectionHeading from '../section_heading'

const PortfolioPage = (): JSX.Element => {
  return (
    <div className='portfolio-container'>
      <ContactInformation />
      <div className='portfolio-section'>
        <div className='heading'>
          <SectionHeading title='Portfolio' />
        </div>
        <Container />
      </div>
    </div>
  )
}

export default PortfolioPage
