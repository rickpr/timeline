import { Link } from 'gatsby'
import React from 'react'
import { IconBrandDribbble, IconBrandLinkedin } from '@tabler/icons-react'

import BrandIcon from './brand_icon'

import 'sass/adalida_page/index.scss'

import AdalidaFace from 'images/adalida_face.jpg'

const Sidebar = () => {
  return (
    <>
      <div className='about-sidebar-placeholder' />
      <div className='about-sidebar'>
        <div>
          <img alt='Adalida Portrait' src={AdalidaFace} style={{ width: '100%' }} />
          <h2>Adalida Baca</h2>
          <p>
            Hello, I&apos;m an enthusiastic Product Designer in the Bay Area.
            Welcome to my portfolio!
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <BrandIcon href='https://dribbble.com/adalida-baca' icon={<IconBrandDribbble />} />
            <BrandIcon href='https://linkedin.com/in/adalidabaca' icon={<IconBrandLinkedin />} />
          </div>
        </div>
        <div className='apps-sidebar-links'>
          <Link to="/adalida">HOME</Link>
          <Link to="/adalida/about">ABOUT</Link>
          <a href="mailto:adalida@adalida.design">CONTACT</a>
        </div>
      </div>
    </>
  )
}

export default Sidebar
