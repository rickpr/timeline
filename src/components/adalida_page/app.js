import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import ScalableText from 'components/scalable_text'

const App = ({
  forwardRef,
  accentColor,
  heroPhoto,
  primaryColor,
  title,
  description,
  projectPage,
  top
}) => {
  const gridTemplateAreas = `
    'timeline-placement top-space    hero-photo menu-space'
    'entry-post         title        hero-photo menu-space'
    'lower-post         description  hero-photo menu-space'
    'bottom-space       bottom-space hero-photo menu-space'
  `
  const gridTemplateColumns = '10% 6fr 7fr 1fr'
  const gridTemplateRows = '30vh max(max-content, 3fr) 8fr 7fr'
  const gridStyle = {
    display: 'grid',
    minHeight: '100vh',
    width: '100%',
    scrollSnapAlign: 'start',
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    columnGap: '2em'
  }
  const borderSize = 0.5 // em
  const borderStyle = `${borderSize}em solid ${accentColor || '#FF0000'}`
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
  const timelinePlacement = (
    <div style={{ gridArea: 'timeline-placement', marginLeft: '10%', width: '100%' }}>
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
      margin: '0 10%',
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
    <div style={{ gridArea: 'lower-post', padding: '0 10%', width: '90%' }}>
      <div style={{ minHeight: '200%', width: '100%', borderLeft: borderStyle, transition }} />
    </div>
  )
  const bigTitle = (
    <div style={{ gridArea: 'title', display: 'flex', alignItems: 'center' }}>
      <ScalableText text={title} color={accentColor} />
    </div>
  )
  const inlineDescription = (
    <div style={{ gridArea: 'description', color: primaryColor, fontSize: '2em' }}>
      {description}
      <div style={{ marginTop: '1em' }}>
        <Link to={projectPage}><span style={{ color: '#FFFFFF' }}>OPEN CASE STUDY</span></Link>
        &nbsp;
        <span style={{ color: accentColor }}><FontAwesomeIcon icon={faArrowRight} /></span>
      </div>
    </div>
  )
  const heroPicture = (
    <div style={{ gridArea: 'hero-photo', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <img style={{ objectFit: 'cover', maxHeight: '100vh' }} src={heroPhoto} />
    </div>
  )
  return (
    <div style={gridStyle} ref={forwardRef}>
      {timelinePlacement} {topSpace} {heroPicture} {menuSpace}
      {entryPost} {bigTitle}
      {lowerPost} {inlineDescription}
      {bottomSpace}
    </div>
  )
}

App.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }).isRequired,
  accentColor: PropTypes.string.isRequired,
  heroPhoto: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectPage: PropTypes.string.isRequired,
  top: PropTypes.bool
}

export default App
