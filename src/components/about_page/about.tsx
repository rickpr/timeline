import React from 'react'

import LetsWorkTogether from 'components/lets_work_together'
import { makeMediaTag } from 'components/media_with_text'
import SectionHeading from 'components/section_heading'
import useIsMobile from 'hooks/use_is_mobile'

const AdalidaFace = 'images/about/adalida_face.webp'

const About = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div>
      <SectionHeading title='Hi' />
      <h1 style={{ marginTop: 0 }}>I&apos;m Adalida, energetic and resourceful</h1>
      <div className='stacking-pair'>
        <div className='image'>
          {makeMediaTag({ media: AdalidaFace, style: { borderRadius: '8px' } })}
        </div>
        <div>
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

export default About
