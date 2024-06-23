import React, { useLayoutEffect } from 'react'

import Portfolio from './portfolio'
import SEO from 'components/seo'

const Root = (): JSX.Element => {
  useLayoutEffect(() => { history.replaceState({}, '', '/portfolio') }, [])
  return <Portfolio />
}

export const Head = SEO

export default Root
