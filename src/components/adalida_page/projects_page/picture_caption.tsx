import React from 'react'

const PictureCaption = ({ heading, text }: { heading: React.ReactNode, text: React.ReactNode }): JSX.Element =>
  <div>
    <h3>{heading}</h3>
    {text}
  </div>

export default PictureCaption
