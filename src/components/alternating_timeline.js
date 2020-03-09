import React from 'react'
import TimelinePost from './timeline_post'
import Centerline from './centerline'
const AlternatingTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) => {
    const evenRow = index % 2 === 1
    const timelineRow = [
      <TimelinePost {...timelinePost} />,
      <Centerline offsetToCenter={evenRow} />
    ]
    if(evenRow) { timelineRow.reverse() }
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  })

export default AlternatingTimeline
