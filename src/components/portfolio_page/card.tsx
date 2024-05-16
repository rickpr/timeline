import React from 'react'

import type { ProjectTheme } from 'project_themes'

import ThemedLink from '../themed_link'
import Image from './image'

const Card = ({ theme }: { theme: ProjectTheme }): JSX.Element => {
  return (
    <div className='glass card'>
      <Image theme={theme} />
      <ThemedLink theme={theme} />
    </div>
  )
}

export default Card
