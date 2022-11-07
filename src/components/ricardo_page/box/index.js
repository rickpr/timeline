import React, { useEffect, useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import GithubIcon from 'images/ricardo/brand-github.png'
import LinkedInIcon from 'images/ricardo/brand-linkedin.png'
import TerminalIcon from 'images/ricardo/terminal-2.png'

import ClockFace from './clock_face'

const SCALE = 8
const sideSize = SCALE * 2

const Box = (props) => {
  const githubTexture = useTexture(GithubIcon)
  const linkedInTexture = useTexture(LinkedInIcon)
  const terminalTexture = useTexture(TerminalIcon)

  const currentLink = useRef(null)
  const mousePositionWhenClicking = useRef(null)

  useEffect(() => {
    const goToLink = (event) => {
      console.log('going to link')
      if (currentLink.current) {
        if (
          event.clientX === mousePositionWhenClicking.current.x &&
            event.clientY === mousePositionWhenClicking.current.y
        ) {
          window.open(currentLink.current, '_blank')
        }
      }
      currentLink.current = null
    }
    window.addEventListener('mouseup', goToLink)
    return () => window.removeEventListener('mouseup', goToLink)
  }, [])

  const openLink = linkURL => {
    return event => {
      console.log('opening link')
      currentLink.current = linkURL
      mousePositionWhenClicking.current = { x: event.clientX, y: event.clientY }
    }
  }

  return (
    <>
      <ClockFace
        position={[0, 0, SCALE]}
        onPointerDown={() => { currentLink.current = null} }
      />
      <mesh
        {...props}
        position={[SCALE, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerDown={openLink('https://www.hackerrank.com/profile/fdisk87')}
      >
        <planeGeometry args={[sideSize, sideSize]} />
        <meshStandardMaterial  map={terminalTexture} />
      </mesh>
      <mesh
        {...props}
        position={[-SCALE, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        onPointerDown={openLink('https://linkedin.com/in/rickpr')}
      >
        <planeGeometry args={[sideSize, sideSize]} />
        <meshStandardMaterial map={linkedInTexture} />
      </mesh>
      <mesh
        {...props}
        position={[0, 0, -SCALE]}
        rotation={[0, Math.PI, 0]}
        onPointerDown={openLink('https://github.com/rickpr')}
      >
        <planeGeometry args={[sideSize, sideSize]} />
        <meshStandardMaterial map={githubTexture} />
      </mesh>
    </>
  )
}

export default Box
