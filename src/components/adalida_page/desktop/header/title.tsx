import { Link } from 'gatsby'
import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'
import Projects from 'project_data'

const labelStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  height: '100%'
}
const titleStyles = {
  lineHeight: 1,
  fontFamily: 'Avenir Next',
  padding: 0,
  margin: 0
}
const listStyles = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  justifyContent: 'left',
  padding: 0,
  margin: 0,
  gap: '1em'
}
const roleStyles = {
  transition: 'background-color 0.5s ease-in-out',
  padding: '0.8em',
  borderRadius: '500px',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}
const linkStyles = {
  fontSize: '1.2em',
  fontFamily: 'Avenir Next',
  fontWeight: 'bold'
}

interface Props {
  title: string
  active: boolean
}

const Title = ({ title, active }: Props): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  const { button } = useDarkModeStyle(darkMode)
  const { description, name, projectPage, roles } = Projects[title]
  const pointerEvents = active ? 'auto' : 'none'
  const fontSize = active ? '2.6rem' : '1rem'
  const descriptionStyle = {
    display: 'grid',
    gridTemplateRows: active ? '1fr' : '0fr',
    paddingTop: active ? '1rem' : 0,
    overflow: 'hidden',
    transition: 'grid-template-rows 0.5s ease-in-out'
  }

  return (
    <Link to={projectPage} style={{ pointerEvents, ...labelStyles }}>
      <div style={{ ...titleStyles, fontSize, padding: active ? 0 : '1rem 0' }}>{active ? name.toUpperCase() : name}</div>
      <div style={descriptionStyle}>
        <div style={{ overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={listStyles}>
            {roles.map(role => <div key={role} style={{ ...roleStyles, background: button }}>{role}</div>)}
          </div>
          <div>{description}</div>
          <div style={linkStyles}>View Project ➜</div>
        </div>
      </div>
    </Link>
  )
}

export default Title
