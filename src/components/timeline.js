import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import TimelinePost from './timeline_post'
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
      <div className={`col-sm-1 ${evenRow && 'offset-5'}`}>
        <div className="card">
          <div className="card-body bg-primary" style={{ minHeight: '150px' }}>
          </div>
        </div>
      </div>,
        <TimelinePost {...timelinePost} />
    ]
    if(!evenRow) { timelineRow.reverse() }
    return <div className="row" key={timelinePost.id}>{timelineRow}</div>
  }
  )
}

export default Timeline
