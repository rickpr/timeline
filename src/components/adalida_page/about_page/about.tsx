import React from 'react'

import FileQuery from 'queries/file'

import MediaWithText from '../projects_page/media_with_text'

const About = (): JSX.Element => {
  const resumePdf = FileQuery('Adalida_Baca_Resume.pdf')

  const text = (
    <div style={{ flexBasis: '37%', flexGrow: 3 }}>
      <h3>About Me</h3>
      <p>
        I&apos;m passionate about using design to create meaningful and intuitive
        experiences for users. I believe in the power of design to improve
        people&apos;s lives and make technology more accessible to everyone.
      </p>
      <p>
        If you&apos;re looking for a designer who can help you create beautiful
        and effective solutions for your users, I&apos;d love to hear from you.
        Let&apos;s work together to create something amazing!
      </p>
      <p>
        In my portfolio, you&apos;ll find examples of my work in web design,
        product design, and data visualization. I&apos;m constantly exploring new
        design techniques and technologies, and I&apos;m always looking for new
        challenges and opportunities to grow as a designer.
      </p>
      <p>| <a href={resumePdf.publicURL} target="_blank" rel="noreferrer">
        <strong>VIEW RESUME</strong>
      </a>
      </p>
    </div>
  )

  return (
    <div style={{ margin: '8vh 0' }}>
      <MediaWithText media='images/about_adalida.jpg' text={text} reversed />
    </div>
  )
}

export default About
