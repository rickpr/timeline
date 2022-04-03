import React, { useRef } from 'react'
import '../sass/custom.scss'

import RicardoPage from '../components/ricardo_page'
import Houndstooth from '../components/houndstooth'

const Ricardo = () => {
  const layoutRef = useRef(null)
  const circleColor = '#39FF14'
  return (
    <div ref={layoutRef}>
      <div style={{ minHeight: '2em' }} />
      <header>
        <div style={{ width: '95%', margin: 'auto', textAlign: 'center', color: circleColor }}>
          <h1>Ricardo Piro-Rael</h1>
        </div>
      </header>
      <Houndstooth containerRef={layoutRef} backgroundColor={'#111111'} />
      <RicardoPage />
    </div>
  )
}

export default Ricardo
