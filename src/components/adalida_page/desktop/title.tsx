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
  flexDirection: 'column' as const
}
const titleStyles = {
  fontSize: '2rem',
  fontFamily: 'Avenir Next',
  padding: 0,
  margin: 0
}

interface Props {
  title: string
  active: boolean
}

const Title = ({ title, active }: Props): React.ReactElement => {
  if (active) return <ProjectLink title={title} />

  const { name } = Projects[title]
  return (
    <div style={labelStyles}>
      <div style={textStyles}>
        <div style={titleStyles}>{name.toUpperCase()}</div>
      </div>
    </div>
  )
}

export default Title
