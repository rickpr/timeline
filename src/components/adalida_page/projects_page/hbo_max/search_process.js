import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import searchProcess from 'videos/hbo_max/search_process.mp4'

import 'sass/adalida_page/project.scss'

const SearchProcess = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='// Problem'
        text="Viewers could only search by title and were forced to type out the full title."
      />
      <PictureCaption
        heading='// Solution'
        text='Provide different ways to browse titles and offer auto-complete and auto-suggestion options.'
      />
    </div>
  )
  return (
    <Card>
      <MediaWithText
        media={searchProcess}
        text={pictureCaption}
        reversed={true}
      />
    </Card>
  )
}

export default SearchProcess
