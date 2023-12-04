import React, { useMemo, useState } from 'react'

import Projects, { About } from 'project_data'
import useIsMobile from 'hooks/use_is_mobile'

import AboutPage from './about_page'
import Desktop from './desktop'
import Mobile from './mobile'
import Layout from './layout'

import 'sass/adalida_page/index.scss'

interface Props {
  aboutPage?: boolean
  darkMode: boolean
  toggleDarkMode: () => void
}

const AdalidaPage = ({ aboutPage = false, darkMode, toggleDarkMode }: Props): JSX.Element => {
  const [isAboutPage, setIsAboutPage] = useState(aboutPage)
  const [currentProject, setCurrentProject] = useState('AirbrushArtStudio')
  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    if (isAboutPage) return <AboutPage />
    return isMobile === true
      ? <Mobile setCurrentProject={setCurrentProject} />
      : <Desktop setCurrentProject={setCurrentProject} />
  }, [isAboutPage, isMobile])
  const projectTheme = useMemo(() => isAboutPage ? About : Projects[currentProject], [isAboutPage, currentProject])
  if (isMobile === null) return <div />

  return (
    <Layout
      project={projectTheme}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      isAboutPage={isAboutPage}
      setIsAboutPage={setIsAboutPage}
    >
      {content}
    </Layout>
  )
}

export default AdalidaPage
