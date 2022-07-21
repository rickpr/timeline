import PropTypes from 'prop-types'
import React from 'react'

import useIsMobile from '../../hooks/use_is_mobile'

import WideTimeline from './wide_timeline'
import NarrowTimeline from './narrow_timeline'

const Timeline = ({ timelinePosts }) => {
  if (useIsMobile()) { return <NarrowTimeline timelinePosts={timelinePosts} /> }

  return <WideTimeline timelinePosts={timelinePosts} />
}

Timeline.propTypes = { timelinePosts: PropTypes.arrayOf(PropTypes.node) }

export default Timeline
