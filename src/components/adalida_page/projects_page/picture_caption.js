import React from 'react'
import PropTypes from 'prop-types'

const PictureCaption = ({ heading, text }) =>
  <div>
    <h1 className='caption' style={{ maxWidth: '100%' }}>{heading}</h1>
    {text}
  </div>

PictureCaption.propTypes = {
  heading: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired
}

export default PictureCaption
