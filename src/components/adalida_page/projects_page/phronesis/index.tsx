import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import Project from '../project'
import ImageCard from '../../image_card'
import About from './about'

import 'sass/adalida_page/project.scss'

const InformationArchitecture = 'images/phronesis/info_arch.png'
const Logo = 'images/phronesis/logo.png'
const AppIcon = 'images/phronesis/app_icon.png'
const Text = 'images/phronesis/text.png'
const Color = 'images/phronesis/color.png'
const FinalLogo = 'images/phronesis/final_logo.png'
const ComponentsDarkAndLight = 'images/phronesis/components_dark_light.png'
const SpecsTable = 'images/phronesis/specs_table.png'
const Specs = 'images/phronesis/specs.png'
const PhotosOne = 'images/phronesis/photos_one.png'
const PhotosTwo = 'images/phronesis/photos_two.png'

const containerStyle = {
  minWidth: '95%',
  maxWidth: '95vw',
  margin: '4vh 2.5vw',
  minHeight: '400px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  alignItems: 'center',
  borderRadius: '2vh',
  justifyContent: 'space-around'
}

const cardStyle = {
  cursor: 'pointer',
  minHeight: '325px',
  padding: '20px'
}

const ImageContainer = ({ images }: { images: string[] }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background } = useDarkModeStyle(!darkMode)
  return (
    <div style={containerStyle}>
      {images.map((image: string) => <ImageCard key={image} media={image} style={{ ...cardStyle, background }} />)}
    </div>
  )
}

const Phronesis = (): JSX.Element => (
  <Project>
    <About />
    <ImageContainer images={[InformationArchitecture]} />
    <ImageContainer images={[Logo, AppIcon]} />
    <ImageContainer images={[Text, Color]} />
    <ImageContainer images={[FinalLogo]} />
    <ImageContainer images={[Specs, SpecsTable]} />
    <ImageContainer images={[PhotosOne, PhotosTwo]} />
    <ImageContainer images={[ComponentsDarkAndLight]} />
  </Project>
)

export default Phronesis
