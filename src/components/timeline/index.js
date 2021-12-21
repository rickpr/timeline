import React from 'react'

import useIsMobile from '../../hooks/use_is_mobile'

import WideTimeline from './wide_timeline'
import NarrowTimeline from './narrow_timeline'

const Timeline = ({ timelinePosts, connected, green }) => {
  if (useIsMobile()) { return <NarrowTimeline timelinePosts={timelinePosts} /> }

  return <WideTimeline timelinePosts={timelinePosts} connected={connected} green={green} />
}

export default Timeline
