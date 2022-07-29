import React, { useRef } from 'react'

import SplashPage from '../splash_page'
import ChallengeDesigns from './challenge_designs'
import Links from './links'

import 'sass/adalida_page/index.scss'

const AboutPage = () =>
      <>
        <SplashPage
          paragraphs={
            <>
              <p>
                I&apos;m an enthusastic and outgoing person who enjoys problem solving and
                desigining simple and elegant solutions.
              </p>
              <p>
                Please reach out if you’d like to have a cup of coffee and design a solution
                together.
              </p>
            </>
          }
          links={<Links />}
          ref={useRef()}
        />
        <ChallengeDesigns />
      </>

AboutPage.displayName = 'AboutPage'

export default AboutPage
