import React from 'react'

import TimelinePostWithDescription from './timeline_post_with_description'
import TimelineQuery from '../../queries/timeline'
import Timeline from '.'

const RemoteTimeline = ({ timelineId }) => {
  const { timelinePosts } = TimelineQuery(timelineId)
  const timelineCards = timelinePosts.map(timelinePost => <TimelinePostWithDescription {...timelinePost}/>)
  return <Timeline timelinePosts={timelineCards} />
}

export default RemoteTimeline
