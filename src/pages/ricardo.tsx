import React, { useRef } from 'react'
import '../sass/custom.scss'

import useViewportHeight from '../hooks/use_viewport_height'

import RicardoPage from '../components/ricardo_page'

const Ricardo = () => {
  const layoutRef = useRef(null)
  return (
    <div ref={layoutRef} style={{ height: `${useViewportHeight()}px`, background: '#000000' }}>
      <RicardoPage />
    </div>
  )
}

export default Ricardo
