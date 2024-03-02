import { Link } from 'gatsby'
import React from 'react'

import GlassImage from './glass_image'
import Quad from './quad'
import { paragraph, paragraphHeading, textBox } from './styles'

const Balcony = 'images/about/balcony.webp'
const Portland = 'images/about/portland.webp'

const BigChanges = (): JSX.Element => {
  return (
    <Quad>
      <GlassImage media={Balcony} />
      <div style={textBox}>
        <div style={paragraphHeading}>Big Changes</div>
        <div style={paragraph}>
          <div>
            During my winter, summer, fall, and spring breaks I&apos;d visit
            my fiancé Ricardo in San Francisco, California. During this time I
            worked with Robert Half as an Administrative Assistant in a
            variety of offices like Samsara, World Economic Forum, User
            Testing, the Watermark, and more.
          </div>
          <div>
            During my last semester of college, Covid started. This turned out
            well for me because I was able to move out to San Francisco a
            semester early while completing my classes and internship with
            Project ECHO remotely.
          </div>
          <div>
          </div>
          <div>
            After graduation, I began learning User Experience Design through
            Google&apos;s Coursera courses, a mentor, the Interaction Design
            Foundation, Hackathons, and the clientele I receive from my design
            business.
          </div>
          <div>
            As you can see in my portfolio, much of my design clientele is
            contracted from New Mexico.
          </div>
        </div>
      </div>
      <GlassImage media={Portland} />
      <div style={textBox}>
        <div style={paragraphHeading}>In my spare time</div>
        <div style={paragraph}>
          <div>
            I&apos;m designing something for Ricardo to implement via code.
            This website is a great example of our work together. I&apos;m a
            great designer, and he&apos;s an excellent coder so together we
            have a plethora of projects. Currently, we&apos;re developing a
            mobile workout app for ourselves. Check out
            <Link to='/case_studies/gaintain'> Gaintain</Link>.
          </div>
          <div>
            My other time consists of the gym, traveling, exploring, costume
            creating, and playing Valorant as an Astra or Cypher main.
          </div>
          <div>
            I&apos;m a New Mexican transplanted in San Fransisco which means
            my short term goal is to have red and green New Mexico chile.
          </div>
          <div>
            My professional goals and aspirations include:
            <ul>
              <li>Growing my user research and design skills</li>
              <li>Becoming a product designer at a start up</li>
              <li>Excelling into product management, </li>
              <li>Founding my own startup.</li>
            </ul>
          </div>
        </div>
      </div>
    </Quad>
  )
}

export default BigChanges
