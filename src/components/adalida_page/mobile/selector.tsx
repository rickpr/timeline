import React, { useContext, type CSSProperties } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'

import { ThemeContext, type Theme } from 'theme_context'

const selectorStyles = {
  position: 'sticky' as const,
  flexGrow: 0,
  display: 'flex',
  width: '100dvw',
  zIndex: 2,
  gap: '2dvh',
  padding: '10px calc(7.5dvw + 40px) 30px',
  justifyContent: 'space-around'
}
const barStyle = {
  borderWidth: '2px',
  borderRadius: '2px',
  height: '2px',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease-in-out',
  background: 'none',
  padding: 0,
  cursor: 'pointer'
}

interface Props {
  themes: Record<string, Theme>
  appRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
}

const Header = ({ themes, appRefs }: Props): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text } = useDarkModeStyle(themeContext.darkMode, themeContext)

  const indicators = Object.keys(appRefs.current).map(title => {
    const active = themeContext.name === themes[title].name
    const opacity = active ? 1 : 0.2
    return (
      <button
        key={title}
        style={{ ...barStyle, opacity, borderColor: text as CSSProperties['borderColor'] }}
        onClick={() => appRefs.current[title]?.current?.scrollIntoView({ behavior: 'smooth' }) }
      />
    )
  })
  return <div style={{ ...selectorStyles, color: text }}>{indicators}</div>
}

export default Header
