import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

import ScalableText from 'components/scalable_text'

const Card = ({ children, title }) => {
  const borderColor = useContext(ThemeContext).primary || '#FFFFFF'
  const containerStyle = {
    width: '95%',
    margin: '9vh 2.5vw',
    minHeight: '82vh',
    backgroundColor: '#FFFFFF',
    padding: '7%',
    borderRadius: '3vh'
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '10vh 1fr',
    gap: '5%',
    maxWidth: '100%',
    minHeight: '82vh'
  }
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <div style={{ display: 'grid', justifyItems: 'center', width: '100%' }}><ScalableText text={title} color={borderColor} customStyles={{ width: 'unset' }} /></div>
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
