import { graphql, useStaticQuery } from 'gatsby'

export const TimelineQuery = () => {
  return useStaticQuery(graphql`
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
}

export default TimelineQuery
