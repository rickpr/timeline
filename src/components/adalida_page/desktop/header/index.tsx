import React from 'react'

import CaseStudy from './case_study'

const indicatorStyle = {
  width: '50%',
  padding: '0 10dvw',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '2dvh',
  justifyContent: 'space-between',
  bottom: '10dvh',
  height: 'min-content',
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(0, -50%)',
  pointerEvents: 'none' as const
}

interface Props {
  caseStudyRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
}

const Header = ({ caseStudyRefs }: Props): React.ReactElement => {
  const indicators = Object.keys(caseStudyRefs.current).map(caseStudy =>
    <CaseStudy key={caseStudy} caseStudyRefs={caseStudyRefs} caseStudy={caseStudy} />
  )
  return <div style={indicatorStyle}>{indicators}</div>
}

export default Header
