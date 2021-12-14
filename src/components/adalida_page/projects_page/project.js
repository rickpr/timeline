import React from 'react'

const Project = ({ content, title }) => {
  const outerGridTemplate = `
  'menu-timeline   menu-bar     right-space'  5rem
  'crossbar        title        right-space'  5rem
  'timeline        content      right-space'  1fr / 2fr 22fr 1fr
`

  const marginLeftPercent = 40 // %
  const marginLeft = `${marginLeftPercent}%`
  const minWidth = `calc(${100 - marginLeftPercent}% - 2em)`
  const backgroundColor = '#3DA834'
  const border = `0.15em solid ${backgroundColor}`
  const verticalLine = <div style={{ minHeight: '100%', border, marginLeft, backgroundColor }}/>
  const horizontalLine = <div style={{ position: 'absolute', marginLeft, minWidth, border, backgroundColor }}/>
  const circle =
    <div
      style={{ minHeight: '1em', minWidth: '1em', borderRadius: '50%', position: 'absolute', right: '1em', border }}
    />

  const timelineTop =
    <div style={{ gridArea: 'timeline-top', display: 'flex' }}>
      {verticalLine}
    </div>

  const menuTimeline =
    <div style={{ gridArea: 'menu-timeline', display: 'flex' }}>
      {verticalLine}
    </div>

  const menuBar = <div style={{ gridArea: 'menu-bar' }}/>
  const rightSpace = <div style={{ gridArea: 'right-space' }}/>

  const crossbar =
    <div style={{ gridArea: 'crossbar', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {verticalLine} {horizontalLine} {circle}
    </div>

  const titleArea =
    <div style={{ gridArea: 'title', display: 'flex', alignItems: 'center' }}>
      <h1>{title}</h1>
    </div>

  const timeline =
    <div style={{ gridArea: 'timeline', display: 'flex' }}>
      {verticalLine}
    </div>
  const contentArea = <div style={{ gridArea: 'content' }}>{content}</div>
  const bottomSpace =
    <div style={{ gridArea: 'timeline-bottom', display: 'flex' }}>
      {verticalLine}
    </div>

  return (
    <div style={{ display: 'grid', gridTemplate: outerGridTemplate }}>
      {menuTimeline} {menuBar}     {rightSpace}
      {crossbar}     {titleArea}
      {timeline}     {contentArea}
    </div>
  )
}

export default Project
