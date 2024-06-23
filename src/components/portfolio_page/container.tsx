import React, { useContext, useEffect, useRef } from 'react'

import Projects from 'projects'
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
      {Object.values(Projects).map((project, index) =>
        <Card key={project.name} reverse={Boolean(index % 2)} project={project} />)
      }
    </div>
  )
}

export default Container
