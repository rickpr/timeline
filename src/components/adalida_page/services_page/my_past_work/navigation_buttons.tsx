import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import React, { useCallback, useMemo } from 'react'

const buttonStyles = {
  position: 'absolute' as const,
  bottom: 0,
  cursor: 'pointer',
  color: 'white',
  fontSize: '4vmin',
  background: '#000000',
  border: 0
}

interface Props {
  currentCard: number
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>
  numberOfCards: number
}

const NavigationButtons = ({ currentCard, setCurrentCard, numberOfCards }: Props): JSX.Element => {
  const showLeftArrow = useMemo(() => currentCard > 0, [currentCard])
  const showRightArrow = useMemo(() => currentCard < numberOfCards - 1, [currentCard, numberOfCards])
  const navigateLeft = useCallback(() => {
    setCurrentCard(previousCard => Math.max(0, previousCard - 1))
  }, [setCurrentCard])
  const navigateRight = useCallback(() => {
    setCurrentCard(previousCard => Math.min(numberOfCards - 1, previousCard + 1))
  }, [setCurrentCard, numberOfCards])

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '1em' }}>
      <button
        style={{ ...buttonStyles, display: showLeftArrow ? 'block' : 'none' }}
        onClick={navigateLeft}
      >
        <IconChevronLeft />
      </button>
      <button
        style={{ ...buttonStyles, right: 0, display: showRightArrow ? 'block' : 'none' }}
        onClick={navigateRight}
      >
        <IconChevronRight />
      </button>
    </div>
  )
}

export default NavigationButtons
