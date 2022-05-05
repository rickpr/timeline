import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import define from 'videos/zeno/define.mp4'

import 'sass/adalida_page/cyph.scss'

const Define = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text='Citizens United makes it difficult for people to see who is financially sponsoring their local representatives.'
      />
      <PictureCaption
        heading='Solution'
        text='Provide a fast and transparent way for people to learn about a politician, their political and voting history, and their donors.'
      />
    </div>
  )
  return (
    <Card title='// Define'>
      <MediaWithText media={define} text={pictureCaption} reversed />
    </Card>
  )
}

export default Define
