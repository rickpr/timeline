import React from 'react'
import Carousel from '../carousel'

import TimelineDescription from './timeline_description'
import TimelinePost from './timeline_post'

const TimelinePostWithDescription = ({ carousel, description, title }) =>
  <>
    <TimelinePost carousel={carousel} />
    <TimelineDescription description={description} title={title} />
  </>

export default TimelinePostWithDescription
