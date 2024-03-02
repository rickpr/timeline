import React from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import { CardStyles } from './styles'

const Card = ({ children }: { children: React.ReactNode }): JSX.Element => {
  useAnimateOnScroll()
  return <div style={CardStyles} data-aos='fade-up'>{children}</div>
}

export default Card
