import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Background from './background'
import Floor from './floor'
import Model from './model'

const Scene2 = (): JSX.Element => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 20, 20]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <ambientLight />
        <Background />
        <Model position={[0, -30, 0]} rotation={[0, 0, 0]} />
        <Floor />
      </Suspense>
    </Canvas>
  )
}

export default Scene2
