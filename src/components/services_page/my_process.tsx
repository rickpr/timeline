import React from 'react'

import Card from './card'

import StackingPair from '../stacking_pair'

const MyProcess = (): JSX.Element => {
  return (
    <StackingPair>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em', height: '100%' }}>
        <div style={{ fontWeight: 700, fontSize: '2.25em' }}>Design that actually reflects the quality and rarity of your business</div>
        <div style={{ fontWeight: 500, fontSize: '1.25em' }}>
          Because generic is no longer an option.
        </div>
        <div style={{ fontWeight: 600, fontSize: '1.125em', display: 'flex' }}>
          Start your project <div className='rotated-arrow' />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        <Card title='1. Discovery + Estimate'>
          During the initial stage, I thoroughly research your business, goals, and target audience, analyzing user
          data and studying competitors. This critical discovery phase forms the foundation for developing a strong
          strategy and roadmap for your project.
        </Card>

        <Card title='2. Strategy + Design'>
          Following the discovery phase, I create visually stunning and intuitive interfaces in close collaboration
          with you. My iterative design process ensures that the final product aligns with your brand identity and
          effectively communicates your message.
        </Card>

        <Card title='3. Develop Design'>
          After design approval, I develop and bring the website to life. Throughout the development process, I
          prioritize transparency and collaboration, providing you with progress updates and seeking your input
          when needed.
        </Card>

        <Card title='4. Handoff'>
          I ensure a flawless website through thorough testing and quality assurance. I provide comprehensive
          documentation and ongoing aftercare services, including maintenance, updates, and technical support.
        </Card>
      </div>
    </StackingPair>
  )
}

export default MyProcess
