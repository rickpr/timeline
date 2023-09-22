import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

import ImageCard from '../image_card'

const style = {
  transition: 'all 0.5s ease-in-out',
  cursor: 'pointer',
  display: 'flex',
  width: '325px',
  minHeight: '325px',
  borderRadius: '1vh',
  padding: '20px'
}

const SmallProject = ({ media }: { media: string }): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  const { background } = useDarkModeStyle(!darkMode)
  return <ImageCard media={media} style={{ ...style, background }} />
}

export default SmallProject
