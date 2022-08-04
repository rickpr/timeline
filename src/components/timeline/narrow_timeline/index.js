import React from 'react'

const NarrowTimeline = ({ timelinePosts }) =>
  timelinePosts.map((timelinePost, index) =>
    <div key={`${timelinePost.id}-${index}-post`}>
      {timelinePost}
    </div>
  )

export default NarrowTimeline
