import React from 'react'

import StackingPair from '../stacking_pair'

import GlassImage from './glass_image'
import { paragraph, paragraphHeading, textBox } from './styles'

const BacaFamily = 'images/about/baca_family.webp'

const Degree = (): JSX.Element => {
  return (
    <StackingPair reversed>
      <GlassImage media={BacaFamily} />
      <div style={textBox}>
        <div style={paragraphHeading}>New Mexican Transplanted to SF</div>
        <div style={paragraph}>
          <div>
            I also worked as a Student Program Coordinator planning events, designing experiences, and creating
            marketing materials. I helped recharter and was elected Vice President of the Lobo Gardens.
            I won the local people&apos;s choice for the Nasa Space Apps Hackathon in 2018. Lastly, I was the co-winner of
            the Dale and Melada scholarship award in 2020.
          </div>
          <div>
            During my winter, summer, fall, and spring breaks I’d visit my fiancé in San Francisco, California. During
            this time I worked with Robert Half as an Administrative Assistant in a variety of offices like Samsara,
            World Economic Forum, User Testing, the Watermark, and more.
          </div>
          <div>
            When Covid began, I moved from Albuquerque to Oakland while completing my classes and internship with
            Project ECHO remotely. I graduated from the University of New Mexico as a first generation college graduate
            in 2020.
          </div>
          <div>
            After, I began my self-taught journey learning User Experience Design through Google&apos;s Coursera
            courses, the Interaction Design Foundation, Hackathons, and the clientele I receive from my design business.
            As you can see in my portfolio, much of my design clientele is contracted from New Mexico.
          </div>
        </div>
      </div>
    </StackingPair>
  )
}

export default Degree
