import React from 'react'

import Quad from './quad'
import GlassImage from './glass_image'
import { lookingFor, paragraph, textBox } from './styles'

const Gym = 'images/about/gym.webp'
const MuscleBeach = 'images/about/muscle_beach.webp'

const Contact = (): JSX.Element => {
  return (
    <Quad>
      <GlassImage media={Gym} />
      <div style={textBox}>
        <div style={lookingFor}>
          Portfolio made with lots of Yellow Red Bull and professional button
          pushing.
        </div>
      </div>
      <GlassImage media={MuscleBeach} />
      <div style={textBox}>
        <div style={lookingFor}>
          Looking for a Designer?
        </div>
        <div style={paragraph}>
          <div>
            Reach Adalida at: <a href='mailto:hi@adalida.design'>hi@adalida.design</a>
          </div>
        </div>
        <div style={lookingFor}>
          Looking for an Engineer?
        </div>
        <div style={paragraph}>
          <div>
            Reach Ricardo at: <a href='mailto:fdisk87@yahoo.com'>fdisk87@yahoo.com</a>
          </div>
        </div>
      </div>
    </Quad>
  )
}

export default Contact
