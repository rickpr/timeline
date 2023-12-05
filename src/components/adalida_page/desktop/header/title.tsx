import { Link } from 'gatsby'
import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext, type Theme } from 'theme_context'

import { glassStyles } from '../../styles'

const labelStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  height: '100%'
}
const titleStyles = {
  lineHeight: 1,
  padding: 0,
  margin: 0
}
const listStyles = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  justifyContent: 'left',
  padding: 0,
  margin: 0,
  gap: '0.5em'
}
const roleStyles = {
  ...glassStyles,
  transition: 'background-color 0.5s ease-in-out',
  padding: '0.8em',
  fontSize: '10px',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}
const linkStyles = {
  fontSize: '1.2em',
  lineHeight: 1,
  fontWeight: 'bold'
}

interface Props {
  theme: Theme
  active: boolean
}

const Title = ({ theme, active }: Props): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  const { button } = useDarkModeStyle(darkMode)
  const { description, name, link, roles } = theme
  const pointerEvents = active ? 'auto' : 'none'
  const fontSize = active ? '2.6rem' : '1rem'
  const descriptionStyle = {
    display: 'grid',
    gridTemplateRows: active ? '1fr' : '0fr',
    paddingTop: active ? '1rem' : 0,
    overflow: 'hidden',
    transition: 'grid-template-rows 0.5s ease-in-out'
  }

  const innerContent = (
    <>
      <div style={{ ...titleStyles, fontSize, padding: active ? 0 : '1rem 0' }}>{active ? name.toUpperCase() : name}</div>
      <div style={descriptionStyle}>
        <div style={{ overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={listStyles}>
            {roles.map(role => <div key={role} style={{ ...roleStyles, background: button }}>{role}</div>)}
          </div>
          <div>{description}</div>
          {link !== undefined && <div style={linkStyles}>{link.text} ➜</div>}
        </div>
      </div>
    </>
  )

  if (link !== undefined) {
    return (
      <Link to={link.url} style={{ pointerEvents, ...labelStyles }}>
        {innerContent}
      </Link>
    )
  }

  return (
    <div style={{ pointerEvents, ...labelStyles }}>
      {innerContent}
    </div>
  )
}

export default Title
