import React from 'react'
import PropTypes from 'prop-types'

import TimelineDescription from './timeline_description'
import TimelinePost from './timeline_post'

const TimelinePostWithDescription = ({ carousel, description, title }) =>
  <div className='row'>
    <div className='col-sm-6' data-aos='fade-up' style={{ zIndex: 1 }}>
      <TimelinePost carousel={carousel} />
    </div>
    <div className='col-sm-6' data-aos='fade-up' style={{ zIndex: 1 }}>
      <TimelineDescription description={description} title={title} />
    </div>
  </div>

TimelinePostWithDescription.propTypes = {
  carousel: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default TimelinePostWithDescription
