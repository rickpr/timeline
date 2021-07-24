import React from 'react'
import Crossbar from './crossbar'

const WideTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) =>
    <div className="wide-timeline" key={`${timelinePost.id}-${index}-top`}>
      <div className="row">
        <div className="col-sm-2" data-aos="fade-up">
          <Crossbar key="crossbar" connectTop={index > 0} />
        </div>
        <div className="col-sm-10">
          {timelinePost}
        </div>
      </div>
    </div>
  )

export default WideTimeline
