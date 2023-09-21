import React, { useCallback, useEffect, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { makeMediaTag } from './projects/media_with_text'

const style = {
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
  position: 'fixed' as const,
  width: '100%',
  height: '100%',
  background: '#000000CC',
  left: '0',
  top: '0',
  zIndex: 4
}

const buttonStyles = {
  cursor: 'pointer',
  color: 'white',
  fontSize: '4vmin',
  background: '#000000',
  border: 0
}

const modulus = ({ mediaLength, index }: { mediaLength: number, index: number }): number => (
  // Javascript's % operator doesn't wrap around to negative numbers
  ((index % mediaLength) + mediaLength) % mediaLength
)

const CloseButton = ({ dismiss }: { dismiss: () => void }): JSX.Element =>
  <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 5, background: '#000000' }}>
    <button style={buttonStyles} onClick={dismiss} >&#x2715;</button>
  </div>

const CarouselOverlay = ({ dismiss, media, index }: { dismiss: () => void, media: string[], index: number }): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(index)
  const navigateLeft = useCallback((): void => {
    setCurrentIndex(oldIndex => modulus({ mediaLength: media.length, index: oldIndex - 1 }))
  }, [media.length])
  const navigateRight = useCallback((): void => {
    setCurrentIndex(oldIndex => modulus({ mediaLength: media.length, index: oldIndex + 1 }))
  }, [media.length])
  const showLeftArrow = currentIndex > 0
  const showRightArrow = currentIndex < media.length - 1
  useEffect(() => {
    const keyPressListener = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft' && showLeftArrow) navigateLeft()
      if (event.key === 'ArrowRight' && showRightArrow) navigateRight()
      if ([' ', 'Enter', 'Escape'].includes(event.key)) dismiss()
    }
    window.addEventListener('keydown', keyPressListener)
    return (): void => { window.removeEventListener('keydown', keyPressListener) }
  }, [dismiss, navigateLeft, navigateRight, showLeftArrow, showRightArrow])

  const navigationArrows = (
    <div style={{ position: 'absolute' as const, bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
      <button
        style={{ ...buttonStyles, visibility: showLeftArrow ? 'visible' : 'hidden' }}
        onClick={navigateLeft}
      >
        <IconChevronLeft />
      </button>
      <button
        style={{ ...buttonStyles, visibility: showRightArrow ? 'visible' : 'hidden' }}
        onClick={navigateRight}
      >
        <IconChevronRight />
      </button>
    </div>
  )
  return (
    <div style={style}>
      <div style={{ height: '90vh', width: '90vw', display: 'flex', placeItems: 'center', placeContent: 'center' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
          <CloseButton dismiss={dismiss} />
          {makeMediaTag({ media: media[currentIndex], style: { maxHeight: '90vh', maxWidth: '90vw', height: '100%', width: '100%' } })}
          {media.length > 1 && navigationArrows}
        </div>
      </div>
    </div>
  )
}

export default CarouselOverlay
