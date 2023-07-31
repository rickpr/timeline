import { useLayoutEffect, useState } from 'react'

export const BREAKPOINT = 576 // px

const useIsMobile = (breakpoint = BREAKPOINT) => {
  const [windowWidth, setWindowWidth] = useState(breakpoint)

  useLayoutEffect(() => {
    const handleResize = () => { setWindowWidth(document.documentElement.clientWidth) }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return windowWidth < breakpoint
}

export default useIsMobile
