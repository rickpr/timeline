import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Content = ({ accentColor, primaryColor, title, description }) => {
  const gridTemplateAreas = `
    'title'
    'description'
  `
  const gridTemplateColumns = '1fr'
  const gridTemplateRows = '2fr 5fr'
  const gridStyle = {
    display: 'grid',
    justifyItems: 'left',
    alignItems: 'left',
    width: '100%',
    gridArea: 'content',
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows
  }

  const bigTitle =
    <div
      style={{ gridArea: 'title', width: '100%', display: 'flex', alignItems: 'center', color: accentColor }}
      className="header huge name"
    >
      {title}
    </div>
  const inlineDescription =
    <div style={{ gridArea: 'description', color: primaryColor, fontSize: '2em' }}>
      {description}
      <div style={{ marginTop: '1em' }}>
        <Link to="/adalida/projects"><span style={{ color: '#FFFFFF' }}>OPEN CASE STUDY</span></Link>&nbsp;
        <span style={{ color: accentColor }}><FontAwesomeIcon icon={faArrowRight} /></span>
      </div>
    </div>

  return (
    <div style={gridStyle}>
      {bigTitle}
      {inlineDescription}
    </div>
  )
}

export default Content
