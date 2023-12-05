import React, { useRef } from 'react'

import CaseStudyThemes from 'case_study_themes'

import App from './app'
import Header from './header'
import { headerPixels } from '../header'

const coverStyles = {
  display: 'flex',
  maxHeight: `calc(100dvh - ${headerPixels}px)`,
  flexDirection: 'column' as const,
  overflowY: 'auto' as const,
  overflowX: 'hidden' as const,
  scrollSnapType: 'y mandatory'
}

interface Props {
  setCurrentCaseStudy: (caseStudy: string) => void
}

const Desktop = ({ setCurrentCaseStudy }: Props): JSX.Element => {
  const containerRef = useRef(null)
  const caseStudies = Object.keys(CaseStudyThemes)
  const caseStudyRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(caseStudies.map(caseStudy => [caseStudy, null]))
  )

  return (
    <div style={coverStyles} ref={containerRef}>
      {caseStudies.map(caseStudy => (
        <App
          key={caseStudy}
          ref={ (element: React.MutableRefObject<HTMLDivElement>) => (caseStudyRefs.current[caseStudy] = element) }
          title={caseStudy}
          containerRef={containerRef}
          setCurrentCaseStudy={setCurrentCaseStudy}
        />
      ))}
      <Header caseStudyRefs={caseStudyRefs} />
    </div>
  )
}

export default Desktop
