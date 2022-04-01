import React from 'react'

import prototypePhoto from 'images/cyph/prototype.png'

import Card from '../card'

import useIsMobile from 'hooks/use_is_mobile'

import 'sass/adalida_page/cyph.scss'

const Ideate = () => {
  const isMobile = useIsMobile(1500)
  const centerStyles = {
    placeItems: 'center center'
  }
  const problemOne = (
    <div>
      <h1 className='caption'>Problem:</h1>
      <p>
        Voters can&apos;t see who is donating to their politicians and how that affects their voting easily.
      </p>
      <h1 className='caption'>Goals</h1>
      <p>
        Connect voters with an up-to-date database of a representative&apos;s financial and voting history.
      </p>
    </div>
  )
  const image = (
    <div style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      ...centerStyles
    }}>
      <img src={prototypePhoto} width='100%' />
    </div>
  )
  const problemTwo = (
    <div>
      <h1 className='caption'>Problem:</h1>
      <p>
        People aren&apos;t familiar with representative&apos;s backgrounds or what committees they sit on.
      </p>
      <h1 className='caption'>Goals</h1>
      <p>
        Provide up-to-date and background information on representative&apos;s positions during their political career.
      </p>
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
    <Card title='// IDEATE'>
    <div style={style}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 8fr 1fr',
        width: '100%',
        ...centerStyles
      }}>
        {problemOne}
        {image}
        {problemTwo}
      </div>
    </div>
    </Card>
  )
}

export default Ideate
