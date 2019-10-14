import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import TimelinePost from './timeline_post'
import Centerline from './centerline'
const Timeline = () => {
  const timelinePosts = useStaticQuery(graphql`
    query {
      api {
        timelines(id: 1) {
          name
          timelinePosts {
            id
            title
            description
            body
            date
            carousel {
              id
              images {
                id
                name
                description
                altText
                imageUrl
              }
            }
          }
        }
      }
    }
  `).api.timelines[0].timelinePosts

  return timelinePosts.map((timelinePost, index) => {
    const evenRow = index % 2 === 1
    const timelineRow = [
      <TimelinePost {...timelinePost} />,
      <Centerline offsetToCenter={evenRow} />
    ]
    if(evenRow) { timelineRow.reverse() }
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  })
}

export default Timeline
