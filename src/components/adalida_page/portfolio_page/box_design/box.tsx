import React from 'react'
import { Text3D, useTexture } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import * as THREE from 'three'

import Front from 'images/box_design/front.webp'
import FrontInside from 'images/box_design/front_inside.webp'
import Right from 'images/box_design/right.webp'
import RightInside from 'images/box_design/right_inside.webp'
import Left from 'images/box_design/left.webp'
import Back from 'images/box_design/back.webp'
import Top from 'images/box_design/top.webp'
import Bottom from 'images/box_design/bottom.webp'

import FileQuery from 'queries/file'

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
  const frontInsideTexture = useTexture(FrontInside)
  const rightTexture = useTexture(Right)
  const rightInsideTexture = useTexture(RightInside)
  const leftTexture = useTexture(Left)
  const backTexture = useTexture(Back)
  const topTexture = useTexture(Top)
  const bottomTexture = useTexture(Bottom)
  const fontUrl = FileQuery('work_sans.json').publicURL

  /* eslint-disable react/no-unknown-property */

  const front = (
    <mesh {...props} position={[0, 0, HALF_DEPTH]}>
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshStandardMaterial map={frontTexture} roughness={0} transparent />
    </mesh>
  )

  const frontGlass = (
    <mesh {...props} position={[0, 0, HALF_DEPTH]}>
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshStandardMaterial roughness={0} transparent opacity={0.1} side={THREE.DoubleSide} />
    </mesh>
  )

  const frontInside = (
    <mesh {...props} position={[0, 0, HALF_DEPTH]}>
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshStandardMaterial map={frontInsideTexture} side={THREE.BackSide} roughness={0} transparent />
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
      <meshStandardMaterial map={rightTexture} roughness={0} transparent />
    </mesh>
  )

  const rightGlass = (
    <mesh
      {...props}
      position={[HALF_WIDTH, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <planeGeometry args={[DEPTH, HEIGHT]} />
      <meshStandardMaterial roughness={0} transparent opacity={0.1} side={THREE.DoubleSide} />
    </mesh>
  )

  const rightInside = (
    <mesh
      {...props}
      position={[HALF_WIDTH, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <planeGeometry args={[DEPTH, HEIGHT]} />
      <meshStandardMaterial map={rightInsideTexture} side={THREE.BackSide} roughness={0} transparent />
    </mesh>
  )

  const left = (
    <mesh
      {...props}
      position={[-HALF_WIDTH, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <planeGeometry args={[DEPTH, HEIGHT]} />
      <meshStandardMaterial map={leftTexture} roughness={0} />
    </mesh>
  )

  const leftInside = (
    <mesh
      {...props}
      position={[-HALF_WIDTH, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <planeGeometry args={[DEPTH, HEIGHT]} />
      <meshStandardMaterial side={THREE.BackSide} roughness={0} />
    </mesh>
  )

  const back = (
    <mesh
      {...props}
      position={[0, 0, -HALF_DEPTH]}
      rotation={[0, Math.PI, 0]}
    >
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshStandardMaterial map={backTexture} roughness={0} />
    </mesh>
  )

  const backInside = (
    <mesh
      {...props}
      position={[0, 0, -HALF_DEPTH]}
      rotation={[0, Math.PI, 0]}
    >
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshStandardMaterial side={THREE.BackSide} roughness={0} />
    </mesh>
  )

  const top = (
    <mesh
      {...props}
      position={[0, HALF_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[WIDTH, DEPTH]} />
      <meshStandardMaterial map={topTexture} roughness={0} />
    </mesh>
  )

  const topInside = (
    <mesh
      {...props}
      position={[0, HALF_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[WIDTH, DEPTH]} />
      <meshStandardMaterial side={THREE.BackSide} roughness={0} />
    </mesh>
  )

  const bottom = (
    <mesh
      {...props}
      position={[0, -HALF_HEIGHT, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[WIDTH, DEPTH]} />
      <meshStandardMaterial map={bottomTexture} roughness={0} />
    </mesh>
  )

  const bottomInside = (
    <mesh
      {...props}
      position={[0, -HALF_HEIGHT, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[WIDTH, DEPTH]} />
      <meshStandardMaterial side={THREE.BackSide} roughness={0} />
    </mesh>
  )

  const questionMark = (
    <Text3D
      position={[-WIDTH * 3 / 8, -HEIGHT * 3 / 8, -HALF_DEPTH / 4]}
      size={HEIGHT * 3 / 4}
      height={HALF_DEPTH / 2}
      font={fontUrl}
    >
      ?
      <meshStandardMaterial roughness={0} color='#E015A7' />
    </Text3D>
  )

  /* eslint-enable react/no-unknown-property */

  return (
    <>
      {front}
      {frontGlass}
      {frontInside}
      {right}
      {rightGlass}
      {rightInside}
      {left}
      {leftInside}
      {back}
      {backInside}
      {top}
      {topInside}
      {bottom}
      {bottomInside}
      {questionMark}
    </>
  )
}

export default Box
