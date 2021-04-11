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
      <TimelinePost {...timelinePost} key="timeline-post" />,
      <Crossbar offsetToCenter={evenRow} key="crossbar" />,
      <TimelineBlank key="top-timeline-blank" />,
    ]
    const bottomRow = [
      <TimelineDescription {...timelinePost} key="timeline-description" />,
      <Centerline key="centerline" />,
      <TimelineBlank key="timeline-blank" />,
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
