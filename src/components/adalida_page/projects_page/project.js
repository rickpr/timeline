import React from 'react'

const Project = ({ title, content }) => {
  const outerGridTemplate = `
  'timeline-top menu-bar right-space' 1fr
  'crossbar     content  right-space' 2fr
  'timeline     content  right-space' 12fr / 2fr 22fr 1fr
`

  const innerGridTemplate = `
`

  const marginLeftPercent = 40 // %
  const marginLeft = `${marginLeftPercent}%`
  const minWidth = `calc(${100 - marginLeftPercent}% - 2em)`
  const border = '0.15em solid #3DA834'
  const verticalLine = <div style={{ minHeight: '100%', border, marginLeft }}/>
  const horizontalLine = <div style={{ position: 'absolute', marginLeft, minWidth, border }}/>
  const circle = <div style={{ minHeight: '1em', minWidth: '1em', borderRadius: '50%', position: 'absolute', right: '1em', border }}/>

  const timelineTop = (
    <div style={{ gridArea: 'timeline-top', display: 'flex' }}>
      {verticalLine}
    </div>
  )
  const menuBar = <div style={{ gridArea: 'menu-bar' }}/>
  const rightSpace = <div style={{ gridArea: 'right-space' }}/>

  const crossbar = (
    <div style={{ gridArea: 'crossbar', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {verticalLine} {horizontalLine} {circle}
    </div>
  )

  const timeline = (
    <div style={{ gridArea: 'timeline', display: 'flex' }}>
      {verticalLine}
    </div>
  )
  const contentArea = <div style={{ gridArea: 'content' }}>{content}</div>

  return (
    <div style={{ display: 'grid', gridTemplate: outerGridTemplate }}>
      {timelineTop} {menuBar}  {rightSpace}
      {crossbar}    {contentArea}
      {timeline}
    </div>
  )
}

export default Project
