import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const MemphisPattern = ({ containerRef, backgroundColor }) => {
  const background = backgroundColor || '#FFFFFF'
  const canvasRef = useRef(null)
  const canvas = <canvas ref={canvasRef} />

  const drawMemphisPattern = () => {
    const fullWidth = containerRef.current.clientWidth
    const fullHeight = containerRef.current.clientHeight
    // Determine if the color is closer to white or black and use the opposite for the text
    const colorSum = [1, 3, 5].reduce((sum, colorIndex) => sum + parseInt(background.substring(colorIndex, colorIndex + 2)))
    const colors = ['rgba(255, 148, 173, 0.3)', 'rgba(0, 234, 230, 0.3)', 'rgba(255, 206, 20, 0.3)']
    const finalColor = colorSum <= 382 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
    colors.push(finalColor)

    const randomElement = (array, elementToAvoid) => {
      const arrayWithoutElementToAvoid = array.filter(element => element !== elementToAvoid)
      return arrayWithoutElementToAvoid[Math.floor(Math.random() * arrayWithoutElementToAvoid.length)]
    }

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

    const squiggle = (context, size) => {
      const numberOfSquiggles = 6
      const diameter = size / numberOfSquiggles
      const radius = diameter / 2

      for (let squiggleNumber = 0; squiggleNumber < numberOfSquiggles; squiggleNumber++) {
        context.beginPath()
        const x = radius + squiggleNumber * diameter
        const counterClockwise = Boolean(squiggleNumber % 2)

        context.arc(x, size / 2, radius, 0, Math.PI, counterClockwise)
        context.stroke()
      }
    }

    const line = (context, size) => {
      context.beginPath()
      context.moveTo(0, size / 2)
      context.lineTo(size, size / 2)
      context.stroke()
    }

    const triangle = (context, size) => {
      const height = size * Math.cos(Math.PI / 6)

      context.beginPath()
      context.moveTo(0, height)
      context.lineTo(size / 2, 0)
      context.lineTo(size, height)
      context.closePath()
      context.stroke()
    }

    const circle = (context, size) => {
      const radius = size / 2
      context.beginPath()
      context.arc(radius, radius, radius, 0, 2 * Math.PI)
      context.stroke()
    }

    const square = (context, size) => {
      context.strokeRect(0, 0, size, size)
    }

    const rotateShape = (shape, context, shapeSize) => {
      const rotationAmount = Math.random() * Math.PI
      context.save()
      context.rotate(rotationAmount)
      context.translate(-shapeSize / 2, -shapeSize / 2)
      shape(context, shapeSize)
      context.translate(-shapeSize / 4, -shapeSize / 4)
      shape(context, shapeSize)
      context.restore()
    }

    const drawShapes = () => {
      const shapes = [squiggle, triangle, line, circle, square]
      const context = canvasContext()
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.lineWidth = 4
      context.lineCap = 'round'
      const shapeSize = 50
      const rows = Math.floor(fullHeight / (shapeSize * 2))
      const columns = Math.floor(fullWidth / (shapeSize * 2))

      // Don't draw the same shape next to each other
      let currentShape = null
      let currentColor = null

      context.translate(shapeSize, shapeSize)

      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          currentShape = randomElement(shapes, currentShape)
          currentColor = randomElement(colors, currentColor)
          context.strokeStyle = currentColor
          rotateShape(currentShape, context, shapeSize)
          context.translate(shapeSize * 2, 0)
        }
        context.translate(-shapeSize * 2 * columns, shapeSize * 2)
      }
    }

    setupCanvas()
    drawShapes()
  }

  useEffect(() => {
    drawMemphisPattern()
    const resizeListener = new ResizeObserver(drawMemphisPattern)
    resizeListener.observe(containerRef.current)
    return () => resizeListener.unobserve(containerRef.current)
  }, [containerRef, drawMemphisPattern])

  return (
    <div className='memphis-pattern'>
      {canvas}
    </div>

  )
}
MemphisPattern.propTypes = {
  containerRef: PropTypes.shape({ current: PropTypes.node }),
  backgroundColor: PropTypes.string
}

export default MemphisPattern
