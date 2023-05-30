import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import useIsMobile from 'hooks/use_is_mobile'
import Desktop from './desktop'
import Mobile from './mobile'

const App = forwardRef(({ title }, ref) =>
  <div ref={ref}>
    {useIsMobile(768) ? <Mobile title={title} /> : <Desktop title={title} />}
  </div>
)

App.displayName = 'App'
App.propTypes = {
  title: PropTypes.string.isRequired
}

export default App
