import React from 'react'
import PropTypes from 'prop-types'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

const Card = ({ children }) => {
  useAnimateOnScroll()
  const containerStyle = {
    minWidth: '95%',
    margin: '4vh 2.5vw',
    minHeight: '92vh',
    backgroundColor: '#FFFFFF',
    padding: '2em 7%',
    borderRadius: '2vh'
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: '79.12vh' // minHeight of 92vh minus 7% margin on top and bottom
  }
  return (
    <div data-aos='fade-up' style={containerStyle}>
      <div style={gridStyle}>
        <div>{children}</div>
      </div>
    </div>
  )
}

Card.propTypes = { children: PropTypes.node.isRequired }

export default Card
