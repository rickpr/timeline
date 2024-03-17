import React, { useState } from 'react'

import type FacetThemes from 'facet_themes'

interface HomePageContextType {
  isPortfolioPage: boolean
  setIsPortfolioPage: React.Dispatch<React.SetStateAction<boolean>>
  currentFacet: keyof typeof FacetThemes
  setCurrentFacet: React.Dispatch<React.SetStateAction<keyof typeof FacetThemes>>
  scrollToCaseStudies: boolean
  setScrollToCaseStudies: React.Dispatch<React.SetStateAction<boolean>>
}

const HomePageContext = React.createContext<HomePageContextType>({
  isPortfolioPage: true,
  setIsPortfolioPage: (): void => { /* Do nothing */ },
  currentFacet: 'Contact',
  setCurrentFacet: (): void => { /* Do nothing */ },
  scrollToCaseStudies: false,
  setScrollToCaseStudies: (): void => { /* Do nothing */ }
})

const HomePageProvider = ({ portfolioPage, children }: { portfolioPage: boolean, children: JSX.Element }): JSX.Element => {
  const [isPortfolioPage, setIsPortfolioPage] = useState(portfolioPage)
  const [currentFacet, setCurrentFacet] = useState('Who')
  const [scrollToCaseStudies, setScrollToCaseStudies] = useState(false)

  return (
    <HomePageContext.Provider
      value={{
        isPortfolioPage,
        setIsPortfolioPage,
        currentFacet,
        setCurrentFacet,
        scrollToCaseStudies,
        setScrollToCaseStudies
      }}
    >
      {children}
    </HomePageContext.Provider>
  )
}

export { HomePageContext, HomePageProvider }
