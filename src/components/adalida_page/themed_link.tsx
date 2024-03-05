import { Link } from 'gatsby'
import React, { useMemo, useContext } from 'react'

import type { Theme } from 'theme_context'

import { HomePageContext } from './home_page_context'

const containerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  justifyContent: 'flex-start',
  padding: '10px'
}
const titleStyles = {
  fontSize: '1.625rem',
  fontWeight: 800,
  marginBottom: '6px'
}
const roleListStyles = {
  display: 'flex',
  justifyContent: 'left',
  flexWrap: 'wrap' as const,
  padding: 0,
  margin: '0 0 14px 0',
  gap: '0.5em'
}

const descriptionStyles = {
  fontSize: '0.875rem',
  marginBottom: '0.75em'
}

const linkStyles = { fontSize: '0.75rem' }

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
      <div style={roleListStyles}>
        {roles.map(role => <div className='glass badge' key={role}>{role}</div>)}
      </div>
      <div style={titleStyles}>{subtitle ?? name.toUpperCase()}</div>
      <div style={descriptionStyles}>{description}</div>
      {link !== undefined && <div style={linkStyles}>{link.text} ➜</div>}
    </>
  )

  if (link !== undefined) {
    return (
      <Link to={link.url} style={containerStyles} onClick={click}>
        {innerContent}
      </Link>
    )
  }

  return (
    <div style={containerStyles}>
      {innerContent}
    </div>
  )
}

export default ThemedLink
