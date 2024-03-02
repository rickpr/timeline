import React from 'react'

import GlassCard from '../glass_card'

interface Props {
  title: string
  children: React.ReactNode
  width?: React.CSSProperties['width']
}

const Card = ({ title, children, width = '100%' }: Props): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width }}>
      <GlassCard>
        <div style={{ padding: '20px', fontSize: '0.75rem', fontWeight: 500, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          {children}
        </div>
      </GlassCard>
    </div>
  )
}

export default Card
