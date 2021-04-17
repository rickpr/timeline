import { graphql, useStaticQuery } from 'gatsby'

export const TimelineQuery = timelineId => {
  const timelines = useStaticQuery(graphql`
    query {
      api {
        timelines {
          id
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
  `).api.timelines
  return timelines.find(timeline => timeline.id == timelineId)
}

export default TimelineQuery
