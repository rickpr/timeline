import React from 'react'
import ImageCard from '../image_card'

const style = {
  background: '#F5F5F5',
  cursor: 'pointer',
  display: 'flex',
  width: '325px',
  minHeight: '325px',
  borderRadius: '1vh',
  padding: '20px'
}

const SmallProject = ({ media }: { media: string }): React.ReactElement =>
  <ImageCard media={media} style={style} />

export default SmallProject
