import React, { useState } from 'react'

interface HomePageContextType {
  isPortfolioPage: boolean
  setIsPortfolioPage: React.Dispatch<React.SetStateAction<boolean>>
  scrollToCaseStudies: boolean
  setScrollToCaseStudies: React.Dispatch<React.SetStateAction<boolean>>
}

const HomePageContext = React.createContext<HomePageContextType>({
  isPortfolioPage: true,
  setIsPortfolioPage: (): void => { /* Do nothing */ },
  scrollToCaseStudies: false,
  setScrollToCaseStudies: (): void => { /* Do nothing */ }
})

const HomePageProvider = ({ portfolioPage, children }: { portfolioPage: boolean, children: JSX.Element }): JSX.Element => {
  const [isPortfolioPage, setIsPortfolioPage] = useState(portfolioPage)
  const [scrollToCaseStudies, setScrollToCaseStudies] = useState(false)

  return (
    <HomePageContext.Provider
      value={{
        isPortfolioPage,
        setIsPortfolioPage,
        scrollToCaseStudies,
        setScrollToCaseStudies
      }}
    >
      {children}
    </HomePageContext.Provider>
  )
}

export { HomePageContext, HomePageProvider }
