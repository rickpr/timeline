import React from 'react'

import testPhoto from 'images/cyph/test.png'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const centerStyles = {
    placeItems: 'center center'
  }
  const problemOne = (
    <div>
      <h1>Problem:</h1>
      <hr />
      Voters can&apos;t see who is donating to their politicians and how that affects their voting easily.
      <h1>Goals</h1>
      <hr />
      Connect voters with an up-to-date database of a representative's financial and voting history.
    </div>
  )
  const image = (
    <div style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      ...centerStyles
    }}>
      <img src={testPhoto} style={{ maxWidth: '100%' }} />
    </div>
  )
  const problemTwo = problemOne
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    ...centerStyles
  }
  const understand = (
    <div style={{ maxWidth: '80vw' }}>
      <h1>{'//'} IDEATE</h1>
    </div>
  )
  return (
    <Card title='Test'>
    <div style={style}>
      {understand}
      <ResponsiveGrid breakpoint='300px' >
        {problemOne}
        {image}
        {problemTwo}
      </ResponsiveGrid>
    </div>
    </Card>
  )
}

export default Test
