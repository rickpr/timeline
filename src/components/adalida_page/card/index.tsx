import React from 'react'

import type { Theme } from 'theme_context'

import ThemedLink from '../themed_link'
import Image from './image'
import { CardStyles } from './styles'

const Card = ({ theme }: { theme: Theme }): JSX.Element => {
  return (
    <div style={CardStyles}>
      <Image theme={theme} />
      <ThemedLink theme={theme} />
    </div>
  )
}

export default Card
