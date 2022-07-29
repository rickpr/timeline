import PropTypes from 'prop-types'
import React from 'react'
import { makeMediaTag } from '../projects_page/media_with_text'

const SmallProject = ({ media }) => {
  const mediaTag = makeMediaTag({ media })
  return (
    <div
      style={{
        background: '#F5F5F5',
        display: 'flex',
        width: '400px',
        minHeight: '400px',
        borderRadius: '1vh',
        padding: '20px'
      }}
    >
      {mediaTag}
    </div>
  )
}

SmallProject.propTypes = {
  media: PropTypes.string.isRequired
}

export default SmallProject
