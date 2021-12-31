import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const GradientText = ({ text }) => {
  const { textGradientTop, textGradientBottom } = useContext(ThemeContext)
  const styles = {
    background: `linear-gradient(${textGradientTop}, ${textGradientBottom})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textFillColor: 'transparent'
  }

  return <span style={styles}>{text}</span>
}

GradientText.propTypes = {
  text: PropTypes.string.isRequired,
  gradientTop: PropTypes.string.isRequired,
  gradientBottom: PropTypes.string.isRequired
}

export default GradientText
