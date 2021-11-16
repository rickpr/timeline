import React from 'react'

const Project = ({ title, content }) => {
  const gridTemplate = `
  'timeline-top menu-bar right-space' 1fr
  'crossbar     title    right-space' 2fr
  'timeline     content  right-space' 12fr / 2fr 22fr 1fr
`

  const border = '0.15em solid #3DA834'
  const verticalLine = <div style={{ minHeight: '100%', border }}/>
  const horizontalLine = <div style={{ minWidth: 'calc(40% - 1em)', position: 'absolute', left: '50%', border }}/>
  const circle = <div style={{ minHeight: '1em', minWidth: '1em', borderRadius: '50%', position: 'absolute', right: '10%', border }}/>

  const timelineTop = (
    <div style={{ gridArea: 'timeline-top', display: 'flex', justifyContent: 'center' }}>
      {verticalLine}
    </div>
  )
  const menuBar = <div style={{ gridArea: 'menu-bar' }}/>
  const rightSpace = <div style={{ gridArea: 'right-space' }}/>

  const crossbar = (
    <div style={{ gridArea: 'crossbar', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {verticalLine} {horizontalLine} {circle}
    </div>
  )
  const titleArea = (
    <div style={{ gridArea: 'title', display: 'flex', alignItems: 'center' }}>
      <h1 style={{ margin: 'auto 0' }}>{title}</h1>
    </div>
  )

  const timeline = (
    <div style={{ gridArea: 'timeline', display: 'flex', justifyContent: 'center' }}>
      {verticalLine}
    </div>
  )
  const contentArea = <div style={{ gridArea: 'content' }}>{content}</div>

  return (
    <div style={{ display: 'grid', gridTemplate }}>
      {timelineTop} {menuBar}  {rightSpace}
      {crossbar}    {titleArea}
      {timeline}    {contentArea}
    </div>
  )
}

export default Project
