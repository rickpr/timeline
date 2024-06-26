import React from 'react'

const Card = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div data-aos='fade-up'>{children}</div>
  )
}

export default Card
