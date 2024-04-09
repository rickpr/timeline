import React from 'react'

import SectionHeading from 'components/section_heading'
import useIsMobile from 'hooks/use_is_mobile'
import StackingPair from '../stacking_pair'
import GlassImage from './glass_image'
import { link, paragraph, paragraphHeading, textBox } from './styles'

const AdalidaFace = 'images/about/adalida_face.webp'

const Degree = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  const headerStyle = { fontWeight: 600, fontSize: isMobile ? '1.25em' : '2em' }
  return (
    <>
      <SectionHeading title='My Story' />
      <div style={headerStyle}>
        I&apos;m energized by people. I learn from their stories.
      </div>
      <StackingPair>
        <GlassImage media={AdalidaFace} />
        <div style={textBox}>
          <div style={paragraphHeading}>B.A. in English-Philosophy</div>
          <div style={paragraph}>
            <div>
              I grew up one block down from the famous Los Hermanos Restaurant in the show Breaking Bad.
            </div>
            <div>
              In 2020 I graduated from the University of New Mexico with a B.A. in English-Philosophy,
              and a certificate in Technical and Professional Communication.
            </div>
            <div>
              My favorite Philosophy courses included Symbolic Logic, the History and Philosophy of Mathematics, Ethics, and Wittgenstein.
            </div>
            <div>
              My English courses focused on technical and professional communication which included courses on visual
              rhetoric, editing, an{' '}

              <a style={link} href='https://adalidabaca.wixsite.com/internship-portfolio'>
                internship with Project ECHO
              </a>
    , and an independent study focused on designing a website promoting ecological studies at UNM.
            </div>
            <div>
              My professor later contracted me to redesign the National Consortium of Environmental Rhetoric and Writing
              website, which launched my freelance design business.
            </div>
          </div>
        </div>
      </StackingPair>
    </>
  )
}

export default Degree
