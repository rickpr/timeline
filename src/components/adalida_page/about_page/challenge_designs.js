import React from 'react'
import Typewriter from 'typewriter-effect'

import Card from '../projects_page/card'
import SmallProject from './small_project'

import checkmark from 'videos/about/checkmark.mp4'
import screenRecording from 'videos/about/screen_recording.mp4'
import challengeDesign from 'videos/about/challenge_design.mp4'
import salesAnalytics from 'videos/about/sales_analytics.mp4'
import totalSales from 'videos/about/total_sales.mp4'

const styles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  placeContent: 'center',
  gap: '30px'
}

const ChallengeDesigns = () => {
  const typewriter = (
    <Typewriter
      options={{
        strings: [
          'product design.',
          'user interface design.',
          'interaction design.'
        ],
        autoStart: true,
        loop: true
      }}
    />
  )
  return (
    <Card>
      <p style={{ width: '100%', textAlign: 'center', marginTop: 0, fontSize: '1.25em' }}>
        Here are my redesigns I used to practice and grow my skills in&nbsp;
        <span style={{ color: '#850021' }}>{typewriter}</span>
      </p>
      <div style={styles}>
        <SmallProject media={checkmark} />
        <SmallProject media={screenRecording} />
        <SmallProject media={challengeDesign} />
        <SmallProject media={salesAnalytics} />
        <SmallProject media={totalSales} />
        <SmallProject media='about/clock.jpg' />
        <SmallProject media='about/venn_dashboard.jpg' />
        <SmallProject media='about/shazam.png' />
        <SmallProject media='about/sentra.jpg' />
        <SmallProject media='about/richmond.jpg' />
        <SmallProject media='about/global_dashboard.jpg' />
        <SmallProject media='about/emnify.jpg' />
      </div>
    </Card>
  )
}

export default ChallengeDesigns
