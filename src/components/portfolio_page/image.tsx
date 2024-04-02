import React from 'react'

import type { Theme } from 'theme_context'

const Image = ({ theme }: { theme: Theme }): JSX.Element => {
  const { name, coverPhoto } = theme
  return <img alt={`${name} cover`} src={coverPhoto} className='portfolio-image' />
}

export default Image
