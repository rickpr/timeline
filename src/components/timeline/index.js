import React from 'react'

import useIsMobile from '../../hooks/useIsMobile'

import WideTimeline from './wide_timeline'
import NarrowTimeline from './narrow_timeline'

const Timeline = ({ timelinePosts }) =>
  useIsMobile() ? <NarrowTimeline timelinePosts={timelinePosts} /> : <WideTimeline timelinePosts={timelinePosts} />

export default Timeline
