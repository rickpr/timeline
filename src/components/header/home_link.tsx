import { Link } from 'gatsby'
import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import Logo from '../logo'

const HomeLink = (): JSX.Element | null => {
  const isMobile = useIsMobile(768)
  if (isMobile === null) return null

  return (
    <Link className='home-link' to='/'>
      <Logo />
      <div className='header-title'>
        {!isMobile &&
         <>
           <span className='semibold'>Adalida Baca</span>
           <span className='thin-text'>Product Designer</span>
         </>
        }
      </div>
    </Link>
  )
}

export default HomeLink
