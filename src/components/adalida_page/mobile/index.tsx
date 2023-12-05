import React, { useRef } from 'react'

import CaseStudyThemes from 'case_study_themes'

import App from './app'
import Selector from './selector'
import { headerPixels } from '../header'

const height = `calc(100dvh - ${headerPixels}px)`

const fullWindowStyles = {
  minHeight: height,
  maxHeight: height,
  minWidth: '100dvw',
  display: 'flex',
  flexDirection: 'column' as const
}

const coverStyles = {
  display: 'grid',
  minWidth: '100dvw',
  gridTemplateColumns: '1fr 1fr 1fr 1fr', // TODO: WTF
  flexDirection: 'row' as const,
  overflowX: 'auto' as const,
  overflowY: 'hidden' as const,
  scrollSnapType: 'x mandatory',
  flexGrow: 3,
  position: 'relative' as const
}

interface Props {
  setCurrentCaseStudy: (caseStudy: string) => void
}

const Mobile = ({ setCurrentCaseStudy }: Props): JSX.Element => {
  const containerRef = useRef(null)
  const caseStudies = Object.keys(CaseStudyThemes)
  const caseStudyRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(caseStudies.map(caseStudy => [caseStudy, null]))
  )
  return (
    <div style={fullWindowStyles}>
      <Selector caseStudyRefs={caseStudyRefs} />
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
      </div>
    </div>
  )
}

export default Mobile
