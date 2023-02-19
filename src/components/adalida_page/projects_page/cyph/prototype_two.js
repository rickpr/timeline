import React from 'react'

import Card from '../card'
import Image from 'components/image'
import PictureCaption from '../picture_caption'

import useIsMobile from 'hooks/use_is_mobile'

import 'sass/adalida_page/project.scss'

const PrototypeTwo = () => {
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
      <Image path='cyph/prototype_two.png' width='100%' />
    </div>
  )
  return (
    <Card>
      <h1>&#47;&#47; Get Involved</h1>
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
            text="People want to get involved, but are unsure where to find events that fit their interests and views."
          />
          <PictureCaption
            heading='Solution'
            text="Provide a list of upcoming events, which can be filtered by interests like political party, issue, and distance."
          />
        </div>
        {image}
        <div className='picture-caption'>
          <PictureCaption
            heading='Problem:'
            text="People want to vote more in local elections, but have trouble remembering voting dates."
          />
          <PictureCaption
            heading='Goals'
            text="Provide reminders of upcoming voting events. Users can set reminders for representatives or events they want to support."
          />
        </div>
      </div>
    </Card>
  )
}

export default PrototypeTwo
