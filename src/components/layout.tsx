import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element =>
  <>
    <Header />
    <div>
      {children}
    </div>
    <Footer />
  </>

export default Layout
