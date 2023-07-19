import React from 'react'

import Card from '../card'

import 'sass/adalida_page/project.scss'

const About = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '10%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Client</strong><span>Phronesis</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Date</strong><span>12 weeks</span>
        </div>
      </div>
      <p><strong>Project Details</strong></p>
      <p>
        Discover the transformative power of Phronesis, a captivating portfolio
        piece featuring a student-focused landing page. Through thoughtful
        design and meticulous attention to detail, Phronesis offers a
        user-friendly interface that enhances the student experience within
        educational institutions. Seamlessly access important information,
        communicate effectively, and take control of your academic journey with
        ease. Experience intuitive design and visually engaging elements that
        empower students to navigate their educational path with confidence.
        Phronesis invites you to explore a new era of student information
        management, where simplicity and functionality meet to create a seamless
        user experience.
      </p>
      <p><strong>Role Details</strong></p>
      <div>User Experience Design</div>
      <div>Visual Design</div>
      <p><strong>TRY IT ➜</strong></p>
    </div>
  )

  return (
    <div
      data-aos='fade-up'
      style={{
        minWidth: '95%',
        margin: '4vh 2.5vw',
        color: '#FFFFFF',
        padding: '2em 7%',
        borderRadius: '2vh'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          maxWidth: '100%',
          maxHeight: '100%',
        }}>
        <div>{text}</div>
      </div>
    </div>
  )
}

export default About
