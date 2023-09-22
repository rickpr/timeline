import React from 'react'

const styles = {
  display: 'flex',
  flexDirection: 'column' as const,
  placeContent: 'center',
  textAlign: 'center' as const,
  color: '#60676D',
  width: '100%'
}

const CaptionedFigure = ({ caption, figure }: { caption: React.ReactNode, figure: React.ReactNode }): JSX.Element =>
  <div style={styles}>
    {caption}
    {figure}
  </div>

export default CaptionedFigure
