import { graphql, useStaticQuery } from 'gatsby'

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}

const BuildTimeQuery = (): string => {
  const { siteBuildMetadata } = useStaticQuery(graphql`query { siteBuildMetadata { buildTime } }`)
  return new Date(siteBuildMetadata.buildTime as string).toLocaleDateString(undefined, dateFormatOptions)
}

export default BuildTimeQuery
