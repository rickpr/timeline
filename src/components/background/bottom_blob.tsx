import React, { type CSSProperties } from 'react'

import BlobWithTransition from './blob_with_transition'

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
}

const startPath = `
M65.5,34.85
C72.8,37.65,83.25,39.95,84.05,44.05
C84.8,48.15,75.9,53.95,70.2,59.6
C64.45,65.2,61.95,70.6,57.9,72.3
C53.85,74.0,48.3,72.05,40.05,71.55
C31.85,71.05,21.05,72.0,14.85,67.35
C8.65,62.7,7.1,52.45,9.15,43.15
C11.2,33.85,16.85,25.55,24.3,22.8
C31.7,20.05,40.85,22.8,47.45,25.8
C54.1,28.8,58.2,32.1,65.5,34.85
Z
`

const endPath = `
M61.8,33.8
C65.05,38.7,67.35,42.6,68.55,47.1
C69.75,51.55,69.85,56.55,69.3,64.6
C68.75,72.6,67.5,83.7,62.65,86.0
C57.8,88.3,49.3,81.8,40.7,77.75
C32.1,73.7,23.4,72.05,18.6,66.7
C13.85,61.35,12.95,52.35,16.45,46.1
C19.95,39.85,27.75,36.35,34.1,31.95
C40.4,27.6,45.2,22.3,49.75,22.65
C54.25,22.95,58.5,28.9,61.8,33.8
Z
`

const BottomBlob = ({ background, gradientColor }: Props): JSX.Element =>
  <BlobWithTransition
    background={background}
    gradientColor={gradientColor}
    startPath={startPath}
    endPath={endPath}
  />

export default BottomBlob
