import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

import ImageCard from '../image_card'
import { boxShadow } from './styles'

const style = {
  transition: 'all 0.5s ease-in-out',
  cursor: 'pointer',
  display: 'flex',
  width: '300px',
  minHeight: '300px',
  borderRadius: '1vh',
  padding: '20px',
  boxShadow
}

const SmallProject = ({ media }: { media: string }): React.ReactElement => {
  const { darkMode } = useContext(ThemeContext)
  const { background } = useDarkModeStyle(!darkMode)
  return <ImageCard media={media} style={{ ...style, background }} />
}

export default SmallProject
