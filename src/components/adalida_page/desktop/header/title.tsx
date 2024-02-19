import { Link } from 'gatsby'
import React, { useContext, useMemo } from 'react'

import type { Theme } from 'theme_context'

import { glassStyles } from '../../styles'
import { HomePageContext } from '../../home_page_context'

const labelStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  height: '100%'
}
const titleStyles = {
  lineHeight: 1,
  padding: 0,
  margin: 0
}
const listStyles = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  justifyContent: 'left',
  padding: 0,
  margin: 0,
  gap: '0.5em'
}
const roleStyles = {
  ...glassStyles,
  fontWeight: 700,
  transition: 'background-color 0.5s ease-in-out',
  padding: '0.8em',
  fontSize: '10px',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}
const linkStyles = {
  fontSize: '1.2em',
  lineHeight: 1,
  fontWeight: 'bold'
}

interface Props {
  theme: Theme
  active: boolean
}

const onClick = (
  // TODO: Dedupe this function with the one in themed_link.tsx
  setIsProfessionPage: (updateProfessionPage: boolean | ((isProfessionPage: boolean) => boolean)) => void,
  setScrollToCaseStudies: (updateScrollToCaseStudies: boolean | ((scrollToCaseStudies: boolean) => boolean)) => void
): true => {
  setIsProfessionPage(true)
  setScrollToCaseStudies(true)
  return true
}

const Title = ({ theme, active }: Props): React.ReactElement => {
  const { description, name, subtitle, link, roles } = theme
  const { setIsProfessionPage, setScrollToCaseStudies } = useContext(HomePageContext)
  const click = useMemo(() => {
    if (link?.url === '/') {
      return () => onClick(setIsProfessionPage, setScrollToCaseStudies)
    }
  }, [setIsProfessionPage, setScrollToCaseStudies, link?.url])

  const pointerEvents = active ? 'auto' : 'none'
  const fontSize = active ? '2.6rem' : '1rem'
  const fontWeight = active ? 900 : 500
  const descriptionStyle = {
    display: 'grid',
    fontWeight: 600,
    gridTemplateRows: active ? '1fr' : '0fr',
    paddingTop: active ? '1rem' : 0,
    overflow: 'hidden',
    transition: 'grid-template-rows 0.5s ease-in-out'
  }

  const activeName = subtitle ?? name.toUpperCase()
  const innerContent = (
    <>
      <div style={{ ...titleStyles, fontWeight, fontSize, padding: active ? 0 : '1rem 0' }}>{active ? activeName : name}</div>
      <div style={descriptionStyle}>
        <div style={{ overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={listStyles}>
            {roles.map(role => <div key={role} style={roleStyles}>{role}</div>)}
          </div>
          <div>{description}</div>
          {link !== undefined && <div style={linkStyles}>{link.text} ➜</div>}
        </div>
      </div>
    </>
  )

  if (link !== undefined) {
    return (
      <Link to={link.url} style={{ pointerEvents, ...labelStyles }} onClick={click}>
        {innerContent}
      </Link>
    )
  }

  return (
    <div style={{ pointerEvents, ...labelStyles }}>
      {innerContent}
    </div>
  )
}

export default Title
