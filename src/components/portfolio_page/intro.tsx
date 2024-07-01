import React from 'react'

import LetsWorkTogether from 'components/lets_work_together'
import { makeMediaTag } from 'components/media_with_text'
import useIsMobile from 'hooks/use_is_mobile'

const AdalidaFace = 'images/about/adalida_face.webp'

const Intro = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div>
      <div className='stacking-pair'>
        <div className='image'>
          {makeMediaTag({ media: AdalidaFace, style: { borderRadius: '8px' } })}
        </div>
        <div>
          <h1 style={{ marginTop: 0 }}>
            Hi, I&apos;m Adalida - energetic, resourceful, and versatile.
          </h1>
          <h2 className='text'>
            I design functional, human-centered products that solve user needs and drive business success by
            leveraging philosophical insights and technical communication expertise.
          </h2>
          <LetsWorkTogether />
        </div>
      </div>
    </div>
  )
}

export default Intro
