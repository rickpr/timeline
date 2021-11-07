import React, { useEffect, useRef, useState } from 'react'

import useDebounce from '../../../hooks/use_debounce'

import FullViewport from './full_viewport'

const Album = ({ callback, children }) => {
  const [displayedPageIndex, setDisplayedPageIndex] = useState(0)
  const [marginTop, setMarginTop] = useState(() =>
    ['0'].concat(Array.from({ length: children.length - 1 }, () => '100vh')))
  const touchStart = useRef(null)
  const debounce = useDebounce()

  const scrollDown = debounce(() => setDisplayedPageIndex(pageIndex => Math.min(children.length - 1, pageIndex + 1)))
  const scrollUp = debounce(() => setDisplayedPageIndex(pageIndex => Math.max(0, pageIndex - 1)))

  const handleWheel = event => {
    event.preventDefault()
    event.deltaY > 0 ? scrollDown() : scrollUp()
  }

  // A Set might have faster access if we accept more keys.
  // Benchmarking this shows that using an array is faster with two elements.
  const upKeys = [33, 38]
  const downKeys = [34, 40]

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

  const scrollPageIntoView = indexOfPage => {
    const newMarginTop = [...marginTop]
    for (let i = 0; i < indexOfPage; i++) newMarginTop[i] = '-100vh'
    for (let i = indexOfPage + 1; i < children.length; i++) newMarginTop[i] = '100vh'
    newMarginTop[indexOfPage] = 0
    setMarginTop(newMarginTop)
    if(callback) callback(displayedPageIndex)
  }

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

  useEffect(() => { scrollPageIntoView(displayedPageIndex) }, [displayedPageIndex])

  return children.map((page, index) =>
    <FullViewport key={`page-${index}`} marginTop={marginTop[index]}>
      {page}
    </FullViewport>
  )
}

export default Album
