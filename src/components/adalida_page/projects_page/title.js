import React from 'react'

import ScalableText from '../../scalable_text'

// Image
import downArrow from '../../../images/down_arrow.svg'

const Title = ({ title, image, scrollTarget }) => {
  return (
    <div style={{
      display: 'grid',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      backgroundColor: '#000000',
      gridTemplateColumns: 'repeat(auto-fit, minmax(30em, 1fr))',
      minHeight: '100vh'
    }}
    >
      <div style={{ display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr', rowGap: '1em', width: '80%', margin: '3em 0' }}>
        <div />
        <ScalableText text='Meow Wolf' color='#FF2079' />
        <img
          src={downArrow}
          style={{ width: 'min(15%, calc(100vw - 175%))', cursor: 'pointer' }}
          alt='Down arrow'
          onClick={() => scrollTarget.current?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
      <div style={{ margin: 'auto 0' }}>
        <img src={image} alt='Meow Wolf Homepage' style={{ maxWidth: '100%' }} />
      </div>
    </div>
  )
}

export default Title
