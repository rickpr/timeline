import React from 'react'

import LetsWorkTogether from 'components/lets_work_together'
import SectionHeading from 'components/section_heading'

import Card from '../card'

// Two gaps makes 40px
const CARD_WIDTH = `${(950 - 40) / 3}px`

const ShapingCompanies = (): JSX.Element => {
  return (
    <div>
      <SectionHeading title='Services' />
      <div className='shaping-companies'>
        <Card title='Product Design' width={CARD_WIDTH}>
          <p>
            I specialize in turning initial ideas into successful products. Through each development phase, I focus on
            comprehensive user research and strategic design execution, ensuring products meet and anticipate user needs.
          </p>
          <strong>From 0 to 1</strong>
          <ul>
            <li>In-Depth User Research</li>
            <li>Strategic Concept Development</li>
            <li>Iterative Prototyping</li>
            <li>Detailed Design Execution</li>
            <li>Cross-Disciplinary Collaboration</li>
            <li>Accessibility & Inclusivity</li>
            <li>Launch, Support, and Iteration</li>
            <li>Sustainability Integration</li>
          </ul>
        </Card>

        <Card title='Website Design' width={CARD_WIDTH}>
          <p>
            Concentrating in developing dynamic websites from the ground up, I begin by understanding your audience to
            create a responsive design. I ensure your website not only meets but exceeds user expectations and business goals.
          </p>
          <strong>Elevate your Online Presence</strong>
          <ul>
            <li>Strategic Web Development</li>
            <li>User-Centric Design</li>
            <li>Responsive and Adaptive Design</li>
            <li>Content Management Systems (CMS)</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Post-Launch Support</li>
          </ul>
        </Card>

        <Card title='Brand Design' width={CARD_WIDTH}>
          <p>
            Create a lasting impression with bespoke branding services for your brand&apos;s unique identity and values.
            From the initial strategy to the final guidelines, I provide the tools you need to stand out and resonate
            with your audience.
          </p>
          <strong>Build Your Brand Identity</strong>
          <ul>
            <li>Brand Strategy</li>
            <li>Identity Development</li>
            <li>Logo Design</li>
            <li>Assets</li>
            <li>Color Palette</li>
            <li>Typography</li>
            <li>Brand Guidelines</li>
            <li>Package Design</li>
          </ul>
        </Card>
      </div>
      <div className='pull-right'><LetsWorkTogether /></div>
    </div>
  )
}

export default ShapingCompanies
