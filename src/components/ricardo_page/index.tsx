import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import FileQuery from 'queries/file'
import Box from './box'

const SCALE = 8

const anglesToFaceSidesOfBox = [
  -Math.PI,
  -Math.PI / 2,
  0,
  0.5 * Math.PI,
  Math.PI // as the numbers wrap around here, this is equivalent to - Math.PI.
  // We add this here so we can snap to it when less than Math.PI without doing
  // any weird wrap-around math. Better math is welcome if it's more efficient.
]
const BackgroundEnvironment = (props) => {
  const backgroundImage = FileQuery('ricardo_background.hdr')
  return <Environment background files={backgroundImage.publicURL} />
}

const RicardoPage = () => {
  const controlsRef = useRef()
  const faceSideOfBox = () => {
    const azimuthalAngle = controlsRef.current.getAzimuthalAngle()
    const angleToFaceClosestSide = anglesToFaceSidesOfBox.reduce((closestSide, nextSide) =>
      (Math.abs(closestSide - azimuthalAngle) < Math.abs(nextSide - azimuthalAngle)) ? closestSide : nextSide
    )
    controlsRef.current.setAzimuthalAngle(angleToFaceClosestSide)
    controlsRef.current.setPolarAngle(Math.PI / 2)
  }

  /* eslint-disable react/no-unknown-property */
  return (
    <Canvas shadows>
      <ambientLight intensity={0.7} />
      <BackgroundEnvironment />
      <PerspectiveCamera makeDefault position={[0, 0, SCALE * 4]} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Box position={[0, 0, 0]} />
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={3 * Math.PI / 4}
        onEnd={faceSideOfBox}
      />
    </Canvas>
  )
  /* eslint-enable react/no-unknown-property */
}

export default RicardoPage
