import React from 'react'

import Card from '../card'
import Image from 'components/image'
import PictureCaption from '../picture_caption'

import useIsMobile from 'hooks/use_is_mobile'

import 'sass/adalida_page/cyph.scss'

const Ideate = () => {
  const isMobile = useIsMobile(1200)
  const centerStyles = {
    placeItems: 'center center'
  }
  const image = (
    <div style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      ...centerStyles
    }}>
    <Image path='cyph/ideate.png' width='100%' />
    </div>
  )
  return (
    <Card title='// IDEATE'>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr 1fr',
        columnGap: '6%',
        width: '100%',
        ...centerStyles
      }}>

        <div className='picture-caption'>
          <PictureCaption
            heading='Problem:'
            text="Voters feel there is a lack of transparency and tracking regarding representative's voting history."
          />
          <PictureCaption
            heading='Solution'
            text="Connect voters with an up-to-date database of a representative's voting history."
          />
        </div>
        {image}
        <div className='picture-caption'>
          <PictureCaption
            heading='Problem:'
            text="People aren't familiar with representative's backgrounds or what committees they sit on."
          />
          <PictureCaption
            heading='Goals'
            text= "Provide up-to-date and background information on representative's positions during their political career."
          />
        </div>
      </div>
    </Card>
  )
}

export default Ideate
