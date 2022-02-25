import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Houndstooth = ({ containerRef, backgroundColor }) => {
  const background = backgroundColor || '#FFFFFF'
  const canvasRef = useRef(null)
  const canvas = <canvas ref={canvasRef} />
  const drawHoundstooth = id => {
    const fullWidth = containerRef.current.clientWidth
    const fullHeight = containerRef.current.clientHeight

    const setupCanvas = () => {
      const canvas = canvasRef.current
      canvas.width = fullWidth
      canvas.height = fullHeight
      canvas.style['background-color'] = background
    }

    const canvasContext = () => {
      const canvas = canvasRef.current
      if (!canvas.getContext) return
      return canvas.getContext('2d')
    }

    const interpolateWaypoints = (vertices, totalPoints) => {
      const linesWithDistances = computeLinesWithDistances(vertices)
      const totalDistance = linesWithDistances.reduce((acc, [, , distance]) => acc + distance, 0)
      const waypoints = []
      for (let i = 0; i < vertices.length - 1; i++) {
        const numberOfPoints = Math.round(linesWithDistances[i][2] / totalDistance * totalPoints)
        const line = lineBetween(vertices[i], vertices[i + 1], numberOfPoints)
        waypoints.push(...line)
      }
      return waypoints
    }

    const computeLinesWithDistances = vertices => {
      const linesWithDistances = []
      for (let i = 0; i < vertices.length - 1; i++) {
        const [startX, startY] = vertices[i]
        const [endX, endY] = vertices[i + 1]
        const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
        linesWithDistances.push([[startX, startY], [endX, endY], distance])
      }
      return linesWithDistances
    }

    const lineBetween = ([startX, startY], [endX, endY], numberOfPoints) => {
      const xDirection = endX - startX
      const yDirection = endY - startY
      const xIncrement = xDirection / numberOfPoints
      const yIncrement = yDirection / numberOfPoints

      return Array.from({ length: numberOfPoints + 1 }, (_, i) => [
        startX + xIncrement * i,
        startY + yIncrement * i
      ])
    }

    const width = 4

    const upperLeftPath = [
      [0, 0],
      [2, 0],
      [2, 1],
      [3, 2],
      [2, 2],
      [2, 3],
      [1, 2],
      [0, 2],
      [0, 0]
    ]

    const lowerLeftPath = [
      [0, 2],
      [2, 4],
      [1, 4],
      [0, 3],
      [0, 2]
    ]
    const upperRightPath = [
      [2, 0],
      [3, 0],
      [4, 1],
      [4, 2],
      [2, 0]
    ]

    const animatePath = async points => {
      const allPoints = interpolateWaypoints(points, 200)
      await new Promise(resolve => {
        animatePathSegment(allPoints, 1, resolve)
      })
    }

    const fillPath = points => {
      canvasContext().beginPath()
      canvasContext().moveTo(points[0][0], points[0][1])
      points.forEach(([x, y]) => canvasContext().lineTo(x, y))
      canvasContext().fill()
      canvasContext().closePath()
    }

    const animatePathSegment = (points, currentPointIndex, resolve) => {
      const [currentX, currentY] = points[currentPointIndex]
      const [nextX, nextY] = points[currentPointIndex + 1]
      canvasContext().beginPath()
      canvasContext().moveTo(currentX, currentY)
      canvasContext().lineTo(nextX, nextY)
      canvasContext().stroke()
      canvasContext().closePath()

      if (currentPointIndex + 1 < points.length - 1) {
        window.requestAnimationFrame(() => animatePathSegment(points, currentPointIndex + 1, resolve))
        return
      }

      resolve()
    }

    const generateAllOffsets = (paths, gridSize, scale) => {
      const offsets = Array(gridSize).fill(0).flatMap((_, i) =>
        Array.from(
          { length: gridSize },
          (_, j) => [width * i, width * j]
        )
      )

      return paths.flatMap(path =>
        offsets.map(offset =>
          path.map(point => [(point[0] + offset[0]) * scale, (point[1] + offset[1]) * scale])
        )
      )
    }

    const styleCanvas = () => {
      const gradient = canvasContext().createLinearGradient(0, 0, fullWidth, fullHeight)
      gradient.addColorStop(0, '#FF2079')
      gradient.addColorStop(0.5, '#1A5AFF')
      gradient.addColorStop(1, '#39FF14')
      canvasContext().fillStyle = gradient
      canvasContext().lineWidth = width
      canvasContext().strokeStyle = '#FFFFFF'
      canvasContext().lineCap = 'round'
      canvasContext().filter = 'brightness(7)'
    }

    const darkeningFill = async pathsWithOffsets => {
      let brightness = 7
      while (brightness > 1) {
        brightness -= 0.02
        canvasContext().filter = `brightness(${brightness})`
        await new Promise(resolve => window.requestAnimationFrame(resolve))
        pathsWithOffsets.forEach(fillPath)
      }
    }

    const draw = async () => {
      setupCanvas()
      styleCanvas()
      const paths = [upperLeftPath, lowerLeftPath, upperRightPath]
      const scale = 50
      const gridSize = Math.ceil(fullWidth / (width * scale))
      const pathsWithOffsets = generateAllOffsets(paths, gridSize, scale)
      await Promise.all(pathsWithOffsets.map(path => animatePath(path)))
      darkeningFill(pathsWithOffsets)
    }

    draw()
  }

  useEffect(drawHoundstooth, [])
  return (
    <div className='memphis-pattern'>
      {canvas}
    </div>

  )
}
Houndstooth.propTypes = {
  containerRef: PropTypes.shape({ current: PropTypes.node }),
  backgroundColor: PropTypes.string
}

export default Houndstooth
