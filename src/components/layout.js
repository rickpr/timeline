import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) =>
  <div className='custom-body-background'>
    <div style={{minHeight: '2em'}}></div>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
