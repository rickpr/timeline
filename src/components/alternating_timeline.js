import React from 'react'
import TimelinePost from './timeline_post'
import TimelineDescription from './timeline_description'
import Centerline from './centerline'
const AlternatingTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) => {
    const evenRow = index % 2 === 1
    const timelineRow = [
      <TimelinePost {...timelinePost} />,
      <Centerline offsetToCenter={evenRow} />,
      <TimelineDescription {...timelinePost} />,
    ]
    if(evenRow) { timelineRow.reverse() }
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  })

export default AlternatingTimeline
