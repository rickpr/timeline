import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: Props): JSX.Element => {
  return (
    <div className='glass card' data-aos='fade-up'>
      <div className='about-card-content'>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Card
