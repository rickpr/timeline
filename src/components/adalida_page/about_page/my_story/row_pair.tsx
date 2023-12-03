import React from 'react'

interface RowPairProps {
  children: [React.ReactNode, React.ReactNode]
  isMobile: boolean
  reversed?: boolean
}

const elementStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%'
}

const RowPair = ({ children, isMobile, reversed = false }: RowPairProps): JSX.Element => {
  const [firstCell, secondCell] = children
  const actuallyReversed = reversed && !isMobile
  const styles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    width: '100%',
    rowGap: '1em',
    columnGap: '2em'
  }
  return (
    <div style={styles}>
      <div style={{ order: actuallyReversed ? 1 : 0, ...elementStyle }}>
        {firstCell}
      </div>
      <div style={{ order: actuallyReversed ? 0 : 1, ...elementStyle }}>
        {secondCell}
      </div>
    </div>
  )
}

export default RowPair
