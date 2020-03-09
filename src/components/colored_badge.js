import React from 'react'

const ColoredBadge = ({ text }) => {
  const colorOptions = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  const badgeColor = colorOptions[text.split('').reduce((a, e) => a + e.charCodeAt(0), 0) % colorOptions.length]
  return <h5><span className={`badge badge-${badgeColor}`}>{text}</span></h5>
}

export default ColoredBadge
