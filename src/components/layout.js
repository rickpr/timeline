import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) =>
  <>
    <Header />
    <div className="container">
      {children}
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  </>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
