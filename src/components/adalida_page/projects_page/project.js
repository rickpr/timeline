import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import Header from './header'
import Footer from './footer'
import SocialFooter from './social_footer'

const Project = ({ children }) => {
  const { name } = useContext(ThemeContext)
  const style = name === 'Phronesis' ? { background: '#1A191C' } : {}
  return (
    <div style={style}>
      <Header />
      {children}
      <Footer />
      <SocialFooter />
    </div>
  )
}

Project.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default Project
