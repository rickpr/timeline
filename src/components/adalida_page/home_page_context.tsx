import React, { useState } from 'react'

import type FacetThemes from 'facet_themes'

interface HomePageContextType {
  isProfessionPage: boolean
  setIsProfessionPage: React.Dispatch<React.SetStateAction<boolean>>
  currentFacet: keyof typeof FacetThemes
  setCurrentFacet: React.Dispatch<React.SetStateAction<keyof typeof FacetThemes>>
  scrollToCaseStudies: boolean
  setScrollToCaseStudies: React.Dispatch<React.SetStateAction<boolean>>
}

const HomePageContext = React.createContext<HomePageContextType>({
  isProfessionPage: true,
  setIsProfessionPage: (): void => { /* Do nothing */ },
  currentFacet: 'Who',
  setCurrentFacet: (): void => { /* Do nothing */ },
  scrollToCaseStudies: false,
  setScrollToCaseStudies: (): void => { /* Do nothing */ }
})

const HomePageProvider = ({ professionPage, children }: { professionPage: boolean, children: JSX.Element }): JSX.Element => {
  const [isProfessionPage, setIsProfessionPage] = useState(professionPage)
  const [currentFacet, setCurrentFacet] = useState('Who')
  const [scrollToCaseStudies, setScrollToCaseStudies] = useState(false)

  return (
    <HomePageContext.Provider
      value={{
        isProfessionPage,
        setIsProfessionPage,
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
