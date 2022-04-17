import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

import useViewportHeight from 'hooks/use_viewport_height'

import Content from './content'

const App = React.forwardRef(({ title }, ref) => {
  const height = `${useViewportHeight()}px`
  const { background } = Themes[title]

  const gridStyle = {
    background,
    display: 'grid',
    height,
    overflow: 'hidden',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    mixBlendMode: 'lighten',
    position: 'relative',
    zIndex: 2,
    width: '100vw',
    gridTemplateAreas: "'top-space' 'content' 'bottom-space'",
    gridTemplateRows: '1fr 8fr 1fr',
    transition: 'opacity 1s ease',
    justifyItems: 'center',
    margin: '0 auto'
  }

  return (
    <div style={{ background: '#000000', height, width: '100%', pointerEvents: 'none' }} ref={ref}>
      <div style={gridStyle}>
        <div style={{ gridArea: 'top-space' }} />
        <div style={{ gridArea: 'content', display: 'grid' }}>
          <Content title={title} />
        </div>
        <div style={{ gridArea: 'bottom-space' }} />
      </div>
    </div>
  )
})

App.displayName = 'App'

App.propTypes = {
  title: PropTypes.string.isRequired
}

export default App
