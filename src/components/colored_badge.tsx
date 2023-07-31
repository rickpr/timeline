import PropTypes from 'prop-types'
import React from 'react'

const ColoredBadge = ({ text }) => {
  const colorOptions = ['#ffffff', '#000000', '#440BD4', '#e92efb', '#39ff14', '#ff2079']
  const badgeColor = colorOptions[text.split('').reduce((a, e) => a + e.charCodeAt(0), 0) % colorOptions.length]
  const style = { background: badgeColor, color: '#FFFFFF', padding: '2px', borderRadius: '1px' }
  return <h5><span style={style}>{text}</span></h5>
}

ColoredBadge.propTypes = { text: PropTypes.string.isRequired }

export default ColoredBadge
