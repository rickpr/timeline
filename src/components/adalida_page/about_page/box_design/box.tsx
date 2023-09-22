import React from 'react'
import { useTexture } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import * as THREE from 'three'

import Front from 'images/box_design/front.png'
import Right from 'images/box_design/right.png'
import Left from 'images/box_design/left.png'
import Back from 'images/box_design/back.png'
import Top from 'images/box_design/top.png'
import Bottom from 'images/box_design/bottom.png'

const BASE_WIDTH = 45
const BASE_HEIGHT = 63
const BASE_DEPTH = 35

const SCALE = 1 / 4

const WIDTH = BASE_WIDTH * SCALE
const HEIGHT = BASE_HEIGHT * SCALE
const DEPTH = BASE_DEPTH * SCALE

const HALF_WIDTH = WIDTH / 2
const HALF_HEIGHT = HEIGHT / 2
const HALF_DEPTH = DEPTH / 2

const Box = (props: MeshProps): JSX.Element => {
  const frontTexture = useTexture(Front)
  const rightTexture = useTexture(Right)
  const leftTexture = useTexture(Left)
  const backTexture = useTexture(Back)
  const topTexture = useTexture(Top)
  const bottomTexture = useTexture(Bottom)

  /* eslint-disable react/no-unknown-property */
  const front = (
    <mesh {...props} position={[0, 0, HALF_DEPTH]}>
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshStandardMaterial map={frontTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  /* eslint-disable react/no-unknown-property */
  const right = (
    <mesh
      {...props}
      position={[HALF_WIDTH, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <planeGeometry args={[DEPTH, HEIGHT]} />
      <meshStandardMaterial map={rightTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const left = (
    <mesh
      {...props}
      position={[-HALF_WIDTH, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <planeGeometry args={[DEPTH, HEIGHT]} />
      <meshStandardMaterial map={leftTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const back = (
    <mesh
      {...props}
      position={[0, 0, -HALF_DEPTH]}
      rotation={[0, Math.PI, 0]}
    >
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshStandardMaterial map={backTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const top = (
    <mesh
      {...props}
      position={[0, HALF_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[WIDTH, DEPTH]} />
      <meshStandardMaterial map={topTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const bottom = (
    <mesh
      {...props}
      position={[0, -HALF_HEIGHT, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[WIDTH, DEPTH]} />
      <meshStandardMaterial map={bottomTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )
  /* eslint-enable react/no-unknown-property */

  return (
    <>
      {front}
      {right}
      {left}
      {back}
      {top}
      {bottom}
    </>
  )
}

export default Box
