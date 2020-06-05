import React from 'react'
import TimelinePost from '../timeline_post'
import TimelineDescription from '../timeline_description'
import TimelineBlank from './timeline_blank'
import Centerline from './centerline'
import Crossbar from './crossbar'

const AlternatingTimeline = ({ timelinePosts }) => {
  const posts = timelinePosts.map((timelinePost, index) => {
    const evenRow = index % 2 === 1
    const topRow = [
      <TimelinePost {...timelinePost} />,
      <Crossbar offsetToCenter={evenRow} />,
      <TimelineBlank />,
    ]
    const bottomRow = [
      <TimelineDescription {...timelinePost} />,
      <Centerline />,
      <TimelineBlank />,
    ]
    if(evenRow) {
      topRow.reverse()
      bottomRow.reverse()
    }
    return (
      <div className="row" key={timelinePost.id}>
        {[...topRow, ...bottomRow]}
      </div>
    )
  });
  const finalCircle = <div className="centerline-heart">&hearts;</div>;

  return [posts, finalCircle]
}

export default AlternatingTimeline
