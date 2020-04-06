import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) =>
  <div className='custom-body-background'>
    <div style={{minHeight: '2em'}}></div>
    <Header />
    <div className="container">
      {children}
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  </div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
