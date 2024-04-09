import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
  width?: React.CSSProperties['width']
}

const Card = ({ title, children, width = '100%' }: Props): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width }}>
      <div className='glass card'>
        <div className='services-card-content'>
          <div className='services-card-title'>{title}</div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
