import { useEffect, useState } from 'react'

export const BREAKPOINT = 576 // px

export default (breakpoint = BREAKPOINT) => {
  const [windowWidth, setWindowWidth] = useState(breakpoint)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth < breakpoint
}
