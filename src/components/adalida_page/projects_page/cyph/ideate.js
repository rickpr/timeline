import React from 'react'

import prototypePhoto from 'images/cyph/prototype.png'

import Card from '../card'
import HeadingsWithText from '../headings_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import 'sass/adalida_page/cyph.scss'

const Ideate = () => {
  const isMobile = useIsMobile(1200)
  const centerStyles = {
    placeItems: 'center center'
  }
  const problemOne = {
    'Problem:': "Voters feel there is a lack of transparency and tracking regarding representative's voting history.",
    Solution: "Connect voters with an up-to-date database of a representative's voting history."
  }
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
  const problemTwo = {
    'Problem:': "People aren't familiar with representative's backgrounds or what committees they sit on.",
    Goals: "Provide up-to-date and background information on representative's positions during their political career."
  }
  return (
    <Card title='// IDEATE'>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 8fr 1fr',
        gap: '6%',
        width: '100%',
        ...centerStyles
      }}>
        <HeadingsWithText headingsAndText={problemOne} />
        {image}
        <HeadingsWithText headingsAndText={problemTwo} />
      </div>
    </Card>
  )
}

export default Ideate
