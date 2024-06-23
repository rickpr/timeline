import React, { useContext, useMemo } from 'react'

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
  const { isPortfolioPage } = useContext(HomePageContext)

  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    return isPortfolioPage === true ? <PortfolioPage /> : <AboutPage />
  }, [isPortfolioPage])
  if (isMobile === null || darkMode === null) return null

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      {content}
    </Layout>
  )
}

export default MainPage
