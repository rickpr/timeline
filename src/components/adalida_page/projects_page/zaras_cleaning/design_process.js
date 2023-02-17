import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const DesignProcess = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; DESIGN PROCESS</h3>
      <p>
        I then created a Hi-Fidelity mockup of the website and received approval
        from the client before making responsive design changes. I collected
        images and testimonials from the client and added them to the website.
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
