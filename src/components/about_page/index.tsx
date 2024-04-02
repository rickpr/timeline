import React from 'react'

import ShapingCompanies from '../services/shaping_companies'
import FAQs from '../services/faqs'

import Degree from './degree'
import NewMexicoGrown from './new_mexico_grown'

const AboutPage = (): JSX.Element => {
  return (
    <>
      <NewMexicoGrown />
      <Degree />
      <ShapingCompanies />
      <FAQs />
    </>
  )
}

export default AboutPage
