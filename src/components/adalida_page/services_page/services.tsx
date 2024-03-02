import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import Card from './card'
import InlineList from './inline_list'

const BREAKPOINT = 950 / 0.85 // The inner grids are 85% of the dynamic viewport width (dvw)
// Two gaps makes 40px
const CARD_WIDTH = `${(950 - 40) / 3}px`

const Services = (): JSX.Element => {
  const isMobile = useIsMobile(BREAKPOINT)
  const flexDirection = isMobile === false ? 'row' : 'column'
  const alignItems = isMobile === false ? 'stretch' : 'center'

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', flexDirection, alignItems }}>
      <Card title='Brand Design' width={CARD_WIDTH}>
        Elevate your brand with our streamlined Branding Package, designed for
        businesses aiming to make a lasting impression.
        This package offers the essentials for a cohesive brand identity.
        <div style={{ fontSize: '0.8125rem', fontWeight: 600 }}>Your Branding includes:</div>
        <InlineList>
          <li>Brand strategy</li>
          <li>Identity Development</li>
          <li>Logo Design + assets</li>
          <li>Color Palette + Typography</li>
          <li>Brand Guidelines</li>
        </InlineList>
        ADD-ONS AVAILABLE:
        <InlineList>
          <li>Business Marketing Materials</li>
          <li>Packaging Design</li>
        </InlineList>
      </Card>

      <Card title='Site Development' width={CARD_WIDTH}>
        Transform your online presence with our Website Development & Design Package, tailored for businesses looking
        to stand out online. This package delivers a blend of aesthetics and functionality.
        <div style={{ fontSize: '0.8125rem', fontWeight: 600 }}>Your Website includes:</div>
        <InlineList>
          <li>Strategic Web Development</li>
          <li>User Experience (UX) Analysis</li>
          <li>Responsive Layout</li>
          <li>Content Management System (CMS)</li>
          <li>Search Engine Optimization (SE0)</li>
          <li>Copywriting</li>
          <li>Support Available Post Launch</li>
        </InlineList>
        ADD-ONS AVAILABLE:
        <InlineList>
          <li>Product Photography</li>
          <li>Packaging Design</li>
        </InlineList>
      </Card>

      <Card title='Site Development' width={CARD_WIDTH}>
        Transform your online presence with our Website Development & Design Package, tailored for businesses looking
        to stand out online. This package delivers a blend of aesthetics and functionality.
        <div style={{ fontSize: '0.8125rem', fontWeight: 600 }}>Your Website includes:</div>
        <InlineList>
          <li>Strategic Web Development</li>
          <li>User Experience (UX) Analysis</li>
          <li>Responsive Layout</li>
          <li>Content Management System (CMS)</li>
          <li>Search Engine Optimization (SE0)</li>
          <li>Copywriting</li>
          <li>Support Available Post Launch</li>
        </InlineList>
        ADD-ONS AVAILABLE:
        <InlineList>
          <li>Product Photography</li>
          <li>Packaging Design</li>
        </InlineList>
      </Card>
    </div>
  )
}

export default Services
