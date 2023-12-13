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
  const [currentTheme, setCurrentTheme] = useState('AirbrushArtStudio')
  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    return isMobile === true
      ? <Mobile themes={CaseStudyThemes} setCurrentTheme={setCurrentTheme} />
      : <Desktop themes={CaseStudyThemes} setCurrentTheme={setCurrentTheme} />
  }, [isMobile])
  const caseStudyTheme = useMemo(() => CaseStudyThemes[currentTheme], [currentTheme])
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
