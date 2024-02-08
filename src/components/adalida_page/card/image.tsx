import React from 'react'

import type { Theme } from 'theme_context'

import { ImageStyles } from './styles'

const Image = ({ theme }: { theme: Theme }): JSX.Element => {
  const { name, coverPhoto } = theme
  return <img alt={`${name} cover`} src={coverPhoto} style={ImageStyles} />
}

export default Image
