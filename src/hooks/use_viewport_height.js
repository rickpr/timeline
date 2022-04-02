import { useEffect, useState } from 'react'

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  useEffect(() => {
    const updateDimensions = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return viewportHeight
}

export default useViewportHeight
