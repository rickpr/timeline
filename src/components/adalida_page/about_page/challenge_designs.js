import React from 'react'
import Typewriter from 'typewriter-effect'

import Card from '../projects_page/card'
import SmallProject from './small_project'

import totalSales from 'videos/about/total_sales.mp4'
import salesAnalytics from 'videos/about/sales_analytics.mp4'

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
        <SmallProject media='about/emnify.jpg' />
        <SmallProject media='about/global_dashboard.jpg' />
        <SmallProject media='about/richmond.jpg' />
        <SmallProject media='about/sentra.jpg' />
        <SmallProject media='about/shazam.png' />
        <SmallProject media='about/venn_dashboard.jpg' />
        <SmallProject media='about/clock.jpg' />
        <SmallProject media={totalSales} />
        <SmallProject media={salesAnalytics} />
      </div>
    </Card>
  )
}

export default ChallengeDesigns
