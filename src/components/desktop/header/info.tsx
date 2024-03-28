import React, { type CSSProperties, useContext } from 'react'

import darkModeStyle from 'dark_mode_style'
import { ThemeContext, type Theme } from 'theme_context'

import Title from './title'

interface Props {
  appRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
  theme: Theme
  title: string
}

const Info = ({ appRefs, theme, title }: Props): React.ReactElement => {
  const { name, darkMode } = useContext(ThemeContext)
  const { text: background } = darkModeStyle(darkMode, theme)
  const active = name === theme.name
  const opacity = active ? 1 : 0.2
  const scrollIntoView = (): void => appRefs.current[title]?.current?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div
      className='desktop-app-info'
      key={title}
      style={{ opacity }}
      onClick={scrollIntoView}
      role='tab'
      tabIndex={0}
      onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && scrollIntoView() }}
    >
      <div className='desktop-app-indicator-bar' style={{ borderColor: background as CSSProperties['borderColor'] }} />
      <Title theme={theme} active={active} />
    </div>
  )
}

export default Info
