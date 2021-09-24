import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Content = ({ accentColor, primaryColor, title, description }) => {
  const gridTemplateAreas = `
    'entry-post title       hero-photo'
    'lower-post description hero-photo'
    'lower-post link        hero-photo'
  `
  const gridTemplateColumns = '4fr 5fr 5fr'
  const gridTemplateRows = '2fr 4fr 1fr'
  const gridStyle = {
    display: 'grid',
    justifyItems: 'left',
    alignItems: 'left',
    width: '100%',
    gridArea: 'content',
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows
  }
  const borderSize = 0.5 // em
  const borderStyle = `${borderSize}em solid ${accentColor || '#FF0000'}`
  const circleSize = borderSize / 2 // em
  const circleStyle = {
    border: borderStyle,
    borderRadius: '50%',
    height: `${borderSize}em`,
    width: `${borderSize}em`,
    right: `-${circleSize}em`,
    top: `-${circleSize * 3}em`,
    position: 'absolute'
  }
  const entryPost =
    <div style={{ gridArea: 'entry-post', padding: '0 10%', width: '100%', }}>
        <div style={{ minHeight: '100%', width: '100%', borderLeft: borderStyle, borderTop: borderStyle, position: 'relative', top: '50%' }}>
      <div style={circleStyle}></div>
      </div>
    </div>
  const lowerPost =
    <div style={{ gridArea: 'lower-post', padding: '0 10%', width: '90%' }}>
      <div style={{ minHeight: '100%', width: '100%', borderLeft: borderStyle }} />
    </div>
  const bigTitle =
        <div
          style={{ gridArea: 'title', width: '100%', display: 'flex', alignItems: 'center', color: accentColor }}
         className="header huge name"
        >
          {title}
        </div>
  const inlineDescription = <div style={{ gridArea: 'description', color: primaryColor, fontSize: '2em' }}>{description}</div>
  const heroPhoto = <div style={{ gridArea: 'hero-photo', width: '100%' }} className="hero-photo" />
  const link =
    <div style={{ gridArea: 'link', fontSize: '2em' }}>
      <Link to="/adalida/projects"><span style={{ color: primaryColor }}>OPEN CASE STUDY</span></Link>&nbsp;
      <span style={{color: '#ff2079'}}><FontAwesomeIcon icon={faArrowRight} /></span>
    </div>

  return (
    <div style={gridStyle}>
      {entryPost} {bigTitle}
      {lowerPost} {inlineDescription} {heroPhoto}
                  {link}
    </div>
  )
}

export default Content
