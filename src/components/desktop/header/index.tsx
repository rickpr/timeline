import React from 'react'

import type { Theme } from 'theme_context'
import Info from './info'

interface Props {
  themes: Record<string, Theme>
  appRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
}

const Header = ({ themes, appRefs }: Props): React.ReactElement => {
  const indicators = Object.keys(appRefs.current).map(title =>
    <Info key={title} appRefs={appRefs} theme={themes[title]} title={title} />
  )
  return <div className='desktop-app-indicators'>{indicators}</div>
}

export default Header
