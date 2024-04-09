import React from 'react'

const Link = ({ to, text }: { to: string, text: string }): JSX.Element => {
  const isExternalLink = to.includes(':')
  const arrow = isExternalLink ? <div className='rotated-arrow' /> : ' ➜'
  return (
    <a href={to} target={isExternalLink ? '_blank' : '_self'} rel='noreferrer' className='footer-link'>
      {text}{arrow}
    </a>
  )
}

export default Link
