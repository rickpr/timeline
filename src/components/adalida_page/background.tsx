import React, { useEffect, useState, type CSSProperties } from 'react'

const styles = {
  width: '100dvw',
  height: '100dvh',
  position: 'fixed' as const,
  zIndex: -2,
  transition: 'opacity 0.5s ease-in-out'
}

const Background = ({ background }: { background: CSSProperties['background'] }): JSX.Element => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [oldBackground, setOldBackground] = useState<CSSProperties['background']>(background)
  useEffect(() => {
    if (oldBackground === background) return
    setOpacity(0)
    setIsTransitioning(true)
    const opacityTimeout = setTimeout(() => { setOpacity(1) }, 50)
    const useStateTimeout = setTimeout(() => {
      setOldBackground(background)
      setIsTransitioning(false)
    }, 550)
    return () => {
      clearTimeout(opacityTimeout)
      clearTimeout(useStateTimeout)
    }
  }, [background, oldBackground])

  return (
    <>
      <div style={{ ...styles, background: oldBackground }} />
      {isTransitioning && <div style={{ ...styles, zIndex: -1, background, opacity }} />}
    </>
  )
}

export default Background
