import React from 'react'
import TimelinePost from './timeline_post'
import Centerline from './centerline'
const VerticalTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) => {
    const timelineRow = [
      <TimelinePost {...timelinePost} />,
      <Centerline />
    ]
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  })

export default VerticalTimeline
