import React from 'react'

import prototypePhoto from 'images/cyph/prototype.png'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const Prototype = () => {
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
      Connect voters with an up-to-date database of a representative&apos;s financial and voting history.
    </div>
  )
  const image = (
    <div style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      ...centerStyles
    }}>
      <img src={prototypePhoto} style={{ maxWidth: '100%' }} />
    </div>
  )
  const problemTwo = (
    <div>
      <h1>Problem:</h1>
      <hr />
      People aren&apos;t familiar with representative&apos;s backgrounds or what committees they sit on.
      <h1>Goals</h1>
      <hr />
      Provide up-do-date and background information on representative&apos;s positions during their political career.
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
  const understand = (
    <div style={{ maxWidth: '80vw' }}>
      <h1>{'//'} IDEATE</h1>
    </div>
  )
  return (
    <Card title='Prototype'>
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

export default Prototype
