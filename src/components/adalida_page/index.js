import { minBy } from 'lodash'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import App from './app'
import Header from './header'
import Projects from 'project_data'
import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/index.scss'

gsap.registerPlugin(ScrollTrigger)

const coverStyles = {
  display: 'flex',
  width: '100%',
  maxHeight: '100vh',
  overflow: 'auto',
  scrollSnapType: 'both mandatory',
  flexDirection: 'row',
  transition: 'background-color 0.5s ease-in-out'
}

const distanceFromWindow = ([_project, element]) => {
  if (!element) return Infinity

  const { left, top } = element.getBoundingClientRect()
  // TODO: if splitting into mobile and desktop, use only one dimension
  return Math.pow(left, 2) + Math.pow(top, 2)
}

const AdalidaPage = () => {
  const containerRef = useRef(null)
  const projectsContainerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectsRefs = useRef({})
    //projects.map(project => ({ [project]: useRef(null) })).reduce((a, e) => ({ ...a, ...e }), {})
  //)

  const [closestProject, setClosestProject] = useState('GainTain')
  const currentProject = Projects[closestProject]
  useEffect(() => {
    let timer = null
    const containerElement = containerRef.current
    const updateClosestProject = () => {
      const [closestProject] = minBy(
        Object.entries(projectsRefs.current), distanceFromWindow
      )
      setClosestProject(closestProject)
      timer = null
    }
    const handleScroll = () => {
      if (timer) return
      timer = setTimeout(updateClosestProject, 100)
    }
    containerElement?.addEventListener('scroll', handleScroll)
    updateClosestProject()
    return () => containerElement?.removeEventListener('scroll', handleScroll)
  }, [])

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      console.log(Object.values(projectsRefs.current))
      Object.values(projectsRefs.current).forEach(ref => {
        console.log(ref.current)
        gsap.to(
          containerRef.current,
          {
            autoAlpha: 1,
            scrollTrigger: {
              trigger: ref.current,
              start: 'left left',
              end: 'right right',
              horizontal: true,
              scrub: true,
              markers: true,
              scroller: containerRef.current,
              onUpdate: (self) => {console.log(self.progress)}
            }
          }
        )
      })
    }, containerRef.current)
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      context.revert()
    }
  }, [projectsRefs.current])

  return (
    <ThemeContext.Provider value={currentProject}>
      <Header closestProject={closestProject} />
      <div style={{ background: currentProject.colors.background, ...coverStyles }} ref={containerRef}>
          {projects.map(project => (
            <App
              key={project}
              title={project}
              ref={ref => { projectsRefs.current[project] = ref }}
            />
          ))}
      </div>
    </ThemeContext.Provider>
  )
}

export default AdalidaPage
