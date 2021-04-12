import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import MemphisPattern from './memphis_pattern'

const Layout = ({ children }) =>
  <>
    <MemphisPattern />
    <div style={{minHeight: '2em'}}></div>
    <Header />
    <div>
      {children}
    </div>
    <Footer />
  </>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
