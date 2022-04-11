import { graphql, useStaticQuery } from 'gatsby'

export const ImageQuery = imagePath => {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            childImageSharp { gatsbyImageData }
            name
            relativePath
          }
        }
      }
    }
  `).allFile.edges

  // Images will likely come in with a /images/...
  // The relativePath in the query does not start with /images or a slash.
  const desiredRelativePath = imagePath.replace(/^\/?(images)?\//, '')
  return images.find(({ node: { relativePath } }) => relativePath === desiredRelativePath).node
}

export default ImageQuery
