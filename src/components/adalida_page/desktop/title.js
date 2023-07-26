import PropTypes from 'prop-types'
import React from 'react'

import { Projects } from 'theme_context'
import ProjectLink from '../project_link'

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
  fontSize: '2rem',
  fontFamily: 'Avenir Next',
  padding: 0,
  margin: 0
}

const Title = ({ title, active }) => {
  const { name } = Projects[title]
  if (!active) return (
    <div style={labelStyles}>
      <div style={textStyles}>
        <div style={titleStyles}>{name.toUpperCase()}</div>
      </div>
    </div>
  )

  return <ProjectLink title={title} />
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default Title
