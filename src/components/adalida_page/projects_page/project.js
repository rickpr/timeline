import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'
import Footer from './footer'
import SocialFooter from './social_footer'

const Project = ({ children }) =>
  <div>
    <Header />
    {children}
    <Footer />
    <SocialFooter />
  </div>

Project.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default Project
