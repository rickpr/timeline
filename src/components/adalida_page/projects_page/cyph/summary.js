import React from 'react'

import useIsMobile from 'hooks/use_is_mobile'

import heroPhoto from 'images/cyph/summary.png'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const Summary = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }

  const makeEntry = ([title, content]) => (
    <div
      key={title}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h2>{'//'} {title}</h2><ul><li>{content}</li></ul>
    </div>
  )


  const points = {
    PLATFORM: 'Mobile iOS',
    INDUSTRY: 'Political Technology',
    LOCATION: 'San Francisco, CA',
    DURATION: '2 months'
  }
  // The length of the word plus the two slashes and space.
  const sizeOfLargestTitle = Math.max(...Object.keys(points).map(title => title.length)) + 3
  // 2.4 is a magic number, it should be 2 but probably also involves the font weight.
  const breakpoint = 2.4 * sizeOfLargestTitle + 'ch'

  const heroDiv = (
    <div style={{ maxWidth: '60vw', minWidth: '500px', flexBasis: '60%', flexGrow: 2 }}>
      <img src={heroPhoto} style={{ maxWidth: '100%' }} />
    </div>
  )

  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h1>{'//'} ABOUT THE PROJECT</h1>
      <p>
        Cyph is a mobile app designed for users who are interested in contributions and spending between elected
        representatives and businesses.
        Users can scan a person politician and Cyph will recognize who the representative is and who their donors are.
      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
        This project is a design challenge for myself to do something for social good.
        I wanted to learn about and contribute to solving problems resulting in an increase in voter turnout for all
        demographics and helping voters vote for what is actually in their best interests.
        Then I saw a meme containing a quote by Robin Williams, which kick-started the project:
      </p>
      <p>“Politicians should wear sponsor jackets like NASCAR drivers, then we know who owns them”.</p>
      <ResponsiveGrid breakpoint={breakpoint}>
        {Object.entries(points).map(makeEntry)}
      </ResponsiveGrid>
    </div>
  )

  const roles = (
    <div style={{
      gridColumn: '1 / -1',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      ...centerStyles
    }}>
      <h1>{'//'} ROLES</h1>
      <ul>
        <li style={{ float: 'left' }}>Product Designer</li>
        <li style={{ float: 'left' }}>User Testing</li>
        <li style={{ float: 'left' }}>UX Researcher</li>
        <li style={{ float: 'left' }}>Interaction Designer</li>
        <li style={{ float: 'left' }}>UI Designer</li>
      </ul>
    </div>
  )
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3%',
    height: '100%',
    width: '100%',
    ...centerStyles
  }

  return (
    <Card title='Summary'>
      <div style={style}>
        {heroDiv} {text}
        {roles}
      </div>
    </Card>
  )
}

export default Summary
