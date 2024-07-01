import React from 'react'

import LetsChat from 'components/lets_chat'
import { makeMediaTag } from 'components/media_with_text'
import useIsMobile from 'hooks/use_is_mobile'

const AdalidaFace = 'images/about/adalida_face.webp'

const Intro = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div className='stacking-pair'>
      <div className='image'>
        {makeMediaTag({ media: AdalidaFace, style: { borderRadius: '8px' } })}
      </div>
      <div className='stacking-pair-text-container'>
        <h1>A bit about me...</h1>
        <h2 className='text'>
          I&apos;m energetic, resourceful, and versatile. Weekdays, I&apos;m a rubber duck cosplaying as a product
          designer. Weekends, I&apos;m a product designer cosplaying as a rubber duck.
        </h2>
        <LetsChat />
      </div>
    </div>
  )
}

export default Intro
