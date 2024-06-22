import React from 'react'

import LetsWorkTogether from 'components/lets_work_together'
import { makeMediaTag } from 'components/media_with_text'
import SectionHeading from 'components/section_heading'
import useIsMobile from 'hooks/use_is_mobile'

const AdalidaFace = 'images/about/adalida_face.webp'

const Degree = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  return (
    <div>
      <SectionHeading title='Hi' />
      <h1 style={{ marginTop: 0 }}>I&apos;m Adalida, energetic, resourceful, and versatile.</h1>
      <div className='stacking-pair'>
        <div className='image'>
          {makeMediaTag({ media: AdalidaFace, style: { borderRadius: '8px' } })}
        </div>
        <div className='text'>
          <h2>B.A. in English-Philosophy</h2>
          <div className='paragraphs'>
            <p>
              I&apos;m a strategic and innovative designer eager to leverage my diverse background to contribute to tech
              industry advancements.
            </p>
            <p>
              I grew up one block down from the famous Los Pollos Hermanos Restaurant in the show Breaking Bad.
            </p>
            <p>
              In 2020, I graduated from the University of New Mexico with an interdisciplinary B.A. in
              English-Philosophy, and a certificate in Technical and Professional Communication. My studies focused on
              the intersection of design, logic and language.
            </p>
            <p>
              During my studies, my independent study professor contracted me to redesign the National Consortium of
              Environmental Rhetoric and Writing website, which launched my design consultancy business.
            </p>
            <p>
              <span>
                I moved from Albuquerque to San Francisco while completing my classes and{' '}
                <a className='underline' href='https://adalidabaca.wixsite.com/internship-portfolio'>
                  internship with Project ECHO
                </a>
                {' '}remotely.
              </span>
            </p>
            <p>
              After graduation, I began learning Product Design through a mentor, Google&apos;s Coursera courses, the
              Interaction Design Foundation, Hackathons, volunteer work, and the clientele I receive from my design business.
            </p>
          </div>
          <LetsWorkTogether />
        </div>
      </div>
    </div>
  )
}

export default Degree
