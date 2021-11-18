import React from 'react'

const colorBlock = ({ color }) => {
  // Determine if the color is closer to white or black and use the opposite for the text
  const colorSum = [1, 3, 5].reduce((sum, colorIndex) => sum + parseInt(color.substring(colorIndex, colorIndex + 2)))
  const textColor = colorSum <= 382 ? '#FFFFFF' : '#000000'

  return (
    <div style={{fontWeight: 'bold', color: textColor, backgroundColor: color, padding: '1em'}}>{color}</div>
  )
}

export default colorBlock
