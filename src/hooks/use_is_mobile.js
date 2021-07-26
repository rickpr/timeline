import { useEffect, useState } from 'react'

export default () => {
  const breakpoint = 576
  const [windowWidth, setWindowWidth] = useState(breakpoint)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [windowWidth])

  return windowWidth < breakpoint
}
