import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Conclusion = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; CONCLUSION</h3>
      <p>
        The final website design successfully achieved the client&apos;s goals
        of creating a simple yet effective platform for advertising their
        cleaning business. The website offered clear information about the
        services provided and included an easy-to-use scheduling feature for
        clients. The English and Spanish page translation features enabled the
        website to reach a broader audience, and the responsive design changes
        ensured the website looked great on any device. The translator was
        invaluable in helping to bridge the language barrier, and the final
        design was visually appealing, easy to use, and included all necessary
        features.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zaras_cleaning/conclusion.png' text={text} />
      <h3>Thank you for reading my case study!</h3>
      <p>
        Want to work with me? Feel free to contact me!
        ...or just say hello on my social media.
      </p>
    </Card>
  )
}

export default Conclusion
