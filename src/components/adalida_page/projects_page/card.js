import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

import ScalableText from 'components/scalable_text'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

const Card = ({ children, title }) => {
  useAnimateOnScroll()
  const borderColor = useContext(ThemeContext).primary || '#FFFFFF'
  const containerStyle = {
    width: '95%',
    margin: '9vh 2.5vw',
    minHeight: '92vh',
    backgroundColor: '#FFFFFF',
    padding: '7%',
    borderRadius: '3vh'
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '10vh 4vh 1fr',
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: '82vh'
  }
  return (
    <div data-aos='fade-up' style={containerStyle}>
      <div style={gridStyle}>
        <div
          style={{ display: 'grid', justifyItems: 'center', width: '100%' }}
        >
          <ScalableText text={title} color={borderColor} customStyles={{ width: 'unset' }} />
        </div>
        <div />
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
