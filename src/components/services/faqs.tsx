import React from 'react'

import SectionHeading from 'components/section_heading'
import StackingPair from '../stacking_pair'
import Card from './card'

const FAQs = (): JSX.Element => {
  return (
    <>
      <SectionHeading title='FAQs' />
      <StackingPair>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em', height: '100%' }}>
          <div style={{ fontWeight: 700, fontSize: '2.25em' }}>Let&apos;s answer some FAQs</div>
          <div style={{ fontWeight: 500, fontSize: '1.25em' }}>
            Don’t hesitate to reach out if you have any questions.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          <Card title='How much does it cost?'>
            The cost of a website varies based on project requirements and complexity.
            We provide customized quotes tailored to your specific needs.
          </Card>

          <Card title='How long will the process be?'>
            The timeline for developing a new website depends on project scope and complexity.
            Generally, websites can take a few weeks to several months to complete.
          </Card>

          <Card title='Will my website be mobile friendly?'>
            Absolutely! We prioritize mobile-friendly design to ensure your website functions seamlessly
            on different devices and screen sizes.
          </Card>

          <Card title='What if I need help on my site down the road?'>
            We offer ongoing support and maintenance services to provide assistance with your website whenever you need it.
            We&apos;re here to help!
          </Card>

          <Card title='Can I access the website?'>
            Yes, we provide access to the backend or content management system (CMS) of your website.
            We&apos;ll also provide training to ensure you can manage your content effectively.
          </Card>
        </div>
      </StackingPair>
    </>
  )
}

export default FAQs
