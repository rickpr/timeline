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
      <Image path='logi/ideate.png' width='100%' />
    </div>
  )
  return (
    <Card title='// Process'>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr 1fr',
        columnGap: '6%',
        width: '100%',
        ...centerStyles
      }}>

        <div className='picture-caption'>
          <PictureCaption
            heading='First'
            text="Begin by choosing a layout design system to design."
          />
          <PictureCaption
            heading='Second'
            text="Begin designing cards and layout in monochrome."
          />
        </div>
        {image}
        <div className='picture-caption'>
          <PictureCaption
            heading='Third'
            text="Set everything in autolayout for responsive design."
          />
          <PictureCaption
            heading='Fourth'
            text="Apply a color design system to the final design."
          />
        </div>
      </div>
    </Card>
  )
}

export default Ideate
