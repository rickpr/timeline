import React from 'react'

import Header from './header'
import Footer from './footer'
import SocialFooter from '../social_footer'

const CaseStudy = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <SocialFooter />
    </div>
  )
}

export default CaseStudy
