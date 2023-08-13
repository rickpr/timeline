import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Projects from 'project_data'

const labelStyles = {
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  height: '100%',
  transition: 'all 0.5s ease',
  justifyContent: 'space-between'
}
const titleStyles = {
  fontSize: '2rem',
  lineHeight: 1,
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
  backgroundColor: '#303233',
  color: '#FFFFFF',
  padding: '0.8em',
  borderRadius: '500px',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}

const linkStyles = {
  fontSize: '1.2em',
  fontFamily: 'Avenir Next',
  fontWeight: 'bold'
}

const ProjectLink = ({ title }: { title: string }): React.ReactElement => {
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
