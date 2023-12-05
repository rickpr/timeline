import React, { useMemo, useState } from 'react'

import CaseStudyThemes from 'case_study_themes'
import useIsMobile from 'hooks/use_is_mobile'

import Desktop from '../desktop'
import Mobile from '../mobile'
import Layout from '../layout'

import 'sass/adalida_page/index.scss'

interface Props {
  darkMode: boolean
  toggleDarkMode: () => void
}

const CaseStudies = ({ darkMode, toggleDarkMode }: Props): JSX.Element => {
  const [currentCaseStudy, setCurrentCaseStudy] = useState('AirbrushArtStudio')
  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    return isMobile === true
      ? <Mobile setCurrentCaseStudy={setCurrentCaseStudy} />
      : <Desktop setCurrentCaseStudy={setCurrentCaseStudy} />
  }, [isMobile])
  const caseStudyTheme = useMemo(() => CaseStudyThemes[currentCaseStudy], [currentCaseStudy])
  if (isMobile === null) return <div />

  return (
    <Layout
      theme={caseStudyTheme}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    >
      {content}
    </Layout>
  )
}

export default CaseStudies
