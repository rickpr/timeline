import React from 'react'
import PropTypes from 'prop-types'

const ScalableText = ({ text, color }) => {
  // Makes an SVG containing the desired text,
  // which will scale with the parent container

  const viewBoxHeight = 17 // Fixed height, expected for Inconsolata
  const yOffset = viewBoxHeight - 3 // Move the letters up a bit so the bottom of g is still in the viewbox

  // View box width calculation works well when multiplied by 8
  const viewBox = `0 0 ${8 * text.length} ${viewBoxHeight}`

  // Index is okay as a key here as a re-render would require re-creating anyway
  // Offset y by 1 as some of the letters go below the line
  return (
    <svg viewBox={viewBox} style={{ fill: color, width: '100%' }}>
      <text x='0' y={yOffset}>{text}</text>
    </svg>
  )
}

ScalableText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default ScalableText
