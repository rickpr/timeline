import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'

interface Props {
  children: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode]
}

const columnStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1em'
}

const elementStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%'
}

const order = [0, 3, 1, 2]
const mobileOrder = [0, 1, 2, 3]

const Quad = ({ children }: Props): JSX.Element => {
  const isMobile = useIsMobile() === true
  const orderInUse = isMobile ? mobileOrder : order
  const [firstCell, secondCell, thirdCell, fourthCell] = orderInUse.map(index => children[index])
  const styles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    width: '100%',
    rowGap: '1em',
    columnGap: '2em'
  }
  return (
    <div style={styles}>
      <div style={columnStyle}>
        <div style={elementStyle}>
          {firstCell}
        </div>
        <div style={elementStyle}>
          {secondCell}
        </div>
      </div>
      <div style={columnStyle}>
        <div style={elementStyle}>
          {thirdCell}
        </div>
        <div style={elementStyle}>
          {fourthCell}
        </div>
      </div>
    </div>
  )
}

export default Quad
