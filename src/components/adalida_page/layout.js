import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) =>
  <>
    <Header />
    <div style={{ width: '95%', margin: '0 auto' }}>
      {children}
    </div>
    <Footer />
  </>

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
