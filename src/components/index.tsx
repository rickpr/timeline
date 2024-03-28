import React, { useContext, useMemo } from 'react'

import FacetThemes from 'facet_themes'
import useIsMobile from 'hooks/use_is_mobile'

import PortfolioPage from './portfolio_page'
import Desktop from './desktop'
import Mobile from './mobile'
import { HomePageContext } from './home_page_context'
import Layout from './layout'

interface Props {
  darkMode: boolean | null
  toggleDarkMode: () => void
}

const MainPage = ({ darkMode, toggleDarkMode }: Props): JSX.Element | null => {
  const {
    isPortfolioPage,
    setIsPortfolioPage,
    currentFacet,
    setCurrentFacet
  } = useContext(HomePageContext)

  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    if (isPortfolioPage) return <PortfolioPage />
    return isMobile === true
      ? <Mobile themes={FacetThemes} setCurrentTheme={setCurrentFacet} />
      : <Desktop themes={FacetThemes} setCurrentTheme={setCurrentFacet} />
  }, [isPortfolioPage, isMobile, setCurrentFacet])
  const facetTheme = useMemo(
    () => isPortfolioPage ? FacetThemes.Portfolio : FacetThemes[currentFacet],
    [isPortfolioPage, currentFacet]
  )
  if (isMobile === null || darkMode === null) return null

  return (
    <Layout
      theme={facetTheme}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      isPortfolioPage={isPortfolioPage}
      setIsPortfolioPage={setIsPortfolioPage}
    >
      {content}
    </Layout>
  )
}

export default MainPage
