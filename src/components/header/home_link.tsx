import { Link } from 'gatsby'
import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import Logo from '../logo'

const nameStyle = { fontSize: '15px' }

const HomeLink = (): JSX.Element | null => {
  const isMobile = useIsMobile(768)
  if (isMobile === null) return null

  return (
    <Link style={{ display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1 }} to='/'>
      <Logo />
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
