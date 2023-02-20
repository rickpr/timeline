import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Results = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; RESULTS</h3>
      <p>
        The final website design successfully achieved the client&apos;s goals
        of creating a simple yet effective platform for advertising their
        cleaning business. The website offered clear information about the
        services provided and included an easy-to-use scheduling feature for
        clients. The website was visually appealing and showcased the
        cleaner&apos;s work and background. The English and Spanish page
        translation features enabled the website to reach a broader audience,
        and the responsive design changes ensured the website looked great on
        any device.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zaras_cleaning/results.png' text={text} reversed />
    </Card>
  )
}

export default Results
