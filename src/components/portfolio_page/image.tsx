import React from 'react'

import type { Project } from 'projects'

const Image = ({ project }: { project: Project }): JSX.Element => {
  const { name, heroImage } = project
  return (
    <div className='portfolio-image'>
      <img alt={`${name} cover`} src={heroImage} />
    </div>
  )
}

export default Image
