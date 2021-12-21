import React from 'react'
import Carousel from '../carousel'

const TimelinePost = ({ carousel }) =>
  <div className='bg-dark timeline-post'>
    <Carousel className='card-img' carousel={carousel} />
  </div>

export default TimelinePost
