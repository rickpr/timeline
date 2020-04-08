import React from 'react'
import TimelinePost from './timeline_post'
import TimelineDescription from './timeline_description'
import Centerline from './centerline'
const AlternatingTimeline = ({ timelinePosts }) => {
  const posts = timelinePosts.map((timelinePost, index) => {
    const evenRow = index % 2 === 1
    const timelineRow = [
      <TimelinePost {...timelinePost} />,
      <Centerline offsetToCenter={evenRow} crossbar={true} />,
      <TimelineDescription {...timelinePost} />,
    ]
    if(evenRow) { timelineRow.reverse() }
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  });
  const finalCircle = <div className="centerline-heart">&hearts;</div>;

  return [posts, finalCircle]
}

export default AlternatingTimeline
