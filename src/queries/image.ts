import { graphql, useStaticQuery } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

interface Image {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
  name: string
  relativePath: string
}

export const ImageQuery = (imagePath: string): Image => {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            childImageSharp { gatsbyImageData(placeholder: BLURRED) }
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
  const image = images.find(({ node: { relativePath } }: { node: { relativePath: string } }): boolean => (
    relativePath === desiredRelativePath)
  )
  if (image !== undefined) return image.node

  throw new Error(`No image found for ${imagePath}`)
}

export default ImageQuery
