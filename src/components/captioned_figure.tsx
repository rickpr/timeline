import React from 'react'

const CaptionedFigure = ({ caption, figure }: { caption: React.ReactNode, figure: React.ReactNode }): JSX.Element =>
  <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'center', textAlign: 'center', color: '#60676D' }}>
    {caption}
    {figure}
  </div>

export default CaptionedFigure
