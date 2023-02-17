import React, { useEffect, useState } from 'react'

import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'

import BrandIcon from 'components/adalida_page/brand_icon'

const SocialFooter = () => {
  const [currentPage, setCurrentPage] = useState()
  useEffect(() => {
    setCurrentPage(window.location.href)
  }, [])
  return (
    <div className='social-footer'>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        Coded by&nbsp;<a href="https://fdisk.co">https://fdisk.co</a>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        Share this on
        <BrandIcon href={`https://facebook.com/sharer.php?u=${currentPage}`} icon={<IconBrandFacebook />} />
        <BrandIcon href={`https://twitter.com/share?url=${currentPage}`} icon={<IconBrandTwitter />} />
        <BrandIcon href={`https://www.linkedin.com/shareArticle?url=${currentPage}`} icon={<IconBrandLinkedin />} />
      </div>
    </div>
  )
}

export default SocialFooter
