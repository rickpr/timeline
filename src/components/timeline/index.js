import React from 'react'

import useIsMobile from '../../hooks/useIsMobile'

import TimelineQuery from '../../queries/timeline'
import AlternatingTimeline from './alternating_timeline'
import VerticalTimeline from './vertical_timeline'

const Timeline = ({ timelineId }) => {
  const { timelinePosts } = TimelineQuery(timelineId)
  if(useIsMobile()) return <VerticalTimeline timelinePosts={timelinePosts} />

  return <AlternatingTimeline timelinePosts={timelinePosts} />
}

export default Timeline
