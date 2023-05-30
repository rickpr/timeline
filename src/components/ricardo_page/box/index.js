import React, { useEffect, useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import Me from 'images/ricardo/me.jpg'
import Glider from 'images/ricardo/glider.jpg'
import GithubIcon from 'images/ricardo/brand-github.png'
import LinkedInIcon from 'images/ricardo/brand-linkedin.png'
import HackerRankIcon from 'images/ricardo/hackerrank.png'

import ClockFace from './clock_face'

const SCALE = 8
const sideSize = SCALE * 2

const Box = (props) => {
  const meTexture = useTexture(Me)
  const gliderTexture = useTexture(Glider)
  const githubTexture = useTexture(GithubIcon)
  const linkedInTexture = useTexture(LinkedInIcon)
  const hackerRankTexture = useTexture(HackerRankIcon)

  const currentLink = useRef(null)
  const mousePositionWhenClicking = useRef(null)

  useEffect(() => {
    const goToLink = (event) => {
      if (
        currentLink.current &&
          event.clientX === mousePositionWhenClicking.current.x &&
          event.clientY === mousePositionWhenClicking.current.y
      ) {
        window.open(currentLink.current, '_blank')
      }
      currentLink.current = null
    }
    window.addEventListener('mouseup', goToLink)
    return () => window.removeEventListener('mouseup', goToLink)
  }, [])

  const openLink = linkURL => {
    return event => {
      currentLink.current = linkURL
      mousePositionWhenClicking.current = {
        x: Math.trunc(event.clientX),
        y: Math.trunc(event.clientY)
      }
      event.stopPropagation()
    }
  }

  const front = (
    <ClockFace
      position={[0, 0, SCALE]}
      onPointerDown={openLink(null)}
    />
  )

  /* eslint-disable react/no-unknown-property */
  const right = (
    <mesh
      {...props}
      position={[SCALE, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
      onPointerDown={openLink('https://www.hackerrank.com/profile/fdisk87')}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={hackerRankTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )
  const left = (
    <mesh
      {...props}
      position={[-SCALE, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      onPointerDown={openLink('https://linkedin.com/in/rickpr')}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={linkedInTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const back = (
    <mesh
      {...props}
      position={[0, 0, -SCALE]}
      rotation={[0, Math.PI, 0]}
      onPointerDown={openLink('https://github.com/rickpr')}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={githubTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const top = (
    <mesh
      {...props}
      position={[0, SCALE, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onPointerDown={openLink(null)}
      roughness={0}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={meTexture} side={THREE.DoubleSide} roughness={0} />
    </mesh>
  )

  const bottom = (
    <mesh
      {...props}
      position={[0, -SCALE, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      onPointerDown={openLink(null)}
    >
      <planeGeometry args={[sideSize, sideSize]} />
      <meshStandardMaterial map={gliderTexture} side={THREE.DoubleSide} roughness={0} />
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
