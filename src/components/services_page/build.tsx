import React from 'react'

import Image from 'components/logo/image'

import StackingPair from '../stacking_pair'

const Build = (): JSX.Element => {
  return (
    <StackingPair>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
        <div style={{ fontWeight: 700, fontSize: '2.25em' }}>I build websites that grow your business</div>
        <div style={{ fontWeight: 500, fontSize: '1.25em' }}>
          Creating custom web solutions tailored for businesses to maximize online presence and fuel growth.
        </div>
        <div style={{ fontWeight: 600, fontSize: '1.125em', display: 'flex' }}>
          Start your project <div className='rotated-arrow' />
        </div>
      </div>
      <div className='glass card'>
        <Image style={{ width: '80%', height: '80%', margin: 'auto' }} />
      </div>
    </StackingPair>
  )
}

export default Build
