import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

import Content from './content'

const App = ({ forwardRef, title }) => {
  const { background } = Themes[title]

  const gridTemplateAreas = "'top-space' 'content' 'bottom-space'"

  const gridTemplateRows = '10vh 80vh 10vh'

  const gridStyle = {
    display: 'grid',
    height: '100vh',
    width: '100vw',
    scrollSnapAlign: 'start',
    gridTemplateAreas,
    gridTemplateRows,
    transition: 'opacity 1s ease',
    justifyItems: 'center',
    margin: '0 auto'
  }

  return (
    <div style={{ background, width: '100%' }} ref={forwardRef}>
      <div style={gridStyle}>
        <div style={{ gridArea: 'top-space' }} />
        <div style={{ gridArea: 'content' }}>
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
