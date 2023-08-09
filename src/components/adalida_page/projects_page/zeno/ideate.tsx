import React from 'react'

import Card from '../card'
import Image from 'components/image'
import PictureCaption from '../picture_caption'

import useIsMobile from 'hooks/use_is_mobile'

import 'sass/adalida_page/project.scss'

const Ideate = (): JSX.Element => {
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
      {/* @ts-expect-error TODO: see if width is doing anything */}
      <Image path='zeno/ideate.png' width='100%' alt='Ideate' />
    </div>
  )
  return (
    <Card>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile !== false ? '1fr' : '1fr 2fr 1fr',
        columnGap: '6%',
        width: '100%',
        ...centerStyles
      }}>
        <div className='picture-caption'>
          <PictureCaption
            heading='// Problem'
            text='People want a fast and speedy checkout.'
          />
          <PictureCaption
            heading='// Solution'
            text='Create an engaging and easy to checkout experience.'
          />
        </div>
        {image}
        <div className='picture-caption'>
          <PictureCaption
            heading='// Problem'
            text='People want to see how long it will take to check out.'
          />
          <PictureCaption
            heading='// Goals'
            text='Provide a progress bar of the step they are on and how many steps are left.'
          />
        </div>
      </div>
    </Card>
  )
}

export default Ideate
