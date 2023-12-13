import { Link } from 'gatsby'
import React from 'react'

import type { Theme } from 'theme_context'

import { glassStyles } from './styles'

const labelStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  justifyContent: 'flex-start',
  gap: '1em'
}
const titleStyles = {
  fontSize: '2rem',
  fontWeight: 900,
  lineHeight: 1,
  padding: 0,
  margin: 0
}
const listStyles = {
  display: 'flex',
  justifyContent: 'left',
  flexWrap: 'wrap' as const,
  padding: 0,
  margin: 0,
  gap: '0.5em'
}

const roleStyles = {
  ...glassStyles,
  fontWeight: 700,
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

const ThemedLink = ({ theme }: { theme: Theme }): React.ReactElement => {
  const { description, name, subtitle, link, roles } = theme
  const innerContent = (
    <>
      <div style={titleStyles}>{subtitle ?? name.toUpperCase()}</div>
      <div style={listStyles}>
        {roles.map(role => <div key={role} style={roleStyles}>{role}</div>)}
      </div>
      <div style={{ fontWeight: 500, fontSize: '0.5em' }}>{description}</div>
      {link !== undefined && <div style={linkStyles}>{link.text} ➜</div>}
    </>
  )

  if (link !== undefined) {
    return (
      <Link to={link.url} style={labelStyles}>
        {innerContent}
      </Link>
    )
  }

  return (
    <div style={labelStyles}>
      {innerContent}
    </div>
  )
}

export default ThemedLink
