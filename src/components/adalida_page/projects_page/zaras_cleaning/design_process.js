import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const DesignProcess = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; DESIGN PROCESS</h3>
      <p>
        To begin the design process, I first needed to learn about the type of
        content the client wanted on the website. I created an information
        architecture and used it for updates and changes as needed. I then
        created a mockup of the website and received approval from the client
        before making responsive design changes. I collected images and
        testimonials from the client and added them to the website. A WIX
        account was created, and a domain name was purchased. I updated the
        design to support English and Spanish page translation and consulted
        with the client to ensure the design met their requirements. Once final
        approval of the design was given, I transferred the site and made
        any necessary changes.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zaras_cleaning/design_process.png' text={text} />
    </Card>
  )
}

export default DesignProcess
