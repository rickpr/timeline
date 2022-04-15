import React, { useRef } from 'react'
import '../sass/custom.scss'

import useViewportHeight from '../hooks/use_viewport_height'

import RicardoPage from '../components/ricardo_page'
import Houndstooth from '../components/houndstooth'

const Ricardo = () => {
  const layoutRef = useRef(null)
  return (
    <div ref={layoutRef} style={{ minHeight: `${useViewportHeight()}px` }}>
      <div style={{ minHeight: '2em' }} />
      <header style={{ mixBlendMode: 'difference' }}>
        <div style={{ width: '95%', margin: 'auto', textAlign: 'center', color: 'white' }}>
          <h1>Ricardo Piro-Rael</h1>
        </div>
      </header>
      <Houndstooth containerRef={layoutRef} backgroundColor='#111111' />
      <RicardoPage />
    </div>
  )
}

export default Ricardo
