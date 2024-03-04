import React from 'react'

import StackingPair from '../stacking_pair'

import GlassImage from './glass_image'
import { link, paragraph, paragraphHeading, textBox } from './styles'

const AdalidaFace = 'images/about/adalida_face.webp'

const Degree = (): JSX.Element => {
  return (
    <StackingPair reversed>
      <GlassImage media={AdalidaFace} />
      <div style={textBox}>
        <div style={paragraphHeading}>B.A. in English-Philosophy</div>
        <div style={paragraph}>
          <div>
            In 2020 I graduated from the University of New Mexico with an
            interdisciplinary Bachelor of Arts degree in English-Philosophy and
            a certificate in Technical and Professional Communication.
          </div>
          <div>
            My favorite Philosophy courses included symbolic logic, the
            history and philosophy of mathematics, philosophy of mind, and
            Wittgenstein.
          </div>
          <div>
            My English courses focused on technical and professional
            communication which included courses on visual rhetoric, editing, an{' '}
            <a style={link} href='https://adalidabaca.wixsite.com/internship-portfolio'>
              internship with Project ECHO
            </a>
    , and an independent study focused
    on designing a website promoting ecological studies at UNM.
          </div>
          <div>
            My professor later contracted me to redesign the National
            Consortium of Environmental Rhetoric and Writing website, which
            launched my freelance design business. During this time, I also
            worked as a Student Program Coordinator planning events, designing
            experiences and marketing materials. I helped recharter and was
            elected Vice-President of the Lobo Gardens. Lastly, I was the
            co-winner of the Dale and Melada scholarship award.
          </div>
        </div>
      </div>
    </StackingPair>
  )
}

export default Degree
