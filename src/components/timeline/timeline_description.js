import PropTypes from 'prop-types'
import React from 'react'

const TimelineDescription = ({ description, title }) => {
  const header = (
    <div className='timeline-description-header'>
      {title}
    </div>
  )
  const body = (
    <div className='timeline-description-body'>
      {description}
    </div>
  )

  return (
    <div className='timeline-description'>
      <div className='timeline-description-border' />
      {header}
      {body}
    </div>
  )
}

TimelineDescription.propTypes = {
  description: PropTypes.string.required,
  title: PropTypes.string.required
}

export default TimelineDescription
