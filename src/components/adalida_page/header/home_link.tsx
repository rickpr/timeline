import { Link } from 'gatsby'
import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import Logo from './logo'
import { glassStyles } from '../styles'

const logoStyle = {
  ...glassStyles,
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  display: 'flex',
  padding: '8px'
}

const nameStyle = {
  fontFamily: 'Inter',
  fontSize: '15px'
}

const HomeLink = (): JSX.Element => {
  const isMobile = useIsMobile(768) === true
  const size = '40px'
  return (
    <Link style={{ display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1 }} to='/'>
      <Logo style={{ ...logoStyle, height: size, width: size }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', gap: '6px' }}>
        {!isMobile &&
         <>
           <span style={{ ...nameStyle, fontWeight: 600 }}>Adalida Baca</span>
           <span style={{ ...nameStyle, fontWeight: 300 }}>Product Designer</span>
         </>
        }
      </div>
    </Link>
  )
}

export default HomeLink
