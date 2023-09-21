import { Link } from 'gatsby'
import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import Logo from './logo'
import { glassStyles } from './styles'

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
  fontSize: '20px'
}

const HomeLink = (): JSX.Element => {
  const isMobile = useIsMobile(768) === true
  const size = isMobile ? '40px' : '54px'
  return (
    <Link style={{ display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1 }} to='/'>
      <Logo style={{ ...logoStyle, height: size, width: size }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', gap: '8px' }}>
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
