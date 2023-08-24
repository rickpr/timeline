import React from 'react'

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
const FinalImage = 'images/phronesis/final_image.webp'
const ComponentsDarkAndLight = 'images/phronesis/components_dark_light.webp'
const SpecsTable = 'images/phronesis/specs_table.png'
const Specs = 'images/phronesis/specs.png'
const PhotosOne = 'images/phronesis/photos_one.png'
const PhotosTwo = 'images/phronesis/photos_two.webp'

const containerStyle = {
  minWidth: '95%',
  maxWidth: '95dvw',
  margin: '4vh 2.5dvw',
  minHeight: '400px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  alignItems: 'center',
  borderRadius: '2dvh',
  justifyContent: 'space-around'
}

const cardStyle = {
  cursor: 'pointer',
  minHeight: '325px',
  padding: '20px'
}

const ImageContainer = ({ images }: { images: string[] }): JSX.Element => {
  return (
    <div style={containerStyle}>
      {images.map((image: string) => <ImageCard key={image} media={image} style={{ ...cardStyle }} />)}
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
    <ImageContainer images={[PhotosOne, ComponentsDarkAndLight]} />
    <ImageContainer images={[PhotosTwo, FinalImage]} />
  </Project>
)

export default Phronesis
