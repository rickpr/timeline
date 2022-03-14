import React, { useRef } from 'react'

import App from '../../app'
import ColorCircle from '../color_circle'
import Project from '../project'
import TimelineDescription from 'components/timeline/timeline_description'
import CaptionGallery from 'components/caption_gallery'
import Summary from './summary'

import useSynchronizedTypewriter from 'hooks/use_synchronized_typewriter'

// Image
import architecture from 'images/architecture.png'
import personas from 'images/personas.svg'
import personasOne from 'images/personas_one.svg'
import userJourneyMap1 from 'images/user_journey_map_1.svg'
import userJourneyMap2 from 'images/user_journey_map_2.svg'

// Video
import beforeLoFi from 'videos/before_lo_fi.mp4'
import afterHiFi from 'videos/after_hi_fi.mp4'

const Cyph = () => {
  return [<App key='app' title='Cyph' />, <Summary key='summary' />]
}

export default Cyph
