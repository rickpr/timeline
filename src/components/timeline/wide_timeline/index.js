import React from 'react'
import Crossbar from './crossbar'

const WideTimeline = ({ timelinePosts, connected, green }) => {
  return timelinePosts.map((timelinePost, index) =>
    <div className='wide-timeline-row' key={`${timelinePost.id}-${index}-top`}>
      <div key='crossbar' data-aos='fade-up'>
        {connected && <div style={{ minHeight: '2.5em' }} />}
        {/* TODO: don't prop-drill this! */}
        <Crossbar green={green} />
      </div>
      <div key='timeline-post'>
        {timelinePost}
      </div>
    </div>
  )
}

export default WideTimeline
