import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Challenges = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; CHALLENGES</h3>
      <p>
        One of the main challenges of the project was a language barrier between
        myself and the client. Our native languages were different, making it
        difficult to communicate effectively. To overcome this challenge, I
        hired a translator to help explain the client&apos;s needs and requirements.
        The translator was also helpful in explaining technical terms such as
        domain name hosting and search engine optimization, which the client was
        not familiar with.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zaras_cleaning/challenges.png' text={text} reversed />
    </Card>
  )
}

export default Challenges
