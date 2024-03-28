import React, { type MouseEvent, useCallback, useContext, useEffect, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { ThemeContext } from 'theme_context'
import darkModeStyle from 'dark_mode_style'

import { makeMediaTag } from './media_with_text'

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

const mediaStyles = {
  maxHeight: '90vh',
  maxWidth: '90vw',
  height: '100%'
}

const modulus = ({ mediaLength, index }: { mediaLength: number, index: number }): number => (
  // Javascript's % operator doesn't wrap around to negative numbers
  ((index % mediaLength) + mediaLength) % mediaLength
)

export const carouselMediaTag = (media: string): JSX.Element => makeMediaTag({ media, style: mediaStyles })

const CloseButton = ({ dismiss }: { dismiss: () => void }): JSX.Element =>
  <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 5, background: '#000000' }}>
    <button style={buttonStyles} onClick={dismiss} >&#x2715;</button>
  </div>

const CarouselOverlay = ({ dismiss, media, index }: { dismiss: () => void, media: JSX.Element[], index: number }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background } = darkModeStyle(darkMode)
  const [currentIndex, setCurrentIndex] = useState(index)
  const navigateLeft = useCallback((event: MouseEvent | KeyboardEvent): void => {
    event.stopPropagation()
    setCurrentIndex(oldIndex => modulus({ mediaLength: media.length, index: oldIndex - 1 }))
  }, [media.length])
  const navigateRight = useCallback((event: MouseEvent | KeyboardEvent): void => {
    event.stopPropagation()
    setCurrentIndex(oldIndex => modulus({ mediaLength: media.length, index: oldIndex + 1 }))
  }, [media.length])
  const showLeftArrow = currentIndex > 0
  const showRightArrow = currentIndex < media.length - 1
  useEffect(() => {
    const keyPressListener = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft' && showLeftArrow) navigateLeft(event)
      if (event.key === 'ArrowRight' && showRightArrow) navigateRight(event)
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
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  // We have global key listeners, and stopping propagation is not an interaction.
  return (
    <div style={style} onClick={dismiss} tabIndex={0} role='tab'>
      <div style={{ height: '90vh', width: '90vw', display: 'flex', placeItems: 'center', placeContent: 'center' }}>
        <div
          style={{ position: 'relative', width: '100%', maxWidth: '100%', background }}
          onClick={(event: MouseEvent) => { event.stopPropagation() } }
        >
          <CloseButton dismiss={dismiss} />
          {media[currentIndex]}
        </div>
        {media.length > 1 && navigationArrows}
      </div>
    </div>
  )
  /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
}

export default CarouselOverlay
