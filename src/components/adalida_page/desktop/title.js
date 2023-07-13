import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Projects } from 'theme_context'

const labelStyles = {
  color: '#FFFFFF',
  display: 'flex',
  width: '100%',
  height: '100%',
  transition: 'all 0.5s ease'
}
const textStyles = {
  display: 'flex',
  flexDirection: 'column'
}
const titleStyles = {
  fontWeight: 800,
  fontSize: '2rem',
  fontFamily: 'Avenir Next',
  padding: 0,
  margin: 0
}
const listStyles = {
  display: 'flex',
  justifyContent: 'left',
  padding: 0,
  margin: 0
}

const Title = ({ title, active }) => {
  const { description, name, projectPage, roles } = Projects[title]
  if (!active) return (
    <div style={labelStyles}>
      <div style={textStyles}>
        <h2 style={titleStyles}>{name.toUpperCase()}</h2>
      </div>
    </div>
  )

  return (
    <Link to={projectPage} style={{ ...labelStyles }}>
      <div style={textStyles}>
        <h2 style={titleStyles}>{name.toUpperCase()}</h2>
        <ul style={listStyles}>
          {roles.map(role => <li key={role}>{role}</li>)}
        </ul>
        {description}
        <h2 style={{ pointerEvents: 'auto' }}>View Project ➜</h2>
      </div>
    </Link>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default Title
