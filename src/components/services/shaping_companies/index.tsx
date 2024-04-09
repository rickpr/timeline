import React from 'react'

import SectionHeading from 'components/section_heading'
import useIsMobile from 'hooks/use_is_mobile'

import Card from './card'
import InlineList from '../inline_list'

// TODO: Move this to scss
const BREAKPOINT = 950 / 0.85 // The inner grids are 85% of the dynamic viewport width (dvw)

const ShapingCompanies = (): JSX.Element | null => {
  const isMobile = useIsMobile(BREAKPOINT)
  const flexDirection = isMobile === false ? 'row' : 'column'
  const alignItems = isMobile === false ? 'stretch' : 'center'
  if (isMobile === null) return null

  return (
    <>
      <SectionHeading title='Services' />
      <div style={{ fontWeight: 600, fontSize: '2.25em' }}>Shaping companies, one interaction at a time.</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', flexDirection, alignItems }}>
        <Card title='Product Design'>
          <div style={{ fontWeight: 600, fontSize: '1.125em' }}>Designing Products That Resonate</div>
          <div>
            Transform your vision into innovative products with a focus on user-centric design. Specializing in SaaS and
            B2C products, I offer a full range of services to guide your project from research through to execution,
            ensuring your product is ready for the market and beyond.
          </div>
          <InlineList>
            <li>User Research & Insights</li>
            <li>UX/UI Design</li>
            <li>Prototyping & Testing</li>
            <li>Cross-Functional Collaboration</li>
            <li>Design Strategy</li>
            <li>Accessibility & Inclusivity</li>
            <li>Design Systems</li>
          </InlineList>
        </Card>

        <Card title='Website Design'>
          <div style={{ fontWeight: 600, fontSize: '1.125em' }}>Elevate your online presence</div>
          <div>
            Elevate your online presence with comprehensive web design services tailored to meet your unique needs.
            From strategic development to post-launch support, I ensure your website not only looks great but functions
            seamlessly across all devices, enhancing your digital footprint.
          </div>
          <InlineList>
            <li>Strategic Web Development</li>
            <li>User Experience (UX) Analysis</li>
            <li>Responsive Layout</li>
            <li>Content Management System (CMS)</li>
            <li>Search Engine Optimization (SE0)</li>
            <li>Copywriting</li>
            <li>Support Available Post Launch</li>
          </InlineList>
          Add-Ons:
          <InlineList>
            <li>Product Photography</li>
            <li>Packaging Design</li>
          </InlineList>
        </Card>

        <Card title='Brand Design'>
          <div style={{ fontWeight: 600, fontSize: '1.125em' }}>Build Your Brand Identity</div>
          <div>
            Create a lasting impression with bespoke branding services designed to articulate your brand&apos;s unique
            identity and values. From the initial strategy to the final guidelines, I provide the tools you need to
            stand out and resonate with your audience.
          </div>
          <InlineList>
            <li>Brand Strategy</li>
            <li>Identity Development</li>
            <li>Logo Design + Assets</li>
            <li>Color Palette + Typography</li>
            <li>Brand Guidelines</li>
          </InlineList>
          Add-Ons:
          <InlineList>
            <li>Business Marketing Materials</li>
            <li>Packaging Design</li>
          </InlineList>
        </Card>
      </div>
    </>
  )
}

export default ShapingCompanies
