import React from 'react'
import Crossbar from './crossbar'

const WideTimeline = ({ timelinePosts, dark }) => {
  return timelinePosts.map((timelinePost, index) =>
    <div className="wide-timeline-row" key={`${timelinePost.id}-${index}-top`}>
      <div key="crossbar" data-aos="fade-up">
        <Crossbar />
      </div>
      <div key="timeline-post" style={{marginTop: '-10px', marginBottom: '5em'}}>
        {timelinePost}
      </div>
    </div>
  )
}

export default WideTimeline
