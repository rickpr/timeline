import React, { type CSSProperties } from 'react'

import BlobWithTransition from './blob_with_transition'

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
}

const startPath = `
M73.35,19.0
C78.2,26.25,78.65,35.55,80.3,44.7
C81.95,53.8,84.8,62.8,82.55,70.8
C80.3,78.8,73.0,85.9,64.6,88.0
C56.25,90.05,46.9,87.15,39.2,82.95
C31.5,78.7,25.5,73.15,21.6,66.4
C17.65,59.6,15.8,51.65,17.95,45.2
C20.1,38.8,26.3,33.95,32.3,26.9
C38.3,19.9,44.15,10.65,51.7,8.65
C59.25,6.6,68.5,11.75,73.35,19.0
Z
`

const endPath = `
M64.25,31.25
C69.3,37.25,74.75,40.95,78.1,46.95
C81.45,53.0,82.65,61.3,80.1,68.9
C77.5,76.55,71.1,83.5,64.2,83.75
C57.25,84.0,49.8,77.55,41.1,74.4
C32.45,71.25,22.55,71.4,16.8,66.65
C11.1,61.9,9.55,52.25,11.3,43.3
C13.05,34.4,18.1,26.2,25.1,20.55
C32.1,14.9,41.05,11.75,47.85,14.35
C54.6,16.95,59.2,25.25,64.25,31.25
Z
`

const TopBlob = ({ background, gradientColor }: Props): JSX.Element =>
  <BlobWithTransition
    background={background}
    gradientColor={gradientColor}
    startPath={startPath}
    endPath={endPath}
  />

export default TopBlob
