import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const Project = ({ forwardRef, content, title }) => {
  const { projectCircleFill, projectCircleStroke, stroke } = useContext(ThemeContext)
  const outerGridTemplate = `
  'left-space menu-timeline menu-bar right-space'  5rem
  'left-space crossbar      title    right-space'  5rem
  'left-space timeline      content  right-space'  1fr / 1fr 2fr 21fr 1fr
`

  const minWidth = 'calc(100% - 2rem)'
  const background = projectCircleFill
  const border = `0.15rem solid ${stroke}`
  const circleBorder = projectCircleStroke ? { border: `0.15rem solid ${projectCircleStroke}` } : {}
  const verticalLine = <div style={{ minHeight: '100%', border, background }} />
  const horizontalLine = <div style={{ position: 'absolute', minWidth, border, background }} />
  const circle = (
    <div
      style={{
        minHeight: '1rem',
        minWidth: '1rem',
        borderRadius: '50%',
        position: 'absolute',
        right: '1rem',
        background,
        ...circleBorder
      }}
    />
  )

  const leftSpace = <div style={{ gridArea: 'left-space' }} />

  const menuTimeline = (
    <div style={{ gridArea: 'menu-timeline', display: 'flex' }}>
      {verticalLine}
    </div>
  )

  const menuBar = <div style={{ gridArea: 'menu-bar' }} />
  const rightSpace = <div style={{ gridArea: 'right-space' }} />

  const crossbar = (
    <div style={{ gridArea: 'crossbar', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {verticalLine} {horizontalLine} {circle}
    </div>
  )

  const titleArea = (
    <div style={{ gridArea: 'title', display: 'flex', alignItems: 'center' }}>
      <h1>{title}</h1>
    </div>
  )

  const timeline = (
    <div style={{ gridArea: 'timeline', display: 'flex' }}>
      {verticalLine}
    </div>
  )
  const contentArea = <div style={{ gridArea: 'content' }}>{content}</div>

  return (
    <div ref={forwardRef} style={{ display: 'grid', gridTemplate: outerGridTemplate }}>
      {leftSpace} {menuTimeline} {menuBar}     {rightSpace}
                  {crossbar}     {titleArea}
                  {timeline}     {contentArea}
    </div>
  )
}

Project.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }),
  content: PropTypes.element,
  title: PropTypes.string.isRequired
}

export default Project
