import { navigate } from 'gatsby'
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { minBy } from 'lodash'

import { ThemeContext, Themes } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'
import useViewportHeight from 'hooks/use_viewport_height'

import App from '../app'
import SplashPage from '../splash_page'
import Layout from '../layout'
import SideNavigation from './side_navigation'

import 'sass/adalida_page/apps_page.scss'

const AppsPage = () => {
  const isMobile = useIsMobile()
  const logiRef = useRef()
  const zenoRef = useRef()
  const HBOMaxRef = useRef()
  const cyphRef = useRef()
  const hireAdiRef = useRef()

  const navigationLinks = useMemo(() => {
    const links = {
      Logi: logiRef,
      Zeno: zenoRef,
      HBOMax: HBOMaxRef,
      Cyph: cyphRef
    }
    if (isMobile) links['Hire Adi'] = hireAdiRef
    return links
  }, [isMobile])
  const splashPage = <SplashPage ref={hireAdiRef} />

  const [closestProject, setClosestProject] = useState(() => Object.keys(navigationLinks)[0])

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
      console.log(closestProject)
      if (closestProject === 'Hire Adi') setTimeout(() => navigate('/adalida/about'), 500)
    }
    // TODO: don't user a timer for this
    setTimeout(() => scrollRef.current.scrollTo({top: 0, left: 0, behavior: 'smooth'}), 1000)
    scrollRef.current.addEventListener('scroll', updateClosestProject)
    return () => window.removeEventListener('scroll', updateClosestProject)
  }, [navigationLinks])

  // No app for the Hire Adi page, but we want a nav link
  const apps = Object.entries(navigationLinks).filter(([title, _]) => title !== 'Hire Adi')
  return (
    <ThemeContext.Provider value={Themes[closestProject]}>
      <Layout>
        <div
          className='apps-container'
          ref={scrollRef}
          style={{ flexDirection: isMobile ? 'row' : 'column', height: useViewportHeight() }}
        >
          {apps.map(([title, ref]) => <App key={title} ref={ref} title={title} />)}
          {isMobile && splashPage}
        </div>
        <SideNavigation links={navigationLinks} />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default AppsPage
