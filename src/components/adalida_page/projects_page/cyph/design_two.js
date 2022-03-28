import React from 'react'

import designTwoPhoto from 'images/cyph/design_two.png'

import Card from '../card'

import 'sass/adalida_page/cyph.scss'

const DesignTwo = () => {
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
      <img src={designTwoPhoto} style={{ maxWidth: '100%' }} />
    </div>
  )
  const problem = (
    <div style={{ flexBasis: '32%', flexGrow: 3, flexShrink: 1 }}>
      <h1>Problem:</h1>
      <hr />
      Voters find it difficult to get involved in local politicals
      <h1>Goals</h1>
      <hr />
      Cyph provides an in-person, virtual, and upcoming events and information based on the user&apos;s location and
      saved choices.
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
    <Card title='Design'>
    <div style={style}>
      {ideate}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3%', placeItems: 'center' }}>
        {image}
        {problem}
      </div>
    </div>
    </Card>
  )
}

export default DesignTwo
