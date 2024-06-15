import React from 'react'

import Section from './section'
import Card from './card'

const Interests = (): JSX.Element => {
  return (
    <Section title='Interests'>
      <div className='stacking-cards more-below'>
        <Card title='People'>
          <p>
            In Pre-K, my one issue was talking with anyone and everyone. Now, it&apos;s my strength.
          </p>
        </Card>
        <Card title='Design'>
          <p>
            I live by designing in different mediums; screens, experiences, print, events, writing, interiors, etc.
          </p>
        </Card>
        <Card title='Problem Solving'>
          <p>
            I love solving problems under different constraints and in different domains.
          </p>
        </Card>
      </div>

      <div className='stacking-cards more-below'>
        <Card title='Document Design'>
          <p>
            I love democratizing (tribal) knowledge with pretty and functional to read documents.
          </p>
        </Card>
        <Card title='Language + Logic'>
          <p>
            Topics: Logical Rules, Syntax, Set Theory, Inferences, Space, Time, Paradoxes, Semantics.
          </p>
        </Card>
        <Card title='Philosophy'>
          <p>
            Topics: Ethics, Epistemology, Logic, Philosophy of Mind, History and Philosophy of Math.
          </p>
        </Card>
      </div>

      <div className='stacking-cards'>
        <Card title='Fitness'>
          <p>
            I enjoy fitness activities like weight lifting, swimming, and hiking. I train to feel capable mentally and physically.
          </p>
        </Card>
        <Card title='New Mexico'>
          <p>
            New Mexico Native. Descendent of Elfego Baca and Maestases of the San Joaquin del Nacimiento Grant of New Mexico.
          </p>
        </Card>
        <Card title='Growth'>
          <p>
            I love a challenge because I learn and adapt. I don’t like the feeling of being stagnant.
            I also like plants for the same reason.
          </p>
        </Card>
      </div>
    </Section>
  )
}

export default Interests
