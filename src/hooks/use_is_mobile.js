import { useEffect, useState } from 'react'

export const BREAKPOINT = 576 // px

export default (breakpoint = BREAKPOINT) => {
  const [windowWidth, setWindowWidth] = useState(breakpoint)

  useEffect(() => {
    const handleResize = () => setWindowWidth(document.documentElement.clientWidth)
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth < breakpoint
}
