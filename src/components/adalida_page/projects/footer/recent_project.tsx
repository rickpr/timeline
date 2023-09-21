import React, { useContext } from 'react'

import { Projects } from 'project_data'
import { ThemeContext } from 'theme_context'

const containerStyles = {
  display: 'flex',
  flex: '3 0 calc(50% - 15px)',
  minWidth: '300px',
  gap: '10px',
  background: '#FFFFFF',
  color: '#778390',
  borderRadius: '10px',
  overflow: 'hidden'
}

const imageStyles = {
  width: '60px',
  height: '60px',
  objectFit: 'cover' as const
}

const RecentProject = ({ projectName }: { projectName: string }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const background = darkMode ? '#1A1A1A' : '#FFFFFF'
  const { name, coverPhoto, projectPage } = Projects[projectName]
  return (
    <a className='recent-project' href={projectPage} style={{ ...containerStyles, background }}>
      <img
        alt={`${name} project`}
        src={coverPhoto}
        style={imageStyles}
      />
      <p>{name}</p>
    </a>
  )
}

export default RecentProject
