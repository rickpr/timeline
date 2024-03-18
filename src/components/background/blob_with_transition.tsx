import React, { useEffect, useState, type CSSProperties, type SVGAttributes } from 'react'

import Blob from './blob'

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
  startPath: SVGAttributes<SVGPathElement>['d']
  endPath: SVGAttributes<SVGPathElement>['d']
}

const BlobWithTransition = ({ background, gradientColor, startPath, endPath }: Props): JSX.Element => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [oldBackground, setOldBackground] = useState<CSSProperties['color']>(background)
  const [oldGradientColor, setOldGradientColor] = useState<CSSProperties['color']>(gradientColor)

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
      <div className='old-blob'>
        <Blob background={oldBackground} gradientColor={oldGradientColor} startPath={startPath} endPath={endPath} />
      </div>
      <div className='next-blob' style={{ opacity, visibility: isTransitioning ? 'visible' : 'hidden' }}>
        <Blob background={background} gradientColor={gradientColor} startPath={startPath} endPath={endPath} />
      </div>
    </>
  )
}

export default BlobWithTransition
