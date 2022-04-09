import React from 'react'
import PropTypes from 'prop-types'

const ScalableText = ({ text, color, customStyles = {}, viewBoxWidthMultiplier = 9 }) => {
  // Makes an SVG containing the desired text,
  // which will scale with the parent container

  const viewBoxHeight = 20 // Fixed height, works reasonably for most fonts

  // Default multiplier of 9 is suitable for Inconsolata medium
  // Different values suit different fonts. 10 works well for Futura 800 weight
  const viewBox = `0 0 ${viewBoxWidthMultiplier * text.length} ${viewBoxHeight}`

  return (
    <svg viewBox={viewBox} style={{ fill: color, width: '100%', maxHeight: '100%', fontWeight: 900, ...customStyles }}>
      <text x='50%' y='50%' dominantBaseline='middle' textAnchor='middle'>{text}</text>
    </svg>
  )
}

ScalableText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  customStyles: PropTypes.object,
  viewBoxWidthMultiplier: PropTypes.number
}

export default ScalableText
