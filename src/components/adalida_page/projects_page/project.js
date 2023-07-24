import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import Header from './header'
import Footer from './footer'
import SocialFooter from './social_footer'

const Project = ({ children }) => {
  const { darkMode } = useContext(ThemeContext)
  const style = {
    transition: 'background-color 0.5s ease',
    background: darkMode ? '#1A191C' : '#F5F5F5',
    color: darkMode ? '#F5F5F5' : '#1A191C'
  }
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
