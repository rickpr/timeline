import React, { useContext, useEffect, useRef } from 'react'

import CaseStudyThemes from 'case_study_themes'
import { HomePageContext } from '../home_page_context'
import { headerPixels } from '../header'
import Card from '.'
import { ContainerStyles } from './styles'

const Container = (): JSX.Element => {
  const { scrollToCaseStudies, setScrollToCaseStudies } = useContext(HomePageContext)
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (scrollToCaseStudies) {
      console.log(containerRef.current)
      setTimeout(() => {
        const top = containerRef.current?.getBoundingClientRect()?.top
        if (top !== undefined) {
          scrollTo({ top: top - headerPixels, behavior: 'smooth' })
        }
      }, 1000)
      setScrollToCaseStudies(false)
    }
  }, [scrollToCaseStudies, setScrollToCaseStudies])
  return (
    <div style={ContainerStyles} ref={containerRef}>
      {Object.values(CaseStudyThemes).map((theme) => <Card key={theme.name} theme={theme} />)}
    </div>
  )
}

export default Container
