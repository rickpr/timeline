import React from 'react'

const Card = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div data-aos='fade-up' className='card-container'>
      <div className='grid'><div>{children}</div></div>
    </div>
  )
}

export default Card
