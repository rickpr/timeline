import React, { useCallback } from 'react'

import Button from './button'
import { Works } from 'work_themes'

interface Props {
  setCurrentCard: React.Dispatch<React.SetStateAction<keyof typeof Works>>
}

const WorkKeys = Object.keys(Works)

const modulus = (index: number): number => (
  // Javascript's % operator doesn't wrap around to negative numbers
  ((index % WorkKeys.length) + WorkKeys.length) % WorkKeys.length
)

const NavigationButtons = ({ setCurrentCard }: Props): JSX.Element => {
  const navigateLeft = useCallback(() => {
    setCurrentCard(previousCard => {
      const previousCardIndex = WorkKeys.indexOf(previousCard)
      return WorkKeys[modulus(previousCardIndex - 1)]
    })
  }, [setCurrentCard])
  const navigateRight = useCallback(() => {
    setCurrentCard(previousCard => {
      const previousCardIndex = WorkKeys.indexOf(previousCard)
      return WorkKeys[modulus(previousCardIndex + 1)]
    })
  }, [setCurrentCard])

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Button direction='left' onClick={navigateLeft} />
      <Button direction='right' onClick={navigateRight} />
    </div>
  )
}

export default NavigationButtons
