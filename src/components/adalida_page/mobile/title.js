import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Projects } from 'theme_context'

const labelStyles = {
  color: '#FFFFFF',
  display: 'flex',
  width: '100%',
  height: '100%',
  transition: 'all 0.5s ease',
  alignItems: 'center'
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
  fontSize: '0.75rem',
  justifyContent: 'left',
  gap: '0.5rem',
  marginBottom: '1rem',
  padding: 0,
  margin: 0
}

const Title = ({ title }) => {
  const { description, name, projectPage, roles } = Projects[title]
  return (
    <Link to={projectPage} style={labelStyles}>
      <div style={textStyles}>
        <h2 style={titleStyles}>{name.toUpperCase()}</h2>
        <ul style={listStyles}>
          {roles.map(role => <li key={role}>{role}</li>)}
        </ul>
        {description}
        <h2>View Project ➜</h2>
      </div>
    </Link>
  )
}

Title.propTypes = { title: PropTypes.string.isRequired }

export default Title
