import { Link } from 'gatsby'
import React from 'react'

import type { Theme } from 'theme_context'

import { glassStyles } from './styles'

const containerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  justifyContent: 'flex-start',
  padding: '10px'
}
const titleStyles = {
  fontSize: '1.625rem',
  fontWeight: 800,
  marginBottom: '6px'
}
const roleListStyles = {
  display: 'flex',
  justifyContent: 'left',
  flexWrap: 'wrap' as const,
  padding: 0,
  margin: '0 0 14px 0',
  gap: '0.5em'
}

const roleStyles = {
  ...glassStyles,
  fontWeight: 500,
  transition: 'background-color 0.5s ease-in-out',
  padding: '0.8em',
  fontSize: '12px',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}

const descriptionStyles = {
  fontSize: '0.875rem',
  marginBottom: '0.75em'
}

const linkStyles = { fontSize: '0.75rem' }

const ThemedLink = ({ theme }: { theme: Theme }): React.ReactElement => {
  const { description, name, subtitle, link, roles } = theme
  const innerContent = (
    <>
      <div style={roleListStyles}>
        {roles.map(role => <div key={role} style={roleStyles}>{role}</div>)}
      </div>
      <div style={titleStyles}>{subtitle ?? name.toUpperCase()}</div>
      <div style={descriptionStyles}>{description}</div>
      {link !== undefined && <div style={linkStyles}>{link.text} ➜</div>}
    </>
  )

  if (link !== undefined) {
    return (
      <Link to={link.url} style={containerStyles}>
        {innerContent}
      </Link>
    )
  }

  return (
    <div style={containerStyles}>
      {innerContent}
    </div>
  )
}

export default ThemedLink
