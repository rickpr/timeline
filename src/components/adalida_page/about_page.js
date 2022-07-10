import React, { useRef } from 'react'

import SplashPage from './splash_page'
import Button from './button'

import 'sass/adalida_page/index.scss'

const AboutPage = () =>
      <SplashPage
        paragraphs={
          <>
            <p>
              I&apos;m an enthusastic and outgoing person who enjoys problem solving and coffee.
            </p>
            <p>
              Please reach out if you’d like to have a cup of coffee online and chat.
            </p>
          </>
        }
        button={
          <Button style={{ backgroundColor: '#872234', color: 'white' }} href='mailto:adalida@adalida.design'>
            Contact Adalida
          </Button>
        }
        ref={useRef()}
      />

AboutPage.displayName = 'AboutPage'

export default AboutPage
