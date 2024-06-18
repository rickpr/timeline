import React from 'react'

import type { ProjectTheme } from 'project_themes'

const Image = ({ theme }: { theme: ProjectTheme }): JSX.Element => {
  const { name, heroImage } = theme
  return (
    <div className='portfolio-image'>
      <img alt={`${name} cover`} src={heroImage} />
    </div>
  )
}

export default Image
