import React from 'react'
import PropTypes from 'prop-types'

import Desktop from './desktop'
import Mobile from './mobile'
import useIsMobile from 'hooks/use_is_mobile'

const App = ({ forwardRef, title }) => {
  const Component = useIsMobile() ? Mobile : Desktop
  return <Component forwardRef={forwardRef} title={title} />
}

App.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.node }).isRequired,
  title: PropTypes.string.isRequired
}

export default App
