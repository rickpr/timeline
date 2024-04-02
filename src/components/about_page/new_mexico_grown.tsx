import React from 'react'

import SectionHeading from 'components/section_heading'
import useIsMobile from 'hooks/use_is_mobile'
import StackingPair from '../stacking_pair'
import GlassImage from './glass_image'
import { link, paragraph, paragraphHeading, textBox } from './styles'

const AdalidaFace = 'images/about/adalida_face.webp'

const NewMexicoGrown = (): JSX.Element | null => {
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
          <div style={paragraphHeading}>New Mexico Grown</div>
          <div style={paragraph}>
            <div>
              I&apos;m New Mexican grown with a large family spanning across
              Northern and Southern New Mexico. My grandma and her 18 brothers
              and sisters originated in La Jara, New Mexico where our
              <i>Maestas</i> family received the{' '}
              <a
                style={link}
                href='https://jemezvalleyhistory.org/wp-content/uploads/2015/10/original-grantees-Cuba.jpg'
              >
                Del Nacimiento Land Grant.
              </a>
            </div>
            <div>
              My mom raised my siblings and I in the South Valley one block down
              from the famous Los Pollos Hermanos Restaurant from Breaking Bad.
              My mother worked hard to provide for us and I carry her hard work
              and dedication in my work every day.
            </div>
            <div>
              This is my grandpa and I. He&apos;s my rock. We are both the
              descendants of Elfego Baca who is best known for the Frisco
              shootout in Reserve. &lsquo;In the late 1950s, Walt Disney turned
              Baca into the first Hispanic popular culture hero in the United
              States, representing him in six comic books, a feature film,
              and related merchandising.&rsquo; - Read about him&nbsp;
              <a
                href='https://en.wikipedia.org/wiki/Elfego_Baca'
                target='_blank'
                rel='noreferrer'
                style={link}
              >
                here.
              </a>
            </div>
          </div>
        </div>
      </StackingPair>
    </>
  )
}

export default NewMexicoGrown
