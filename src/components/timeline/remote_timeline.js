import React from 'react'
import PropTypes from 'prop-types'

import TimelinePostWithDescription from './timeline_post_with_description'
import TimelineQuery from '../../queries/timeline'
import Timeline from '.'

const RemoteTimeline = ({ timelineId }) => {
  const { timelinePosts } = TimelineQuery(timelineId)
  const timelineCards = timelinePosts.map(
    timelinePost => <TimelinePostWithDescription key={timelinePost.id} {...timelinePost} />
  )
  return <Timeline timelinePosts={timelineCards} />
}

RemoteTimeline.propTypes = { timelineId: PropTypes.string.isRequired }

export default RemoteTimeline
