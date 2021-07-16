import React from 'react'
import Crossbar from './crossbar'

const WideTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) =>
    <div className="wide-timeline">
      <div className="row" key={`${timelinePost.id}-top`}>
        <Crossbar key="crossbar" connectTop={index > 0} />
        {timelinePost}
      </div>
    </div>
  )

export default WideTimeline
