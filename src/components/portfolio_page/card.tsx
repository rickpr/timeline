import React from 'react'

import type { Project } from 'projects'

import Description from './description'
import Image from './image'

const Card = ({ project, reverse }: { project: Project, reverse: boolean }): JSX.Element => {
  return (
    <div className={`portfolio-card ${reverse ? 'reverse' : ''}`} data-aos='fade-up'>
      <Image project={project} />
      <Description project={project} />
    </div>
  )
}

export default Card
