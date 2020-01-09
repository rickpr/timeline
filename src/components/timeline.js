import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import TimelinePost from './timeline_post'
import AlternatingTimeline from './alternating_timeline'
import VerticalTimeline from './vertical_timeline'
import Centerline from './centerline'

const Timeline = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const breakpoint = 576
  const handleResize = () => setWindowWidth(window.innerWidth)
  useEffect(() => window.addEventListener('resize', handleResize))
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

  if(windowWidth < breakpoint) return <VerticalTimeline timelinePosts={timelinePosts} />

  return <AlternatingTimeline timelinePosts={timelinePosts} />
}

export default Timeline
