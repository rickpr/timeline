import React from 'react'

import 'sass/adalida_page/case_study.scss'

const About = (): JSX.Element => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '10%', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Date</strong><span>09/09/23</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Purpose</strong><span>Generative AI - 1 Day Hackathon</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Location</strong><span>Digital Garage in San Francisco, CA</span>
        </div>
      </div>
      <p><strong>Case Study Details</strong></p>
      <p>
        TL;DR is a revolutionary product that aims to simplify the often convoluted and intimidating world of End User
        License Agreements (EULAs). TL;DR was born out of the dynamic environment of the Generative AI Hackathon, where
        a team of dedicated designers and developers came together to tackle the challenge of making EULAs
        comprehensible in a fraction of the time. In just one day, TL;DR was conceptualized, designed, and developed to
        address the common frustration of users grappling with lengthy and complex legal agreements. This case study
        offers a comprehensive look into the design process, user research, and the transformative impact of TL;DR in
        bridging the gap between legal jargon and user comprehension.
      </p>
      <p><strong>Team</strong></p>
      <div>One Product Designer</div>
      <div>One Software Engineer</div>
      <p>
        <a
          href='https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM/edit?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          <strong>VIEW SLIDE DECK ➜</strong>
        </a>
      </p>
    </div>
  )

  return (
    <div
      data-aos='fade-up'
      style={{
        minWidth: '95%',
        margin: '4vh 2.5vw',
        padding: '2em 7%',
        borderRadius: '2vh'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          maxWidth: '100%',
          maxHeight: '100%'
        }}>
        {text}
      </div>
    </div>
  )
}

export default About
