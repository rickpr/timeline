import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import DownArrow from 'components/down_arrow'
import ScalableText from 'components/scalable_text'

import { ThemeContext } from 'theme_context'

const Title = ({ title, image, scrollTarget }) => {
  const { background, primary } = useContext(ThemeContext)
  return (
    <div style={{
      display: 'grid',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      gridTemplateColumns: 'repeat(auto-fit, minmax(30em, 1fr))',
      minHeight: '100vh',
      background
    }}
    >
      <div style={{
        display: 'grid',
        justifyItems: 'center',
        gridTemplateColumns: '1fr',
        rowGap: '1em',
        width: '80%',
        margin: '3em 0'
      }}>
        <div />
        <ScalableText text={title} color={primary} />
        <DownArrow scrollTarget={scrollTarget} />
      </div>
      <div style={{ margin: 'auto 0' }}>
        <img src={image} alt={`${title} Homepage`} style={{ maxWidth: '100%' }} />
      </div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  scrollTarget: PropTypes.shape({ current: PropTypes.node })
}

export default Title
