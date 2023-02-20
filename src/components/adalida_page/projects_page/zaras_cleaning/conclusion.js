import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Conclusion = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; CONCLUSION</h3>
      <p>
        The web design project for the professional cleaner in Albuquerque was
        successfully completed in three weeks despite the challenge of a
        language barrier. The final website design met the client&apos;s
        requirements and was an effective tool for advertising their cleaning
        business to potential and current clients. The translator was
        invaluable in helping to bridge the language barrier, and the final
        design was visually appealing, easy to use, and included all
        necessary features.
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
