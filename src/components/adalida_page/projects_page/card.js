import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

import ScalableText from 'components/scalable_text'

const Card = ({ children, title }) => {
  const borderColor = useContext(ThemeContext).primary || '#FFFFFF'
  const containerStyle = {
    width: '95vw',
    margin: '9vh 2.5vw',
    minHeight: '82vh',
    backgroundColor: '#FFFFFF'
  }
  const gridStyle = {
    borderLeft: `0.25vh solid ${borderColor}`,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '10vh 1fr',
    maxWidth: '95vw',
    minHeight: '82vh'
  }
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <div><ScalableText text={title} color={borderColor} customStyles={{ width: 'unset' }} /></div>
        <div>{children}</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Card
