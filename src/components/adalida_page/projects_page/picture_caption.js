import React from 'react'
import PropTypes from 'prop-types'

const PictureCaption = ({ heading, text }) =>
  <div>
    <h3>{heading}</h3>
    {text}
  </div>

PictureCaption.propTypes = {
  heading: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired
}

export default PictureCaption
