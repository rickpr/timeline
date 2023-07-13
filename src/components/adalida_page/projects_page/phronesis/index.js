import PropTypes from 'prop-types'
import React from 'react'

import Project from '../project'
import ImageCard from '../../image_card'

import InformationArchitecture from 'images/phronesis/information_architecture.svg'
import Logo from 'images/phronesis/logo.svg'
import AppIcon from 'images/phronesis/app_icon.svg'
import Text from 'images/phronesis/text.svg'
import Color from 'images/phronesis/color.svg'
import SpecsTable from 'images/phronesis/specs_table.svg'
import Specs from 'images/phronesis/specs.svg'

import 'sass/adalida_page/project.scss'

const containerStyle = {
  minWidth: '95%',
  maxWidth: '95vw',
  margin: '4vh 2.5vw',
  minHeight: '400px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(576px, 1fr))',
  alignItems: 'center',
  borderRadius: '2vh',
  justifyContent: 'space-around',
  gap: '2vh'
}

const cardStyle = {
  background: '#1A191C',
  cursor: 'pointer',
  minHeight: '325px',
  borderRadius: '1vh',
  padding: '20px'
}

const ImageContainer = ({ images }) => (
  <div style={containerStyle}>
    {images.map((image) => <ImageCard key={image} media={image} style={cardStyle} />)}
  </div>
)
ImageContainer.propTypes = { images: PropTypes.arrayOf(PropTypes.string).isRequired }

const Phronesis = () => (
  <Project>
    <ImageContainer images={[InformationArchitecture]} />
    <ImageContainer images={[Logo, AppIcon]} />
    <ImageContainer images={[Text, Color]} />
    <ImageContainer images={[Specs, SpecsTable]} />
  </Project>
)

export default Phronesis
