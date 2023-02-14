import PropTypes from 'prop-types'
import React from 'react'

const AboutList = ({ points }) => {
  const makeEntry = ([title, content]) => (
    <div
      key={title}
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', placeItems: 'center' }}
    >
      <h3>{'//'} {title}</h3>
      <ul><li>{content}</li></ul>
    </div>
  )
  // The length of the word plus the two slashes and space.
  // 2.4 is a magic number, it should be 2 but probably also involves the font weight.
  return (
    <div>
      {Object.entries(points).map(makeEntry)}
    </div>
  )
}

AboutList.propTypes = {
  points: PropTypes.shape({ [PropTypes.string]: PropTypes.string })
}

export default AboutList
