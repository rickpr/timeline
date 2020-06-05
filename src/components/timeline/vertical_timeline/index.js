import React from 'react'
import TimelinePost from '../timeline_post'
import TimelineDescription from '../timeline_description'
import Centerline from './centerline'
const VerticalTimeline = ({ timelinePosts }) =>
  timelinePosts.map(timelinePost => {
    const timelineRow = [
      <TimelinePost {...timelinePost} />,
      <TimelineDescription {...timelinePost} />,
      <Centerline />
    ]
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  })

export default VerticalTimeline
