import React from 'react'

import ServicesCard from '../card'

interface Props {
  title: string
  children: React.ReactNode
}

// Two gaps makes 40px
const CARD_WIDTH = `${(950 - 40) / 3}px`

const Card = ({ title, children }: Props): JSX.Element => {
  return (
    <ServicesCard title={title} width={CARD_WIDTH}>
      <div className='shaping-companies-content'>
        <div>
          <div className='services-heading-line' />
          {children}
        </div>
        <a href='mailto:hi@adalida.design' target='_blank' rel='noreferrer' style={{ display: 'flex', alignItems: 'center' }}>
          CONTACT &nbsp; <div style={{ fontSize: '2em', lineHeight: 1, fontWeight: 200 }}>➜</div>
        </a>
      </div>
    </ServicesCard>
  )
}

export default Card
