import { graphql, useStaticQuery } from 'gatsby'

const BuildTimeQuery = (): Date => {
  const { siteBuildMetadata } = useStaticQuery(graphql`query { siteBuildMetadata { buildTime } }`)
  return new Date(siteBuildMetadata.buildTime as string)
}

export default BuildTimeQuery
