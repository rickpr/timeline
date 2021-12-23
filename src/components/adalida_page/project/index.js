import React from 'react'
import PropTypes from 'prop-types'

import Content from './content'

const Project = ({
  forwardRef,
  accentColor,
  heroPhoto,
  primaryColor,
  title,
  description,
  top,
  customStyle
}) => {
  const gridTemplateAreas = `
    'timeline-placement top-space    hero-photo menu-space'
    'entry-post         content      hero-photo menu-space'
    'lower-post         content      hero-photo menu-space'
    'bottom-space       bottom-space hero-photo menu-space'
  `
  const gridTemplateColumns = '3fr 6fr 7fr 1fr'
  const gridTemplateRows = '14fr 20fr 8fr 7fr'
  const gridStyle = {
    display: 'grid',
    minHeight: '100vh',
    width: '100%',
    scrollSnapAlign: 'start',
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
  const timelinePlacement = (
    <div style={{ gridArea: 'timeline-placement', paddingLeft: '10%', width: '100%' }}>
      <div style={{ minHeight: '150%', borderLeft: !top && borderStyle }} />
    </div>
  )
  const topSpace = <div style={{ gridArea: 'top-space', width: '100%' }} />
  const menuSpace = <div style={{ gridArea: 'menu-space' }} />
  const bottomSpace = <div style={{ gridArea: 'bottom-space' }} />
  const entryPost = (
    <div style={{ gridArea: 'entry-post', padding: '0 10%', width: '100%' }}>
      <div style={{ minHeight: '100%', width: '100%', borderLeft: borderStyle, borderTop: borderStyle, position: 'relative', top: '20%' }}>
        <div style={circleStyle} />
      </div>
    </div>
  )
  const lowerPost = (
    <div style={{ gridArea: 'lower-post', padding: '0 10%', width: '90%' }}>
      <div style={{ minHeight: '200%', width: '100%', borderLeft: borderStyle }} />
    </div>
  )
  const heroPicture = (
    <div style={{ gridArea: 'hero-photo', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <img style={{ objectFit: 'cover' }} src={heroPhoto} />
    </div>
  )
  return (
    <div style={gridStyle} ref={forwardRef}>
      {timelinePlacement} {topSpace} {heroPicture} {menuSpace}
      {entryPost} <Content {...{ accentColor, primaryColor, title, description }} />
      {lowerPost} {bottomSpace}
    </div>
  )
}

Project.proptypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.node) }).isRequired,
  accentColor: PropTypes.string.isRequired,
  heroPhoto: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  top: PropTypes.bool,
  customStyle: PropTypes.object

}

export default Project
