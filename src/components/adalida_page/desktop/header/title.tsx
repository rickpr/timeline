import { Link } from 'gatsby'
import React from 'react'

import Projects from 'project_data'

const labelStyles = {
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  height: '100%',
  transition: 'all 0.5s ease'
}
const titleStyles = {
  fontSize: '2rem',
  fontFamily: 'Avenir Next',
  padding: 0,
  margin: 0
}
const listStyles = {
  display: 'flex',
  justifyContent: 'left',
  padding: 0,
  margin: 0,
  gap: '1em'
}
const roleStyles = {
  backgroundColor: '#FFFFFF',
  color: '#000000',
  padding: '0.8em 0.5em',
  borderRadius: '0.5em',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}
const linkStyles = {
  fontSize: '1.2em',
  fontFamily: 'Avenir Next',
  fontWeight: 'bold'
}

interface Props {
  title: string
  active: boolean
}

const Title = ({ title, active }: Props): React.ReactElement => {
  const { description, name, projectPage, roles } = Projects[title]
  const pointerEvents = active ? 'auto' : 'none'
  const descriptionStyle = {
    display: 'grid',
    gridTemplateRows: active ? '1fr' : '0fr',
    transition: 'all 0.5s ease-in-out',
    overflow: 'hidden'
  }

  return (
    <Link to={projectPage} style={{ pointerEvents, ...labelStyles }}>
      <div style={titleStyles}>{name.toUpperCase()}</div>
      <div style={descriptionStyle}>
        <div style={{ overflow: 'hidden' }}>
          <div style={listStyles}>
            {roles.map(role => <div key={role} style={roleStyles}>{role}</div>)}
          </div>
          <div>{description}</div>
          <div style={linkStyles}>View Project ➜</div>
        </div>
      </div>
    </Link>
  )
}

export default Title
