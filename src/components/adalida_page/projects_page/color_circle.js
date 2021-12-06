import React from 'react'

const ColorCircle = ({ color }) => {
  // Determine if the color is closer to white or black and use the opposite for the text
  const colorSum = [1, 3, 5].reduce((sum, colorIndex) => sum + parseInt(color.substring(colorIndex, colorIndex + 2)))
  const textColor = colorSum <= 382 ? '#FFFFFF' : '#000000'

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="circle" style={{ color: textColor, backgroundColor: color }}>
        <span className="circle-content">{color}</span>
      </div>
    </div>
  )
}

export default ColorCircle
