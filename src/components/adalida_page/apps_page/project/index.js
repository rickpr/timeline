import React from 'react'

import useAnimateOnScroll from '../../../../hooks/use_animate_on_scroll'

import Content from './content'

const Project = ({
  accentColor,
  backgroundColor,
  heroPhoto,
  primaryColor,
  textColor,
  title,
  description,
  marginTop,
  top,
  customStyle
}) => {
  useAnimateOnScroll()
  const gridTemplateAreas = `
    'timeline-placement    top-space    hero-photo menu-space'
    'content               content      hero-photo menu-space'
    'bottom-space          bottom-space hero-photo menu-space'
  `
  const gridTemplateColumns = '3fr 6fr 7fr 1fr'
  const gridTemplateRows = '2fr 4fr 1fr'
  const gridStyle = {
    display: 'grid',
    minHeight: '100vh',
    justifyItems: 'left',
    width: '100%',
    transition: 'margin-top 500ms ease-in',
    position: 'fixed',
    zIndex: '-1',
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    marginTop,
    ...customStyle
  }
  const borderSize = 0.5 // em
  const borderStyle = `${borderSize}em solid ${accentColor || '#FF0000'}`
  const timelinePlacement =
    <div style={{ gridArea: 'timeline-placement', paddingLeft: '10%', width: '100%' }}>
      <div style={{ minHeight: '150%', borderLeft: !top && borderStyle }}/>
    </div>
  const topSpace = <div style={{ gridArea: 'top-space', width: '100%' }}/>
  const menuSpace = <div style={{ gridArea: 'menu-space' }}/>
  const bottomSpace = <div style={{ gridArea: 'bottom-space' }}/>
  const heroPicture =
    <div style={{ gridArea: 'hero-photo', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <img style={{ maxHeight: '80%' }}src={heroPhoto} />
    </div>
  return (
    <div style={gridStyle}>
      {timelinePlacement} {topSpace} {heroPicture} {menuSpace}
      <Content {...{ accentColor, primaryColor, title, description }} />
      {bottomSpace}
    </div>
  )
}

export default Project
