import React, { useMemo, useState } from 'react'

import FacetThemes from 'facet_themes'
import { AboutTheme } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'

import AboutPage from './about_page'
import Desktop from './desktop'
import Mobile from './mobile'
import Layout from './layout'

import 'sass/adalida_page/index.scss'

interface Props {
  aboutPage?: boolean
  darkMode: boolean
  toggleDarkMode: () => void
}

const AdalidaPage = ({ aboutPage = false, darkMode, toggleDarkMode }: Props): JSX.Element => {
  const [isAboutPage, setIsAboutPage] = useState(aboutPage)
  const [currentFacet, setCurrentFacet] = useState('Who')
  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    if (isAboutPage) return <AboutPage />
    return isMobile === true
      ? <Mobile setCurrentCaseStudy={setCurrentFacet} />
      : <Desktop setCurrentCaseStudy={setCurrentFacet} />
  }, [isAboutPage, isMobile])
  const facetTheme = useMemo(
    () => isAboutPage ? AboutTheme : FacetThemes[currentFacet],
    [isAboutPage, currentFacet]
  )
  if (isMobile === null) return <div />

  return (
    <Layout
      theme={facetTheme}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      isAboutPage={isAboutPage}
      setIsAboutPage={setIsAboutPage}
    >
      {content}
    </Layout>
  )
}

export default AdalidaPage
