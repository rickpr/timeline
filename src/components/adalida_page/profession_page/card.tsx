import React from 'react'

import type { Theme } from 'theme_context'

import GlassCard from '../glass_card'
import ThemedLink from '../themed_link'
import Image from './image'

const Card = ({ theme }: { theme: Theme }): JSX.Element => {
  return (
    <GlassCard>
      <Image theme={theme} />
      <ThemedLink theme={theme} />
    </GlassCard>
  )
}

export default Card
