import React from 'react'

const defaultTitle = 'Adalida Baca'
const defaultDescription = 'Rubber Duck cosplaying as a Product Designer'

const SEO = ({ title, description }: { title?: string, description?: string }): JSX.Element => (
  <>
    <title>{title ?? defaultTitle}</title>
    <meta name='description' content={description ?? defaultDescription} />
  </>
)

export default SEO
