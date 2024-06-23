import type { Icon as IconType, IconProps } from '@tabler/icons-react'
import React, { useContext, type CSSProperties } from 'react'

import darkModeStyle from 'dark_mode_style'
import DarkModeContext from 'dark_mode_context'

// https://github.com/tabler/tabler-icons/issues/1035#issuecomment-1997198857
type TablerIcon = React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<IconType>>

const styles = {
  transition: 'all 0.5s ease-in-out',
  borderRadius: '500px',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center'
}

interface Props {
  href: string
  Icon: TablerIcon
  size?: CSSProperties['width']
}

const BrandIcon = ({ href, Icon, size = '40px' }: Props): React.ReactElement => {
  const { darkMode } = useContext(DarkModeContext)
  const { text: color } = darkModeStyle(darkMode)
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='brand-icon'
      style={{ color, ...styles, width: size, height: size }}
    >
      <Icon size={`calc(${size} * 0.6)`} />
    </a>
  )
}

export default BrandIcon
