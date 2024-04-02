import React from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

const Card = ({ children }: { children: React.ReactNode }): JSX.Element => {
  useAnimateOnScroll()

  return (
    <div data-aos='fade-up' className='card-container'>
      <div className='grid'><div>{children}</div></div>
    </div>
  )
}

export default Card
