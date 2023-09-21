import React, { useMemo, useState } from 'react'

import Projects from 'project_data'
import { AboutTheme, ThemeContext } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'

import AboutPage from './about_page'
import Desktop from './desktop'
import Header from './header'
import Mobile from './mobile'
import ScrollProgress from './projects/scroll_progress'

import 'sass/adalida_page/index.scss'

interface Props {
  aboutPage?: boolean
  darkMode: boolean
  toggleDarkMode: () => void
}

const AdalidaPage = ({ aboutPage = false, darkMode, toggleDarkMode }: Props): JSX.Element => {
  const [currentProject, setCurrentProject] = useState('Phronesis')
  const [isAboutPage, setIsAboutPage] = useState(aboutPage)
  const isMobile = useIsMobile(768)
  const content = useMemo(() => {
    if (isAboutPage) return <AboutPage />
    return isMobile === true
      ? <Mobile setCurrentProject={setCurrentProject} />
      : <Desktop setCurrentProject={setCurrentProject} />
  }, [isAboutPage, isMobile])
  const projectTheme = useMemo(
    () => isAboutPage ? AboutTheme : Projects[currentProject],
    [isAboutPage, currentProject]
  )
  if (isMobile === null) return <div />

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...projectTheme }}>
      <Header
        isAboutPage={isAboutPage}
        setIsAboutPage={setIsAboutPage}
      />
      {isAboutPage && <ScrollProgress />}
      {content}
    </ThemeContext.Provider>
  )
}

export default AdalidaPage
