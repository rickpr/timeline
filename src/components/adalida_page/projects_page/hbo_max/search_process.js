import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import searchProcess from 'videos/hbo_max/search_process.mp4'

import 'sass/adalida_page/cyph.scss'

const SearchProcess = () => {
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
    <Card title='// Search Process'>
      <MediaWithText
        media={searchProcess}
        text={pictureCaption}
        reversed={true}
      />
    </Card>
  )
}

export default SearchProcess
