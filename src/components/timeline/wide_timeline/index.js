import React from 'react'
import Crossbar from './crossbar'

const WideTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) =>
    <div className='wide-timeline-row' key={`${timelinePost.id}-${index}-top`}>
      <div data-aos='fade-up'><Crossbar /></div>
      <div>{timelinePost}</div>
    </div>
  )

export default WideTimeline
