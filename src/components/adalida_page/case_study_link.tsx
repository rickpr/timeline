import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import CaseStudyThemes from 'case_study_themes'

import { glassStyles } from './styles'

const labelStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  justifyContent: 'flex-start',
  gap: '1em'
}
const titleStyles = {
  fontSize: '2rem',
  lineHeight: 1,
  padding: 0,
  margin: 0
}
const listStyles = {
  display: 'flex',
  justifyContent: 'left',
  flexWrap: 'wrap' as const,
  padding: 0,
  margin: 0,
  gap: '0.5em'
}

const roleStyles = {
  ...glassStyles,
  transition: 'background-color 0.5s ease-in-out',
  padding: '0.8em',
  fontSize: '10px',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}

const linkStyles = {
  fontSize: '1.2em',
  lineHeight: 1,
  fontWeight: 'bold'
}

const CaseStudyLink = ({ title }: { title: string }): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  const { button } = useDarkModeStyle(darkMode)
  const { description, name, caseStudyPage, roles } = CaseStudyThemes[title]
  return (
    <Link to={caseStudyPage} style={labelStyles}>
      <div style={titleStyles}>{name.toUpperCase()}</div>
      <div style={listStyles}>
        {roles.map(role => <div key={role} style={{ ...roleStyles, background: button }}>{role}</div>)}
      </div>
      <div>{description}</div>
      <div style={linkStyles}>View Case Study ➜</div>
    </Link>
  )
}

CaseStudyLink.propTypes = { title: PropTypes.string.isRequired }

export default CaseStudyLink
