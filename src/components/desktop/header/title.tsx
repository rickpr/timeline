import { Link } from 'gatsby'
import React, { useContext, useMemo } from 'react'

import type { Theme } from 'theme_context'

import { HomePageContext } from '../../home_page_context'

interface Props {
  theme: Theme
  active: boolean
}

const onClick = (
  // TODO: Dedupe this function with the one in themed_link.tsx
  setIsPortfolioPage: (updatePorfolioPage: boolean | ((isPortfolioPage: boolean) => boolean)) => void,
  setScrollToCaseStudies: (updateScrollToCaseStudies: boolean | ((scrollToCaseStudies: boolean) => boolean)) => void
): true => {
  setIsPortfolioPage(true)
  setScrollToCaseStudies(true)
  return true
}

const Title = ({ theme, active }: Props): React.ReactElement => {
  const { description, name, subtitle, link, roles } = theme
  const arrow = link?.url?.includes(':') === true ? <div className='rotated-arrow' /> : ' ➜'
  const { setIsPortfolioPage, setScrollToCaseStudies } = useContext(HomePageContext)
  const click = useMemo(() => {
    if (link?.url === '/portfolio') {
      return () => onClick(setIsPortfolioPage, setScrollToCaseStudies)
    }
  }, [setIsPortfolioPage, setScrollToCaseStudies, link?.url])

  const pointerEvents = active ? 'auto' : 'none'
  const padding = active ? '1rem' : '0 1rem'
  const fontSize = active ? '2.6rem' : '1rem'
  const fontWeight = active ? 900 : 500

  const descriptionStyle = {
    gridTemplateRows: active ? '1fr' : '0fr',
    paddingTop: active ? '1rem' : 0
  }

  const activeName = subtitle ?? name.toUpperCase()
  const innerContent = (
    <>
      <div className='title' style={{ fontWeight, fontSize, padding: active ? 0 : '1rem 0' }}>{active ? activeName : name}</div>
      <div className='description' style={descriptionStyle}>
        <div style={{ overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className='roles'>
            {roles.map(role => <div key={role} className='badge'>{role}</div>)}
          </div>
          <div>{description}</div>
          {link !== undefined && <div className='link'>{link.text}{arrow}</div>}
        </div>
      </div>
    </>
  )

  if (link !== undefined) {
    return (
      <Link className='app-label' to={link.url} style={{ pointerEvents, padding }} onClick={click}>
        {innerContent}
      </Link>
    )
  }

  return (
    <div className='app-label' style={{ pointerEvents, padding }}>
      {innerContent}
    </div>
  )
}

export default Title
