import React, { useRef, useContext } from 'react'
import '../sass/custom.scss'

import RicardoPage from '../components/ricardo_page'
import Houndstooth from '../components/houndstooth'
import { ThemeContext, Themes } from 'theme_context'

const Ricardo = () => {
  const layoutRef = useRef(null)
  const { circleColor } = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={Themes['Meow Wolf']}>
      <div ref={layoutRef}>
        <div style={{ minHeight: '2em' }} />
        <header>
          <div style={{ border: `5px solid ${circleColor}`, width: '95%', margin: 'auto', textAlign: 'center', color: 'white' }}>
            <h1>Ricardo Piro-Rael</h1>
          </div>
        </header>
        <Houndstooth containerRef={layoutRef} backgroundColor={'#111111'} />
        <RicardoPage />
      </div>
    </ThemeContext.Provider>
  )
}

export default Ricardo
