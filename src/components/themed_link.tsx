import React, { useMemo, useContext } from 'react'

import type { Theme } from 'theme_context'

import { HomePageContext } from './home_page_context'

const onClick = (
  setIsPortfolioPage: (updatePortfolioPage: boolean | ((isPortfolioPage: boolean) => boolean)) => void,
  setScrollToCaseStudies: (updateScrollToCaseStudies: boolean | ((scrollToCaseStudies: boolean) => boolean)) => void
): true => {
  setIsPortfolioPage(true)
  setScrollToCaseStudies(true)
  return true
}

const ThemedLink = ({ theme }: { theme: Theme }): React.ReactElement => {
  const { description, name, subtitle, link, roles } = theme
  const { setIsPortfolioPage, setScrollToCaseStudies } = useContext(HomePageContext)
  const click = useMemo(() => {
    if (link?.url === '/') {
      return () => onClick(setIsPortfolioPage, setScrollToCaseStudies)
    }
  }, [setIsPortfolioPage, setScrollToCaseStudies, link?.url])

  const innerContent = (
    <>
      <div className='role-list'>
        {roles.map(role => <div className='badge' key={role}>{role}</div>)}
      </div>
      <div className='title'>{subtitle ?? name.toUpperCase()}</div>
      <div className='description'>{description}</div>
      {link !== undefined && <div className='link'>{link.text} ➜</div>}
    </>
  )

  if (link !== undefined) {
    return (
      <a href={link.url} className='themed-link-container' onClick={click}>
        {innerContent}
      </a>
    )
  }

  return <div className='themed-link-container'>{innerContent}</div>
}

export default ThemedLink
