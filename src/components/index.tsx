import React, { useContext, useMemo } from 'react'

import { Themes } from 'themes'
import useIsMobile from 'hooks/use_is_mobile'

import PortfolioPage from './portfolio_page'
import AboutPage from './about_page'
import { HomePageContext } from './home_page_context'
import Layout from './layout'

interface Props {
  darkMode: boolean | null
  toggleDarkMode: () => void
}

const MainPage = ({ darkMode, toggleDarkMode }: Props): JSX.Element | null => {
  const { isPortfolioPage, setIsPortfolioPage } = useContext(HomePageContext)

  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    return isPortfolioPage ? <PortfolioPage /> : <AboutPage />
  }, [isPortfolioPage])
  const facetTheme = useMemo(
    () => isPortfolioPage ? Themes.Portfolio : Themes.About,
    [isPortfolioPage]
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
