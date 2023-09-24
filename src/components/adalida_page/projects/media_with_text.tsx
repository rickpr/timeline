import React, { type CSSProperties } from 'react'

import Image from 'components/image'

export const makeMediaTag = ({ media, style = {} }: { media: string, style?: CSSProperties }): JSX.Element => {
  if (media.endsWith('.png') || media.endsWith('.jpg') || media.endsWith('.webp')) {
    return <Image path={media} style={style} alt={media} />
  }
  if (media.endsWith('.mp4')) {
    const videoStyle = { maxWidth: '80vw', ...style }
    return <video src={media} autoPlay loop muted playsInline width='100%' style={videoStyle} />
  }
  if (media.endsWith('.gif')) {
    // @ts-expect-error We're using type to hack the behavior - double check if this is needed
    return <img alt='' src={media} type='video/mp4' autoPlay style={style} />
  }
  if (media.endsWith('.svg')) {
    return <img alt='' src={media} style={style} />
  }
  throw new Error(`Could not identify type of media ${media}`)
}

interface Props {
  media: string
  text: React.ReactNode
  reversed?: boolean
  style?: CSSProperties
}

const MediaWithText = ({ media, text, reversed = false, style = {} }: Props): JSX.Element => {
  const maxHeight = '82vh'
  const styles = { maxHeight, borderRadius: '10px', height: '100%', width: '100%', ...style }

  const padding = '1em'
  const mediaTag = makeMediaTag({ media, style: styles })
  const flex = '8 8 335px'
  const imageTag = (
    <div
      key='image'
      style={{
        display: 'flex',
        flex,
        placeContent: 'center',
        placeItems: 'center',
        width: '100%',
        height: '100%',
        padding
      }}
    >
      {mediaTag}
    </div>
  )
  const textTag = <div key='text' style={{ display: 'flex', flex, placeContent: 'center', placeItems: 'center', padding }}>{text}</div>

  const flexWrap = reversed ? 'wrap' : 'wrap-reverse'
  return (
    <div style={{
      display: 'flex',
      flexWrap,
      placeContent: 'center',
      margin: '0 auto'
    }}>
      {reversed ? [textTag, imageTag] : [imageTag, textTag]}
    </div>
  )
}

export default MediaWithText
