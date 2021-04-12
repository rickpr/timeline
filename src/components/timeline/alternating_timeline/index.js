import React from 'react'
import TimelinePost from '../timeline_post'
import TimelineDescription from '../timeline_description'
import Crossbar from './crossbar'

const AlternatingTimeline = ({ timelinePosts }) => {
  let isFirstRow = true
  const posts = timelinePosts.map(timelinePost => {
    const padRow = row => row
    const topRow = [
      <Crossbar key="crossbar" isFirstRow={isFirstRow} />,
      <TimelinePost {...timelinePost} key="timeline-post" />,
      <TimelineDescription {...timelinePost} key="timeline-description" />,
    ]
    isFirstRow = false
    return (
      <div className="alternating-timeline">
        <div className="row" key={`${timelinePost.id}-top`}>
          {padRow(topRow)}
        </div>
      </div>
    )
  })
  const bottomBar = <div style={{borderBottom: '5px solid'}}></div>

  return [posts, bottomBar]
}

export default AlternatingTimeline
