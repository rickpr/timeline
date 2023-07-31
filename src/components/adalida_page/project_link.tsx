import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Projects from 'project_data'

const labelStyles = {
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-around',
  width: '100%',
  transition: 'all 0.5s ease',
  gap: '0.75em',
  padding: 0
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
  whiteSpace: 'nowrap'
}

const linkStyles = {
  fontSize: '1.2em',
  fontFamily: 'Avenir Next',
  fontWeight: 'bold'
}

const ProjectLink = ({ title }: { title: string }) => {
  const { description, name, projectPage, roles } = Projects[title]
  return (
    <Link to={projectPage} style={labelStyles}>
      <div style={titleStyles}>{name.toUpperCase()}</div>
      <div style={listStyles}>
        {roles.map(role => <div key={role} style={roleStyles}>{role}</div>)}
      </div>
      <div>{description}</div>
      <div style={linkStyles}>View Project ➜</div>
    </Link>
  )
}

ProjectLink.propTypes = { title: PropTypes.string.isRequired }

export default ProjectLink
