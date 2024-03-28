import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'

interface Props {
  children: [React.ReactNode, React.ReactNode]
  reversed?: boolean
}

const elementStyle = {
  display: 'flex',
  alignItems: 'center'
}

const StackingPair = ({ children, reversed = false }: Props): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  const [firstCell, secondCell] = children
  const actuallyReversed = reversed && !isMobile
  const styles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    width: '100%',
    gap: '1em',
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

export default StackingPair
