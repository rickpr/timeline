import { Link } from 'gatsby'
import React from 'react'

import SEO from 'components/seo'

const NotFoundPage = (): JSX.Element => (
  <div className='not-found-page'>
    <div style={{ fontSize: '8em', fontWeight: 900 }}>404</div>
    <Link to='/'>Go back to the homepage</Link>
  </div>
)

export const Head = SEO

export default NotFoundPage
