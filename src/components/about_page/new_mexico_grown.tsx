import React from 'react'

import StackingPair from '../stacking_pair'
import GlassImage from './glass_image'
import { link, paragraph, paragraphHeading, textBox } from './styles'

const BacaFamily = 'images/about/baca_family.webp'

const NewMexicoGrown = (): JSX.Element => {
  return (
    <StackingPair>
      <GlassImage media={BacaFamily} />
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
  )
}

export default NewMexicoGrown
