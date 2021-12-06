import { useEffect, useRef } from 'react'

const useAlternateScroll = ({ scrollDown, scrollUp }) => {
  /** KEYBOARD **/
  // Keycodes
  const DOWN_ARROW = 40
  const PAGE_DOWN = 34
  const PAGE_UP = 33
  const SPACE = 32
  const UP_ARROW = 38

  // A Set might have faster access if we accept more keys.
  // Benchmarking this shows that using an array is faster with two elements.
  const upKeys = [PAGE_UP, UP_ARROW]
  const downKeys = [PAGE_DOWN, DOWN_ARROW, SPACE]
  const handleKeyPress = event => {
    if (upKeys.includes(event.keyCode)) {
      event.preventDefault()
      return scrollUp()
    }

    if (downKeys.includes(event.keyCode)) {
      event.preventDefault()
      return scrollDown()
    }
  }

  /** SCROLL WHEEL **/
  const handleWheel = event => {
    event.preventDefault()
    event.deltaY > 0 ? scrollDown() : scrollUp()
  }

  /** TOUCHPAD / TOUCHSCREEN **/
  const touchStart = useRef(null)
  const handleTouchStart = event => { touchStart.current = event.touches[0].clientY }
  const handleTouchEnd = event => {
    // Not sure this could happen, but in case the touch was started before this component is rendered.
    if (!touchStart.current) return

    const releasedY = event.changedTouches[0].clientY
    if (releasedY < touchStart.current) scrollDown()
    if (releasedY > touchStart.current) scrollUp()
    touchStart.current = null
    // Otherwise do nothing, the touch didn't move
  }

  // Add listeners
  useEffect(() => {
    window.addEventListener('wheel', handleWheel)
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyPress)
      window.addEventListener('touchstart', handleTouchStart)
      window.addEventListener('touchend', handleTouchEnd)
    }
  }, [])
}

export default useAlternateScroll
