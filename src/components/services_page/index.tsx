import React from 'react'

import ShapingCompanies from '../services/shaping_companies'
import FAQs from '../services/faqs'
import MyProcess from './my_process'

const ServicesPage = (): JSX.Element => {
  return (
    <>
      <ShapingCompanies/>
      <MyProcess />
      <FAQs />
    </>
  )
}

export default ServicesPage
