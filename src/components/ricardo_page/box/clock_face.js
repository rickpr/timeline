import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import backgroundImage from 'images/favicon.png'

const SCALE = 8
const sideSize = SCALE * 2

/* Precompute some of these values so they don't recalculate on render */
// Second Hand
const secondToRadian = Math.PI / 30
const millisecondToRadian = Math.PI / 30000
// Minute Hand
const minuteToRadian = Math.PI / 30
const secondToMinute = 1 / 60
// Hour Hand
const hourToRadian = Math.PI / 6
const minuteToHour = 1 / 60

// Widths
const clockRadius = sideSize / 2
const centerRadius = clockRadius / 10
const frameWidth = clockRadius / 20

/* Hands */
// Depths
const hourHandDepth = sideSize / 40
const minuteHandDepth = sideSize / 30
const secondHandDepth = minuteHandDepth + (minuteHandDepth - hourHandDepth)
// Widths
const hourHandWidth = secondHandDepth
const minuteHandWidth = minuteHandDepth
const secondHandWidth = hourHandDepth
// Other
const handLength = sideSize / 3
const handOffset = handLength / 2

const ClockFace = (props) => {
  const background = useTexture(backgroundImage)
  const secondHandRef = useRef()
  const minuteHandRef = useRef()
  const hourHandRef = useRef()
  useFrame(() => {
    const now = new Date()
    const secondHandRotation = now.getSeconds() * secondToRadian + now.getMilliseconds() * millisecondToRadian
    const minuteHandRotation = now.getMinutes() * minuteToRadian + secondHandRotation * secondToMinute
    const hourHandRotation = now.getHours() * hourToRadian + minuteHandRotation * minuteToHour
    secondHandRef.current.rotation.z = -secondHandRotation
    minuteHandRef.current.rotation.z = -minuteHandRotation
    hourHandRef.current.rotation.z = -hourHandRotation
  })
  const backing = (
    <mesh>
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={background} side={THREE.DoubleSide} />
    </mesh>
  )
  const center = (
    <mesh rotation-x={Math.PI / 2}>
      <capsuleGeometry args={[centerRadius, centerRadius, 3, 20]} />
    </mesh>
  )
  const frame = (
    <mesh>
      <torusGeometry args={[clockRadius - frameWidth, frameWidth, 3, 20]} />
    </mesh>
  )
  const secondHand = (
    <group ref={secondHandRef}>
      <mesh position={[0, handOffset, secondHandDepth]} rotation-y={Math.PI / 2}>
        <capsuleGeometry args={[secondHandWidth, handLength, 2, 2]} />
        <meshStandardMaterial color='red' />
      </mesh>
    </group>
  )
  const minuteHand = (
    <group ref={minuteHandRef}>
      <mesh position={[0, handOffset, minuteHandDepth]} rotation-y={Math.PI / 2}>
        <capsuleGeometry args={[minuteHandWidth, handLength, 2, 2]} />
        <meshStandardMaterial color='black' />
      </mesh>
    </group>
  )
  const hourHand = (
    <group ref={hourHandRef}>
      <mesh position={[0, handOffset, hourHandDepth]} rotation-y={Math.PI / 2}>
        <capsuleGeometry args={[hourHandWidth, handLength, 2, 2]} />
        <meshStandardMaterial color='black' />
      </mesh>
    </group>
  )
  return (
    <group {...props}>
      {backing}
      {center}
      {frame}
      {secondHand}
      {minuteHand}
      {hourHand}
    </group>
  )
}

export default ClockFace
