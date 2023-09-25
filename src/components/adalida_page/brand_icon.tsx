import type { TablerIconsProps } from '@tabler/icons-react'
import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import { glassStyles } from './styles'

const styles = {
  ...glassStyles,
  transition: 'all 0.5s ease-in-out',
  borderRadius: '500px',
  width: '40px',
  height: '40px',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center'
}

const BrandIcon = ({ href, Icon }: { href: string, Icon: (props: TablerIconsProps) => JSX.Element }): React.ReactElement => {
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
      <Icon />
    </a>
  )
}

export default BrandIcon
