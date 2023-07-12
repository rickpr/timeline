import React from 'react'
import PropTypes from 'prop-types'

import useIsMobile from 'hooks/use_is_mobile'
import Desktop from './desktop'
import Mobile from './mobile'

const App = ({ title, containerRef, setClosestProject }) =>
  <div className='app'>
    {useIsMobile(768)
      ? <Mobile title={title} containerRef={containerRef} setClosestProject={setClosestProject} />
      : <Desktop title={title} />
    }
  </div>

App.propTypes = {
  title: PropTypes.string.isRequired,
  containerRef: PropTypes.shape({ current: PropTypes.node.isRequired }).isRequired,
  setClosestProject: PropTypes.func.isRequired
}

export default App
