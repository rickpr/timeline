import React from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

const Card = ({ children }: { children: React.ReactNode }): JSX.Element => {
  useAnimateOnScroll()
  const containerStyle = {
    minWidth: '95%',
    margin: '0 2.5vw',
    padding: '0 7%',
    borderRadius: '2vh'
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: '100%',
    maxHeight: '100%'
  }
  return (
    <div data-aos='fade-up' style={containerStyle}>
      <div style={gridStyle}>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Card
