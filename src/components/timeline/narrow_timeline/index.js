import React from 'react'
import Centerline from './centerline'
const NarrowTimeline = ({ timelinePosts }) =>
  timelinePosts.map(timelinePost => {
    const timelineRow = [
      timelinePost,
      <Centerline />
    ]
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  })

export default NarrowTimeline
