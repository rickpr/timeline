import React from 'react'
import PropTypes from 'prop-types'

const HeadingsWithText = ({ headingsAndText }) => {
  const tags = Object.entries(headingsAndText).map(([heading, text], index) =>
    <div key={`${heading}-${index}`}>
      <h1 className='caption'>{heading}</h1>
      {text}
    </div>
  )
  return (
    <div style={{ display: 'grid', gap: '6%', gridTemplateColumns: '1fr' }}>
      {tags}
    </div>
  )
}

HeadingsWithText.propTypes = {
  headingsAndText: PropTypes.objectOf(PropTypes.string).isRequired
}

export default HeadingsWithText
