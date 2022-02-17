import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const TimelineRow = ({ forwardRef, content, showCrossbar, title }) => {
  const { projectCircleFill, projectCircleStroke, stroke } = useContext(ThemeContext)
  const gridTemplateColumns = '1fr 2fr 21fr 1fr'

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

  const crossbar = [horizontalLine, circle]
  const timeline = (
    <div style={{ gridArea: 'timeline', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {verticalLine} {showCrossbar && crossbar}
    </div>
  )

  const contentArea = <div>{content}</div>

  return (
    <div ref={forwardRef} style={{ display: 'grid', gridTemplateColumns }}>
      <div /> {timeline} {contentArea} <div />
    </div>
  )
}

TimelineRow.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }),
  content: PropTypes.element,
  showCrossbar: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default TimelineRow
