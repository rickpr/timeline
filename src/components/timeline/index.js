import React, { useEffect, useState } from 'react'
import TimelineQuery from '../../queries/timeline'
import AlternatingTimeline from './alternating_timeline'
import VerticalTimeline from './vertical_timeline'

const Timeline = ({ timelineId }) => {
  const breakpoint = 576
  const [windowWidth, setWindowWidth] = useState(breakpoint)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  const { timelinePosts } = TimelineQuery(timelineId)
  if(windowWidth < breakpoint) return <VerticalTimeline timelinePosts={timelinePosts} />

  return <AlternatingTimeline timelinePosts={timelinePosts} />
}

export default Timeline
