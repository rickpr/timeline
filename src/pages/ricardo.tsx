import React, { useRef } from 'react'
import '../sass/custom.scss'

import useViewportHeight from '../hooks/use_viewport_height'

import RicardoPage from '../components/ricardo_page'

const Ricardo = (): JSX.Element => {
  const layoutRef = useRef(null)
  return (
    <div ref={layoutRef} style={{ height: `${useViewportHeight() ?? 0}px`, background: '#000000' }}>
      <RicardoPage />
    </div>
  )
}

export default Ricardo
