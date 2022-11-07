import React from 'react'

import Card from '../card'
import Image from 'components/image'
import PictureCaption from '../picture_caption'

import useIsMobile from 'hooks/use_is_mobile'

import 'sass/adalida_page/project.scss'

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
      <Image path='hbo_max/ideate.png' style={{ width: '100%' }} imgStyle={{ width: '100%' }} />
    </div>
  )
  return (
    <Card title='// More Options'>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr 1fr',
        columnGap: '6%',
        width: '100%',
        ...centerStyles
      }}>

        <div className='picture-caption'>
          <PictureCaption
            heading='Problem:'
            text="People had a difficult time rewinding and fast forwarding becauase there is a lack of options when skipping and the load time is slow."
          />
          <PictureCaption
            heading='Solution'
            text="Provide intervals for skipping options and pair with a developer to increase the load and speed time."
          />
        </div>
        {image}
        <div className='picture-caption'>
          <PictureCaption
            heading='Problem:'
            text="People could not add or change captions while watching the film. Instead, viewers have to exit the viewing mode, add captions, then return to the viewing mode."
          />
          <PictureCaption
            heading='Goals'
            text="Provide an option to add or change captions, cast, and change the settings while in viewing mode."
          />
        </div>
      </div>
    </Card>
  )
}

export default Ideate
