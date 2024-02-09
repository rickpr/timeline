import React from 'react'

import type { Theme } from 'theme_context'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import ThemedLink from '../themed_link'
import Image from './image'
import { CardStyles } from './styles'

const Card = ({ theme }: { theme: Theme }): JSX.Element => {
  useAnimateOnScroll()
  return (
    <div style={CardStyles} data-aos='fade-up'>
      <Image theme={theme} />
      <ThemedLink theme={theme} />
    </div>
  )
}

export default Card
