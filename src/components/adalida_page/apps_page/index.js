import { navigate } from 'gatsby'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { minBy } from 'lodash'

import { ThemeContext, Themes } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'
import useViewportHeight from 'hooks/use_viewport_height'

import App from '../app'
import SplashPage from '../splash_page'
import Layout from '../layout'
import SideNavigation from './side_navigation'

const AppsPage = () => {
  const isMobile = useIsMobile()
  const cyphRef = useRef()
  const zenoRef = useRef()
  const splashPageRef = useRef()

  const navigationLinks = useMemo(() => {
    const links = {
      Cyph: cyphRef,
      Zeno: zenoRef
    }
    if (isMobile) links.Splash = splashPageRef
    return links
  }, [isMobile])
  const splashPage = <SplashPage ref={splashPageRef} />

  const [closestProject, setClosestProject] = useState('Cyph')

  const scrollRef = useRef()
  useEffect(() => {
    const updateClosestProject = () => {
      const distanceFromWindow = ([_, ref]) => {
        if (!ref.current) return Infinity

        const { left, top } = ref.current.getBoundingClientRect()
        return Math.pow(left, 2) + Math.pow(top, 2)
      }
      const [closestProject] = minBy(Object.entries(navigationLinks), distanceFromWindow)
      setClosestProject(closestProject)
      if (closestProject === 'Splash') setTimeout(() => navigate('/adalida/about'), 500)
    }
    scrollRef.current.addEventListener('scroll', updateClosestProject)
    updateClosestProject()
    return () => window.removeEventListener('scroll', updateClosestProject)
  }, [navigationLinks])

  return (
    <ThemeContext.Provider value={Themes[closestProject]}>
      <Layout>
        <div
          ref={scrollRef}
          style={{
            scrollSnapType: 'both mandatory',
            overflow: 'auto',
            height: useViewportHeight(),
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column'
          }}
        >
          <App key='cyph' ref={navigationLinks.Cyph} title='Cyph' />
          <App key='zeno' ref={navigationLinks.Zeno} title='Zeno' />
          {isMobile && splashPage}
        </div>
        <SideNavigation links={navigationLinks} />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default AppsPage
