import React from 'react'

const defaultDescription = 'Rubber Duck cosplaying as a Product Designer'

const SEO = ({ title, description }: { title: string, description?: string }): JSX.Element => (
  <>
    <title>{title}</title>
    <meta name='description' content={description ?? defaultDescription} />
  </>
)

export default SEO
