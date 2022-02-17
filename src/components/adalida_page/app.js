import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from 'theme_context'

import ScalableText from 'components/scalable_text'

const App = ({
  forwardRef,
  linkDescription,
  title,
  top
}) => {
  const { name, description, primary, heroPhoto, projectPage, background } = useContext(ThemeContext)
  const active = name === title

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight + window.pageYOffset)
    }, 1000)
  }

  const gridTemplateArea = `
    'left-space timeline-top top-space    hero-photo menu-space' 30vh
    'left-space entry-post   title        hero-photo menu-space' max-content
    'left-space lower-post   description  hero-photo menu-space' 8fr
    'left-space bottom-space bottom-space hero-photo menu-space' 7fr / 1fr 2fr 1fr 20fr 1fr
`

  const gridTemplateAreas = `
    'left-space timeline-top top-space    hero-photo menu-space'
    'left-space entry-post   title        hero-photo menu-space'
    'left-space lower-post   description  hero-photo menu-space'
    'left-space bottom-space bottom-space hero-photo menu-space'
`

  // const gridTemplateColumns = '10% 6fr 7fr 1fr'
  const gridTemplateColumns = '1fr 2fr 10fr 11fr 1fr'

  const gridTemplateRows = '30vh max(max-content, 3fr) 8fr 7fr'
  const gridStyle = {
    background,
    display: 'grid',
    minHeight: '100vh',
    width: '100%',
    scrollSnapAlign: 'start',
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    transition: 'opacity 1s ease'
  }
  if (!active) gridStyle.opacity = '0'
  const borderSize = 0.5 // em
  const borderStyle = `${borderSize}em solid ${primary || '#FF0000'}`
  const transition = 'border-color 0.5s ease'

  const circleSize = borderSize / 2 // em
  const circleStyle = {
    border: borderStyle,
    borderRadius: '50%',
    height: `${borderSize}em`,
    width: `${borderSize}em`,
    right: `-${circleSize}em`,
    top: `-${circleSize * 3}em`,
    position: 'absolute',
    transition
  }
  const timelineTop = (
    <div style={{ gridArea: 'timeline-top', width: '100%' }}>
      <div style={{ height: '100%', borderLeft: !top && borderStyle, transition }} />
    </div>
  )
  const topSpace = <div style={{ gridArea: 'top-space', width: '100%' }} />
  const menuSpace = <div style={{ gridArea: 'menu-space' }} />
  const bottomSpace = <div style={{ gridArea: 'bottom-space' }} />
  const entryPost = (
    <div style={{
      gridArea: 'entry-post',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr',
      width: '100%',
    }}>
      <div style={{ borderLeft: !top && borderStyle, height: '100%', transition }} />
      <div style={{
        borderTop: borderStyle,
        borderLeft: borderStyle,
        position: 'relative',
        height: '100%',
        transition
      }}>
        <div style={circleStyle} />
      </div>
    </div>
  )
  const lowerPost = (
    <div style={{ gridArea: 'lower-post', width: '90%' }}>
      <div style={{ minHeight: '200%', width: '100%', borderLeft: borderStyle, transition }} />
    </div>
  )
  const bigTitle = (
    <div style={{ gridArea: 'title', display: 'flex', alignItems: 'center' }}>
      <ScalableText text={title} color={primary} />
    </div>
  )
  const projectLink = (
    <div style={{ marginTop: '1em', visibility: !linkDescription && 'hidden' }}>
      <Link to={projectPage}><span style={{ color: '#FFFFFF' }} onClick={handleClick}>{linkDescription}</span></Link>
      &nbsp;
      <span style={{ color: primary }}><FontAwesomeIcon icon={faArrowRight} /></span>
    </div>
  )
  const inlineDescription = (
    <div style={{ gridArea: 'description', color: '#FFFFFF', fontSize: '2em' }}>
      {description}
      {projectLink}
    </div>
  )
  const heroPicture = (
    <div style={{ gridArea: 'hero-photo', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <img style={{ objectFit: 'cover', maxHeight: '100vh' }} src={heroPhoto} />
    </div>
  )
  const leftSpace = <div style={{ gridArea: 'left-space' }} />
  return (
    <div style={gridStyle} ref={forwardRef}>
      {leftSpace} {timelineTop} {topSpace} {heroPicture} {menuSpace}
                  {entryPost}   {bigTitle}
                  {lowerPost}   {inlineDescription}
                  {bottomSpace}
    </div>
  )
}

App.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }).isRequired,
  linkDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
  top: PropTypes.bool
}

export default App
