import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/footer.scss'

const Footer = () =>
  <nav
    className='adalida-footer'
    style={{ borderColor: useContext(ThemeContext).border || '#FFFFFF' }}
  />

export default Footer
