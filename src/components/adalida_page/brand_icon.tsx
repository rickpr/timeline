import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import { glassStyles } from './styles'

const styles = {
  ...glassStyles,
  transition: 'all 0.5s ease',
  borderRadius: '500px',
  width: '40px',
  height: '40px',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center'
}

const BrandIcon = ({ href, icon }: { href: string, icon: React.ReactNode }): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(darkMode)
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='brand-icon'
      style={{ color, ...styles }}
    >
      {icon}
    </a>
  )
}

export default BrandIcon
