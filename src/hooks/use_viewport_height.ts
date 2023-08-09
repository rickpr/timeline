import { useEffect, useState } from 'react'

const useViewportHeight = (): number | undefined => {
  const [viewportHeight, setViewportHeight] = useState<number>()

  useEffect(() => {
    const updateDimensions = () => { setViewportHeight(window.innerHeight) }
    window.addEventListener('resize', updateDimensions)
    updateDimensions()
    return () => { window.removeEventListener('resize', updateDimensions) }
  }, [])

  return viewportHeight
}

export default useViewportHeight
