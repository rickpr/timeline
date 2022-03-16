import React from 'react'
import PropTypes from 'prop-types'

const ScalableText = ({ text, color, customStyles = {} }) => {
  // Makes an SVG containing the desired text,
  // which will scale with the parent container

  const viewBoxHeight = 17 // Fixed height, expected for Inconsolata

  // View box width calculation works well when multiplied by 9
  // This may be less when font-weight is lower, and may differ with other fonts.
  const viewBox = `0 0 ${9 * text.length} ${viewBoxHeight}`

  // Index is okay as a key here as a re-render would require re-creating anyway
  // Offset y by 1 as some of the letters go below the line
  return (
    <svg viewBox={viewBox} style={{ fill: color, width: '100%', maxHeight: '100%', fontWeight: 900, ...customStyles }}>
      <text x='50%' y='50%' dominantBaseline='middle' textAnchor='middle'>{text}</text>
    </svg>
  )
}

ScalableText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  customStyles: PropTypes.object
}

export default ScalableText
