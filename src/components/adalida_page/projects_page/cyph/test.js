import React from 'react'

import testPhoto from 'images/cyph/test.png'

import Card from '../card'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const ideate = (
    <div style={{ maxWidth: '80vw' }}>
      <h1>{'//'} IDEATE</h1>
    </div>
  )
  const image = (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      flexBasis: '65%',
      flexGrow: 2,
      ...centerStyles
    }}>
      <img src={testPhoto} style={{ maxWidth: '100%' }} />
    </div>
  )
  const problem = (
    <div style={{ flexBasis: '32%', flexGrow: 3, flexShrink: 1 }}>
      <h1>The Problem</h1>
      <hr />
      People don&apos;t know who their elected officials are, how to contact them, or easily find their voting history.
      <h1>Goals</h1>
      <hr />
      Connect voters quickly with their local representatives and their political history.
    </div>
  )
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    ...centerStyles
  }

  return (
    <Card title='Test'>
    <div style={style}>
      {ideate}
      <div style={{ display: 'flex', flexWrap: 'wrap', placeItems: 'center', gap: '3%' }}>
        {image}
        {problem}
      </div>
    </div>
    </Card>
  )
}

export default Test
