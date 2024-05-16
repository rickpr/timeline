import React from 'react'

import type { ProjectTheme } from 'project_themes'

const Image = ({ theme }: { theme: ProjectTheme }): JSX.Element => {
  const { name, coverPhoto } = theme
  return <img alt={`${name} cover`} src={coverPhoto} className='portfolio-image' />
}

export default Image
