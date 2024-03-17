import React from 'react'

const About = (): JSX.Element => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '10%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Client</strong>Armando Diaz
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Date</strong><span>4 weeks</span>
        </div>
      </div>
      <p><strong>Case Study Details</strong></p>
      <p>
        In this case study, we embark on a journey through the design and development of the Airbrush Art Studio, a
        unique digital portfolio showcasing the remarkable talents of Armando Diaz, a distinguished artist hailing from
        New Mexico. Armando&apos;s expertise lies in the realms of paintings, murals, and clothing airbrush design, and
        the Airbrush Art Studio serves as a digital gateway to his distinctive and vibrant creations. This study delves
        into the intricacies of crafting a user-centric platform that not only celebrates Armando&apos;s artistry but
        also provides visitors with an immersive, engaging, and intuitive experience as they explore his extraordinary
        body of work.
      </p>
      <p><strong>Role Details</strong></p>
      <div>Web Design</div>
      <div>Responsive Design</div>
      <div>Prompt Engineering</div>
      <p>
        <a href='https://airbrushart.studio' target='_blank' rel='noreferrer'>
          <strong>VISIT SITE ➜</strong>
        </a>
      </p>
    </div>
  )

  return (
    <div
      data-aos='fade-up'
      style={{
        minWidth: '95%',
        margin: '4vh 2.5vw',
        padding: '2em 7%',
        borderRadius: '2vh'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          maxWidth: '100%',
          maxHeight: '100%'
        }}>
        <div>{text}</div>
      </div>
    </div>
  )
}

export default About
