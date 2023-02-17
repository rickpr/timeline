import PropTypes from 'prop-types'
import React from 'react'

const CaptionedFigure = ({ caption, figure }) =>
  <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'center', textAlign: 'center', color: '#60676D' }}>
    {figure}
    {caption}
  </div>

CaptionedFigure.propTypes = {
  caption: PropTypes.string.isRequired,
  figure: PropTypes.node.isRequired
}

export default CaptionedFigure
