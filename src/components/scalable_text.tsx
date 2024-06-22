import React from 'react'

interface Props {
  text: string
  color: string
  customStyles?: React.CSSProperties
}

const ScalableText = ({ text, color, customStyles = {} }: Props): JSX.Element => {
  // Makes an SVG containing the desired text,
  // which will scale with the parent container

  const viewBoxWidth = 13
  const viewBoxHeight = 15 // Fixed height, tuned for Avenir Next 900 weight

  // Default multiplier of 9 is suitable for Inconsolata medium
  // Different values suit different fonts. 10 works well for Futura 800 weight
  const viewBox = `0 4 ${viewBoxWidth} ${viewBoxHeight}`

  return (
    <svg viewBox={viewBox} style={{ fill: color, width: '100%', maxHeight: '100%', fontWeight: 900, ...customStyles }}>
      <text x='50%' y='50%' dominantBaseline='hanging' textAnchor='middle'>{text}</text>
    </svg>
  )
}

export default ScalableText
