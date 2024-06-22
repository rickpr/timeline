import React from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import ContactInformation from './contact_information'
import Container from './container'
import SectionHeading from '../section_heading'

const PortfolioPage = (): JSX.Element => {
  useAnimateOnScroll()
  return (
    <>
      <ContactInformation />
      <SectionHeading title='Selected Work' />
      <Container />
    </>
  )
}

export default PortfolioPage
