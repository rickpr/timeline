import React from 'react'
import Carousel from '../carousel'

import TimelineDescription from './timeline_description'
import TimelinePost from './timeline_post'

const TimelinePostWithDescription = ({ carousel, description, title }) =>
  <div class='row'>
    <div className='col-sm-6' data-aos='fade-up' style={{ zIndex: 1 }}>
      <TimelinePost carousel={carousel} />
    </div>
    <div className='col-sm-6' data-aos='fade-up' style={{ zIndex: 1 }}>
      <TimelineDescription description={description} title={title} />
    </div>
  </div>

export default TimelinePostWithDescription
