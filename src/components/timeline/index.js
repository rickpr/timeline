import React from 'react'

import useIsMobile from '../../hooks/useIsMobile'

import TimelinePost from './timeline_post'
import TimelineQuery from '../../queries/timeline'
import WideTimeline from './wide_timeline'
import NarrowTimeline from './narrow_timeline'

const Timeline = ({ timelineId }) => {
  const { timelinePosts } = TimelineQuery(timelineId)
  const timelineCards = timelinePosts.map(timelinePost => <TimelinePost {...timelinePost}/>)
  if(useIsMobile()) return <NarrowTimeline timelinePosts={timelineCards} />

  return <WideTimeline timelinePosts={timelineCards} />
}

export default Timeline
