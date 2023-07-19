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
        Phronesis is an extraordinary mobile app designed to help fitness enthusiasts take their workouts
        to the next level. With extensive workout data tracking capabilities and support for time under
        tension workouts, Phronesis provides a comprehensive solution for users who want to improve their
        fitness and achieve their goals.
      </p>
      <p>
        With its user-friendly interface and intuitive design, Phronesis makes it easy to track your
        progress and stay motivated. You can easily view your workout history, monitor your progress
        over time, and get detailed insights into your performance. And with features like time under
        tension tracking and exercise instruction videos, you&apos;ll have everything you need to take
        your workouts to the next level.
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
