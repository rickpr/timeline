import React from 'react'
import PropTypes from 'prop-types'

import TimelineDescription from './timeline_description'
import TimelinePost from './timeline_post'

const TimelinePostWithDescription = ({ carousel, description, title }) =>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: '4em' }}>
    <div data-aos='fade-up' style={{ zIndex: 1, padding: '0 10px' }}>
      <TimelinePost carousel={carousel} />
    </div>
    <div data-aos='fade-up' style={{ zIndex: 1 , padding: '0 10px'}}>
      <TimelineDescription description={description} title={title} />
    </div>
  </div>

TimelinePostWithDescription.propTypes = {
  carousel: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default TimelinePostWithDescription
