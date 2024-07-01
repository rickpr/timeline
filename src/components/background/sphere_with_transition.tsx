import React, { useEffect, useMemo, useState, type CSSProperties } from 'react'

import Sphere from './sphere'

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
}

const minAnimationDurationSeconds = 5
const maxAnimationDurationSeconds = 15

const SphereWithTransition = ({ background, gradientColor }: Props): JSX.Element => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [oldBackground, setOldBackground] = useState<CSSProperties['color']>(background)
  const [oldGradientColor, setOldGradientColor] = useState<CSSProperties['color']>(gradientColor)
  const animationDurationSeconds = useMemo(
    () => Math.random() * (maxAnimationDurationSeconds - minAnimationDurationSeconds) + minAnimationDurationSeconds,
    []
  )
  const animationDelaySeconds = useMemo(
    () => -(Math.random() * animationDurationSeconds / 2),
    [animationDurationSeconds]
  )

  useEffect(() => {
    setIsTransitioning(true)
    const opacityTimeout = setTimeout(() => { setOpacity(1) }, 50)
    const useStateTimeout = setTimeout(() => {
      setOldBackground(background)
      setOldGradientColor(gradientColor)
      setOpacity(0)
      setIsTransitioning(false)
    }, 550)
    return () => {
      clearTimeout(opacityTimeout)
      clearTimeout(useStateTimeout)
    }
  }, [background, gradientColor])

  return (
    <>
      <div className='old-sphere'>
        <Sphere
          background={oldBackground}
          gradientColor={oldGradientColor}
          animationDurationSeconds={animationDurationSeconds}
          animationDelaySeconds={animationDelaySeconds}
        />
      </div>
      <div className='next-sphere' style={{ opacity, visibility: isTransitioning ? 'visible' : 'hidden' }}>
        <Sphere
          background={background}
          gradientColor={gradientColor}
          animationDurationSeconds={animationDurationSeconds}
          animationDelaySeconds={animationDelaySeconds}
        />
      </div>
    </>
  )
}

export default SphereWithTransition
