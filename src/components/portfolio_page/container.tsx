import React, { useContext, useEffect, useRef } from 'react'

import ProjectThemes from 'project_themes'
import { HomePageContext } from '../home_page_context'
import { headerPixels } from '../header'
import Card from './card'

const Container = (): JSX.Element => {
  const { scrollToCaseStudies, setScrollToCaseStudies } = useContext(HomePageContext)
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (scrollToCaseStudies) {
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
    <div className='portfolio-container' ref={containerRef}>
      {Object.values(ProjectThemes).map((theme, index) =>
        <Card key={theme.name} reverse={Boolean(index % 2)} theme={theme} />)
      }
    </div>
  )
}

export default Container
