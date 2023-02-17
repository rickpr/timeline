import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const About = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; ABOUT THE PROJECT</h3>
      <p>
        GainTain is a mobile app designed specifically for fitness enthusiasts
        who want to track their workout data extensively. The app supports time
        under tension workouts, tracking, and more, making it a comprehensive
        solution for users looking to improve their fitness.
      </p>
      <p>
        The design process for GainTain was based on a Lean UX Design approach,
        where the focus was on understanding the client&apos;s needs and
        creating a tailored solution. The process started with a survey and
        through close collaboration with the client, a minimum viable product
        was created and iterated on in real-time as the client used it.
      </p>

      <p>
        This approach allowed for a user-centered design that perfectly matched
        the client&apos;s workout and tracking needs. The app received positive
        feedback from the client and users, who appreciated the app&apos;s
        user-friendly design and comprehensive tracking capabilities.
      </p>

      <p>Overall, GainTain is a testament to the power of a user-centered design
        approach and the impact it can have on improving the overall user
        experience.
      </p>

      <p>| <strong>TIMELINE:</strong> 12 weeks</p>
      <p>| <strong>TEAM:</strong> 1 Designer, 1 Engineer</p>
      <p>| <strong>ROLES:</strong> Sole Product Designer</p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/about.png' text={text} reversed />
    </Card>
  )
}

export default About
