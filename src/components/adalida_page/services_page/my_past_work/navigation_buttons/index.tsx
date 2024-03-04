import React, { useCallback } from 'react'

import Button from './button'
import { Works } from '../works'

interface Props {
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>
}

const modulus = (index: number): number => (
  // Javascript's % operator doesn't wrap around to negative numbers
  ((index % Works.length) + Works.length) % Works.length
)

const NavigationButtons = ({ setCurrentCard }: Props): JSX.Element => {
  const navigateLeft = useCallback(() => {
    setCurrentCard(previousCard => modulus(previousCard - 1))
  }, [setCurrentCard])
  const navigateRight = useCallback(() => {
    setCurrentCard(previousCard => modulus(previousCard + 1))
  }, [setCurrentCard])

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Button direction='left' onClick={navigateLeft} />
      <Button direction='right' onClick={navigateRight} />
    </div>
  )
}

export default NavigationButtons
