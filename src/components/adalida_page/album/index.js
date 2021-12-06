import React, { useEffect, useState } from 'react'

import FullViewport from './full_viewport'

const Album = ({ children, displayedPageIndex }) => {
  // All pages are offset by 100vh so they are offscreen, except the first one,
  // which if offset by 0 and therefore visible.
  const [marginTop, setMarginTop] = useState(() =>
    ['0'].concat(Array.from({ length: children.length - 1 }, () => '100vh')))

  const scrollPageIntoView = indexOfPage => {
    const newMarginTop = [...marginTop]
    for (let i = 0; i < indexOfPage; i++) newMarginTop[i] = '-100vh'
    for (let i = indexOfPage + 1; i < children.length; i++) newMarginTop[i] = '100vh'
    newMarginTop[indexOfPage] = 0
    setMarginTop(newMarginTop)
  }

  useEffect(() => { scrollPageIntoView(displayedPageIndex) }, [displayedPageIndex])

  return children.map((page, index) =>
    <FullViewport key={`page-${index}`} marginTop={marginTop[index]}>
      {page}
    </FullViewport>
  )
}

export default Album
