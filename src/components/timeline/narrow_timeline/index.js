import React from 'react'
import Centerline from './centerline'

const NarrowTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) =>
    <div className='row' key={`${timelinePost.id}-${index}-post`}>
      <div className='col-sm-10'>
        {timelinePost}
      </div>
      <Centerline />
    </div>
  )

export default NarrowTimeline
