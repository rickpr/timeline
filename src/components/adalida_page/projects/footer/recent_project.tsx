import React from 'react'
import { Projects } from 'theme_context'

const imageStyles = {
  width: '60px',
  height: '60px',
  objectFit: 'contain' as const,
  backgroundColor: '#3357D2'
}

const RecentProject = ({ projectName }: { projectName: string }): JSX.Element => {
  const { name, coverPhoto, projectPage } = Projects[projectName]
  return (
    <a className='recent-project' href={projectPage}>
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
