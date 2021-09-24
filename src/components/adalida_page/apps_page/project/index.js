import React from 'react'

import useAnimateOnScroll from '../../../../hooks/use_animate_on_scroll'

import Content from './content'

const Project = ({ accentColor, backgroundColor, primaryColor, textColor, title, description, marginTop }) => {
  useAnimateOnScroll()
  const gridTemplateAreas = `
    'timeline-placement    top-space    menu-space'
    'content      content      menu-space'
    'bottom-space bottom-space menu-space'
  `
  const gridTemplateColumns = '4fr 10fr 1fr'
  const gridTemplateRows = '2fr 4fr 1fr'
  const gridStyle = {
    backgroundImage: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)',
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
  }
  const borderSize = 0.5 // em
  const borderStyle = `${borderSize}em solid ${accentColor || '#FF0000'}`
  const timelinePlacement =
    <div style={{ gridArea: 'timeline-placement', paddingLeft: '10%', width: '100%' }}>
      <div style={{ minHeight: '100%', borderLeft: borderStyle, marginTop: '20%' }}/>
    </div>
  const topSpace = <div style={{ gridArea: 'top-space', width: '100%' }}/>
  const menuSpace = <div style={{ gridArea: 'menu-space' }}/>
  const bottomSpace = <div style={{ gridArea: 'bottom-space' }}/>
  return (
    <div style={gridStyle}>
    {timelinePlacement} {topSpace} {menuSpace}
      <Content accentColor={accentColor} primaryColor={primaryColor} title={title} description={description} />
      {bottomSpace}
    </div>
  )
}

export default Project
