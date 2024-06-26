import React, { useEffect, useState } from 'react'

interface HomePageContextType {
  isPortfolioPage?: boolean
  togglePortfolioPage?: () => void
}

const HomePageContext = React.createContext<HomePageContextType>({})

const HomePageProvider = ({ portfolioPage, children }: { portfolioPage: boolean, children: JSX.Element }): JSX.Element => {
  const [isPortfolioPage, setIsPortfolioPage] = useState(portfolioPage)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const changePageOnPopState = (event: PopStateEvent): void => {
      const windowTarget = event.target as Window | undefined
      const newPathName = windowTarget?.location?.pathname
      if (newPathName === undefined) return

      if (newPathName.startsWith('/portfolio')) { setIsPortfolioPage(true) }
      if (newPathName.startsWith('/about')) { setIsPortfolioPage(false) }
    }
    window.addEventListener('popstate', changePageOnPopState)
    return () => { window.removeEventListener('popstate', changePageOnPopState) }
  }, [portfolioPage])

  const togglePortfolioPage = (): void => {
    setIsPortfolioPage((isPortfolioPage: boolean) => {
      history.pushState({}, '', isPortfolioPage ? '/about' : '/portfolio')
      return !isPortfolioPage
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <HomePageContext.Provider value={{ isPortfolioPage, togglePortfolioPage }}>
      {children}
    </HomePageContext.Provider>
  )
}

export { HomePageContext, HomePageProvider }
