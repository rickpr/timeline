import React, { useRef } from 'react'
import '../../sass/custom.scss'

import RicardoPage from '../../components/ricardo_page'

const Ricardo = (): JSX.Element => {
  const layoutRef = useRef(null)
  return (
    <div ref={layoutRef} style={{ height: '100dvh', background: '#000000' }}>
      <RicardoPage />
    </div>
  )
}

export default Ricardo
