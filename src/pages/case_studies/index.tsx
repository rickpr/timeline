import React from 'react'
import 'sass/custom.scss'

import CaseStudiesComponent from 'components/adalida_page/case_studies'
import useDarkMode from 'hooks/use_dark_mode'

const CaseStudies = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return <CaseStudiesComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
}

export const Head = (): JSX.Element => <title>Designs</title>
export default CaseStudies
