import React, { useContext, useMemo } from 'react'

import FacetThemes from 'facet_themes'
import { AboutTheme } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'

import ProfessionPage from './profession_page'
import Desktop from './desktop'
import Mobile from './mobile'
import { HomePageContext } from './home_page_context'
import Layout from './layout'

interface Props {
  darkMode: boolean
  toggleDarkMode: () => void
}

const AdalidaPage = ({ darkMode, toggleDarkMode }: Props): JSX.Element => {
  const {
    isProfessionPage,
    setIsProfessionPage,
    currentFacet,
    setCurrentFacet
  } = useContext(HomePageContext)

  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    if (isProfessionPage) return <ProfessionPage />
    return isMobile === true
      ? <Mobile themes={FacetThemes} setCurrentTheme={setCurrentFacet} />
      : <Desktop themes={FacetThemes} setCurrentTheme={setCurrentFacet} />
  }, [isProfessionPage, isMobile, setCurrentFacet])
  const facetTheme = useMemo(
    () => isProfessionPage ? AboutTheme : FacetThemes[currentFacet],
    [isProfessionPage, currentFacet]
  )
  if (isMobile === null) return <div />

  return (
    <Layout
      theme={facetTheme}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      isProfessionPage={isProfessionPage}
      setIsProfessionPage={setIsProfessionPage}
    >
      {content}
    </Layout>
  )
}

export default AdalidaPage
