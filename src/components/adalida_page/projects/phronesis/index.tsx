import React from 'react'

import Project from '../project'
import ImageCard from '../../image_card'
import About from './about'

import 'sass/adalida_page/project.scss'

import InformationArchitecture from 'images/phronesis/info_arch.png'
import Logo from 'images/phronesis/logo.png'
import AppIcon from 'images/phronesis/app_icon.png'
import Text from 'images/phronesis/text.png'
import Color from 'images/phronesis/color.png'
import FinalLogo from 'images/phronesis/final_logo.png'
import FinalImage from 'images/phronesis/final_image.webp'
import ComponentsDarkAndLight from 'images/phronesis/components_dark_light.webp'
import SpecsTable from 'images/phronesis/specs_table.png'
import Specs from 'images/phronesis/specs.png'
import PhotosOne from 'images/phronesis/photos_one.png'
import PhotosTwo from 'images/phronesis/photos_two.webp'

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
