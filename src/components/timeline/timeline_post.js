import PropTypes from 'prop-types'
import React from 'react'

import Carousel from '../carousel'

const TimelinePost = ({ carousel }) =>
  <div className='timeline-post'>
    <Carousel carousel={carousel} />
  </div>

TimelinePost.propTypes = Carousel.propTypes

export default TimelinePost
