import React from 'react'
import PropTypes from 'prop-types'

import 'sass/adalida_page/projects_page.scss'

const Heading = ({ text }) =>
  <div style={{ maxWidth: '80vw' }}>
    <h1 className='project-heading'>{text}</h1>
  </div>

Heading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Heading
