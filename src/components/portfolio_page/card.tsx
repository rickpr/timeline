import React from 'react'

import type { ProjectTheme } from 'project_themes'

import Description from './description'
import Image from './image'

const Card = ({ theme, reverse }: { theme: ProjectTheme, reverse: boolean }): JSX.Element => {
  return (
    <div className={`portfolio-card ${reverse ? 'reverse' : ''}`} data-aos='fade-up'>
      <Image theme={theme} />
      <Description theme={theme} />
    </div>
  )
}

export default Card
