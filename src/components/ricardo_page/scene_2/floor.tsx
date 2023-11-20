import React from 'react'
import { useTexture } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import * as THREE from 'three'

import Wood from 'images/ricardo/scene/wood.png'

const SCALE = 80
const Y_OFFSET = -30
const sideSize = SCALE * 2

const Floor = (props: MeshProps): JSX.Element => {
  const woodTexture = useTexture(Wood)

  const floor = (
    <mesh
      {...props}
      position={[0, Y_OFFSET, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
  )

    const ceiling = (
    <mesh
      {...props}
      position={[0, SCALE * 2 + Y_OFFSET, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    >
        <planeGeometry args={[sideSize, sideSize]} />
        <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
    )

    const leftWall = (
    <mesh
      {...props}
      position={[-SCALE, SCALE + Y_OFFSET, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
        <planeGeometry args={[sideSize, sideSize]} />
        <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
    )

    const rightWall = (
        <mesh
        {...props}
        position={[SCALE, SCALE + Y_OFFSET, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        >
        <planeGeometry args={[sideSize, sideSize]} />
        <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
    )

    const backWall = (
        <mesh
        {...props}
        position={[0, SCALE + Y_OFFSET, SCALE]}
        rotation={[0, 0, 0]}
        >
        <planeGeometry args={[sideSize, sideSize]} />
        <meshStandardMaterial map={woodTexture} side={THREE.DoubleSide} />
    </mesh>
    )


    return [floor, ceiling, leftWall, rightWall, backWall]
}
export default Floor
