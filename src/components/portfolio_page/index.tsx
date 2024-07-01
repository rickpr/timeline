import React from 'react'

import Container from './container'
import Intro from './intro'
import SectionHeading from '../section_heading'

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <Intro />
      <SectionHeading title='Selected Work' />
      <Container />
    </>
  )
}

export default PortfolioPage
