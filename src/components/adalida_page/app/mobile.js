import React from 'react'
import PropTypes from 'prop-types'

import { Projects } from 'theme_context'
import Title from './title'

const imageStyles = {
  borderRadius: '1em',
  width: '100%'
}

const imageContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  aspectRatio: '1 / 1'
}

const Mobile = ({ title }) => {
  const { colors: { background }, coverPhoto } = Projects[title]
  const coverStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    height: '100dvh',
    width: '100dvw',
    minHeight: '100dvh',
    minWidth: '100dvw',
    padding: '0 10dvw',
    background
  }

  return (
    <div style={coverStyles} className='mobile-app'>
      <div style={{ minHeight: '8em' }} />
      <div style={imageContainerStyles}>
        <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
      </div>
      <Title title={title} />
    </div>
  )
}

Mobile.propTypes = { title: PropTypes.string.isRequired }

export default Mobile
