import { minBy } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'

import App from './app'
import Header from './header'
import Projects from 'project_data'

import 'sass/adalida_page/index.scss'

const coverStyles = {
  display: 'flex',
  width: '100%',
  maxHeight: '100vh',
  overflow: 'auto',
  scrollSnapType: 'both mandatory',
  flexDirection: 'row'
}

const distanceFromWindow = ([_project, element]) => {
  if (!element) return Infinity

  const { left, top } = element.getBoundingClientRect()
  // TODO: if splitting into mobile and desktop, use only one dimension
  return Math.pow(left, 2) + Math.pow(top, 2)
}

const AdalidaPage = () => {
  const containerRef = useRef(null)
  const projectsRef = useRef({})
  const projects = Object.keys(Projects)

  const [closestProject, setClosestProject] = useState('GainTain')
  useEffect(() => {
    let timer = null
    const containerElement = containerRef.current
    const updateClosestProject = () => {
      const [closestProject] = minBy(
        Object.entries(projectsRef.current), distanceFromWindow
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

  return (
    <>
      <div style={coverStyles} ref={containerRef}>
        {projects.map(project => (
          <App
            key={project}
            title={project}
            ref={ref => { projectsRef.current[project] = ref }}
          />
        ))}
        <Header closestProject={closestProject} />
      </div>
    </>
  )
}

export default AdalidaPage
