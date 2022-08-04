import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'

import useViewportHeight from 'hooks/use_viewport_height'

import Content from './content'

const App = React.forwardRef(({ title }, ref) => {
  const isMobile = useIsMobile()
  const height = `${useViewportHeight()}px`
  const { background } = Themes[title]

  const gridTemplateRows = isMobile ? '1fr 3fr 1fr 1fr' : '1fr 7fr 1fr 1fr'
  const gridStyle = {
    background,
    gridTemplateRows,
    height,
    display: 'grid',
    overflow: 'hidden',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    mixBlendMode: 'lighten',
    position: 'relative',
    zIndex: 2,
    width: '100vw',
    maxWidth: '100%',
    gridTemplateAreas: "'top-space' 'hero-photo' 'button' 'bottom-space'",
    transition: 'opacity 1s ease',
    justifyItems: 'center',
    margin: '0 auto'
  }

  return (
    <div style={{ background: '#000000', height, width: '100%', pointerEvents: 'none' }} ref={ref}>
      <div style={gridStyle}>
        <div style={{ gridArea: 'top-space' }} />
        <Content title={title} />
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
