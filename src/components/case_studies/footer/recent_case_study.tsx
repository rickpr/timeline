import React, { useContext } from 'react'

import CaseStudyThemes from 'case_study_themes'
import { ThemeContext } from 'theme_context'

const containerStyles = {
  display: 'flex',
  flex: '3 0 calc(50% - 15px)',
  minWidth: '300px',
  gap: '10px',
  background: '#FFFFFF',
  color: '#778390',
  borderRadius: '10px',
  overflow: 'hidden'
}

const imageStyles = {
  width: '60px',
  height: '60px',
  objectFit: 'cover' as const
}

const RecentCaseStudy = ({ caseStudyName }: { caseStudyName: string }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const background = darkMode ? '#1A1A1A' : '#FFFFFF'
  const { name, coverPhoto, link } = CaseStudyThemes[caseStudyName]
  return (
    <a className='recent-case-study' href={link.url} style={{ ...containerStyles, background }}>
      <img
        alt={`${name} case study`}
        src={coverPhoto}
        style={imageStyles}
      />
      <p>{name}</p>
    </a>
  )
}

export default RecentCaseStudy
