import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

import useViewportHeight from 'hooks/use_viewport_height'

import Content from './content'

const App = ({ forwardRef, title }) => {
  const height = `${useViewportHeight()}px`
  const { background } = Themes[title]

  const gridTemplateAreas = "'top-space' 'content' 'bottom-space'"

  const gridTemplateRows = '1fr 8fr 1fr'

  const gridStyle = {
    background,
    display: 'grid',
    height,
    overflow: 'hidden',
    scrollSnapAlign: 'start',
    mixBlendMode: 'lighten',
    position: 'relative',
    zIndex: 2,
    width: '100vw',
    gridTemplateAreas,
    gridTemplateRows,
    transition: 'opacity 1s ease',
    justifyItems: 'center',
    margin: '0 auto'
  }

  return (
    <div style={{ background: '#000000', height, width: '100%', pointerEvents: 'none' }} ref={forwardRef}>
      <div style={gridStyle}>
        <div style={{ gridArea: 'top-space' }} />
        <div style={{ gridArea: 'content', display: 'grid' }}>
          <Content title={title} />
        </div>
        <div style={{ gridArea: 'bottom-space' }} />
      </div>
    </div>
  )
}

App.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }),
  title: PropTypes.string.isRequired
}

export default App
