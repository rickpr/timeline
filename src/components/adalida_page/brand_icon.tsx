import type { TablerIconsProps } from '@tabler/icons-react'
import React, { useContext, type CSSProperties } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

const styles = {
  transition: 'all 0.5s ease-in-out',
  borderRadius: '500px',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center'
}

interface Props {
  href: string
  Icon: (props: TablerIconsProps) => JSX.Element
  size?: CSSProperties['width']
}

const BrandIcon = ({ href, Icon, size = '40px' }: Props): React.ReactElement => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='brand-icon glass'
      style={{ color, ...styles, width: size, height: size }}
    >
      <Icon size={`calc(${size} * 0.6)`} />
    </a>
  )
}

export default BrandIcon
