import React from 'react'
import TimelinePost from './timeline_post'
import Centerline from './centerline'
const VerticalTimeline = ({ timelinePosts }) =>
  timelinePosts.map(timelinePost => {
    const timelineRow = [
      <TimelinePost {...timelinePost} />,
      <Centerline crossbar={false} />
    ]
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  })

export default VerticalTimeline
