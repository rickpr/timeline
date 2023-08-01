import React from 'react'

const BrandIcon = ({ href, icon }: { href: string, icon: React.ReactNode }): React.ReactElement =>
  <a href={href} target='_blank' rel='noreferrer' className='brand-icon'>
    <svg viewBox="-9 -9 42 42" xmlns="http://www.w3.org/2000/svg" width="30px">
      <circle cx="12" cy="12" r="20" fill="white" stroke="#AAAAAA" strokeWidth="1" />
      <g>
        {icon}
      </g>
    </svg>
  </a>

export default BrandIcon
